/**
 * Google Reviews Service
 * Fetches reviews from Google Places API
 * 
 * Setup Instructions:
 * 1. Enable "Places API (New)" in Google Cloud Console
 * 2. Add REACT_APP_GOOGLE_PLACES_API_KEY to your .env file
 * 3. Add REACT_APP_GOOGLE_PLACE_ID to your .env file (get it from your Google Business profile)
 */

const GOOGLE_PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY || process.env.REACT_APP_MAPS_KEY;
// Fallback to known Place ID if env var is missing in runtime
const PLACE_ID = process.env.REACT_APP_GOOGLE_PLACE_ID || 'ChIJFeApoP4d1YkRv0VpV6_h8sY';

/**
 * Find place by location (lat/lng) and business name
 * Useful if you don't have the Place ID
 */
export async function findPlaceByLocation(lat, lng, businessName) {
  if (!GOOGLE_PLACES_API_KEY) {
    console.error('Google Places API key not found');
    return null;
  }

  try {
    // Use Text Search to find the place
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(businessName)}&location=${lat},${lng}&radius=1000&key=${GOOGLE_PLACES_API_KEY}`;
    
    const response = await fetch(searchUrl);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      return data.results[0].place_id;
    }
    
    return null;
  } catch (error) {
    console.error('Error finding place:', error);
    return null;
  }
}

/**
 * Get place details including reviews using Place Details API
 */
export async function getGoogleReviews(placeId = null) {
  if (!GOOGLE_PLACES_API_KEY) {
    console.error('Google Places API key not found. Please set REACT_APP_GOOGLE_PLACES_API_KEY in your .env file');
    return { reviews: [], rating: 0, totalReviews: 0, error: 'API key not configured' };
  }

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

  // Helper: direct fetch via Google + CORS proxy (dev fallback)
  const fetchViaCorsProxy = async () => {
    const fields = 'reviews,rating,user_ratings_total,name,formatted_address';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${finalPlaceId}&fields=${fields}&key=${GOOGLE_PLACES_API_KEY}`;
    const proxied = `https://corsproxy.io/?${encodeURIComponent(url)}`;
    const r = await fetch(proxied);
    const d = await r.json();
    if (d.status === 'OK' && d.result) {
      const result = d.result;
      const formattedReviews = (result.reviews || []).map((review) => ({
        _id: review.time || Date.now() + Math.random(),
        name: review.author_name,
        message: review.text,
        rating: review.rating,
        time: review.time,
        profilePhoto: review.profile_photo_url || null,
        relativeTime: review.relative_time_description,
      }));
      return {
        reviews: formattedReviews,
        rating: result.rating || 0,
        totalReviews: result.user_ratings_total || 0,
        businessName: result.name,
        address: result.formatted_address,
      };
    }
    return { reviews: [], rating: 0, totalReviews: 0, error: d.error_message || d.status || 'Failed to fetch' };
  };

  try {
    // Prefer serverless proxy endpoint to keep API key secret and avoid CORS
    const apiUrl = `/api/get-google-reviews?placeId=${encodeURIComponent(finalPlaceId)}`;
    const response = await fetch(apiUrl);
    let data;
    try {
      data = await response.json();
    } catch (jsonErr) {
      // Likely received HTML (e.g., CRA dev server). Fallback to direct fetch.
      console.warn('Proxy did not return JSON; falling back to CORS proxy.', jsonErr);
      return await fetchViaCorsProxy();
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
      // Fallback to direct fetch if proxy reports error
      return await fetchViaCorsProxy();
    }
  } catch (error) {
    console.error('Error fetching Google Reviews (proxy). Falling back to CORS proxy.', error);
    return await fetchViaCorsProxy();
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




