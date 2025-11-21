#!/usr/bin/env node

/**
 * Image Optimization Script for Beyond Detail
 * 
 * This script will:
 * 1. Find all images in public/ and src/
 * 2. Compress them using sharp
 * 3. Convert to WebP format
 * 4. Generate responsive sizes
 * 5. Update image references in code
 * 
 * Usage:
 *   npm install --save-dev sharp glob
 *   node optimize-images.js
 */

const fs = require('fs');
try {
    fs.writeFileSync('debug.log', 'Script started\n');
} catch (e) { }

const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fsPromises = require('fs').promises;

try {
    fs.appendFileSync('debug.log', 'Glob type: ' + typeof glob + '\n');
    fs.appendFileSync('debug.log', 'Glob keys: ' + Object.keys(glob).join(',') + '\n');
} catch (e) { }

// Configuration
const CONFIG = {
    // Directories to search for images
    searchDirs: [
        'public/**/*.{jpg,jpeg,png}',
        'src/**/*.{jpg,jpeg,png}'
    ],

    // Output quality (0-100)
    jpegQuality: 80,
    pngQuality: 80,
    webpQuality: 80,

    // Generate responsive sizes
    responsiveSizes: [400, 800, 1200, 1600],

    // Skip files smaller than this (in bytes)
    minFileSize: 10 * 1024, // 10KB

    // Backup original images
    createBackup: true,
    backupDir: 'image-backups',
};

// Statistics
const stats = {
    totalImages: 0,
    optimized: 0,
    skipped: 0,
    errors: 0,
    originalSize: 0,
    optimizedSize: 0,
};

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Get file size
 */
async function getFileSize(filePath) {
    try {
        const stats = await fsPromises.stat(filePath);
        return stats.size;
    } catch (error) {
        return 0;
    }
}

/**
 * Create backup of original image
 */
async function backupImage(filePath) {
    if (!CONFIG.createBackup) return;

    const backupPath = path.join(CONFIG.backupDir, filePath);
    const backupDir = path.dirname(backupPath);

    try {
        await fsPromises.mkdir(backupDir, { recursive: true });
        await fsPromises.copyFile(filePath, backupPath);
        console.log(`  ✓ Backed up to: ${backupPath}`);
    } catch (error) {
        console.error(`  ✗ Backup failed: ${error.message}`);
    }
}

/**
 * Optimize a single image
 */
async function optimizeImage(filePath) {
    fs.appendFileSync('debug.log', 'Processing: ' + filePath + '\n');
    console.log(`\nProcessing: ${filePath}`);

    try {
        const originalSize = await getFileSize(filePath);

        // Skip small files
        if (originalSize < CONFIG.minFileSize) {
            console.log(`  ⊘ Skipped (too small: ${formatBytes(originalSize)})`);
            stats.skipped++;
            return;
        }

        stats.originalSize += originalSize;

        // Backup original
        await backupImage(filePath);

        const ext = path.extname(filePath).toLowerCase();
        const baseName = path.basename(filePath, ext);
        const dir = path.dirname(filePath);

        // Load image from buffer to avoid file locking on Windows
        const inputBuffer = await fsPromises.readFile(filePath);
        const image = sharp(inputBuffer);
        const metadata = await image.metadata();

        console.log(`  Original: ${metadata.width}x${metadata.height}, ${formatBytes(originalSize)}`);

        // Optimize original format
        let optimizedBuffer;
        if (ext === '.jpg' || ext === '.jpeg') {
            optimizedBuffer = await image
                .jpeg({ quality: CONFIG.jpegQuality, progressive: true })
                .toBuffer();
        } else if (ext === '.png') {
            optimizedBuffer = await image
                .png({ quality: CONFIG.pngQuality, compressionLevel: 9 })
                .toBuffer();
        }

        // Save optimized original
        if (optimizedBuffer) {
            await fsPromises.writeFile(filePath, optimizedBuffer);
            const optimizedSize = await getFileSize(filePath);
            const savings = originalSize - optimizedSize;
            const savingsPercent = Math.round((savings / originalSize) * 100);

            console.log(`  ✓ Optimized: ${formatBytes(optimizedSize)} (saved ${formatBytes(savings)}, ${savingsPercent}%)`);
            stats.optimizedSize += optimizedSize;
        }

        // Generate WebP version
        const webpPath = path.join(dir, `${baseName}.webp`);
        await sharp(inputBuffer)
            .webp({ quality: CONFIG.webpQuality })
            .toFile(webpPath);

        const webpSize = await getFileSize(webpPath);
        const webpSavings = originalSize - webpSize;
        const webpSavingsPercent = Math.round((webpSavings / originalSize) * 100);

        console.log(`  ✓ WebP created: ${formatBytes(webpSize)} (saved ${formatBytes(webpSavings)}, ${webpSavingsPercent}%)`);

        // Generate responsive sizes (optional)
        if (metadata.width > 800) {
            console.log(`  → Generating responsive sizes...`);
            for (const size of CONFIG.responsiveSizes) {
                if (size < metadata.width) {
                    const responsivePath = path.join(dir, `${baseName}-${size}w.webp`);
                    await sharp(inputBuffer)
                        .resize(size, null, { withoutEnlargement: true })
                        .webp({ quality: CONFIG.webpQuality })
                        .toFile(responsivePath);

                    const responsiveSize = await getFileSize(responsivePath);
                    console.log(`    ✓ ${size}w: ${formatBytes(responsiveSize)}`);
                }
            }
        }

        stats.optimized++;

    } catch (error) {
        fs.appendFileSync('debug.log', 'Error optimizing ' + filePath + ': ' + error.message + '\n');
        console.error(`  ✗ Error: ${error.message}`);
        stats.errors++;
    }
}

/**
 * Find all images
 */
async function findImages() {
    const images = [];

    for (const pattern of CONFIG.searchDirs) {
        try {
            fs.appendFileSync('debug.log', 'Searching: ' + pattern + '\n');
            const files = glob.globSync(pattern, { nodir: true });
            fs.appendFileSync('debug.log', 'Found: ' + files.length + '\n');
            images.push(...files);
        } catch (e) {
            fs.appendFileSync('debug.log', 'Error searching ' + pattern + ': ' + e.message + '\n');
        }
    }

    return images;
}

/**
 * Main function
 */
async function main() {
    console.log('🖼️  Beyond Detail Image Optimization\n');
    console.log('Configuration:');
    console.log(`  JPEG Quality: ${CONFIG.jpegQuality}%`);
    console.log(`  PNG Quality: ${CONFIG.pngQuality}%`);
    console.log(`  WebP Quality: ${CONFIG.webpQuality}%`);
    console.log(`  Responsive Sizes: ${CONFIG.responsiveSizes.join(', ')}px`);
    console.log(`  Backup: ${CONFIG.createBackup ? 'Yes' : 'No'}\n`);

    // Find all images
    console.log('Finding images...');
    const images = await findImages();
    stats.totalImages = images.length;

    console.log(`Found ${images.length} images\n`);
    console.log('='.repeat(60));

    // Optimize each image
    for (const image of images) {
        await optimizeImage(image);
    }

    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('\n📊 Summary:\n');
    console.log(`  Total Images: ${stats.totalImages}`);
    console.log(`  Optimized: ${stats.optimized}`);
    console.log(`  Skipped: ${stats.skipped}`);
    console.log(`  Errors: ${stats.errors}`);
    console.log(`  Original Size: ${formatBytes(stats.originalSize)}`);
    console.log(`  Optimized Size: ${formatBytes(stats.optimizedSize)}`);

    if (stats.originalSize > 0) {
        const totalSavings = stats.originalSize - stats.optimizedSize;
        const savingsPercent = Math.round((totalSavings / stats.originalSize) * 100);
        console.log(`  Total Savings: ${formatBytes(totalSavings)} (${savingsPercent}%)`);
    }

    console.log('\n✨ Optimization complete!\n');

    if (CONFIG.createBackup) {
        console.log(`💾 Original images backed up to: ${CONFIG.backupDir}/`);
    }

    console.log('\n📝 Next Steps:');
    console.log('  1. Review optimized images');
    console.log('  2. Update image references to use WebP:');
    console.log('     <img src="image.webp" alt="..." />');
    console.log('  3. Add width/height attributes to images');
    console.log('  4. Add loading="lazy" to below-fold images');
    console.log('  5. Test your website');
    console.log('  6. Run PageSpeed Insights again\n');
}

// Run the script
main().catch(error => {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
});
