const { createClient } = require('@sanity/client');

console.log('Initializing Sanity Client...');

const client = createClient({
    projectId: 'trp6l9ar',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: false,
});

console.log('Client initialized. Fetching...');

client.fetch(`*[_type == "blogPost" && slug.current == "mobile-car-detailing-benefits-toronto"][0]{
  title,
  slug,
  content,
  _updatedAt
}`).then(post => {
    if (!post) {
        console.log('Post not found!');
        return;
    }
    console.log('--------------------------------------------------');
    console.log(`Title: ${post.title}`);
    console.log(`Slug: ${post.slug.current}`);
    console.log(`Updated At: ${post._updatedAt}`);

    if (!post.content) {
        console.log('CONTENT IS MISSING OR NULL');
    } else {
        console.log(`Content type: ${typeof post.content}`);
        if (Array.isArray(post.content)) {
            console.log(`Content length: ${post.content.length}`);
            // Log the first few blocks to see structure
            console.log('Content blocks (first 3):', JSON.stringify(post.content.slice(0, 3), null, 2));
        } else {
            console.log('Content is not an array:', post.content);
        }
    }
}).catch(err => {
    console.error('Error fetching data:', err);
});
