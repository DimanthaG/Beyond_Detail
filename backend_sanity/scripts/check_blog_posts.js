
const client = require('part:@sanity/base/client')
const fs = require('fs')

const run = async () => {
    try {
        // Fetch all blogPosts with their ID and title
        const docs = await client.fetch('*[_type == "blogPost"]{_id, title, publishedAt}')

        console.log(`Found ${docs.length} blog posts.`)
        docs.forEach(doc => {
            console.log(`[${doc._id}] ${doc.title} (${doc.publishedAt})`)
        })

        const content = JSON.stringify(docs, null, 2)
        fs.writeFileSync('blog_posts_list.json', content, 'utf8')
    } catch (err) {
        console.error('Check failed:', err.message)
    }
}

run()
