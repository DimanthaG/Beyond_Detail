const sanityClient = require('@sanity/client');

// Initialize Sanity client (same config as frontend)
const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'trp6l9ar',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
});

// Helper function to extract text from Sanity block content
function extractTextFromBlocks(blocks) {
  if (!blocks || !Array.isArray(blocks)) return '';
  
  return blocks
    .map(block => {
      if (block._type === 'block' && block.children) {
        return block.children.map(child => child.text || '').join('');
      }
      return '';
    })
    .join(' ')
    .trim();
}

// Calculate word count
function getWordCount(text) {
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

// Calculate reading time (average 200 words per minute)
function calculateReadingTime(wordCount) {
  return Math.ceil(wordCount / 200);
}

// Analyze a single blog post
function analyzeBlogPost(blog) {
  const contentText = extractTextFromBlocks(blog.content);
  const wordCount = getWordCount(contentText);
  const readingTime = calculateReadingTime(wordCount);
  
  const analysis = {
    _id: blog._id,
    title: blog.title || 'N/A',
    slug: blog.slug?.current || 'N/A',
    publishedAt: blog.publishedAt || 'N/A',
    category: blog.category || 'N/A',
    author: blog.author || 'N/A',
    featured: blog.featured || false,
    
    // SEO Analysis
    seo: {
      title: blog.seoTitle || blog.title || 'N/A',
      titleLength: (blog.seoTitle || blog.title || '').length,
      titleOptimal: (blog.seoTitle || blog.title || '').length >= 30 && (blog.seoTitle || blog.title || '').length <= 60,
      description: blog.seoDescription || blog.excerpt || 'N/A',
      descriptionLength: (blog.seoDescription || blog.excerpt || '').length,
      descriptionOptimal: (blog.seoDescription || blog.excerpt || '').length >= 120 && (blog.seoDescription || blog.excerpt || '').length <= 160,
      keywords: blog.keywords || [],
      keywordsCount: (blog.keywords || []).length,
      hasKeywords: (blog.keywords || []).length > 0,
    },
    
    // Content Analysis
    content: {
      excerpt: blog.excerpt || 'N/A',
      excerptLength: (blog.excerpt || '').length,
      excerptOptimal: (blog.excerpt || '').length >= 100 && (blog.excerpt || '').length <= 200,
      wordCount: wordCount,
      readingTime: readingTime,
      hasMainImage: !!blog.mainImage,
      mainImageAlt: blog.mainImage?.alt || 'N/A',
      hasMainImageAlt: !!blog.mainImage?.alt,
      contentImagesCount: blog.contentImages?.length || 0,
    },
    
    // Related Services
    relatedServices: blog.relatedServices || [],
    
    // Issues/Warnings
    issues: [],
    warnings: [],
  };
  
  // Check for issues
  if (!blog.title) analysis.issues.push('Missing title');
  if (!blog.slug?.current) analysis.issues.push('Missing slug');
  if (!blog.publishedAt) analysis.issues.push('Missing published date');
  if (!blog.category) analysis.issues.push('Missing category');
  if (!blog.excerpt) analysis.issues.push('Missing excerpt');
  if (!blog.mainImage) analysis.issues.push('Missing main image');
  if (!blog.mainImage?.alt) analysis.issues.push('Missing main image alt text');
  if (!blog.content || blog.content.length === 0) analysis.issues.push('Missing or empty content');
  
  // Check for warnings (SEO optimization)
  if (analysis.seo.titleLength < 30) analysis.warnings.push('SEO title too short (should be 30-60 chars)');
  if (analysis.seo.titleLength > 60) analysis.warnings.push('SEO title too long (should be 30-60 chars)');
  if (analysis.seo.descriptionLength < 120) analysis.warnings.push('SEO description too short (should be 120-160 chars)');
  if (analysis.seo.descriptionLength > 160) analysis.warnings.push('SEO description too long (should be 120-160 chars)');
  if (!analysis.seo.hasKeywords) analysis.warnings.push('No keywords specified');
  if (analysis.content.excerptLength < 100) analysis.warnings.push('Excerpt too short (should be 100-200 chars)');
  if (analysis.content.excerptLength > 200) analysis.warnings.push('Excerpt too long (should be 100-200 chars)');
  if (wordCount < 300) analysis.warnings.push('Content too short (less than 300 words)');
  if (wordCount > 3000) analysis.warnings.push('Content very long (over 3000 words - consider splitting)');
  
  return analysis;
}

// Main function to fetch and analyze blogs
async function analyzeBlogs() {
  try {
    console.log('🔍 Fetching blog posts from Sanity...\n');
    
    const query = `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      mainImage,
      category,
      content,
      seoTitle,
      seoDescription,
      keywords,
      relatedServices,
      featured,
      order
    }`;
    
    const blogs = await client.fetch(query);
    
    if (blogs.length === 0) {
      console.log('❌ No blog posts found in Sanity CMS.');
      return;
    }
    
    console.log(`✅ Found ${blogs.length} blog post(s)\n`);
    console.log('='.repeat(80));
    console.log('BLOG POSTS ANALYSIS REPORT');
    console.log('='.repeat(80));
    console.log();
    
    // Analyze each blog
    const analyses = blogs.map(blog => analyzeBlogPost(blog));
    
    // Sort by published date (most recent first)
    analyses.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB - dateA;
    });
    
    // Display summary
    console.log('📊 SUMMARY');
    console.log('-'.repeat(80));
    console.log(`Total Posts: ${blogs.length}`);
    console.log(`Posts with Issues: ${analyses.filter(a => a.issues.length > 0).length}`);
    console.log(`Posts with Warnings: ${analyses.filter(a => a.warnings.length > 0).length}`);
    console.log(`Featured Posts: ${analyses.filter(a => a.featured).length}`);
    console.log(`Average Word Count: ${Math.round(analyses.reduce((sum, a) => sum + a.content.wordCount, 0) / analyses.length)}`);
    console.log(`Average Reading Time: ${Math.round(analyses.reduce((sum, a) => sum + a.content.readingTime, 0) / analyses.length)} min`);
    console.log();
    
    // Display recent posts (last 10)
    console.log('📝 RECENT POSTS (Last 10)');
    console.log('-'.repeat(80));
    analyses.slice(0, 10).forEach((analysis, index) => {
      const date = new Date(analysis.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      console.log(`\n${index + 1}. ${analysis.title}`);
      console.log(`   📅 Published: ${date}`);
      console.log(`   📂 Category: ${analysis.category}`);
      console.log(`   ✍️  Author: ${analysis.author}`);
      console.log(`   🔗 Slug: /blog/${analysis.slug}`);
      console.log(`   📊 Word Count: ${analysis.content.wordCount} words (${analysis.content.readingTime} min read)`);
      console.log(`   ⭐ Featured: ${analysis.featured ? 'Yes' : 'No'}`);
      
      if (analysis.issues.length > 0) {
        console.log(`   ❌ Issues: ${analysis.issues.join(', ')}`);
      }
      if (analysis.warnings.length > 0) {
        console.log(`   ⚠️  Warnings: ${analysis.warnings.join(', ')}`);
      }
    });
    
    // SEO Analysis Summary
    console.log('\n\n🔍 SEO ANALYSIS SUMMARY');
    console.log('-'.repeat(80));
    const seoOptimal = analyses.filter(a => a.seo.titleOptimal && a.seo.descriptionOptimal && a.seo.hasKeywords);
    const seoNeedsWork = analyses.filter(a => !a.seo.titleOptimal || !a.seo.descriptionOptimal || !a.seo.hasKeywords);
    
    console.log(`✅ SEO Optimized: ${seoOptimal.length} posts`);
    console.log(`⚠️  Needs SEO Work: ${seoNeedsWork.length} posts`);
    console.log();
    
    if (seoNeedsWork.length > 0) {
      console.log('Posts needing SEO improvements:');
      seoNeedsWork.forEach(analysis => {
        console.log(`  - ${analysis.title}`);
        if (!analysis.seo.titleOptimal) console.log(`    → Title length: ${analysis.seo.titleLength} chars (should be 30-60)`);
        if (!analysis.seo.descriptionOptimal) console.log(`    → Description length: ${analysis.seo.descriptionLength} chars (should be 120-160)`);
        if (!analysis.seo.hasKeywords) console.log(`    → Missing keywords`);
      });
    }
    
    // Content Quality Summary
    console.log('\n\n📖 CONTENT QUALITY SUMMARY');
    console.log('-'.repeat(80));
    const shortContent = analyses.filter(a => a.content.wordCount < 300);
    const optimalContent = analyses.filter(a => a.content.wordCount >= 300 && a.content.wordCount <= 2000);
    const longContent = analyses.filter(a => a.content.wordCount > 2000);
    
    console.log(`📝 Short Content (< 300 words): ${shortContent.length} posts`);
    console.log(`✅ Optimal Content (300-2000 words): ${optimalContent.length} posts`);
    console.log(`📚 Long Content (> 2000 words): ${longContent.length} posts`);
    console.log();
    
    if (shortContent.length > 0) {
      console.log('Posts with short content:');
      shortContent.forEach(analysis => {
        console.log(`  - ${analysis.title} (${analysis.content.wordCount} words)`);
      });
    }
    
    // Category Distribution
    console.log('\n\n📂 CATEGORY DISTRIBUTION');
    console.log('-'.repeat(80));
    const categoryCount = {};
    analyses.forEach(analysis => {
      categoryCount[analysis.category] = (categoryCount[analysis.category] || 0) + 1;
    });
    Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1])
      .forEach(([category, count]) => {
        console.log(`  ${category}: ${count} post(s)`);
      });
    
    // Keywords Analysis
    console.log('\n\n🏷️  KEYWORDS ANALYSIS');
    console.log('-'.repeat(80));
    const allKeywords = [];
    analyses.forEach(analysis => {
      if (analysis.seo.keywords && analysis.seo.keywords.length > 0) {
        allKeywords.push(...analysis.seo.keywords);
      }
    });
    const keywordCount = {};
    allKeywords.forEach(keyword => {
      keywordCount[keyword.toLowerCase()] = (keywordCount[keyword.toLowerCase()] || 0) + 1;
    });
    
    if (Object.keys(keywordCount).length > 0) {
      console.log('Most used keywords:');
      Object.entries(keywordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .forEach(([keyword, count]) => {
          console.log(`  "${keyword}": used in ${count} post(s)`);
        });
    } else {
      console.log('⚠️  No keywords found in any posts');
    }
    
    console.log('\n' + '='.repeat(80));
    console.log('Analysis Complete!');
    console.log('='.repeat(80));
    
  } catch (error) {
    console.error('❌ Error analyzing blogs:', error);
    process.exit(1);
  }
}

// Run the analysis
analyzeBlogs();

