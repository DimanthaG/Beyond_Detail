const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Initialize Sanity client
const client = createClient({
  projectId: 'trp6l9ar',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: false,
});

// Base URL
const BASE_URL = 'https://beyonddetail.ca';

// Get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

// Static pages configuration
const STATIC_PAGES = [
  // Main Pages
  { loc: '/', priority: 1.0, changefreq: 'weekly' },
  { loc: '/about', priority: 0.8, changefreq: 'monthly' },
  { loc: '/contact', priority: 0.9, changefreq: 'monthly' },
  { loc: '/contact-us', priority: 0.9, changefreq: 'monthly' },
  { loc: '/gallery', priority: 0.8, changefreq: 'weekly' },
  { loc: '/faqs', priority: 0.7, changefreq: 'monthly' },
  { loc: '/blog', priority: 0.8, changefreq: 'weekly' },
  { loc: '/testimonials', priority: 0.7, changefreq: 'monthly' },
  { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },

  // Service Pages
  { loc: '/tint', priority: 0.9, changefreq: 'monthly' },
  { loc: '/auto-detail', priority: 0.9, changefreq: 'monthly' },
  { loc: '/paint-correction', priority: 0.9, changefreq: 'monthly' },
  { loc: '/ceramic-coatings', priority: 0.9, changefreq: 'monthly' },
  { loc: '/interior-detailing', priority: 0.8, changefreq: 'monthly' },
  { loc: '/exterior-detailing', priority: 0.8, changefreq: 'monthly' },
  { loc: '/headlight-restoration', priority: 0.8, changefreq: 'monthly' },
  { loc: '/odour-removal', priority: 0.8, changefreq: 'monthly' },
  { loc: '/leather-cleaning', priority: 0.8, changefreq: 'monthly' },
  { loc: '/paint-removal', priority: 0.8, changefreq: 'monthly' },
  { loc: '/fleet-services', priority: 0.8, changefreq: 'monthly' },

  // Service Areas
  { loc: '/car-detailing-pickering', priority: 0.8, changefreq: 'weekly' },
  { loc: '/car-detailing-markham', priority: 0.8, changefreq: 'weekly' },
  { loc: '/service-area/north-york', priority: 0.6, changefreq: 'monthly' },

  // Landing Pages - Scarborough
  { loc: '/car-detailing-scarborough', priority: 0.9, changefreq: 'weekly' },
  { loc: '/auto-detailing-scarborough', priority: 0.9, changefreq: 'weekly' },
  { loc: '/ceramic-coating-scarborough', priority: 0.9, changefreq: 'weekly' },
  { loc: '/car-detailing-malvern', priority: 0.8, changefreq: 'weekly' },
  { loc: '/car-detailing-agincourt', priority: 0.8, changefreq: 'weekly' },
  { loc: '/car-detailing-west-hill', priority: 0.8, changefreq: 'weekly' },
  { loc: '/car-detailing-north-york', priority: 0.8, changefreq: 'weekly' },
  { loc: '/car-detailing-ajax', priority: 0.8, changefreq: 'weekly' },
  { loc: '/car-detailing-wexford', priority: 0.8, changefreq: 'weekly' },
  { loc: '/car-detailing-cliffside', priority: 0.8, changefreq: 'weekly' },
  { loc: '/car-detailing-rouge', priority: 0.8, changefreq: 'weekly' },
  { loc: '/car-detailing-guildwood', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-scarborough', priority: 0.9, changefreq: 'weekly' },
  { loc: '/paint-correction-scarborough', priority: 0.9, changefreq: 'weekly' },

  // Landing Pages - Markham
  { loc: '/window-tinting-markham', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-markham', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-markham', priority: 0.8, changefreq: 'weekly' },

  // Landing Pages - Pickering
  { loc: '/ceramic-coating-pickering', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-pickering', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-pickering', priority: 0.8, changefreq: 'weekly' },

  // Landing Pages - Other Areas
  { loc: '/car-detailing-oshawa', priority: 0.8, changefreq: 'weekly' },
  { loc: '/car-detailing-whitby', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-oshawa', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-whitby', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-oshawa', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-whitby', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-oshawa', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-whitby', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-north-york', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-north-york', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-north-york', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-ajax', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-ajax', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-ajax', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-agincourt', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-agincourt', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-agincourt', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-malvern', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-malvern', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-malvern', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-west-hill', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-west-hill', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-west-hill', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-wexford', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-wexford', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-wexford', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-cliffside', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-cliffside', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-cliffside', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-rouge', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-rouge', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-rouge', priority: 0.8, changefreq: 'weekly' },
  { loc: '/ceramic-coating-guildwood', priority: 0.8, changefreq: 'weekly' },
  { loc: '/paint-correction-guildwood', priority: 0.8, changefreq: 'weekly' },
  { loc: '/window-tinting-guildwood', priority: 0.8, changefreq: 'weekly' },
];

// Generate sitemap XML
async function generateSitemap() {
  try {
    console.log('🗺️  Generating sitemap...\n');

    // Fetch blog posts from Sanity
    console.log('📝 Fetching blog posts from Sanity...');
    const query = `*[_type == "blogPost"] | order(publishedAt desc) {
      slug,
      publishedAt,
      _updatedAt
    }`;

    const blogPosts = await client.fetch(query);
    console.log(`✅ Found ${blogPosts.length} blog post(s)\n`);

    // Start building XML
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
    xml += '  \n';

    // Add static pages
    xml += '  <!-- Homepage -->\n';
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/</loc>\n`;
    xml += `    <lastmod>${getTodayDate()}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>1.0</priority>\n`;
    xml += `  </url>\n`;
    xml += '  \n';

    // Add main pages
    xml += '  <!-- Main Pages -->\n';
    STATIC_PAGES.slice(1, 9).forEach(page => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${page.loc}</loc>\n`;
      xml += `    <lastmod>${getTodayDate()}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
      if (page.loc === '/privacy-policy') xml += '  \n';
    });

    // Add service pages
    xml += '  <!-- Service Pages -->\n';
    STATIC_PAGES.slice(9, 20).forEach(page => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${page.loc}</loc>\n`;
      xml += `    <lastmod>${getTodayDate()}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    });
    xml += '\n';

    // Add service areas
    xml += '  <!-- Service Areas -->\n';
    STATIC_PAGES.slice(20, 23).forEach(page => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${page.loc}</loc>\n`;
      xml += `    <lastmod>${getTodayDate()}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    });
    xml += '  \n';

    // Add landing pages
    xml += '  <!-- Landing Pages -->\n';
    STATIC_PAGES.slice(23).forEach(page => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${page.loc}</loc>\n`;
      xml += `    <lastmod>${getTodayDate()}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    });
    xml += '  \n';

    // Add blog posts
    if (blogPosts.length > 0) {
      xml += '  <!-- Blog Posts -->\n';
      blogPosts.forEach(post => {
        if (post.slug && post.slug.current) {
          const lastmod = post._updatedAt
            ? new Date(post._updatedAt).toISOString().split('T')[0]
            : (post.publishedAt
              ? new Date(post.publishedAt).toISOString().split('T')[0]
              : getTodayDate());

          xml += `  <url>\n`;
          xml += `    <loc>${BASE_URL}/blog/${post.slug.current}</loc>\n`;
          xml += `    <lastmod>${lastmod}</lastmod>\n`;
          xml += `    <changefreq>monthly</changefreq>\n`;
          xml += `    <priority>0.7</priority>\n`;
          xml += `  </url>\n`;
        }
      });
      xml += '  \n';
    }

    xml += '</urlset>\n';

    // Write to file
    const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);

    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${sitemapPath}`);
    console.log(`📊 Total URLs: ${STATIC_PAGES.length + blogPosts.length}`);
    console.log(`   - Static pages: ${STATIC_PAGES.length}`);
    console.log(`   - Blog posts: ${blogPosts.length}`);
    console.log('\n🎉 Done!\n');

  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
generateSitemap();
