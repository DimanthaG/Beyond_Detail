# Google Reviews Setup Guide

This guide will help you integrate actual Google Reviews from your Google Business Profile into the hero section.

## Prerequisites

1. A Google Cloud Platform account
2. A Google Business Profile with reviews
3. Access to your Google Business Place ID

## Setup Steps

### 1. Enable Google Places API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)
3. Navigate to **APIs & Services** > **Library**
4. Search for **"Places API"** (NOT "Places API (New)" - use the standard one for now)
5. Click **Enable**

**Note:** Google Places API requires billing to be enabled, but offers a free tier:
- $200 free credit per month
- Place Details requests: $17 per 1000 requests
- Text Search requests: $32 per 1000 requests

### 2. Get Your API Key

1. In Google Cloud Console, go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **API Key**
3. **Important:** Restrict the API key:
   - Under **API restrictions**, select **Restrict key**
   - Choose **Places API** from the list
   - Click **Save**

### 3. Get Your Place ID

**Option A: Using Place ID Finder**
1. Go to [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for your business name
3. Copy the Place ID (looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

**Option B: Using Google Maps**
1. Open Google Maps
2. Search for your business
3. Click on your business profile
4. Scroll down to find the Place ID in the URL or use browser dev tools

**Option C: Programmatic (Automatic)**
The code will automatically try to find your Place ID using your business location and name, but it's more reliable to set it manually.

### 4. Configure Environment Variables

Add these to your `.env` file in `frontend_beyond_detail/`:

```env
# Google Places API (uses your existing Maps API key if GOOGLE_PLACES_API_KEY is not set)
REACT_APP_GOOGLE_PLACES_API_KEY=your_api_key_here

# Your Google Business Place ID (recommended)
REACT_APP_GOOGLE_PLACE_ID=ChIJN1t_tDeuEmsRUsoyG83frY4

# Or the service will automatically find it using:
# Business Name: "Beyond Detail Toronto"
# Location: lat 43.8195560984298, lng -79.23415881114387
```

### 5. Restart Your Development Server

After adding the environment variables:
```bash
npm start
```

## How It Works

1. **Caching**: Reviews are cached for 30 minutes to reduce API calls
2. **Automatic Fallback**: If Place ID is not set, the service tries to find it automatically
3. **Error Handling**: If reviews can't be loaded, the carousel won't display (graceful degradation)

## Troubleshooting

### Reviews Not Showing

1. **Check Console**: Open browser dev tools and check for errors
2. **Verify API Key**: Make sure `REACT_APP_GOOGLE_PLACES_API_KEY` is set correctly
3. **Verify Place ID**: Make sure `REACT_APP_GOOGLE_PLACE_ID` matches your business
4. **API Restrictions**: Ensure your API key has Places API enabled
5. **Billing**: Check that billing is enabled in Google Cloud Console

### API Quota Exceeded

- The service uses caching to minimize API calls
- If you exceed quota, you'll need to wait or upgrade your plan
- Each page load = 1 API call (cached for 30 min)

### Common Errors

- **"API key not configured"**: Add `REACT_APP_GOOGLE_PLACES_API_KEY` to `.env`
- **"Place ID not found"**: Set `REACT_APP_GOOGLE_PLACE_ID` in `.env`
- **"ZERO_RESULTS"**: Your Place ID is incorrect or business doesn't exist
- **"REQUEST_DENIED"**: API key restrictions or billing issue

## Testing

1. Check browser console for any errors
2. Verify the Place ID matches your business
3. Test with a small number of reviews first
4. Monitor API usage in Google Cloud Console

## Notes

- Reviews are fetched on component mount
- Caching reduces unnecessary API calls
- The carousel shows 3 reviews at a time
- Auto-scrolls every 5 seconds (if more than 3 reviews)
- Fully responsive design

## Support

If you encounter issues:
1. Check the browser console for detailed error messages
2. Verify your Google Cloud Console settings
3. Ensure your Google Business Profile is public and has reviews
4. Check API quota and billing status

