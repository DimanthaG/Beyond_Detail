const fs = require('fs');
const path = require('path');

const files = {
    "Ceramic Coating Toronto": "lh_toronto.json",
    "Car Detailing Markham Road": "lh_markham.json"
};

let output = `${"Page".padEnd(30)} | ${"Perf".padEnd(5)} | ${"SEO".padEnd(5)} | ${"Access".padEnd(6)} | ${"Best P".padEnd(6)} | ${"LCP".padEnd(10)}\n`;
output += "-".repeat(85) + "\n";

for (const [name, filename] of Object.entries(files)) {
    const fullPath = path.join(__dirname, filename); // Script is in seo_data, so just filename needed

    if (!fs.existsSync(fullPath)) {
        output += `${name.padEnd(30)} | FILE NOT FOUND: ${filename}\n`;
        continue;
    }

    try {
        const rawData = fs.readFileSync(fullPath);
        const data = JSON.parse(rawData);

        const cats = data.categories || {};
        const perf = Math.round((cats.performance?.score || 0) * 100);
        const seo = Math.round((cats.seo?.score || 0) * 100);
        const acc = Math.round((cats.accessibility?.score || 0) * 100);
        const bp = Math.round((cats['best-practices']?.score || 0) * 100);

        const lcp = data.audits?.['largest-contentful-paint']?.displayValue || 'N/A';

        output += `${name.padEnd(30)} | ${String(perf).padEnd(5)} | ${String(seo).padEnd(5)} | ${String(acc).padEnd(6)} | ${String(bp).padEnd(6)} | ${lcp.padEnd(10)}\n`;

    } catch (err) {
        output += `${name.padEnd(30)} | Error: ${err.message}\n`;
    }
}

fs.writeFileSync(path.join(__dirname, 'lh_summary_report.txt'), output);
console.log("Report generated.");
