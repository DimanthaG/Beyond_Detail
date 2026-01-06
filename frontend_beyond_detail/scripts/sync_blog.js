
const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: 'trp6l9ar',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: false, // We want fresh data
});

async function fetchAllPosts() {
  console.log('Fetching posts from Sanity...');
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage {
      asset,
      alt
    },
    category,
    content,
    body,
    keywords,
    relatedServices
  }`;

  try {
    const posts = await client.fetch(query);
    console.log(`Successfully fetched ${posts.length} posts.`);

    // Now we need to format this for the React file
    const fileContent = `// THIS FILE IS AUTO-GENERATED/SYNCED FROM SANITY
// DO NOT EDIT MANUALLY IF YOU WANT TO KEEP SYNCED
export const LOCAL_BLOG_POSTS = ${JSON.stringify(posts, null, 4)};
`;

    // Path to the file
    const filePath = path.join(__dirname, '..', 'src', 'Pages', 'Blog', 'LocalBlogContent.js');
    console.log(`Writing to ${filePath}...`);

    fs.writeFileSync(filePath, fileContent);
    console.log('Done! Local blog content is now consistent with Live Sanity data.');

  } catch (error) {
    console.error('Failed to fetch from Sanity:', error.message);
  }
}

fetchAllPosts();
