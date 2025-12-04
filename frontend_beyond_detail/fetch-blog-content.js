const sanityClient = require('@sanity/client');

// Initialize Sanity client
const client = sanityClient({
    projectId: 'trp6l9ar',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: false,
});

// Fetch all blog posts with full content
async function fetchBlogContent() {
    try {
        console.log('📝 Fetching blog posts from Sanity...\n');

        const query = `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      content,
      seoTitle,
      seoDescription,
      keywords,
      relatedServices,
      category
    }`;

        const blogs = await client.fetch(query);

        console.log(`✅ Found ${blogs.length} blog post(s)\n`);
        console.log('='.repeat(80));

        blogs.forEach((blog, index) => {
            console.log(`\n${index + 1}. ${blog.title}`);
            console.log(`   Slug: /blog/${blog.slug.current}`);
            console.log(`   Published: ${new Date(blog.publishedAt).toLocaleDateString()}`);
            console.log(`   Category: ${blog.category || 'N/A'}`);
            console.log(`   Keywords: ${blog.keywords?.join(', ') || 'N/A'}`);
            console.log(`   Related Services: ${blog.relatedServices?.join(', ') || 'N/A'}`);

            // Extract text from content blocks
            if (blog.content && Array.isArray(blog.content)) {
                const textContent = blog.content
                    .filter(block => block._type === 'block')
                    .map(block => {
                        if (block.children) {
                            return block.children.map(child => child.text || '').join('');
                        }
                        return '';
                    })
                    .join(' ')
                    .trim();

                console.log(`\n   Content Preview (first 500 chars):`);
                console.log(`   ${textContent.substring(0, 500)}...`);

                // Check for service keywords
                const serviceKeywords = [
                    'window tint', 'window tinting', 'ceramic coating', 'paint correction',
                    'car detailing', 'auto detailing', 'interior detailing', 'exterior detailing',
                    'headlight restoration', 'paint protection'
                ];

                const locationKeywords = [
                    'Toronto', 'Scarborough', 'Markham', 'Pickering', 'North York',
                    'Ajax', 'Whitby', 'Oshawa'
                ];

                const foundServices = serviceKeywords.filter(keyword =>
                    textContent.toLowerCase().includes(keyword.toLowerCase())
                );

                const foundLocations = locationKeywords.filter(keyword =>
                    textContent.toLowerCase().includes(keyword.toLowerCase())
                );

                console.log(`\n   Service Keywords Found: ${foundServices.join(', ') || 'None'}`);
                console.log(`   Location Keywords Found: ${foundLocations.join(', ') || 'None'}`);
            }

            console.log('\n' + '-'.repeat(80));
        });

        console.log('\n✅ Blog content fetch complete!\n');

    } catch (error) {
        console.error('❌ Error fetching blog content:', error);
        process.exit(1);
    }
}

// Run the fetch
fetchBlogContent();
