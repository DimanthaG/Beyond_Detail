
const client = require('part:@sanity/base/client');

const run = async () => {
    try {
        const docs = await client.fetch(`*[_type == "blogPost"]{
            _id, 
            title, 
            "contentLength": count(content),
            "bodyLength": count(body),
            publishedAt
        }`);

        console.log(`Found ${docs.length} blog posts.`);
        console.log("---------------------------------------------------");
        console.log(String("ID").padEnd(40) + " | " + String("Title").padEnd(50) + " | Cont | Body | Date");
        console.log("---------------------------------------------------");

        docs.forEach(doc => {
            console.log(
                `${doc._id.padEnd(40)} | ${doc.title.substring(0, 48).padEnd(50)} | ${String(doc.contentLength).padEnd(4)} | ${String(doc.bodyLength).padEnd(4)} | ${doc.publishedAt}`
            );
        });

    } catch (err) {
        console.error('Check failed:', err.message);
    }
}

run();
