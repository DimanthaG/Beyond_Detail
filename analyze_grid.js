const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'grid_points_businesses_window tinting scarborough.xlsx');

try {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }

    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    console.log(`Total rows: ${data.length}`);
    if (data.length > 0) {
        console.log("First row keys:", Object.keys(data[0]));
        console.log("First row sample:", JSON.stringify(data[0], null, 2));
    }

    // Map to store counts: Business Name -> Count of Top 3 Rankings
    const topRankCounts = {};

    data.forEach(row => {
        // Try to find Rank and Business Name columns flexibly
        let rank = row['Rank'] || row['rank'];
        let businessName = row['Business Name'] || row['business name'] || row['Business'] || row['Name'];

        // If simple lookup failed, try to find keys containing specific words
        if (rank === undefined) {
            const rankKey = Object.keys(row).find(k => k.toLowerCase().includes('rank'));
            if (rankKey) rank = row[rankKey];
        }
        if (businessName === undefined) {
            const nameKey = Object.keys(row).find(k => k.toLowerCase().includes('business') || k.toLowerCase().includes('name'));
            if (nameKey) businessName = row[nameKey];
        }

        const parsedRank = parseInt(rank);

        if (!isNaN(parsedRank) && parsedRank >= 1 && parsedRank <= 3 && businessName) {
            if (!topRankCounts[businessName]) {
                topRankCounts[businessName] = 0;
            }
            topRankCounts[businessName]++;
        }
    });

    // Convert to array and sort
    const sortedCompetitors = Object.entries(topRankCounts)
        .sort((a, b) => b[1] - a[1]);

    console.log("\n--- Analysis Result ---");
    console.log("Top Competitors (Rank 1-3 Count):");
    sortedCompetitors.forEach(([name, count], index) => {
        console.log(`${index + 1}. ${name}: ${count}`);
    });

    if (sortedCompetitors.length > 0) {
        console.log(`\nTop competitor is: ${sortedCompetitors[0][0]}`);
    } else {
        console.log("\nNo competitors found ranking in positions 1-3.");
    }

} catch (error) {
    console.error("Error analyzing file:", error);
}
