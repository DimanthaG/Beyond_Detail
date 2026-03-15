// Google Reviews Service - Next.js version
// Fetches reviews from the API route

let cachedData = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getCachedGoogleReviews() {
  const now = Date.now();

  if (cachedData && now - cacheTimestamp < CACHE_DURATION) {
    return cachedData;
  }

  try {
    const res = await fetch('/api/google-reviews');
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    cachedData = data;
    cacheTimestamp = now;
    return data;
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return {
      error: error.message,
      rating: 0,
      totalReviews: 0,
      reviews: [],
    };
  }
}
