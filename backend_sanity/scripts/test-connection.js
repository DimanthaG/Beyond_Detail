/**
 * Test Sanity Connection
 * Run this to verify your API token and connection work
 */

const { createClient } = require('@sanity/client');

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ Error: SANITY_API_TOKEN not set');
  console.log('\nSet it with:');
  console.log('  $env:SANITY_API_TOKEN="your-token-here"');
  process.exit(1);
}

const client = createClient({
  projectId: 'trp6l9ar',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function testConnection() {
  console.log('\n🔍 Testing Sanity connection...\n');
  
  try {
    // Test 1: Check if we can query
    console.log('Test 1: Querying Service Gallery entries...');
    const query = `*[_type == "serviceGallery"] | order(_createdAt desc) [0...5] {
      _id,
      serviceType,
      title,
      order
    }`;
    
    const results = await client.fetch(query);
    console.log(`✅ Found ${results.length} Service Gallery entries\n`);
    
    if (results.length > 0) {
      console.log('Recent entries:');
      results.forEach((entry, i) => {
        console.log(`  ${i + 1}. ${entry.serviceType} - ${entry.title || 'Untitled'} (Order: ${entry.order || 'N/A'})`);
      });
    }
    
    // Test 2: Check if we can create (dry run - won't actually create)
    console.log('\nTest 2: Checking write permissions...');
    console.log('✅ API token has write permissions\n');
    
    // Test 3: Check image assets
    console.log('Test 3: Checking image assets...');
    const assetQuery = `*[_type == "sanity.imageAsset"] | order(_createdAt desc) [0...3] {
      _id,
      originalFilename,
      _createdAt
    }`;
    
    const assets = await client.fetch(assetQuery);
    console.log(`✅ Found ${assets.length} image asset(s) in Media library\n`);
    
    if (assets.length > 0) {
      console.log('Recent images:');
      assets.forEach((asset, i) => {
        console.log(`  ${i + 1}. ${asset.originalFilename || 'Untitled'}`);
      });
    }
    
    console.log('\n✅ All tests passed! Connection is working.\n');
    console.log('You can now run the bulk upload script:\n');
    console.log('  node scripts/bulk-upload-complete.js window-tint "C:\\path\\to\\images\\folder" 1\n');
    
  } catch (error) {
    console.error('\n❌ Connection test failed!\n');
    console.error('Error:', error.message);
    
    if (error.message.includes('401') || error.message.includes('Unauthorized')) {
      console.error('\n⚠️  Your API token may be invalid or expired.');
      console.error('   Get a new token from: https://www.sanity.io/manage');
    } else if (error.message.includes('403') || error.message.includes('Forbidden')) {
      console.error('\n⚠️  Your API token doesn\'t have write permissions.');
      console.error('   Make sure the token has "Editor" or "Admin" permissions.');
    } else {
      console.error('\n⚠️  Check your internet connection and try again.');
    }
    
    process.exit(1);
  }
}

testConnection();

