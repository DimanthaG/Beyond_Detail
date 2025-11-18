# Google Reviews Production Debugging Guide

## Issue: Google Reviews Not Visible on Live Website

### Quick Checks

1. **Check Browser Console**
   - Open your live website
   - Press F12 → Console tab
   - Look for errors starting with `[Google Reviews]`
   - These will tell you exactly what's wrong

2. **Check Vercel Environment Variables**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Verify these are set for **Production**:
     - `GOOGLE_PLACES_SERVER_KEY` (your server API key)
     - `GOOGLE_PLACE_ID` (should be `ChIJFeApoP4d1YkRv0VpV6_h8sY`)
   - If missing, add them and **redeploy**

3. **Check Vercel Function Logs**
   - Vercel Dashboard → Your Project → Deployments
   - Click on latest deployment → **Functions** tab
   - Click on `/api/get-google-reviews`
   - Check **Logs** for errors

### Common Issues & Fixes

#### Error: "Server API key not configured"
**Fix:** Add `GOOGLE_PLACES_SERVER_KEY` to Vercel environment variables

#### Error: "Place ID not provided"
**Fix:** Add `GOOGLE_PLACE_ID` to Vercel environment variables (value: `ChIJFeApoP4d1YkRv0VpV6_h8sY`)

#### Error: "API keys with referer restrictions cannot be used"
**Fix:** Your server key has HTTP referrer restrictions. In Google Cloud Console:
1. Go to APIs & Services → Credentials
2. Edit your server key
3. Set **Application restrictions** to **"None"**
4. Save and wait 5 minutes
5. Redeploy on Vercel

#### Error: "REQUEST_DENIED" or "PERMISSION_DENIED"
**Fix:** Your API key doesn't have Places API enabled:
1. Go to Google Cloud Console → APIs & Services → Library
2. Search for "Places API (New)"
3. Click **Enable**
4. Wait 5 minutes
5. Redeploy on Vercel

#### No errors but reviews don't show
**Check:**
1. Browser console for `[Google Reviews]` logs
2. Network tab → Look for `/api/get-google-reviews` request
   - If 404: API route not deployed
   - If 500: Check function logs
   - If 200 but empty: Check response data

### Testing the API Endpoint Directly

Visit this URL on your live site:
```
https://your-domain.com/api/get-google-reviews?placeId=ChIJFeApoP4d1YkRv0VpV6_h8sY
```

**Expected Response:**
```json
{
  "reviews": [...],
  "rating": 4.5,
  "totalReviews": 100,
  "businessName": "...",
  "address": "..."
}
```

**If you see an error:**
- Check the error message
- Verify environment variables are set
- Check Vercel function logs

### After Making Changes

1. **Redeploy on Vercel**
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Click "Redeploy"
   - Wait for deployment to complete

2. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or open in incognito/private window

3. **Check Again**
   - Open browser console
   - Look for `[Google Reviews]` logs
   - Verify reviews appear

### Environment Variables Checklist

**In Vercel (Settings → Environment Variables):**
- [ ] `GOOGLE_PLACES_SERVER_KEY` - Server API key (Application restrictions: None)
- [ ] `GOOGLE_PLACE_ID` - Place ID (`ChIJFeApoP4d1YkRv0VpV6_h8sY`)
- [ ] Both set for **Production**, **Preview**, and **Development** environments

**In Google Cloud Console:**
- [ ] Places API (New) is **Enabled**
- [ ] Server key has **Application restrictions: None**
- [ ] Server key has **API restrictions: Places API (New)** enabled

### Still Not Working?

1. Check Vercel function logs for detailed error messages
2. Verify API key is correct (copy/paste from Google Console)
3. Test API key directly with curl:
   ```bash
   curl "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJFeApoP4d1YkRv0VpV6_h8sY&fields=reviews,rating,user_ratings_total&key=YOUR_SERVER_KEY"
   ```
4. Contact support with:
   - Browser console errors
   - Vercel function logs
   - API key status from Google Console

