// Fix script for Sanity API connection errors
// This script clears all caches and rebuilds the project

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting fix process...\n');

// 1. Clear build folder
console.log('1️⃣ Clearing build folder...');
const buildPath = path.join(__dirname, 'build');
if (fs.existsSync(buildPath)) {
    fs.rmSync(buildPath, { recursive: true, force: true });
    console.log('✅ Build folder cleared\n');
} else {
    console.log('ℹ️  No build folder found\n');
}

// 2. Clear node_modules cache
console.log('2️⃣ Clearing node_modules cache...');
const cachePath = path.join(__dirname, 'node_modules', '.cache');
if (fs.existsSync(cachePath)) {
    fs.rmSync(cachePath, { recursive: true, force: true });
    console.log('✅ Cache cleared\n');
} else {
    console.log('ℹ️  No cache folder found\n');
}

// 3. Verify Sanity client configuration
console.log('3️⃣ Verifying Sanity configuration...');
const clientPath = path.join(__dirname, 'src', 'client.js');
const clientContent = fs.readFileSync(clientPath, 'utf8');

if (clientContent.includes('trp6l9ar')) {
    console.log('✅ Sanity project ID found: trp6l9ar\n');
} else {
    console.log('⚠️  Warning: Sanity project ID not found in client.js\n');
}

// 4. Check for .env file
console.log('4️⃣ Checking environment configuration...');
const envPath = path.join(__dirname, '.env');
const envLocalPath = path.join(__dirname, '.env.local');

if (fs.existsSync(envPath)) {
    console.log('✅ .env file exists\n');
} else if (fs.existsSync(envLocalPath)) {
    console.log('✅ .env.local file exists\n');
} else {
    console.log('ℹ️  No .env file found - using hardcoded values\n');
    console.log('💡 Creating .env.local file...');

    const envContent = `# Sanity CMS Configuration
REACT_APP_SANITY_PROJECT_ID=trp6l9ar
REACT_APP_SANITY_DATASET=production
`;

    fs.writeFileSync(envLocalPath, envContent);
    console.log('✅ .env.local created\n');
}

console.log('✨ Fix process complete!\n');
console.log('📝 Next steps:');
console.log('   1. Close your browser completely');
console.log('   2. Clear browser cache (Ctrl+Shift+Delete)');
console.log('   3. Run: npm start');
console.log('   4. Hard refresh the page (Ctrl+Shift+R)\n');
