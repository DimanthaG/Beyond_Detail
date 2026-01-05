const fs = require('fs');
const path = require('path');

const directory = 'c:\\Users\\Pemina\\Documents\\Beyond Detail\\WEBSITE\\Beyond_Detail\\frontend_beyond_detail\\src\\Pages\\Neighborhoods';
const logFile = 'refactor_debug.txt';

function log(msg) {
    fs.appendFileSync(logFile, msg + '\n');
    console.log(msg);
}

// Clear log
fs.writeFileSync(logFile, 'Starting refactor...\n');

if (!fs.existsSync(directory)) {
    log(`Directory does not exist: ${directory}`);
    process.exit(1);
}

try {
    const files = fs.readdirSync(directory);
    log(`Found ${files.length} files in directory.`);
    let countActions = 0;

    files.forEach(file => {
        if (!file.endsWith('.jsx')) return;

        const filepath = path.join(directory, file);
        let content = fs.readFileSync(filepath, 'utf8');
        let modified = false;

        // Detect file type
        let packageType = null;
        if (file.startsWith('CarDetailing') && !file.includes('Scarborough') && !file.includes('Markham')) {
            packageType = 'AUTO_DETAIL_PACKAGES';
        } else if (file.startsWith('PaintCorrection')) {
            packageType = 'PAINT_CORRECTION_PACKAGES';
        } else if (file.startsWith('CeramicCoating')) {
            packageType = 'CERAMIC_COATING_PACKAGES';
        }

        if (!packageType) {
            // log(`Skipping ${file} - no type match`);
            return;
        }

        // Check if relevant packages array is present in array form
        // Broader regex: packages={[ ... ]}
        // Matches "packages={" followed by "[" followed by anything until "]}"
        const regex = /packages=\{\[\s*[\s\S]*?\]\}/;

        if (regex.test(content)) {
            log(`Match found in ${file} for ${packageType}`);

            // Check/Add import
            if (!content.includes(`import { ${packageType} }`)) {
                if (content.includes("import ServicePricing")) {
                    content = content.replace(
                        "import ServicePricing from '../../components/ServicePricing/ServicePricing';",
                        "import ServicePricing from '../../components/ServicePricing/ServicePricing';\nimport { " + packageType + " } from '../../constants/servicePackages';"
                    );
                    log(`  Added import to ${file}`);
                } else {
                    log(`  Warning: ${file} does not import ServicePricing, skipping import injection.`);
                }
            }

            // Replace packages prop
            content = content.replace(regex, `packages={${packageType}}`);
            modified = true;
        } else {
            // Log why it didn't match?
            // log(`  No regex match in ${file}`);
            // Maybe it's already refactored?
            if (content.includes(`packages={${packageType}}`)) {
                // log(`  Already refactored: ${file}`);
            }
        }

        if (modified) {
            fs.writeFileSync(filepath, content, 'utf8');
            log(`  Saved ${file}`);
            countActions++;
        }
    });

    log(`Refactored ${countActions} files.`);
} catch (err) {
    log(`Error: ${err}`);
}
