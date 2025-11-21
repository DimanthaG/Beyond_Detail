# Google API Key Security Setup Guide

## Overview
This guide will help you properly configure your Google API keys with the correct restrictions to ensure security and prevent unauthorized usage.

## Your API Keys

You have two API keys that need different security configurations:

1. **Maps/Places API Key (Client-side)**: `AIzaSyA1bzyjkG3zLLunV5XqDyFmiJogp9ihuMw`
   - Used in: `REACT_APP_MAPS_KEY` and `REACT_APP_GOOGLE_PLACES_API_KEY`
   - Exposed in browser (client-side)
   - **Needs HTTP referrer restrictions**

2. **Server API Key**: `AIzaSyC8ZC_1JTSj0CYdgi4my3fON7cAdRi9RN8`
   - Used in: `GOOGLE_PLACES_SERVER_KEY` (backend only)
   - Never exposed to browser
   - **Can use IP restrictions or no restrictions**

---

## Step-by-Step Configuration

### 1. Access Google Cloud Console

1. Go to: https://console.cloud.google.com/
2. Select your project (or create one if needed)
3. Navigate to: **APIs & Services** → **Credentials**

### 2. Configure Client-Side API Key (Maps & Places)

**API Key**: `AIzaSyA1bzyjkG3zLLunV5XqDyFmiJogp9ihuMw`

#### Application Restrictions:
- **Type**: HTTP referrers (websites)
- **Website restrictions**:
  ```
  https://www.beyonddetail.ca/*
  https://beyonddetail.ca/*
  http://localhost:3000/*
  http://localhost:5173/*
  https://*.vercel.app/*
  ```

#### API Restrictions:
- **Restrict key**: Yes
- **Select APIs**:
  - ✅ Maps JavaScript API
  - ✅ Places API (New)
  - ✅ Places API
  - ✅ Geocoding API

#### Steps:
1. Click on the API key name
2. Under "Application restrictions":
   - Select **HTTP referrers (web sites)**
   - Click **+ ADD AN ITEM**
   - Add each referrer above (one per line)
3. Under "API restrictions":
   - Select **Restrict key**
   - Check the APIs listed above
4. Click **SAVE**

---

### 3. Configure Server-Side API Key (Backend Only)

**API Key**: `AIzaSyC8ZC_1JTSj0CYdgi4my3fON7cAdRi9RN8`

#### Application Restrictions:
- **Type**: None (or IP addresses if you know your Vercel IPs)
- **Reason**: This key is only used in serverless functions, never exposed to browser

#### API Restrictions:
- **Restrict key**: Yes
- **Select APIs**:
  - ✅ Places API (New)
  - ✅ Places API

#### Steps:
1. Click on the API key name
2. Under "Application restrictions":
   - Select **None** (serverless functions don't have fixed IPs)
   - OR if you want extra security, select **IP addresses** and add Vercel's IP ranges
3. Under "API restrictions":
   - Select **Restrict key**
   - Check only: Places API (New) and Places API
4. Click **SAVE**

---

### 4. Enable Required APIs

Make sure these APIs are enabled in your project:

1. Go to: **APIs & Services** → **Library**
2. Search and enable:
   - ✅ **Places API (New)** - For reviews
   - ✅ **Places API** - Legacy support
   - ✅ **Maps JavaScript API** - For map display
   - ✅ **Geocoding API** - For address lookups

---

### 5. Set Up Billing (Required)

⚠️ **Important**: Google requires a billing account even for free tier usage.

1. Go to: **Billing** in Google Cloud Console
2. Link a billing account (you get $200 free credit monthly)
3. Set up budget alerts:
   - Recommended: $50/month alert
   - This prevents unexpected charges

**Free Tier Limits** (more than enough for most sites):
- Maps JavaScript API: 28,000 loads/month free
- Places API: 5,000 requests/month free
- Geocoding API: 40,000 requests/month free

---

## Verification Checklist

After configuration, verify:

- [ ] Client-side key has HTTP referrer restrictions
- [ ] Client-side key is restricted to Maps & Places APIs only
- [ ] Server-side key has no application restrictions (or IP restrictions)
- [ ] Server-side key is restricted to Places API only
- [ ] All required APIs are enabled
- [ ] Billing is set up with budget alerts
- [ ] Keys are added to Vercel environment variables

---

## Environment Variables Summary

### Vercel Environment Variables (Production):

```bash
# Backend (Server-side only - never exposed)
GOOGLE_PLACES_SERVER_KEY=AIzaSyC8ZC_1JTSj0CYdgi4my3fON7cAdRi9RN8
GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY

# Frontend (Client-side - exposed in browser)
REACT_APP_MAPS_KEY=AIzaSyA1bzyjkG3zLLunV5XqDyFmiJogp9ihuMw
REACT_APP_GOOGLE_PLACES_API_KEY=AIzaSyC8ZC_1JTSj0CYdgi4my3fON7cAdRi9RN8
REACT_APP_GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY

# Sanity CMS
REACT_APP_SANITY_PROJECT_ID=trp6l9ar
REACT_APP_SANITY_TOKEN=skuntCty4371fJlKOehv0YoNV2h8LMisAM4zVnE0DO8bp73erLxS5mTI5EnGDCHI7FWShCPFCEcjURGnKw4eeYYs2O0SEhM8hshOCqJ8cXtOLnulZ83s6HcW4WO7hg2hI2S0zAVJYujwrMF7Q1ysm6YkAQEDdf6AhZj9SkT2cr0RcJ8MDZNP
```

---

## Testing After Setup

### Test Google Reviews:
1. Deploy to Vercel with environment variables
2. Visit: https://www.beyonddetail.ca
3. Check browser console for errors
4. Reviews should load without "Server API key not configured" error

### Test Google Maps:
1. Visit: https://www.beyonddetail.ca/contact
2. Map should display correctly
3. No API key errors in console

---

## Troubleshooting

### "This API project is not authorized to use this API"
- **Solution**: Enable the API in Google Cloud Console → APIs & Services → Library

### "API keys with referer restrictions cannot be used with this API"
- **Solution**: You're using the client-side key for server-side calls. Use `GOOGLE_PLACES_SERVER_KEY` instead.

### "The provided API key is invalid"
- **Solution**: Check for typos, ensure key is enabled, and billing is set up

### Reviews not loading
- **Solution**: Check Vercel environment variables are set correctly and deployment was triggered after adding them

---

## Security Best Practices

✅ **DO**:
- Use different keys for client-side and server-side
- Set up HTTP referrer restrictions for client-side keys
- Restrict keys to only the APIs they need
- Set up billing alerts
- Monitor usage in Google Cloud Console

❌ **DON'T**:
- Use the same key for both client and server
- Leave keys unrestricted
- Commit API keys to Git (use .env files)
- Share keys publicly

---

## Next Steps

1. ✅ Configure API keys in Google Cloud Console (follow steps above)
2. ✅ Add environment variables to Vercel
3. ✅ Deploy your site
4. ✅ Test Google Reviews and Maps functionality
5. ✅ Monitor usage in Google Cloud Console

---

**Last Updated**: November 21, 2025
