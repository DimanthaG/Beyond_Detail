/**
 * Complete Bulk Upload Script - Upload Images AND Create Entries in One Go!
 * 
 * This script uploads images from a folder and creates Service Gallery entries automatically.
 * No need to upload to Media library first!
 * 
 * Usage:
 *   node scripts/bulk-upload-complete.js <serviceType> <folderPath> [startOrder]
 * 
 * Example:
 *   node scripts/bulk-upload-complete.js window-tint "./images/window-tint" 1
 */

const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Initialize Sanity client
const client = createClient({
  projectId: 'trp6l9ar',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
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

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP'];

/**
 * Upload image file to Sanity using the asset upload API
 * Note: This requires using Sanity's asset upload endpoint properly
 */
async function uploadImageToSanity(filePath) {
  const fileName = path.basename(filePath);
  const fileBuffer = fs.readFileSync(filePath);
  const fileStats = fs.statSync(filePath);
  
  // Get file extension
  const ext = path.extname(fileName).toLowerCase();
  const mimeType = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
  }[ext] || 'image/jpeg';

  try {
    const projectId = client.config().projectId;
    const dataset = client.config().dataset;
    const token = client.config().token;
    
    // Use Sanity's asset upload endpoint
    const uploadUrl = `https://api.sanity.io/v2021-06-07/assets/images/${projectId}/${dataset}`;
    
    // Create FormData using form-data package
    const FormData = require('form-data');
    const fetch = require('node-fetch');
    
    const formData = new FormData();
    formData.append('file', fileBuffer, {
      filename: fileName,
      contentType: mimeType,
    });

    // Upload file
    const uploadResponse = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        ...formData.getHeaders(),
      },
      body: formData,
    });

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      throw new Error(`Upload failed (${uploadResponse.status}): ${errorText}`);
    }

    const uploadResult = await uploadResponse.json();
    
    // The response should contain the asset document ID
    // Try different possible response formats
    let assetId = uploadResult.document?._id || 
                  uploadResult.id || 
                  uploadResult._id ||
                  uploadResult.asset?._id;
    
    if (!assetId) {
      // If we can't find the ID in the response, query for the most recent asset with this filename
      // Wait a moment for Sanity to process
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const query = `*[_type == "sanity.imageAsset" && originalFilename == $filename] | order(_createdAt desc) [0]._id`;
      assetId = await client.fetch(query, { filename: fileName });
      
      if (!assetId) {
        throw new Error('Could not find asset ID after upload. Upload may have failed.');
      }
    }

    console.log(`  ✅ Uploaded: ${fileName}`);
    return assetId;
  } catch (error) {
    console.error(`  ❌ Failed to upload ${fileName}:`, error.message);
    throw error;
  }
}

/**
 * Create Service Gallery entry
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
    // Order is optional - if not provided, images will be randomized
  };

  if (title) {
    doc.title = title;
  }
  
  // Only add order if displayOrder is provided and valid (optional)
  if (displayOrder != null && displayOrder > 0) {
    doc.order = displayOrder;
  }

  try {
    const result = await client.create(doc);
    return result;
  } catch (error) {
    console.error(`  ❌ Error creating entry #${displayOrder}:`, error.message);
    throw error;
  }
}

/**
 * Get all image files from a directory
 */
function getImageFiles(folderPath) {
  if (!fs.existsSync(folderPath)) {
    throw new Error(`Folder not found: ${folderPath}`);
  }

  const files = fs.readdirSync(folderPath)
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    })
    .map(file => path.join(folderPath, file))
    .sort(); // Sort alphabetically for consistent ordering

  return files;
}

/**
 * Main bulk upload function
 */
async function bulkUploadComplete(serviceType, folderPath, startOrder = null) {
  console.log('\n🚀 Complete Bulk Upload Tool\n');
  console.log(`Service Type: ${serviceType}`);
  console.log(`Folder: ${folderPath}`);
  if (startOrder) {
    console.log(`Starting Order: ${startOrder} (optional - images will be randomized if not set)\n`);
  } else {
    console.log(`Order: Random (images will be displayed in random order)\n`);
  }

  // Validate service type
  if (!SERVICE_TYPE_MAP[serviceType]) {
    console.error(`❌ Invalid service type: ${serviceType}`);
    console.log('\nAvailable service types:');
    Object.keys(SERVICE_TYPE_MAP).forEach(key => console.log(`  - ${key}`));
    process.exit(1);
  }

  // Get image files
  console.log('📂 Scanning folder for images...');
  const imageFiles = getImageFiles(folderPath);
  
  if (imageFiles.length === 0) {
    console.error(`❌ No image files found in: ${folderPath}`);
    console.log(`\nSupported formats: ${IMAGE_EXTENSIONS.join(', ')}`);
    process.exit(1);
  }

  console.log(`✅ Found ${imageFiles.length} image(s)\n`);

  // Upload and create entries
  const results = [];
  let order = startOrder;

  for (let i = 0; i < imageFiles.length; i++) {
    const filePath = imageFiles[i];
    const fileName = path.basename(filePath, path.extname(filePath));
    
    try {
      console.log(`[${i + 1}/${imageFiles.length}] Processing: ${path.basename(filePath)}`);
      
      // Upload image
      const assetId = await uploadImageToSanity(filePath);
      
      // Create gallery entry (order is optional - pass null to skip ordering)
      const entryOrder = startOrder ? order : null;
      const entry = await createServiceGalleryEntry(assetId, serviceType, entryOrder, fileName);
      results.push(entry);
      
      if (startOrder) {
        console.log(`  ✅ Created entry #${order} (ID: ${entry._id})\n`);
        order++;
      } else {
        console.log(`  ✅ Created entry (ID: ${entry._id})\n`);
      }
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      console.error(`  ❌ Failed: ${error.message}\n`);
    }
  }

  console.log(`\n✅ Successfully processed ${results.length} out of ${imageFiles.length} images!`);
  console.log(`\n🎉 Check your Sanity Studio to see the new Service Gallery entries!`);
  
  return results;
}

// CLI interface
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

  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('\n📸 Complete Bulk Upload Tool\n');
    console.log('Usage:');
    console.log('  node scripts/bulk-upload-complete.js <serviceType> <folderPath> [startOrder]\n');
    console.log('Example (with random order):');
    console.log('  node scripts/bulk-upload-complete.js window-tint "./images/window-tint"\n');
    console.log('Example (with specific order):');
    console.log('  node scripts/bulk-upload-complete.js window-tint "./images/window-tint" 1\n');
    console.log('Available service types:');
    Object.keys(SERVICE_TYPE_MAP).forEach(key => console.log(`  - ${key}`));
    process.exit(1);
  }

  const [serviceType, folderPath, startOrderStr] = args;
  const startOrder = startOrderStr ? parseInt(startOrderStr) : null;
  const absoluteFolderPath = path.isAbsolute(folderPath) 
    ? folderPath 
    : path.resolve(process.cwd(), folderPath);

  bulkUploadComplete(serviceType, absoluteFolderPath, startOrder)
    .catch(error => {
      console.error('\n❌ Fatal error:', error);
      process.exit(1);
    });
}

module.exports = { bulkUploadComplete, uploadImageToSanity, createServiceGalleryEntry };

