
const client = require('part:@sanity/base/client')

const run = async () => {
    console.log('Testing connection...')
    try {
        const docs = await client.fetch('*[_type == "post"][0...5]')
        console.log('Connection successful!')
        console.log(`Found ${docs.length} posts.`)
        docs.forEach(doc => console.log(`- ${doc.title}`))
    } catch (err) {
        console.error('Connection failed:', err)
    }
}

run()
