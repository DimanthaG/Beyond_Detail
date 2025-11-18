/**
 * Google Reviews Service
 * Fetches reviews from Google Places API
 * 
 * Setup Instructions:
 * 1. Enable "Places API (New)" in Google Cloud Console
 * 2. Add REACT_APP_GOOGLE_PLACES_API_KEY to your .env file
 * 3. Add REACT_APP_GOOGLE_PLACE_ID to your .env file (get it from your Google Business profile)
 */

// API key removed from frontend - now fetched from secure backend proxy
// Fallback to known Place ID if env var is missing in runtime
const PLACE_ID = process.env.REACT_APP_GOOGLE_PLACE_ID || 'ChIJFeApoP4d1YkRv0VpV6_h8sY';

/**
 * Find place by location (lat/lng) and business name
 * Useful if you don't have the Place ID
 */
export async function findPlaceByLocation(lat, lng, businessName) {
  // This function should use a backend proxy if needed
  // For now, returning null as direct API calls expose keys
  console.warn('findPlaceByLocation: Use backend proxy for place search to keep API keys secure');
  return null;
}

/**
 * Get place details including reviews using Place Details API
 */
export async function getGoogleReviews(placeId = null) {
  let finalPlaceId = placeId || PLACE_ID;

  // If no Place ID, try to find it using business location
  if (!finalPlaceId) {
    // Using the business location from Map.jsx
    const businessLat = 43.8195560984298;
    const businessLng = -79.23415881114387;
    const businessName = 'Beyond Detail Toronto';
    
    finalPlaceId = await findPlaceByLocation(businessLat, businessLng, businessName);
    
    if (!finalPlaceId) {
      console.error('Could not find Google Place ID. Please set REACT_APP_GOOGLE_PLACE_ID in your .env file');
      return { reviews: [], rating: 0, totalReviews: 0, error: 'Place ID not found' };
    }
  }

  // Removed direct API key usage - all requests now go through secure backend proxy

  try {
    // Prefer serverless proxy endpoint to keep API key secret and avoid CORS
    const apiUrl = `/api/get-google-reviews?placeId=${encodeURIComponent(finalPlaceId)}`;
    const response = await fetch(apiUrl);
    
    // Check if response is HTML (happens when API endpoint doesn't exist, e.g., using npm start instead of vercel dev)
    const contentType = response.headers.get('content-type');
    const isHtmlResponse = !contentType || !contentType.includes('application/json');
    
    let data;
    try {
      if (isHtmlResponse) {
        // Check if it's HTML by reading as text first
        const text = await response.text();
        if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<!doctype')) {
          console.error('API endpoint not available. Received HTML instead of JSON.');
          console.warn('To fix: Use "npm run dev" (or "vercel dev") instead of "npm start" to enable API endpoints in development.');
          return { 
            reviews: [], 
            rating: 0, 
            totalReviews: 0, 
            error: 'API endpoint not available. Use "npm run dev" instead of "npm start" for local development.' 
          };
        }
        // If not HTML, try to parse as JSON
        data = JSON.parse(text);
      } else {
        data = await response.json();
      }
    } catch (jsonErr) {
      // Likely received HTML (e.g., CRA dev server). Return error instead of exposing API key.
      console.error('Proxy did not return JSON.', jsonErr);
      console.warn('To fix: Use "npm run dev" (or "vercel dev") instead of "npm start" to enable API endpoints in development.');
      return { 
        reviews: [], 
        rating: 0, 
        totalReviews: 0, 
        error: 'API endpoint not available. Use "npm run dev" instead of "npm start" for local development.' 
      };
    }

    console.log('Google Reviews - API Data (via proxy):', data);

    if (!data.error && (data.reviews || data.rating || data.totalReviews !== undefined)) {
      const result = {
        reviews: data.reviews || [],
        rating: data.rating || 0,
        user_ratings_total: data.totalReviews || 0,
        name: data.businessName,
        formatted_address: data.address,
      };
      
      // Format reviews to match our component structure
      const formattedReviews = (result.reviews).map((review) => ({
        _id: review.time || Date.now() + Math.random(), // Unique ID
        name: review.author_name,
        message: review.text,
        rating: review.rating,
        time: review.time,
        profilePhoto: review.profile_photo_url || null,
        relativeTime: review.relative_time_description,
      }));

      return {
        reviews: formattedReviews,
        rating: result.rating,
        totalReviews: result.user_ratings_total,
        businessName: result.name,
        address: result.formatted_address,
      };
    } else {
      console.error('Google Reviews proxy error:', data.error);
      return { reviews: [], rating: 0, totalReviews: 0, error: data.error || 'Failed to fetch reviews' };
    }
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return { reviews: [], rating: 0, totalReviews: 0, error: error.message || 'Failed to fetch reviews' };
  }
}

/**
 * Get reviews with caching to avoid hitting API limits
 */
let cachedReviews = null;
let cacheTimestamp = null;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export async function getCachedGoogleReviews(placeId = null) {
  const now = Date.now();
  
  // Return cached data if still valid
  if (cachedReviews && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
    return cachedReviews;
  }

  // Fetch new data
  const reviewsData = await getGoogleReviews(placeId);
  
  // Cache the results
  cachedReviews = reviewsData;
  cacheTimestamp = now;

  return reviewsData;
}




