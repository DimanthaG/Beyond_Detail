const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const draftsDir = path.join(__dirname, '..', 'content_drafts');
const targetFile = path.join(__dirname, 'src', 'Pages', 'Blog', 'LocalBlogContent.js');

function parseMarkdown(mdContent) {
    const lines = mdContent.split('\n');
    let frontmatter = {};
    let contentLines = [];
    let inFrontmatter = false;

    // Parse Frontmatter
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (i === 0 && line === '---') {
            inFrontmatter = true;
            continue;
        }
        if (inFrontmatter && line === '---') {
            inFrontmatter = false;
            contentLines = lines.slice(i + 1);
            break;
        }
        if (inFrontmatter) {
            const parts = line.split(':');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                let value = parts.slice(1).join(':').trim();
                // Remove quotes
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                // Handle array
                if (value.startsWith('[') && value.endsWith(']')) {
                    value = value.substring(1, value.length - 1).split(',').map(s => s.trim().replace(/^"|"$/g, ''));
                }
                frontmatter[key] = value;
            }
        }
    }

    // Convert Markdown Body to Portable Text Blocks
    const blocks = [];
    let currentBlock = null;

    contentLines.forEach(line => {
        // Skip empty lines unless they separate paragraphs
        if (line.trim() === '') return;

        // Headers
        if (line.startsWith('### ')) {
            blocks.push({
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', marks: [], text: line.replace('### ', '') }]
            });
        } else if (line.startsWith('## ')) {
            blocks.push({
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', marks: [], text: line.replace('## ', '') }]
            });
        } else if (line.startsWith('#### ')) {
            blocks.push({
                _type: 'block',
                style: 'h4',
                children: [{ _type: 'span', marks: [], text: line.replace('#### ', '') }]
            });
        }
        // Lists
        else if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
            const text = line.trim().substring(2);
            blocks.push({
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: processInlineStyles(text)
            });
        }
        // Tables (Basic support: convert to text lines)
        else if (line.startsWith('|')) {
            // Skip table formatting lines
            if (line.includes('---')) return;
            // Treat rows as paragraphs for now, as portable text tables are complex
            const text = line.replace(/^\||\|$/g, '').split('|').join(' - ');
            blocks.push({
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', marks: [], text: text }]
            });
        }
        // Paragraphs
        else {
            blocks.push({
                _type: 'block',
                style: 'normal',
                children: processInlineStyles(line)
            });
        }
    });

    return { frontmatter, blocks };
}

function processInlineStyles(text) {
    // Very basic markdown parser for bold **text**
    // Returns array of spans
    const children = [];
    // Regex for **bold**
    const parts = text.split(/(\*\*.*?\*\*)/g);

    parts.forEach(part => {
        if (part.startsWith('**') && part.endsWith('**')) {
            children.push({
                _type: 'span',
                marks: ['strong'],
                text: part.substring(2, part.length - 2)
            });
        } else if (part !== '') {
            children.push({
                _type: 'span',
                marks: [],
                text: part
            });
        }
    });

    return children;
}


// MAIN PROCESS
try {
    // 1. Read existing
    const existingContentFile = fs.readFileSync(targetFile, 'utf8');
    const match = existingContentFile.match(/export const LOCAL_BLOG_POSTS = (\[[\s\S]*?\]);/);
    if (!match) throw new Error("Could not find LOCAL_BLOG_POSTS array");

    // We need to parse the JSON. However, the file might contain unquoted keys if it wasn't pure JSON.
    // The sync_blog.js writes pure JSON with JSON.stringify, so it should be safe.
    let posts = JSON.parse(match[1]);

    // 2. Read Drafts
    if (fs.existsSync(draftsDir)) {
        const files = fs.readdirSync(draftsDir);
        files.forEach(file => {
            if (!file.endsWith('.md')) return;

            const raw = fs.readFileSync(path.join(draftsDir, file), 'utf8');
            const { frontmatter, blocks } = parseMarkdown(raw);

            // Construct Post Object
            const newPost = {
                _id: crypto.randomUUID(),
                title: frontmatter.title,
                slug: { current: frontmatter.slug },
                author: "Beyond Detail Team",
                publishedAt: frontmatter.publishedAt || new Date().toISOString(),
                excerpt: frontmatter.seoDescription || "",
                mainImage: {
                    // Placeholder or generic image
                    asset: { url: '/images/hero-home.avif' },
                    alt: frontmatter.title
                },
                category: frontmatter.category,
                content: blocks,
                seoTitle: frontmatter.seoTitle,
                seoDescription: frontmatter.seoDescription,
                keywords: frontmatter.keywords || []
            };

            // Deduplicate
            const existingIdx = posts.findIndex(p => p.slug.current === newPost.slug.current);
            if (existingIdx >= 0) {
                console.log(`Updating existing post: ${newPost.title}`);
                posts[existingIdx] = newPost;
            } else {
                console.log(`Adding new post: ${newPost.title}`);
                posts.unshift(newPost); // Add to top
            }
        });
    }

    // 3. Write back
    const newFileContent = `// THIS FILE IS AUTO-GENERATED/SYNCED FROM SANITY
// DO NOT EDIT MANUALLY IF YOU WANT TO KEEP SYNCED
export const LOCAL_BLOG_POSTS = ${JSON.stringify(posts, null, 4)};
`;
    fs.writeFileSync(targetFile, newFileContent);
    console.log("Successfully imported blog drafts.");

} catch (err) {
    console.error("Error importing blogs:", err);
}
