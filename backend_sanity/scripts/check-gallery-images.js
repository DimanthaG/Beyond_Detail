const sanityClient = require('@sanity/client');

const client = sanityClient({
    projectId: 'trp6l9ar',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: false,
});

async function checkGalleryImages() {
    console.log('\n🔍 Checking Service Gallery Images in Sanity...\n');

    try {
        // Fetch all service gallery items
        const query = `*[_type == "serviceGallery"] | order(serviceType asc, order asc) {
      _id,
      serviceType,
      title,
      "hasImage": defined(image),
      "imageAsset": image.asset->_id,
      order,
      _createdAt
    }`;

        const results = await client.fetch(query);

        console.log(`📊 Total Gallery Items: ${results.length}\n`);

        // Group by service type
        const byServiceType = {};
        const missingImages = [];

        results.forEach(item => {
            if (!byServiceType[item.serviceType]) {
                byServiceType[item.serviceType] = [];
            }
            byServiceType[item.serviceType].push(item);

            if (!item.hasImage || !item.imageAsset) {
                missingImages.push(item);
            }
        });

        // Display by service type
        console.log('📁 Images by Service Type:\n');
        Object.keys(byServiceType).sort().forEach(serviceType => {
            const items = byServiceType[serviceType];
            const validImages = items.filter(i => i.hasImage && i.imageAsset).length;
            const invalidImages = items.filter(i => !i.hasImage || !i.imageAsset).length;

            console.log(`  ${serviceType}:`);
            console.log(`    ✅ Valid: ${validImages}`);
            if (invalidImages > 0) {
                console.log(`    ❌ Missing Images: ${invalidImages}`);
            }
            console.log('');
        });

        // Show items with missing images
        if (missingImages.length > 0) {
            console.log('\n⚠️  Items with Missing Images:\n');
            missingImages.forEach(item => {
                console.log(`  - ID: ${item._id}`);
                console.log(`    Service: ${item.serviceType}`);
                console.log(`    Title: ${item.title || 'Untitled'}`);
                console.log(`    Has Image Field: ${item.hasImage}`);
                console.log(`    Image Asset: ${item.imageAsset || 'MISSING'}`);
                console.log('');
            });

            console.log('\n💡 To fix missing images:');
            console.log('   1. Go to Sanity Studio: http://localhost:3333');
            console.log('   2. Find these items by their ID');
            console.log('   3. Upload an image to each one');
            console.log('   4. Click "Publish"\n');
        } else {
            console.log('\n✅ All gallery items have valid images!\n');
        }

        // Check for unpublished drafts
        const draftQuery = `*[_type == "serviceGallery" && _id in path("drafts.**")] {
      _id,
      serviceType,
      title
    }`;

        const drafts = await client.fetch(draftQuery);
        if (drafts.length > 0) {
            console.log(`\n📝 Unpublished Drafts: ${drafts.length}`);
            console.log('   These won\'t show on the website until published!\n');
            drafts.forEach(draft => {
                console.log(`  - ${draft.serviceType}: ${draft.title || 'Untitled'}`);
            });
            console.log('');
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

checkGalleryImages();
