const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const seoDataDir = path.join(__dirname, '..', 'seo_data', 'Text Analysis');

function analyzeReports() {
    // Write results to file
    const reportPath = path.join(__dirname, 'nlp_report.txt');
    let output = '';
    const log = (msg) => { output += msg + '\n'; console.log(msg); };

    log('Searching for Excel files in: ' + seoDataDir);

    let files;
    try {
        files = fs.readdirSync(seoDataDir).filter(f => f.endsWith('.xlsx'));
    } catch (err) {
        log('Could not list directory: ' + err.message);
        fs.writeFileSync(reportPath, output);
        return;
    }

    if (files.length === 0) {
        log('No .xlsx files found.');
        fs.writeFileSync(reportPath, output);
        return;
    }

    // Targets to look for
    const targets = ['infrared', 'hydrophobic', 'salt', 'swirl', 'uv', 'mobile', 'cost', 'price', 'detailing', 'tint', 'ceramic', 'law', 'legal'];

    files.forEach(file => {
        log(`\n--- Analyzing: ${file} ---`);
        const fullPath = path.join(seoDataDir, file);

        try {
            const workbook = XLSX.readFile(fullPath);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet);

            if (data.length === 0) {
                log('  (Empty file)');
                return;
            }

            log(`  Rows: ${data.length}`);

            // Attempt to identify columns dynamically
            const keys = Object.keys(data[0]);
            const entityKey = keys.find(k => k.toLowerCase().includes('entity') || k.toLowerCase().includes('text') || k.toLowerCase().includes('topic'));
            const scoreKey = keys.find(k => k.toLowerCase().includes('salience') || k.toLowerCase().includes('score') || k.toLowerCase().includes('importance') || k.toLowerCase().includes('value') || k.toLowerCase().includes('relevance'));

            if (entityKey && scoreKey) {
                log(`  Detected columns - Entity: "${entityKey}", Score: "${scoreKey}"`);

                // Sort by score
                data.sort((a, b) => (b[scoreKey] || 0) - (a[scoreKey] || 0));

                // Top 5 entities
                log('  > Top 5 Entities:');
                data.slice(0, 5).forEach(row => {
                    log(`    - ${row[entityKey]}: ${Number(row[scoreKey]).toFixed(4)}`);
                });

                // Check targets
                log('  > Target Keyword Check:');
                let foundAny = false;
                targets.forEach(target => {
                    const match = data.find(row => row[entityKey] && row[entityKey].toString().toLowerCase().includes(target));
                    if (match) {
                        foundAny = true;
                        log(`    [MATCH] "${target}" found in "${match[entityKey]}" (Score: ${Number(match[scoreKey]).toFixed(4)})`);
                    }
                });

                if (!foundAny) log('    No specific target keywords found in this report.');

            } else {
                log(`  Could not auto-detect Entity/Score columns. Keys: ${keys.join(', ')}`);
                // Fallback: Just dump text fields looking for targets
                log('  > Raw Text Search:');
                let foundAny = false;
                data.forEach(row => {
                    const rowStr = JSON.stringify(row).toLowerCase();
                    targets.forEach(target => {
                        if (rowStr.includes(target)) {
                            // Don't spam, just finding one instance is enough proof
                            // log(`    Found "${target}" in row.`);
                            foundAny = true;
                        }
                    })
                });
                if (foundAny) log("    (Found target keywords in raw text)");
            }

        } catch (err) {
            log(`  Error reading file: ${err.message}`);
        }
    });

    fs.writeFileSync(reportPath, output);
}

analyzeReports();
