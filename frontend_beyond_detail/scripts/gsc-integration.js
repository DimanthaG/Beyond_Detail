/**
 * Google Search Console Integration
 * 
 * This script fetches data from Google Search Console API
 * and provides insights for SEO optimization.
 * 
 * Setup:
 * 1. Go to https://console.cloud.google.com/
 * 2. Create a new project
 * 3. Enable Google Search Console API
 * 4. Create OAuth 2.0 credentials
 * 5. Download credentials.json and place in project root
 * 
 * Run: node scripts/gsc-integration.js
 */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const readline = require('readline');

// Configuration
const SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly'];
const TOKEN_PATH = path.join(__dirname, '..', 'gsc-token.json');
const CREDENTIALS_PATH = path.join(__dirname, '..', 'gsc-credentials.json');
const SITE_URL = 'https://beyonddetail.ca'; // Your verified GSC property

/**
 * Load credentials from file
 */
function loadCredentials() {
    try {
        const content = fs.readFileSync(CREDENTIALS_PATH);
        return JSON.parse(content);
    } catch (error) {
        console.error('Error loading credentials:', error.message);
        console.log('\n📝 Setup Instructions:');
        console.log('1. Go to https://console.cloud.google.com/');
        console.log('2. Create a new project');
        console.log('3. Enable Google Search Console API');
        console.log('4. Create OAuth 2.0 credentials');
        console.log('5. Download credentials.json');
        console.log(`6. Save it as: ${CREDENTIALS_PATH}\n`);
        process.exit(1);
    }
}

/**
 * Authorize with Google
 */
async function authorize(credentials) {
    const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    // Check if we have a token
    try {
        const token = fs.readFileSync(TOKEN_PATH);
        oAuth2Client.setCredentials(JSON.parse(token));
        return oAuth2Client;
    } catch (error) {
        return getAccessToken(oAuth2Client);
    }
}

/**
 * Get access token
 */
function getAccessToken(oAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

    console.log('Authorize this app by visiting this url:', authUrl);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve, reject) => {
        rl.question('Enter the code from that page here: ', (code) => {
            rl.close();
            oAuth2Client.getToken(code, (err, token) => {
                if (err) return reject(err);
                oAuth2Client.setCredentials(token);
                fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
                console.log('Token stored to', TOKEN_PATH);
                resolve(oAuth2Client);
            });
        });
    });
}

/**
 * Fetch GSC data
 */
async function fetchGSCData(auth) {
    const webmasters = google.webmasters({ version: 'v3', auth });

    // Date range (last 30 days)
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);

    const requestBody = {
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        dimensions: ['query', 'page'],
        rowLimit: 1000,
    };

    try {
        const response = await webmasters.searchanalytics.query({
            siteUrl: SITE_URL,
            requestBody,
        });

        return response.data.rows || [];
    } catch (error) {
        console.error('Error fetching GSC data:', error.message);
        throw error;
    }
}

/**
 * Analyze GSC data
 */
function analyzeData(rows) {
    console.log('\n📊 GSC Data Analysis\n');
    console.log('='.repeat(80));

    // Top performing queries
    const topQueries = rows
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 20);

    console.log('\n🔝 Top 20 Queries by Clicks:\n');
    topQueries.forEach((row, index) => {
        const query = row.keys[0];
        const page = row.keys[1];
        const clicks = row.clicks;
        const impressions = row.impressions;
        const ctr = (row.ctr * 100).toFixed(2);
        const position = row.position.toFixed(1);

        console.log(`${index + 1}. "${query}"`);
        console.log(`   Page: ${page}`);
        console.log(`   Clicks: ${clicks} | Impressions: ${impressions} | CTR: ${ctr}% | Position: ${position}`);
        console.log('');
    });

    // Queries with high impressions but low clicks (opportunity)
    const opportunities = rows
        .filter(row => row.impressions > 100 && row.ctr < 0.05)
        .sort((a, b) => b.impressions - a.impressions)
        .slice(0, 10);

    console.log('\n💡 Optimization Opportunities (High Impressions, Low CTR):\n');
    opportunities.forEach((row, index) => {
        const query = row.keys[0];
        const page = row.keys[1];
        const impressions = row.impressions;
        const ctr = (row.ctr * 100).toFixed(2);
        const position = row.position.toFixed(1);

        console.log(`${index + 1}. "${query}"`);
        console.log(`   Page: ${page}`);
        console.log(`   Impressions: ${impressions} | CTR: ${ctr}% | Position: ${position}`);
        console.log(`   💡 Action: Improve title/description to increase CTR`);
        console.log('');
    });

    // Queries ranking 4-10 (easy wins)
    const easyWins = rows
        .filter(row => row.position >= 4 && row.position <= 10)
        .sort((a, b) => a.position - b.position)
        .slice(0, 10);

    console.log('\n🎯 Easy Wins (Ranking 4-10, Push to Top 3):\n');
    easyWins.forEach((row, index) => {
        const query = row.keys[0];
        const page = row.keys[1];
        const position = row.position.toFixed(1);
        const clicks = row.clicks;

        console.log(`${index + 1}. "${query}"`);
        console.log(`   Page: ${page}`);
        console.log(`   Position: ${position} | Clicks: ${clicks}`);
        console.log(`   💡 Action: Add more content, improve on-page SEO`);
        console.log('');
    });

    // Summary stats
    const totalClicks = rows.reduce((sum, row) => sum + row.clicks, 0);
    const totalImpressions = rows.reduce((sum, row) => sum + row.impressions, 0);
    const avgCTR = (totalClicks / totalImpressions * 100).toFixed(2);
    const avgPosition = (rows.reduce((sum, row) => sum + row.position, 0) / rows.length).toFixed(1);

    console.log('\n📈 Summary Statistics:\n');
    console.log(`Total Clicks: ${totalClicks}`);
    console.log(`Total Impressions: ${totalImpressions}`);
    console.log(`Average CTR: ${avgCTR}%`);
    console.log(`Average Position: ${avgPosition}`);
    console.log('');

    // Save to file
    const reportPath = path.join(__dirname, '..', 'gsc-report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        generatedAt: new Date().toISOString(),
        summary: {
            totalClicks,
            totalImpressions,
            avgCTR: parseFloat(avgCTR),
            avgPosition: parseFloat(avgPosition)
        },
        topQueries,
        opportunities,
        easyWins,
        allData: rows
    }, null, 2));

    console.log(`📄 Full report saved to: ${reportPath}\n`);
}

/**
 * Main function
 */
async function main() {
    console.log('🔍 Google Search Console Integration\n');

    try {
        // Load credentials
        const credentials = loadCredentials();

        // Authorize
        console.log('🔐 Authorizing...');
        const auth = await authorize(credentials);

        // Fetch data
        console.log('📥 Fetching GSC data...');
        const data = await fetchGSCData(auth);

        if (data.length === 0) {
            console.log('⚠️  No data found. Make sure:');
            console.log('1. Your site is verified in Google Search Console');
            console.log('2. You have data for the last 30 days');
            console.log('3. The SITE_URL is correct');
            return;
        }

        // Analyze data
        analyzeData(data);

    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { fetchGSCData, analyzeData };
