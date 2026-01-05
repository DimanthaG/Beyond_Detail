const fs = require('fs');

const filePath = 'c:\\Users\\Pemina\\Documents\\Beyond Detail\\WEBSITE\\Beyond_Detail\\frontend_beyond_detail\\src\\Pages\\Blog\\LocalBlogContent.js';

try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Find all objects in the LOCAL_BLOG_POSTS array.
    // The structure is `export const LOCAL_BLOG_POSTS = [ { ... }, { ... } ];`
    // We can try to use regex to find `"_id":` or `title:` and line numbers.

    const lines = content.split('\n');
    let posts = [];
    let currentPost = null;

    lines.forEach((line, index) => {
        const lineNum = index + 1;
        if (line.includes('"_id":')) {
            if (currentPost) {
                currentPost.endLine = lineNum - 2; // Approximate end of previous
                posts.push(currentPost);
            }
            currentPost = { startLine: lineNum, title: 'Unknown', idLine: line.trim() };
        }
        if (currentPost && line.includes('"title":')) {
            currentPost.title = line.trim();
            currentPost.titleLine = lineNum;
        }
        if (currentPost && line.includes('"content":')) {
            currentPost.contentStart = lineNum;
        }
    });

    if (currentPost) {
        currentPost.endLine = lines.length;
        posts.push(currentPost);
    }

    console.log(JSON.stringify(posts, null, 2));

} catch (err) {
    console.error(err);
}
