
const { createClient } = require('@sanity/client');
const fs = require('fs');

const client = createClient({
    projectId: 'trp6l9ar',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: false, // Fresh data
});

async function inspectPost() {
    const slug = 'how-much-does-car-detailing-cost-in-toronto-2026-pricing';
    console.log(`Fetching post with slug: ${slug}...`);

    // Fetch without projection to see ALL fields
    const query = `*[_type == "blogPost" && slug.current == $slug][0]`;

    try {
        const post = await client.fetch(query, { slug });
        if (!post) {
            console.error('Post not found!');
            return;
        }

        console.log('Post found. Writing to sanity_debug_post.json...');
        fs.writeFileSync('sanity_debug_post.json', JSON.stringify(post, null, 2));
        console.log('Done.');

        // Quick check of fields
        console.log('Fields present:', Object.keys(post));
        if (post.content) console.log('Content is type:', typeof post.content, 'Length:', post.content.length);
        if (post.body) console.log('Body is type:', typeof post.body, 'Length:', post.body.length);

    } catch (error) {
        console.error('Error fetching:', error);
    }
}

inspectPost();
