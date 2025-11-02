# Google Maps Setup Guide

## Why Maps Isn't Showing

The error "This page didn't load Google Maps correctly" typically means:
1. **Maps JavaScript API** is not enabled in Google Cloud Console
2. The API key doesn't have the correct permissions
3. The API key is invalid or restricted incorrectly

## Quick Fix Steps

### Step 1: Enable Maps JavaScript API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to **APIs & Services** > **Library**
4. Search for **"Maps JavaScript API"**
5. Click on it and click **"ENABLE"**

### Step 2: Enable Billing (if not already done)

- Maps JavaScript API requires billing to be enabled
- But you get $200 free credit per month

### Step 3: Verify API Key Permissions

1. Go to **APIs & Services** > **Credentials**
2. Find your API key: `AIzaSyA1bzyjkG3zLLunV5XqDyFmiJogp9ihuMw`
3. Click to edit it
4. Under **"API restrictions"**, make sure these are enabled:
   - ✅ **Maps JavaScript API** (required for map display)
   - ✅ **Places API** (for reviews)
5. Click **"SAVE"**

### Step 4: Restart Your Development Server

After enabling the API:
```bash
# Stop your server (Ctrl+C)
npm start
```

## Alternative: Use Your Places API Key

Your Map component now falls back to `REACT_APP_GOOGLE_PLACES_API_KEY` if `REACT_APP_MAPS_KEY` is not available.

You can update your `.env` to use the same key:
```env
REACT_APP_MAPS_KEY=AIzaSyCvznwmpTXH1lv5zLE3eMiQ8V0uG28VlA4
```

But make sure this key has **BOTH** APIs enabled:
- Maps JavaScript API (for map display)
- Places API (for reviews)

## Troubleshooting

### Map Still Not Showing?

1. **Check Browser Console (F12):**
   - Look for specific error messages
   - Common errors:
     - "This API project is not authorized to use this API" → Enable Maps JavaScript API
     - "RefererNotAllowedMapError" → Check API key restrictions
     - "ApiNotActivatedMapError" → Enable Maps JavaScript API

2. **Verify API Key in .env:**
   - Make sure `REACT_APP_MAPS_KEY` is set
   - No extra spaces or quotes
   - Restart server after changing

3. **Test API Key:**
   - Go to Google Cloud Console > APIs & Services > Credentials
   - Check that your key shows both APIs enabled

## Required APIs for Full Functionality

For your website to work completely, enable these APIs:
- ✅ **Maps JavaScript API** - For displaying the map on homepage
- ✅ **Places API** - For displaying Google Reviews

Both APIs can use the same API key or different ones.

## Cost

- Maps JavaScript API: Free for first 28,000 loads per month
- Places API: $200 free credit monthly
- Total: Usually free for small to medium websites

