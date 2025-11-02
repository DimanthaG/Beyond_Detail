# Google API Setup Guide for Beyond Detail Website

This guide will help you set up the Google Places API to display live Google Reviews on your website.

## Step-by-Step Setup

### Step 1: Create or Access Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click **"Select a project"** at the top
4. Click **"NEW PROJECT"** (or select existing project)
5. Enter project name: "Beyond Detail Website" (or any name)
6. Click **"CREATE"**

### Step 2: Enable Places API

1. In Google Cloud Console, go to **"APIs & Services"** > **"Library"** (left sidebar)
2. Search for **"Places API"** (use the standard "Places API", not "Places API (New)")
3. Click on **"Places API"**
4. Click the blue **"ENABLE"** button

**Note:** Google requires billing to be enabled, but offers a free tier:
- $200 free credit per month
- This is usually enough for most websites (thousands of requests)

### Step 3: Enable Billing (Required)

1. In Google Cloud Console, go to **"Billing"** (left sidebar)
2. Click **"Link a billing account"**
3. Follow the prompts to add a payment method
4. Don't worry - you get $200 free credit monthly, and reviews are cached for 30 minutes

### Step 4: Create API Key

1. Go to **"APIs & Services"** > **"Credentials"** (left sidebar)
2. Click **"+ CREATE CREDENTIALS"** at the top
3. Select **"API key"**
4. **Important:** Click **"RESTRICT KEY"** to secure it:
   - Under **"API restrictions"**, select **"Restrict key"**
   - Check **"Places API"** (uncheck others)
   - Under **"Application restrictions"**, you can optionally add:
     - **HTTP referrers** (for production): Add your website domain (e.g., `https://yourwebsite.com/*`)
   - Click **"SAVE"**
5. Copy the API key (it will look like: `AIzaSyD...`)

### Step 5: Get Your Google Place ID

**Option A: Using Place ID Finder (Easiest)**
1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for your business: **"Beyond Detail Toronto"**
3. Copy the Place ID (looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

**Option B: From Google Maps**
1. Open [Google Maps](https://www.google.com/maps)
2. Search for your business
3. Click on your business listing
4. In the address bar, look for `&cid=` or check the business URL
5. Or use browser DevTools: Right-click > Inspect > Look for Place ID in network requests

**Option C: Automatic (No Place ID needed)**
- The code will automatically try to find your Place ID using your business location
- But it's more reliable to set it manually

### Step 6: Configure Environment Variables

1. Navigate to your project folder:
   ```bash
   cd frontend_beyond_detail
   ```

2. Create a `.env` file in the `frontend_beyond_detail` folder:
   - On Windows: Create a new file named `.env` (make sure it starts with a dot)
   - You can copy `.env.example` if it exists

3. Add these lines to your `.env` file:
   ```env
   REACT_APP_GOOGLE_PLACES_API_KEY=your_api_key_from_step_4
   REACT_APP_GOOGLE_PLACE_ID=your_place_id_from_step_5
   ```

   **Example:**
   ```env
   REACT_APP_GOOGLE_PLACES_API_KEY=AIzaSyD1234567890abcdefghijklmnopqrstuvwxyz
   REACT_APP_GOOGLE_PLACE_ID=ChIJN1t_tDeuEmsRUsoyG83frY4
   ```

4. **Important:** Make sure `.env` is in `.gitignore` (it should be already)
   - This prevents your API key from being uploaded to GitHub

### Step 7: Restart Your Development Server

1. Stop your current server (Ctrl+C if running)
2. Restart it:
   ```bash
   npm start
   ```

3. The reviews should now load on all pages!

## For Production Deployment

### Environment Variables in Hosting Platform

When deploying to production (Netlify, Vercel, Heroku, etc.), you need to add environment variables:

**For Netlify:**
1. Go to Site settings > Build & deploy > Environment
2. Add:
   - Key: `REACT_APP_GOOGLE_PLACES_API_KEY`
   - Value: `your_api_key`
3. Add:
   - Key: `REACT_APP_GOOGLE_PLACE_ID`
   - Value: `your_place_id`
4. Redeploy

**For Vercel:**
1. Go to Project Settings > Environment Variables
2. Add the same variables as above
3. Redeploy

**For other platforms:** Add the same environment variables in their settings.

## Troubleshooting

### Reviews Not Showing?

1. **Check Browser Console:**
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Check for messages like "API key not configured"

2. **Verify API Key:**
   - Make sure you copied the entire key (no spaces)
   - Check that the key is restricted to "Places API"
   - Verify billing is enabled

3. **Verify Place ID:**
   - Make sure Place ID matches your business
   - Test it in Place ID Finder first

4. **Check API Usage:**
   - Go to Google Cloud Console > APIs & Services > Dashboard
   - Check if API is being called successfully

### Common Errors

- **"API key not configured"** → Add `REACT_APP_GOOGLE_PLACES_API_KEY` to `.env`
- **"Place ID not found"** → Add `REACT_APP_GOOGLE_PLACE_ID` to `.env`
- **"REQUEST_DENIED"** → Check API key restrictions or billing
- **"ZERO_RESULTS"** → Place ID is incorrect

### API Quota / Limits

- Reviews are cached for 30 minutes to reduce API calls
- Each page load = 1 API call (if cache expired)
- $200 free credit = ~11,000 requests/month
- Monitor usage in Google Cloud Console > APIs & Services > Dashboard

## Security Notes

- ✅ API key is restricted to Places API only
- ✅ Environment variables are not committed to Git
- ✅ Consider adding HTTP referrer restrictions for production
- ❌ Never share your API key publicly
- ❌ Never commit `.env` file to Git

## Testing

1. After setup, visit any page with reviews
2. Check browser console for errors
3. Reviews should appear within a few seconds
4. If reviews don't show, check the console for specific error messages

## Need Help?

If you're stuck:
1. Check the browser console for error messages
2. Verify your API key is active in Google Cloud Console
3. Make sure billing is enabled
4. Test the Place ID in Google's Place ID Finder tool

