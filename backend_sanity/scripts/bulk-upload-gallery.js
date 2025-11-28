/**
 * Bulk Upload Script for Service Gallery Images
 * 
 * This script helps you bulk create Service Gallery entries from images
 * that you've already uploaded to Sanity's Media library.
 * 
 * Usage:
 * 1. First, upload your images using the Media plugin in Sanity Studio
 * 2. Run this script: node scripts/bulk-upload-gallery.js
 */

const sanityClient = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Initialize Sanity client
const client = sanityClient({
  projectId: 'trp6l9ar',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // You'll need to set this
});

// Service type mapping
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

/**
 * Create a Service Gallery entry
 */
async function createServiceGalleryEntry(imageAssetId, serviceType, displayOrder, title = '') {
  const sanityServiceType = SERVICE_TYPE_MAP[serviceType] || serviceType;
  
  const doc = {
    _type: 'serviceGallery',
    serviceType: sanityServiceType,
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAssetId,
      },
    },
    order: displayOrder,
  };

  if (title) {
    doc.title = title;
  }

  try {
    const result = await client.create(doc);
    console.log(`✅ Created entry #${displayOrder} for ${serviceType} (ID: ${result._id})`);
    return result;
  } catch (error) {
    console.error(`❌ Error creating entry #${displayOrder}:`, error.message);
    throw error;
  }
}

/**
 * Get all image assets from Sanity Media library
 */
async function getImageAssets() {
  try {
    const query = `*[_type == "sanity.imageAsset"] | order(_createdAt desc) {
      _id,
      originalFilename,
      url
    }`;
    const assets = await client.fetch(query);
    return assets;
  } catch (error) {
    console.error('Error fetching image assets:', error);
    throw error;
  }
}

/**
 * Main function to bulk create entries
 */
async function bulkCreateEntries(config) {
  const { serviceType, imageAssetIds, startOrder = 1, titles = [] } = config;

  console.log(`\n🚀 Starting bulk upload for ${serviceType}...`);
  console.log(`📸 Creating ${imageAssetIds.length} entries...\n`);

  const results = [];
  let order = startOrder;

  for (let i = 0; i < imageAssetIds.length; i++) {
    const assetId = imageAssetIds[i];
    const title = titles[i] || '';
    
    try {
      const result = await createServiceGalleryEntry(assetId, serviceType, order, title);
      results.push(result);
      order++;
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`Failed to create entry ${order}:`, error.message);
    }
  }

  console.log(`\n✅ Successfully created ${results.length} out of ${imageAssetIds.length} entries!`);
  return results;
}

/**
 * Interactive mode - prompts user for input
 */
async function interactiveMode() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

  try {
    console.log('\n📸 Bulk Service Gallery Upload Tool\n');
    console.log('Available service types:');
    Object.keys(SERVICE_TYPE_MAP).forEach((key, index) => {
      console.log(`  ${index + 1}. ${key}`);
    });

    const serviceType = await question('\nEnter service type (e.g., window-tint): ');
    
    if (!SERVICE_TYPE_MAP[serviceType]) {
      console.error(`❌ Invalid service type: ${serviceType}`);
      rl.close();
      return;
    }

    console.log('\n📋 Getting image assets from Media library...');
    const assets = await getImageAssets();
    
    if (assets.length === 0) {
      console.log('❌ No images found in Media library. Please upload images first using the Media plugin in Sanity Studio.');
      rl.close();
      return;
    }

    console.log(`\n📸 Found ${assets.length} images in Media library:\n`);
    assets.slice(0, 20).forEach((asset, index) => {
      console.log(`  ${index + 1}. ${asset.originalFilename || 'Untitled'} (ID: ${asset._id})`);
    });
    if (assets.length > 20) {
      console.log(`  ... and ${assets.length - 20} more`);
    }

    const assetIdsInput = await question('\nEnter image asset IDs (comma-separated) or "all" for all images: ');
    
    let imageAssetIds = [];
    if (assetIdsInput.toLowerCase() === 'all') {
      imageAssetIds = assets.map(a => a._id);
    } else {
      imageAssetIds = assetIdsInput.split(',').map(id => id.trim()).filter(Boolean);
    }

    const startOrderInput = await question('Enter starting display order (default: 1): ');
    const startOrder = parseInt(startOrderInput) || 1;

    console.log('\n🚀 Creating entries...\n');
    await bulkCreateEntries({
      serviceType,
      imageAssetIds,
      startOrder,
    });

    console.log('\n✅ Done! Check your Sanity Studio to see the new entries.');
  } catch (error) {
    console.error('\n❌ Error:', error);
  } finally {
    rl.close();
  }
}

// Run the script
if (require.main === module) {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN environment variable is required');
    console.log('\nTo get your token:');
    console.log('1. Go to https://www.sanity.io/manage');
    console.log('2. Select your project');
    console.log('3. Go to API > Tokens');
    console.log('4. Create a new token with Editor permissions');
    console.log('5. Set it as: export SANITY_API_TOKEN="your-token-here"');
    process.exit(1);
  }

  interactiveMode().catch(console.error);
}

module.exports = { bulkCreateEntries, createServiceGalleryEntry };


