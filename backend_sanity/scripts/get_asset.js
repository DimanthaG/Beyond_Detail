
const client = require('part:@sanity/base/client')

const run = async () => {
    const asset = await client.fetch('*[_type == "sanity.imageAsset"][0]{_id}')
    console.log('Asset ID:', asset ? asset._id : 'None')
}
run()
