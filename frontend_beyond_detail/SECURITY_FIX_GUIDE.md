# Security Fix Guide - API Keys & Tokens

## ✅ Security Issues Fixed

### 1. **Sanity Token Removed from Frontend**
- **Issue**: Sanity token was exposed in frontend bundle
- **Fix**: Removed token from `client.js` - token should only be used server-side for write operations
- **Status**: ✅ Fixed

### 2. **Google Maps API Key Secured**
- **Issue**: Google Maps API key was exposed in frontend code
- **Fix**: Created backend proxy `/api/get-maps-key.js` to serve API key securely
- **Status**: ✅ Fixed

### 3. **Google Places API Key Secured**
- **Issue**: Google Places API key was exposed in `googleReviewsService.js`
- **Fix**: Removed direct API key usage, all requests now go through `/api/get-google-reviews.js`
- **Status**: ✅ Fixed

---

## 🔧 Required Setup Steps

### Step 1: Set Up Server-Side Environment Variables

Add these environment variables to your hosting platform (Vercel, Netlify, etc.):

```bash
# Google Maps API Key (for Maps JavaScript API)
GOOGLE_MAPS_SERVER_KEY=your_maps_api_key_here

# Google Places API Key (for Places API)
GOOGLE_PLACES_SERVER_KEY=your_places_api_key_here

# Google Place ID (your business location)
GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY

# Sanity (if you need write operations, create a separate server-side client)
SANITY_TOKEN=your_sanity_token_here  # Only for server-side write operations
```

**⚠️ IMPORTANT**: These should NEVER be in your frontend `.env` file or committed to Git!

---

### Step 2: Restrict Google Maps API in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** > **Credentials**
3. Find your Google Maps API key
4. Click **Edit** (pencil icon)
5. Under **Application restrictions**, select **HTTP referrers (web sites)**
6. Add these restrictions:
   ```
   https://beyonddetail.ca/*
   https://*.beyonddetail.ca/*
   ```
7. Under **API restrictions**, restrict to:
   - ✅ Maps JavaScript API
   - ✅ Places API (New)
8. Click **Save**

---

### Step 3: Regenerate Sanity Token (If Needed)

If your Sanity token was exposed, regenerate it:

1. Go to [Sanity.io](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** > **Tokens**
4. Click **Add API token**
5. Name it: "Server-side write token"
6. Set permissions: **Editor** (or appropriate level)
7. Copy the token and add it to your server environment variables
8. **Delete the old token** if it was exposed

---

### Step 4: Remove Old Environment Variables from Frontend

Remove these from your frontend `.env` file (if they exist):
- ❌ `REACT_APP_MAPS_KEY`
- ❌ `REACT_APP_GOOGLE_PLACES_API_KEY`
- ❌ `REACT_APP_SANITY_TOKEN`

**Keep these** (they're safe for frontend):
- ✅ `REACT_APP_SANITY_PROJECT_ID` (public project ID)
- ✅ `REACT_APP_GOOGLE_PLACE_ID` (public place ID)

---

## 📁 Files Changed

### Created:
- ✅ `api/get-maps-key.js` - Secure backend proxy for Maps API key

### Modified:
- ✅ `src/client.js` - Removed Sanity token
- ✅ `src/components/Map/Map.jsx` - Now fetches API key from backend
- ✅ `src/services/googleReviewsService.js` - Removed direct API key usage

---

## 🧪 Testing

After deploying:

1. **Test Maps**: Visit a page with the map component - it should load correctly
2. **Test Reviews**: Check if Google Reviews carousel loads
3. **Check Browser Console**: No API key errors should appear
4. **Verify Security**: 
   - View page source - no API keys should be visible
   - Check Network tab - API keys should only appear in server responses, not in client code

---

## 🚨 If Something Breaks

### Maps Not Loading:
- Check that `GOOGLE_MAPS_SERVER_KEY` is set in server environment variables
- Verify API restrictions in Google Cloud Console allow your domain
- Check browser console for specific error messages

### Reviews Not Loading:
- Check that `GOOGLE_PLACES_SERVER_KEY` is set in server environment variables
- Verify Places API is enabled in Google Cloud Console
- Check that `GOOGLE_PLACE_ID` is correct

### Sanity Issues:
- If you only need read operations, no token is needed (current setup)
- If you need write operations, create a separate server-side API endpoint

---

## 📚 Additional Resources

- [Google Maps API Key Best Practices](https://developers.google.com/maps/api-security-best-practices)
- [Sanity Client Documentation](https://www.sanity.io/docs/js-client)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## ✅ Security Checklist

- [x] Sanity token removed from frontend
- [x] Google Maps API key moved to backend proxy
- [x] Google Places API key moved to backend proxy
- [ ] Google Maps API restricted to your domains in Google Cloud Console
- [ ] Server environment variables configured
- [ ] Old frontend environment variables removed
- [ ] Sanity token regenerated (if it was exposed)
- [ ] Tested maps functionality
- [ ] Tested reviews functionality

---

**Last Updated**: January 2025


