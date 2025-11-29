/**
 * Quick Bulk Upload - Simplest Method!
 * 
 * Uses Sanity's built-in asset upload, then creates Service Gallery entries.
 * 
 * Usage:
 *   1. First: npx sanity media import <folder> (uploads images)
 *   2. Then: node scripts/quick-bulk-upload.js <serviceType> [startOrder]
 */

const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'trp6l9ar',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const SERVICE_TYPE_MAP = {
  'window-tint': 'tint',
  'paint-correction': 'paint-correction',
  'ceramic-coating': 'ceramic-coating',
  'auto-detail': 'auto-detail',
  'interior-detailing': 'interior-detailing',
  'exterior-detailing': 'exterior-detailing',
  'headlight-restoration': 'headlight-restoration',
  'odour-removal': 'odour-removal',
  'leather-cleaning': 'leather-cleaning',
  'paint-removal': 'paint-removal',
  'fleet-services': 'fleet-services',
};

async function createEntriesFromRecentAssets(serviceType, startOrder = 1) {
  const sanityServiceType = SERVICE_TYPE_MAP[serviceType] || serviceType;
  
  console.log(`\n📸 Fetching recent image assets...\n`);
  
  // Get most recently uploaded images (last 50)
  const query = `*[_type == "sanity.imageAsset"] | order(_createdAt desc) [0...50] {
    _id,
    originalFilename,
    _createdAt
  }`;
  
  const assets = await client.fetch(query);
  
  if (assets.length === 0) {
    console.log('❌ No images found. Upload images first using:');
    console.log('   npx sanity media import <folder>\n');
    return;
  }
  
  console.log(`✅ Found ${assets.length} recent image(s):\n`);
  assets.slice(0, 20).forEach((asset, i) => {
    console.log(`  ${i + 1}. ${asset.originalFilename || 'Untitled'} (${asset._id})`);
  });
  if (assets.length > 20) {
    console.log(`  ... and ${assets.length - 20} more`);
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));
  
  const countInput = await question(`\nHow many images to add? (1-${assets.length}): `);
  const count = parseInt(countInput) || assets.length;
  const selectedAssets = assets.slice(0, Math.min(count, assets.length));
  
  console.log(`\n🚀 Creating ${selectedAssets.length} Service Gallery entries...\n`);
  
  let order = startOrder;
  const results = [];
  
  for (const asset of selectedAssets) {
    try {
      const doc = {
        _type: 'serviceGallery',
        serviceType: sanityServiceType,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
        },
        order: order,
        title: asset.originalFilename || '',
      };
      
      const result = await client.create(doc);
      results.push(result);
      console.log(`  ✅ Created entry #${order}: ${asset.originalFilename || 'Untitled'}`);
      order++;
      
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`  ❌ Failed: ${error.message}`);
    }
  }
  
  rl.close();
  
  console.log(`\n✅ Successfully created ${results.length} entries!`);
  console.log(`\n🎉 Check your Sanity Studio to see the new Service Gallery entries!`);
}

if (require.main === module) {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN environment variable is required');
    process.exit(1);
  }
  
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.log('\n📸 Quick Bulk Upload Tool\n');
    console.log('Usage:');
    console.log('  1. First upload images: npx sanity media import <folder>');
    console.log('  2. Then create entries: node scripts/quick-bulk-upload.js <serviceType> [startOrder]\n');
    console.log('Example:');
    console.log('  npx sanity media import ./images/window-tint');
    console.log('  node scripts/quick-bulk-upload.js window-tint 1\n');
    process.exit(1);
  }
  
  const [serviceType, startOrderStr] = args;
  const startOrder = parseInt(startOrderStr) || 1;
  
  createEntriesFromRecentAssets(serviceType, startOrder).catch(console.error);
}

module.exports = { createEntriesFromRecentAssets };






