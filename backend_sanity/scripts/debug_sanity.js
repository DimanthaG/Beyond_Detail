
console.log("HELLO FROM INSIDE SANITY EXEC");
try {
    const client = require('part:@sanity/base/client');
    console.log("Client required successfully");
} catch (e) {
    console.error("Failed to require client:", e);
}
