
const client = require('part:@sanity/base/client')
const fs = require('fs')

const run = async () => {
    try {
        const docs = await client.fetch('*[_type == "post"]{title}')
        const content = JSON.stringify(docs, null, 2)
        fs.writeFileSync('posts_check_result.json', content, 'utf8')
        console.log('Done')
    } catch (err) {
        fs.writeFileSync('posts_check_result.json', JSON.stringify({ error: err.message }), 'utf8')
    }
}

run()
