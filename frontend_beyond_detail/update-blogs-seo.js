const sanityClient = require('@sanity/client');

// Initialize Sanity client
const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'trp6l9ar',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  // Note: For write operations, you'll need a token
  // token: process.env.SANITY_WRITE_TOKEN
});

/**
 * Service keyword mapping for automatic relatedServices detection
 */
const SERVICE_KEYWORD_MAP = {
  'window tint': 'window-tint',
  'window tinting': 'window-tint',
  'car tint': 'window-tint',
  'ceramic tint': 'window-tint',
  'paint correction': 'paint-correction',
  'ceramic coating': 'ceramic-coating',
  'ceramic coatings': 'ceramic-coating',
  'auto detailing': 'auto-detail',
  'car detailing': 'auto-detail',
  'interior detailing': 'interior-detailing',
  'exterior detailing': 'exterior-detailing',
  'headlight restoration': 'headlight-restoration',
  'paint protection': 'ceramic-coating',
};

/**
 * Extract text from Sanity block content
 */
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

/**
 * Detect related services from blog content
 */
function detectRelatedServices(blog) {
  const contentText = extractTextFromBlocks(blog.content);
  const titleText = (blog.title || '').toLowerCase();
  const excerptText = (blog.excerpt || '').toLowerCase();
  const allText = `${titleText} ${excerptText} ${contentText.toLowerCase()}`;
  
  const detectedServices = new Set();
  
  // Check for service keywords
  Object.entries(SERVICE_KEYWORD_MAP).forEach(([keyword, service]) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    if (regex.test(allText)) {
      detectedServices.add(service);
    }
  });
  
  return Array.from(detectedServices);
}

/**
 * Generate SEO recommendations for a blog post
 */
function generateSEORecommendations(blog) {
  const recommendations = {
    _id: blog._id,
    title: blog.title,
    slug: blog.slug?.current,
    current: {
      seoTitle: blog.seoTitle || blog.title,
      seoDescription: blog.seoDescription || blog.excerpt,
      keywords: blog.keywords || [],
      relatedServices: blog.relatedServices || []
    },
    recommendations: {
      seoTitle: null,
      seoDescription: null,
      keywords: [],
      relatedServices: []
    },
    issues: [],
    improvements: []
  };
  
  // Check SEO title
  const currentTitle = blog.seoTitle || blog.title || '';
  if (currentTitle.length < 30) {
    recommendations.issues.push('SEO title too short (should be 30-60 chars)');
    recommendations.recommendations.seoTitle = `${currentTitle} | Beyond Detail Toronto`;
  } else if (currentTitle.length > 60) {
    recommendations.issues.push('SEO title too long (should be 30-60 chars)');
    recommendations.recommendations.seoTitle = currentTitle.substring(0, 57) + '...';
  }
  
  // Check SEO description
  const currentDescription = blog.seoDescription || blog.excerpt || '';
  if (currentDescription.length < 120) {
    recommendations.issues.push('SEO description too short (should be 120-160 chars)');
    const locationSuffix = ' | Professional auto detailing in Toronto, Scarborough, Markham & Pickering. ⭐ 68 Five-Star Reviews';
    recommendations.recommendations.seoDescription = currentDescription + locationSuffix;
  } else if (currentDescription.length > 160) {
    recommendations.issues.push('SEO description too long (should be 120-160 chars)');
    recommendations.recommendations.seoDescription = currentDescription.substring(0, 157) + '...';
  }
  
  // Generate keywords if missing
  if (!blog.keywords || blog.keywords.length === 0) {
    recommendations.issues.push('No keywords specified');
    const category = blog.category || '';
    const titleWords = blog.title?.toLowerCase().split(/\s+/) || [];
    const suggestedKeywords = [
      ...titleWords.filter(w => w.length > 3),
      category.toLowerCase(),
      'car detailing',
      'auto detailing',
      'toronto',
      'scarborough',
      'markham',
      'pickering'
    ].filter(Boolean).slice(0, 10);
    recommendations.recommendations.keywords = suggestedKeywords;
  }
  
  // Detect related services
  const detectedServices = detectRelatedServices(blog);
  if (detectedServices.length > 0 && (!blog.relatedServices || blog.relatedServices.length === 0)) {
    recommendations.improvements.push(`Detected ${detectedServices.length} related service(s) from content`);
    recommendations.recommendations.relatedServices = detectedServices;
  } else if (detectedServices.length > 0) {
    // Check if detected services match existing
    const missingServices = detectedServices.filter(s => !blog.relatedServices?.includes(s));
    if (missingServices.length > 0) {
      recommendations.improvements.push(`Additional services detected: ${missingServices.join(', ')}`);
      recommendations.recommendations.relatedServices = [
        ...(blog.relatedServices || []),
        ...missingServices
      ];
    }
  }
  
  return recommendations;
}

/**
 * Main function to analyze and generate update recommendations
 */
async function analyzeAndRecommend() {
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
      relatedServices
    }`;
    
    const blogs = await client.fetch(query);
    
    if (blogs.length === 0) {
      console.log('❌ No blog posts found in Sanity CMS.');
      return;
    }
    
    console.log(`✅ Found ${blogs.length} blog post(s)\n`);
    console.log('='.repeat(80));
    console.log('BLOG SEO OPTIMIZATION RECOMMENDATIONS');
    console.log('='.repeat(80));
    console.log();
    
    const allRecommendations = blogs.map(blog => generateSEORecommendations(blog));
    
    // Display recommendations
    allRecommendations.forEach((rec, index) => {
      console.log(`\n${index + 1}. ${rec.title}`);
      console.log(`   Slug: /blog/${rec.slug}`);
      console.log(`   ID: ${rec._id}`);
      
      if (rec.issues.length > 0) {
        console.log(`   ❌ Issues:`);
        rec.issues.forEach(issue => console.log(`      - ${issue}`));
      }
      
      if (rec.improvements.length > 0) {
        console.log(`   💡 Improvements:`);
        rec.improvements.forEach(improvement => console.log(`      - ${improvement}`));
      }
      
      // Show recommendations
      const hasRecommendations = 
        rec.recommendations.seoTitle ||
        rec.recommendations.seoDescription ||
        rec.recommendations.keywords.length > 0 ||
        rec.recommendations.relatedServices.length > 0;
      
      if (hasRecommendations) {
        console.log(`   📝 Recommendations:`);
        
        if (rec.recommendations.seoTitle) {
          console.log(`      SEO Title: "${rec.recommendations.seoTitle}"`);
        }
        
        if (rec.recommendations.seoDescription) {
          console.log(`      SEO Description: "${rec.recommendations.seoDescription}"`);
        }
        
        if (rec.recommendations.keywords.length > 0) {
          console.log(`      Keywords: ${rec.recommendations.keywords.join(', ')}`);
        }
        
        if (rec.recommendations.relatedServices.length > 0) {
          console.log(`      Related Services: ${rec.recommendations.relatedServices.join(', ')}`);
        }
      }
      
      // Generate Sanity update patch
      if (hasRecommendations) {
        console.log(`   🔧 Sanity Update Patch:`);
        console.log(`      Patch ID: ${rec._id}`);
        const patch = {};
        if (rec.recommendations.seoTitle) patch.seoTitle = rec.recommendations.seoTitle;
        if (rec.recommendations.seoDescription) patch.seoDescription = rec.recommendations.seoDescription;
        if (rec.recommendations.keywords.length > 0) patch.keywords = rec.recommendations.keywords;
        if (rec.recommendations.relatedServices.length > 0) patch.relatedServices = rec.recommendations.relatedServices;
        console.log(`      ${JSON.stringify(patch, null, 6)}`);
      }
    });
    
    // Summary
    console.log('\n' + '='.repeat(80));
    console.log('SUMMARY');
    console.log('='.repeat(80));
    const blogsWithIssues = allRecommendations.filter(r => r.issues.length > 0).length;
    const blogsWithImprovements = allRecommendations.filter(r => r.improvements.length > 0).length;
    const blogsNeedingUpdates = allRecommendations.filter(r => 
      r.recommendations.seoTitle ||
      r.recommendations.seoDescription ||
      r.recommendations.keywords.length > 0 ||
      r.recommendations.relatedServices.length > 0
    ).length;
    
    console.log(`Total Blogs: ${blogs.length}`);
    console.log(`Blogs with Issues: ${blogsWithIssues}`);
    console.log(`Blogs with Improvements: ${blogsWithImprovements}`);
    console.log(`Blogs Needing Updates: ${blogsNeedingUpdates}`);
    console.log();
    
    console.log('📋 NEXT STEPS:');
    console.log('1. Review the recommendations above');
    console.log('2. Update blogs in Sanity Studio with the recommended values');
    console.log('3. Or use the Sanity API with write token to update programmatically');
    console.log('4. Re-run this script after updates to verify improvements');
    console.log();
    
    // Export recommendations as JSON
    const fs = require('fs');
    const outputFile = 'blog-seo-recommendations.json';
    fs.writeFileSync(
      outputFile,
      JSON.stringify(allRecommendations, null, 2),
      'utf8'
    );
    console.log(`✅ Recommendations exported to: ${outputFile}`);
    console.log('='.repeat(80));
    
  } catch (error) {
    console.error('❌ Error analyzing blogs:', error);
    process.exit(1);
  }
}

// Run the analysis
analyzeAndRecommend();

