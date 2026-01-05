/**
 * SEO Audit Tool
 * 
 * Analyzes your website for common SEO issues and provides recommendations.
 * Run with: node scripts/seo-audit.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SRC_DIR = path.join(__dirname, '..', 'src');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const PAGES_DIR = path.join(SRC_DIR, 'Pages');

// SEO Rules
const SEO_RULES = {
    TITLE_MIN_LENGTH: 30,
    TITLE_MAX_LENGTH: 60,
    DESCRIPTION_MIN_LENGTH: 120,
    DESCRIPTION_MAX_LENGTH: 160,
    KEYWORDS_MIN: 5,
    KEYWORDS_MAX: 15,
    H1_COUNT: 1,
    IMAGE_ALT_REQUIRED: true
};

// Results storage
const auditResults = {
    passed: [],
    warnings: [],
    errors: [],
    info: []
};

/**
 * Find all JSX/JS files in a directory
 */
function findFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findFiles(filePath, fileList);
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

/**
 * Extract SEO component usage from file
 */
function extractSEOData(content, filePath) {
    const fileName = path.basename(filePath);
    const seoData = {
        file: fileName,
        path: filePath,
        hasSEO: false,
        title: null,
        description: null,
        keywords: null,
        issues: []
    };

    // Check if file uses SEO component
    if (content.includes('<SEO') || content.includes('<Helmet')) {
        seoData.hasSEO = true;

        // Extract title
        const titleMatch = content.match(/title=['"]([^'"]+)['"]/);
        if (titleMatch) {
            seoData.title = titleMatch[1];

            // Check title length
            if (seoData.title.length < SEO_RULES.TITLE_MIN_LENGTH) {
                seoData.issues.push(`Title too short (${seoData.title.length} chars, min ${SEO_RULES.TITLE_MIN_LENGTH})`);
            }
            if (seoData.title.length > SEO_RULES.TITLE_MAX_LENGTH) {
                seoData.issues.push(`Title too long (${seoData.title.length} chars, max ${SEO_RULES.TITLE_MAX_LENGTH})`);
            }
        } else {
            seoData.issues.push('Missing title tag');
        }

        // Extract description
        const descMatch = content.match(/description=['"]([^'"]+)['"]/);
        if (descMatch) {
            seoData.description = descMatch[1];

            // Check description length
            if (seoData.description.length < SEO_RULES.DESCRIPTION_MIN_LENGTH) {
                seoData.issues.push(`Description too short (${seoData.description.length} chars, min ${SEO_RULES.DESCRIPTION_MIN_LENGTH})`);
            }
            if (seoData.description.length > SEO_RULES.DESCRIPTION_MAX_LENGTH) {
                seoData.issues.push(`Description too long (${seoData.description.length} chars, max ${SEO_RULES.DESCRIPTION_MAX_LENGTH})`);
            }
        } else {
            seoData.issues.push('Missing description meta tag');
        }

        // Extract keywords
        const keywordsMatch = content.match(/keywords=['"]([^'"]+)['"]/);
        if (keywordsMatch) {
            seoData.keywords = keywordsMatch[1].split(',').map(k => k.trim());

            // Check keyword count
            if (seoData.keywords.length < SEO_RULES.KEYWORDS_MIN) {
                seoData.issues.push(`Too few keywords (${seoData.keywords.length}, min ${SEO_RULES.KEYWORDS_MIN})`);
            }
            if (seoData.keywords.length > SEO_RULES.KEYWORDS_MAX) {
                seoData.issues.push(`Too many keywords (${seoData.keywords.length}, max ${SEO_RULES.KEYWORDS_MAX})`);
            }
        }
    } else {
        seoData.issues.push('No SEO component found');
    }

    return seoData;
}

/**
 * Check for missing alt tags on images
 */
function checkImageAltTags(content, filePath) {
    const fileName = path.basename(filePath);
    const issues = [];

    // Find all img tags
    const imgRegex = /<img[^>]*>/g;
    const images = content.match(imgRegex) || [];

    images.forEach((img, index) => {
        if (!img.includes('alt=')) {
            issues.push({
                file: fileName,
                issue: `Image #${index + 1} missing alt attribute`,
                severity: 'warning'
            });
        } else {
            // Check for empty alt
            const altMatch = img.match(/alt=['""]([^'""]*)['"]/);
            if (altMatch && !altMatch[1].trim()) {
                issues.push({
                    file: fileName,
                    issue: `Image #${index + 1} has empty alt attribute`,
                    severity: 'warning'
                });
            }
        }
    });

    return issues;
}

/**
 * Check heading structure
 */
function checkHeadingStructure(content, filePath) {
    const fileName = path.basename(filePath);
    const issues = [];

    // Count H1 tags
    const h1Count = (content.match(/<h1[^>]*>/g) || []).length;

    if (h1Count === 0) {
        issues.push({
            file: fileName,
            issue: 'No H1 heading found',
            severity: 'error'
        });
    } else if (h1Count > 1) {
        issues.push({
            file: fileName,
            issue: `Multiple H1 headings found (${h1Count})`,
            severity: 'warning'
        });
    }

    // Check heading hierarchy
    const headings = content.match(/<h[1-6][^>]*>/g) || [];
    let previousLevel = 0;

    headings.forEach((heading, index) => {
        const level = parseInt(heading.match(/<h([1-6])/)[1]);

        if (level - previousLevel > 1) {
            issues.push({
                file: fileName,
                issue: `Heading hierarchy skip at position ${index + 1} (H${previousLevel} to H${level})`,
                severity: 'info'
            });
        }

        previousLevel = level;
    });

    return issues;
}

/**
 * Check for duplicate content
 */
function checkDuplicateContent(allFiles) {
    const titles = {};
    const descriptions = {};
    const duplicates = [];

    allFiles.forEach(fileData => {
        if (fileData.title) {
            if (titles[fileData.title]) {
                duplicates.push({
                    issue: `Duplicate title: "${fileData.title}"`,
                    files: [titles[fileData.title], fileData.file],
                    severity: 'error'
                });
            } else {
                titles[fileData.title] = fileData.file;
            }
        }

        if (fileData.description) {
            if (descriptions[fileData.description]) {
                duplicates.push({
                    issue: `Duplicate description`,
                    files: [descriptions[fileData.description], fileData.file],
                    severity: 'warning'
                });
            } else {
                descriptions[fileData.description] = fileData.file;
            }
        }
    });

    return duplicates;
}

/**
 * Check sitemap.xml
 */
function checkSitemap() {
    const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
    const issues = [];

    if (!fs.existsSync(sitemapPath)) {
        issues.push({
            file: 'sitemap.xml',
            issue: 'Sitemap not found',
            severity: 'error'
        });
        return issues;
    }

    const content = fs.readFileSync(sitemapPath, 'utf8');

    // Check if it's valid XML
    if (!content.includes('<?xml') || !content.includes('<urlset')) {
        issues.push({
            file: 'sitemap.xml',
            issue: 'Invalid sitemap format',
            severity: 'error'
        });
    }

    // Count URLs
    const urlCount = (content.match(/<url>/g) || []).length;
    issues.push({
        file: 'sitemap.xml',
        issue: `Contains ${urlCount} URLs`,
        severity: 'info'
    });

    return issues;
}

/**
 * Check robots.txt
 */
function checkRobotsTxt() {
    const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
    const issues = [];

    if (!fs.existsSync(robotsPath)) {
        issues.push({
            file: 'robots.txt',
            issue: 'robots.txt not found',
            severity: 'error'
        });
        return issues;
    }

    const content = fs.readFileSync(robotsPath, 'utf8');

    // Check for sitemap reference
    if (!content.includes('Sitemap:')) {
        issues.push({
            file: 'robots.txt',
            issue: 'No sitemap reference found',
            severity: 'warning'
        });
    }

    // Check for user-agent
    if (!content.includes('User-agent:')) {
        issues.push({
            file: 'robots.txt',
            issue: 'No user-agent directive found',
            severity: 'warning'
        });
    }

    return issues;
}

/**
 * Generate audit report
 */
function generateReport(results) {
    console.log('\n========================================');
    console.log('       SEO AUDIT REPORT');
    console.log('========================================\n');

    // Summary
    const totalIssues = results.errors.length + results.warnings.length;
    console.log(`📊 Summary:`);
    console.log(`   ✅ Passed: ${results.passed.length}`);
    console.log(`   ⚠️  Warnings: ${results.warnings.length}`);
    console.log(`   ❌ Errors: ${results.errors.length}`);
    console.log(`   ℹ️  Info: ${results.info.length}\n`);

    // Errors
    if (results.errors.length > 0) {
        console.log('❌ ERRORS (Must Fix):');
        results.errors.forEach((error, index) => {
            console.log(`   ${index + 1}. [${error.file}] ${error.issue}`);
        });
        console.log('');
    }

    // Warnings
    if (results.warnings.length > 0) {
        console.log('⚠️  WARNINGS (Should Fix):');
        results.warnings.forEach((warning, index) => {
            console.log(`   ${index + 1}. [${warning.file}] ${warning.issue}`);
        });
        console.log('');
    }

    // Info
    if (results.info.length > 0) {
        console.log('ℹ️  INFORMATION:');
        results.info.forEach((info, index) => {
            console.log(`   ${index + 1}. [${info.file}] ${info.issue}`);
        });
        console.log('');
    }

    // Recommendations
    console.log('💡 RECOMMENDATIONS:');
    if (totalIssues === 0) {
        console.log('   Great job! No major SEO issues found.');
    } else {
        console.log('   1. Fix all errors first (they have the biggest impact)');
        console.log('   2. Address warnings to improve SEO performance');
        console.log('   3. Review info items for optimization opportunities');
    }
    console.log('\n========================================\n');

    // Save report to file
    const reportPath = path.join(__dirname, '..', 'seo-audit-report.txt');
    const reportContent = `
SEO AUDIT REPORT
Generated: ${new Date().toISOString()}

SUMMARY:
- Passed: ${results.passed.length}
- Warnings: ${results.warnings.length}
- Errors: ${results.errors.length}
- Info: ${results.info.length}

ERRORS:
${results.errors.map((e, i) => `${i + 1}. [${e.file}] ${e.issue}`).join('\n')}

WARNINGS:
${results.warnings.map((w, i) => `${i + 1}. [${w.file}] ${w.issue}`).join('\n')}

INFO:
${results.info.map((i, idx) => `${idx + 1}. [${i.file}] ${i.issue}`).join('\n')}
  `.trim();

    fs.writeFileSync(reportPath, reportContent);
    console.log(`📄 Full report saved to: ${reportPath}\n`);
}

/**
 * Main audit function
 */
function runAudit() {
    console.log('🔍 Starting SEO Audit...\n');

    // Find all page files
    const pageFiles = findFiles(PAGES_DIR);
    console.log(`Found ${pageFiles.length} page files to audit\n`);

    const allFileData = [];

    // Audit each file
    pageFiles.forEach(filePath => {
        const content = fs.readFileSync(filePath, 'utf8');

        // Extract SEO data
        const seoData = extractSEOData(content, filePath);
        allFileData.push(seoData);

        // Check for issues
        if (seoData.issues.length > 0) {
            seoData.issues.forEach(issue => {
                auditResults.warnings.push({
                    file: seoData.file,
                    issue: issue
                });
            });
        } else if (seoData.hasSEO) {
            auditResults.passed.push({
                file: seoData.file,
                issue: 'SEO properly configured'
            });
        }

        // Check image alt tags
        const altIssues = checkImageAltTags(content, filePath);
        altIssues.forEach(issue => {
            auditResults[issue.severity === 'error' ? 'errors' : 'warnings'].push(issue);
        });

        // Check heading structure
        const headingIssues = checkHeadingStructure(content, filePath);
        headingIssues.forEach(issue => {
            auditResults[issue.severity === 'error' ? 'errors' : issue.severity === 'warning' ? 'warnings' : 'info'].push(issue);
        });
    });

    // Check for duplicate content
    const duplicates = checkDuplicateContent(allFileData);
    duplicates.forEach(dup => {
        auditResults[dup.severity === 'error' ? 'errors' : 'warnings'].push({
            file: dup.files.join(', '),
            issue: dup.issue
        });
    });

    // Check sitemap
    const sitemapIssues = checkSitemap();
    sitemapIssues.forEach(issue => {
        auditResults[issue.severity === 'error' ? 'errors' : issue.severity === 'warning' ? 'warnings' : 'info'].push(issue);
    });

    // Check robots.txt
    const robotsIssues = checkRobotsTxt();
    robotsIssues.forEach(issue => {
        auditResults[issue.severity === 'error' ? 'errors' : 'warnings'].push(issue);
    });

    // Generate report
    generateReport(auditResults);
}

// Run the audit
runAudit();
