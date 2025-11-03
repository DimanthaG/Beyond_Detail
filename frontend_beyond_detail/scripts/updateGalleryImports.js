/**
 * Gallery Images Auto-Import Script
 * 
 * This script scans gallery folders and automatically updates galleryImages.js
 * with import statements for all images found.
 * 
 * Run: node scripts/updateGalleryImports.js
 */

const fs = require('fs');
const path = require('path');

const galleriesPath = path.join(__dirname, '../src/assets/galleries');
const galleryImagesPath = path.join(__dirname, '../src/utils/galleryImages.js');

// Gallery folders to scan (only these three have active galleries)
const activeGalleries = ['paint-correction', 'ceramic-coating', 'window-tint'];

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.JPG', '.JPEG', '.PNG', '.WEBP', '.SVG'];

function getImageFiles(folderPath) {
  if (!fs.existsSync(folderPath)) {
    return [];
  }
  
  const files = fs.readdirSync(folderPath);
  return files
    .filter(file => {
      const ext = path.extname(file);
      return imageExtensions.includes(ext);
    })
    .sort();
}

function toCamelCase(str) {
  // Convert filename to camelCase variable name
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, (_, c) => c.toLowerCase());
}

function generateImports(galleryType, imageFiles) {
  const imports = [];
  const imageObjects = [];
  
  imageFiles.forEach((file, index) => {
    const varName = `${galleryType.replace(/-/g, '')}Img${index + 1}`;
    const filePath = `../assets/galleries/${galleryType}/${file}`;
    
    imports.push(`import ${varName} from '${filePath}';`);
    
    const fileName = path.basename(file, path.extname(file));
    imageObjects.push({
      varName,
      fileName: file,
      name: fileName,
    });
  });
  
  return { imports, imageObjects };
}

function updateGalleryImagesFile() {
  console.log('🔍 Scanning gallery folders...\n');
  
  const allImports = [];
  const galleryMapEntries = [];
  
  // Process each active gallery
  activeGalleries.forEach(galleryType => {
    const folderPath = path.join(galleriesPath, galleryType);
    const imageFiles = getImageFiles(folderPath);
    
    console.log(`📁 ${galleryType}:`);
    if (imageFiles.length === 0) {
      console.log('   ⚠️  No images found\n');
      galleryMapEntries.push(`  '${galleryType}': [],`);
      return;
    }
    
    console.log(`   ✅ Found ${imageFiles.length} image(s)`);
    imageFiles.forEach(file => console.log(`      - ${file}`));
    console.log('');
    
    const { imports, imageObjects } = generateImports(galleryType, imageFiles);
    allImports.push(...imports);
    
    // Generate gallery map entry
    const mapObjects = imageObjects.map(obj => {
      return `    {
      src: ${obj.varName},
      name: '${obj.name.replace(/'/g, "\\'")}',
      fileName: '${obj.fileName.replace(/'/g, "\\'")}',
    }`;
    });
    
    galleryMapEntries.push(`  '${galleryType}': [\n${mapObjects.join(',\n')},\n  ],`);
  });
  
  // Generate the full file content
  const fileContent = `// Gallery images utility
// Manual imports approach (require.context not available in this webpack setup)
// NOTE: This gallery is for Paint Correction, Ceramic Coating, and Window Tint pages only
// 
// ⚠️ AUTO-GENERATED: This file is auto-updated by scripts/updateGalleryImports.js
// If you manually edit this file, your changes may be overwritten.
// To add new images: upload to gallery folder, then run: npm run update-galleries

${allImports.join('\n')}

// Gallery image mappings - manually defined for each service type
const galleryImageMap = {
${galleryMapEntries.join('\n')}
  'auto-detail': [],
  'interior-detailing': [],
  'exterior-detailing': [],
  'headlight-restoration': [],
  'odour-removal': [],
  'leather-cleaning': [],
  'paint-removal': [],
  'fleet-services': [],
};

/**
 * Get all gallery images for a specific service type
 * @param {string} serviceType - The service type (e.g., 'paint-correction')
 * @returns {Array} Array of image objects with src and name
 */
export const getGalleryImages = (serviceType) => {
  try {
    const images = galleryImageMap[serviceType] || [];
    
    console.log(\`[Gallery] Loading images for "\${serviceType}"\`);
    console.log(\`[Gallery] Found \${images.length} image(s)\`);
    
    if (images.length === 0) {
      console.warn(\`[Gallery] No images found for service type: \${serviceType}\`);
      return [];
    }
    
    // Sort by filename for consistent ordering
    return images.sort((a, b) => a.fileName.localeCompare(b.fileName));
  } catch (error) {
    console.warn(\`Error loading gallery images for \${serviceType}: \`, error);
    return [];
  }
};

/**
 * Get the count of images for a service type
 * @param {string} serviceType - The service type
 * @returns {number} Number of images
 */
export const getGalleryImageCount = (serviceType) => {
  return getGalleryImages(serviceType).length;
};

export default getGalleryImages;
`;

  // Write the updated file
  fs.writeFileSync(galleryImagesPath, fileContent, 'utf8');
  
  console.log('✅ Successfully updated galleryImages.js');
  console.log('\n📝 Next steps:');
  console.log('   1. Restart your dev server');
  console.log('   2. Refresh the page to see new images\n');
}

// Run the script
try {
  updateGalleryImagesFile();
} catch (error) {
  console.error('❌ Error updating gallery images:', error);
  process.exit(1);
}

