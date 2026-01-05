const fs = require('fs');

const filePath = 'c:\\Users\\Pemina\\Documents\\Beyond Detail\\WEBSITE\\Beyond_Detail\\frontend_beyond_detail\\src\\Pages\\Blog\\LocalBlogContent.js';

try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log("First 100 chars:", content.substring(0, 100));

    const lines = content.split('\n');
    console.log("Total lines:", lines.length);

    lines.forEach((line, index) => {
        if (line.includes('"title":')) {
            console.log(`Line ${index + 1}: ${line.trim()}`);
        }
    });

} catch (err) {
    console.error(err);
}
