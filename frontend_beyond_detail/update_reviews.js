const fs = require('fs');
const path = require('path');

// Manually absolute path just to be 100% sure, although relative should work
const directory = 'c:\\Users\\Pemina\\Documents\\Beyond Detail\\WEBSITE\\Beyond_Detail\\frontend_beyond_detail\\src\\Pages\\Neighborhoods';

console.log(`Scanning ${directory}...`);

if (!fs.existsSync(directory)) {
    console.error(`Directory does not exist: ${directory}`);
    process.exit(1);
}

try {
    const files = fs.readdirSync(directory);
    console.log(`Found ${files.length} files in directory.`);
    let count = 0;

    files.forEach(file => {
        if (file.endsWith('.jsx')) {
            const filepath = path.join(directory, file);
            const content = fs.readFileSync(filepath, 'utf8');

            let newContent = content;

            // Use case insensitive logic just in case, and more generic pattern
            // Pattern: "68" followed by "Five-Star" or "five-star"
            if (content.includes('68 Five-Star') || content.includes('68+ five-star') || content.includes('68 five-star')) {
                newContent = newContent.replace(/68 Five-Star/g, '70+ Five-Star');
                newContent = newContent.replace(/68\+? five-star/yi, '70+ five-star'); // Case insensitive

                if (newContent !== content) {
                    console.log(`Updating ${file}`);
                    fs.writeFileSync(filepath, newContent, 'utf8');
                    count++;
                }
            }
        }
    });

    console.log(`Updated ${count} files.`);
} catch (err) {
    console.error('Error:', err);
}
