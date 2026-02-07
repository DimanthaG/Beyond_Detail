const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://beyonddetail.ca';
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// Define your routes here with their priority and changefreq
// In a more advanced version, this could parse App.js
const routes = [
    // Core Pages
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/booking', priority: '1.0', changefreq: 'always' },
    { path: '/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/gallery', priority: '0.8', changefreq: 'weekly' },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' },
    { path: '/testimonials', priority: '0.7', changefreq: 'monthly' },
    { path: '/faqs', priority: '0.7', changefreq: 'monthly' },

    // Services
    { path: '/window-tinting-scarborough', priority: '0.9', changefreq: 'weekly' },
    { path: '/ceramic-coating-scarborough', priority: '0.9', changefreq: 'weekly' },
    { path: '/paint-correction-scarborough', priority: '0.9', changefreq: 'weekly' },
    { path: '/auto-detailing-scarborough', priority: '0.9', changefreq: 'weekly' },

    // Main Service Categories
    { path: '/tint', priority: '0.9', changefreq: 'monthly' },
    { path: '/ceramic-coatings', priority: '0.9', changefreq: 'monthly' },
    { path: '/paint-correction', priority: '0.9', changefreq: 'monthly' },
    { path: '/auto-detail', priority: '0.9', changefreq: 'monthly' },
    { path: '/interior-detailing', priority: '0.8', changefreq: 'monthly' },
    { path: '/exterior-detailing', priority: '0.8', changefreq: 'monthly' },

    // Other Neighbourhoods (Add all your neighborhood paths here)
    { path: '/car-detailing-markham', priority: '0.8', changefreq: 'weekly' },
    { path: '/car-detailing-pickering', priority: '0.8', changefreq: 'weekly' },
    // ... add all other existing routes from App.js or sitemap.xml
];

const generateSitemap = () => {
    const today = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    routes.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
        xml += `    <priority>${route.priority}</priority>\n`;
        xml += '  </url>\n';
    });

    xml += '</urlset>';

    fs.writeFileSync(SITEMAP_PATH, xml);
    console.log(`Sitemap generated at ${SITEMAP_PATH} with ${routes.length} URLs.`);
};

generateSitemap();
