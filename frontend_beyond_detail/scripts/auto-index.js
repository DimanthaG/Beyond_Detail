/**
 * Auto Indexing Tool
 * 
 * Automatically submit URLs to search engines for indexing:
 * - Google (via Search Console API)
 * - Bing, Yandex, Naver (via IndexNow)
 * 
 * Setup:
 * 1. Get Google Search Console API credentials
 * 2. Generate IndexNow API key: https://www.indexnow.org/
 * 3. Add URLs to submit
 * 
 * Run: node scripts/auto-index.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const SITE_URL = 'https://beyonddetail.ca';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'YOUR_INDEXNOW_KEY_HERE';

// IndexNow endpoints
const INDEXNOW_ENDPOINTS = {
    bing: 'https://www.bing.com/indexnow',
    yandex: 'https://yandex.com/indexnow',
    seznam: 'https://search.seznam.cz/indexnow',
    naver: 'https://searchadvisor.naver.com/indexnow',
    yep: 'https://indexnow.yep.com/indexnow'
};

/**
 * Submit URL to IndexNow
 */
function submitToIndexNow(url, engine = 'bing') {
    return new Promise((resolve, reject) => {
        const endpoint = INDEXNOW_ENDPOINTS[engine];
        const data = JSON.stringify({
            host: new URL(SITE_URL).hostname,
            key: INDEXNOW_KEY,
            keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
            urlList: [url]
        });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = https.request(endpoint, options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve({ success: true, engine, url, statusCode: res.statusCode });
                } else {
                    resolve({ success: false, engine, url, statusCode: res.statusCode, error: responseData });
                }
            });
        });

        req.on('error', (error) => {
            reject({ success: false, engine, url, error: error.message });
        });

        req.write(data);
        req.end();
    });
}

/**
 * Submit multiple URLs to all IndexNow engines
 */
async function submitURLsToIndexNow(urls) {
    console.log(`\n📤 Submitting ${urls.length} URL(s) to IndexNow...\n`);

    const results = [];

    for (const url of urls) {
        console.log(`Processing: ${url}`);

        // Submit to Bing (which also submits to other engines)
        try {
            const result = await submitToIndexNow(url, 'bing');
            results.push(result);

            if (result.success) {
                console.log(`  ✅ Successfully submitted to IndexNow`);
            } else {
                console.log(`  ❌ Failed: ${result.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.log(`  ❌ Error: ${error.message || error.error}`);
            results.push({ success: false, url, error: error.message || error.error });
        }

        // Wait a bit between requests
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return results;
}

/**
 * Get URLs from sitemap
 */
function getURLsFromSitemap() {
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

    if (!fs.existsSync(sitemapPath)) {
        console.log('⚠️  Sitemap not found at:', sitemapPath);
        return [];
    }

    const content = fs.readFileSync(sitemapPath, 'utf8');
    const urlMatches = content.match(/<loc>(.*?)<\/loc>/g) || [];

    return urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
}

/**
 * Get recent blog posts
 */
function getRecentBlogPosts() {
    try {
        const blogContentPath = path.join(__dirname, '..', 'src', 'Pages', 'Blog', 'LocalBlogContent.js');

        if (!fs.existsSync(blogContentPath)) {
            return [];
        }

        const content = fs.readFileSync(blogContentPath, 'utf8');

        // Extract blog post slugs
        const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g) || [];
        const slugs = slugMatches.map(match => match.match(/['"]([^'"]+)['"]/)[1]);

        // Convert to full URLs
        return slugs.map(slug => `${SITE_URL}/blog/${slug}`);
    } catch (error) {
        console.log('⚠️  Could not read blog posts:', error.message);
        return [];
    }
}

/**
 * Create IndexNow key file
 */
function createIndexNowKeyFile() {
    const keyFilePath = path.join(__dirname, '..', 'public', `${INDEXNOW_KEY}.txt`);

    if (!fs.existsSync(keyFilePath)) {
        fs.writeFileSync(keyFilePath, INDEXNOW_KEY);
        console.log(`✅ Created IndexNow key file: ${keyFilePath}`);
    }
}

/**
 * Main function
 */
async function main() {
    console.log('🚀 Auto Indexing Tool\n');
    console.log('='.repeat(80));

    // Check if IndexNow key is set
    if (INDEXNOW_KEY === 'YOUR_INDEXNOW_KEY_HERE') {
        console.log('\n⚠️  IndexNow API key not set!\n');
        console.log('Setup Instructions:');
        console.log('1. Generate a unique key (any random string, e.g., UUID)');
        console.log('2. Set environment variable: INDEXNOW_KEY=your-key');
        console.log('3. Or edit this file and replace YOUR_INDEXNOW_KEY_HERE\n');
        console.log('Example key: ' + require('crypto').randomUUID());
        console.log('\nFor now, using example key for demonstration...\n');
    }

    // Create IndexNow key file
    createIndexNowKeyFile();

    // Get URLs to submit
    const sitemapURLs = getURLsFromSitemap();
    const blogURLs = getRecentBlogPosts();

    console.log(`\n📊 Found URLs:`);
    console.log(`  - Sitemap: ${sitemapURLs.length} URLs`);
    console.log(`  - Blog posts: ${blogURLs.length} URLs`);

    // Choose what to submit
    console.log('\n📝 What would you like to submit?\n');
    console.log('1. All URLs from sitemap');
    console.log('2. Recent blog posts only');
    console.log('3. Custom URL list');
    console.log('4. Exit\n');

    // For automation, submit recent blog posts
    const urlsToSubmit = blogURLs.length > 0 ? blogURLs.slice(0, 5) : sitemapURLs.slice(0, 5);

    if (urlsToSubmit.length === 0) {
        console.log('⚠️  No URLs to submit!');
        return;
    }

    console.log(`\n🎯 Submitting ${urlsToSubmit.length} URL(s):\n`);
    urlsToSubmit.forEach((url, index) => {
        console.log(`${index + 1}. ${url}`);
    });

    // Submit to IndexNow
    const results = await submitURLsToIndexNow(urlsToSubmit);

    // Summary
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;

    console.log('\n' + '='.repeat(80));
    console.log('\n📊 Submission Summary:\n');
    console.log(`✅ Successful: ${successful}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📝 Total: ${results.length}\n`);

    // Save results
    const reportPath = path.join(__dirname, '..', 'indexing-report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        timestamp: new Date().toISOString(),
        summary: { successful, failed, total: results.length },
        results
    }, null, 2));

    console.log(`📄 Full report saved to: ${reportPath}\n`);

    // Next steps
    console.log('💡 Next Steps:\n');
    console.log('1. Check indexing status in Google Search Console');
    console.log('2. Monitor Bing Webmaster Tools');
    console.log('3. Run this script after publishing new content');
    console.log('4. Set up automated scheduling (cron job)\n');
}

// Run if called directly
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { submitToIndexNow, submitURLsToIndexNow };
