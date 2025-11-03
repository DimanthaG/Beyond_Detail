# Vercel Google Reviews Setup - Quick Fix

## Current Issue
The error "API keys with referer restrictions cannot be used with this API" means your serverless function is trying to use a browser key. You need a separate **server key** without referrer restrictions.

## Step-by-Step Fix

### 1. Create/Configure Server API Key in Google Console

1. Go to **Google Cloud Console** → **APIs & Services** → **Credentials**
2. Either:
   - **Use your existing "Server places API Key"** (if it exists), OR
   - **Click "Create Credentials"** → **API Key**
3. **Edit the key** and configure:
   - **Name**: "Server places API Key" (or similar)
   - **Application restrictions**: Select **"None"** (⚠️ This is critical - no HTTP referrers!)
   - **API restrictions**: Select **"Restrict key"** and enable:
     - ✅ **"Places API (New)"**
     - ✅ **"Places API"** (if available)
4. **Save** the key
5. **Copy the API key** - you'll need it for Vercel

### 2. Add Environment Variables to Vercel

1. Go to **Vercel Dashboard**: https://vercel.com/dashboard
2. Click on your project: **"Beyond_Detail"** (or your project name)
3. Go to **Settings** → **Environment Variables**
4. Click **"Add New"** and add these variables:

   **Variable 1:**
   - **Name**: `GOOGLE_PLACES_SERVER_KEY`
   - **Value**: (paste your server API key from step 1)
   - **Environment**: Select **Production**, **Preview**, and **Development**
   - Click **Save**

   **Variable 2:**
   - **Name**: `GOOGLE_PLACE_ID`
   - **Value**: `ChIJFeApoP4d1YkRv0VpV6_h8sY`
   - **Environment**: Select **Production**, **Preview**, and **Development**
   - Click **Save**

### 3. Redeploy on Vercel

1. Go to **Deployments** tab
2. Click the **"..."** menu on your latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete (usually 1-2 minutes)

### 4. Verify It Works

1. Visit your site: `https://beyond-detail.vercel.app`
2. Check the browser console (F12 → Console tab)
3. Look for logs starting with "Google Reviews -"
4. You should see: `Google Reviews - API Data (via proxy):` with review data
5. The reviews section should load without errors

## Troubleshooting

**If reviews still don't show:**
- Check Vercel Function Logs:
  1. Vercel Dashboard → Your Project → **Deployments**
  2. Click on the latest deployment
  3. Click **"Functions"** tab
  4. Click on **`/api/get-google-reviews`**
  5. Check **"Logs"** for errors

**Common errors:**
- `"Server API key not configured"` → Environment variable not set in Vercel
- `"This API key is not authorized"` → Server key doesn't have "Places API (New)" enabled
- `"API keys with referer restrictions"` → Using browser key instead of server key (check Application restrictions = "None")

## Important Notes

- ✅ **Server key** (`GOOGLE_PLACES_SERVER_KEY`) = **Application restrictions: None**
- ✅ **Browser key** (`REACT_APP_GOOGLE_PLACES_API_KEY`) = Can have HTTP referrer restrictions (for Maps JS API)
- ⚠️ **Never use the browser key** in serverless functions
- ⚠️ Settings may take 5 minutes to propagate after saving in Google Console

## Environment Variables Summary

**In Vercel (Settings → Environment Variables):**
- `GOOGLE_PLACES_SERVER_KEY` = Your server API key (no referrer restrictions)
- `GOOGLE_PLACE_ID` = `ChIJFeApoP4d1YkRv0VpV6_h8sY`

**In local `.env` (for development):**
- `REACT_APP_GOOGLE_PLACES_API_KEY` = Browser key (can have referrer restrictions)
- `REACT_APP_GOOGLE_PLACE_ID` = `ChIJFeApoP4d1YkRv0VpV6_h8sY`
- `GOOGLE_PLACES_SERVER_KEY` = Server key (for `vercel dev` testing)
- `GOOGLE_PLACE_ID` = `ChIJFeApoP4d1YkRv0VpV6_h8sY` (for `vercel dev` testing)

