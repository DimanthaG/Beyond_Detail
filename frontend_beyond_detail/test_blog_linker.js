const SERVICE_ROUTES = {
    'window tint': '/tint',
    'window tinting': '/tint',
    'car detailing': '/auto-detail',
    'toronto': '/auto-detail'
};

const LOCATION_ROUTES = {
    'toronto': '/auto-detail',
};

const SERVICE_LOCATION_ROUTES = {
    'window tint toronto': '/tint',
};

const createPatterns = () => {
    // Simplified pattern creation for test
    return {
        serviceLocationPattern: new RegExp('\\b(window tint toronto)\\b', 'gi'),
        servicePattern: new RegExp('\\b(window tint|car detailing)\\b', 'gi'),
        locationPattern: new RegExp('\\b(toronto)\\b', 'gi')
    };
};

const PATTERNS = createPatterns();

function MockBlogLinker(text, maxLinks = 10) {
    if (!text) return null;

    const parts = [];
    const linkCount = { count: 0 };
    let lastIndex = 0;
    const processedIndices = []; // Array of [start, end]

    const addLink = (match, route, linkText) => {
        // Check overlapping first to avoid processing same text twice
        const startIdx = match.index;
        const endIdx = match.index + match[0].length;

        let overlaps = false;
        for (const [start, end] of processedIndices) {
            if (!(endIdx <= start || startIdx >= end)) {
                overlaps = true;
                break;
            }
        }

        if (overlaps) {
            return;
        }

        // Valid non-overlapping match
        if (linkCount.count >= maxLinks) {
            // Limit reached: treat as normal text
            // We don't increment linkCount, we just append text up to this point + the match text
            if (startIdx > lastIndex) {
                parts.push(text.substring(lastIndex, startIdx));
            }
            parts.push(match[0]);
            lastIndex = endIdx;

            processedIndices.push([startIdx, endIdx]);
            return;
        }

        // Add link
        processedIndices.push([startIdx, endIdx]);
        linkCount.count++;

        if (startIdx > lastIndex) {
            parts.push(text.substring(lastIndex, startIdx));
        }

        parts.push(`<Link to="${route}">${linkText}</Link>`);

        lastIndex = endIdx;
    };

    // Simplified matching logic from the file
    let match;
    while ((match = PATTERNS.serviceLocationPattern.exec(text)) !== null) {
        //... logic to call addLink
    }

    // Test with just one pattern type loop for simplicity
    PATTERNS.servicePattern.lastIndex = 0;
    while ((match = PATTERNS.servicePattern.exec(text)) !== null) {
        addLink(match, '/route', match[0]);
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.join('');
}

// Test case 1: Standard text
const text1 = "In a busy city like Toronto, time is your most valuable asset.";
console.log("Test 1:", MockBlogLinker(text1));

// Test case 2: Text with keywords
const text2 = "We specialize in car detailing for everyone.";
console.log("Test 2:", MockBlogLinker(text2));

// Test case 3: Text with multiple matches exceeding limit
const text3 = "car detailing and car detailing and car detailing";
// If maxLinks is 2, the 3rd one should just be text, NOT missing.
// Expected output: <Link...>car detailing</Link> and <Link...>car detailing</Link> and car detailing
console.log("Test 3:", MockBlogLinker(text3, 2));
