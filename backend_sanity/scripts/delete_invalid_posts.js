
const client = require('part:@sanity/base/client')

const run = async () => {
    try {
        const query = '*[_type == "post"]'
        const docs = await client.fetch(query)
        console.log(`Found ${docs.length} invalid posts to delete.`)

        if (docs.length > 0) {
            const transaction = client.transaction()
            docs.forEach(doc => transaction.delete(doc._id))
            await transaction.commit()
            console.log('Deleted invalid posts.')
        }
    } catch (err) {
        console.error('Cleanup failed:', err.message)
    }
}

run()
