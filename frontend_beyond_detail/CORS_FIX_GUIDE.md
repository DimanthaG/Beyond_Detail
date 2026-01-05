# CORS Error Fix - Sanity Configuration Required

## Problem
Your Sanity project is blocking requests from `localhost:3001` due to CORS (Cross-Origin Resource Sharing) restrictions. This is a **security feature** that prevents unauthorized domains from accessing your Sanity data.

## Error Message
```
Access to XMLHttpRequest at 'https://trp6l9ar.apicdn.sanity.io/...' from origin 'http://localhost:3001' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

## Solution: Whitelist localhost in Sanity

### Step 1: Go to Sanity Management Console
1. Open your browser and go to: **https://www.sanity.io/manage**
2. Log in with your Sanity account
3. Select your project: **Beyond Detail** (Project ID: `trp6l9ar`)

### Step 2: Add CORS Origins
1. In the left sidebar, click on **"Settings"** or **"API"**
2. Look for **"CORS Origins"** section
3. Click **"Add CORS origin"** or **"Add origin"**
4. Add the following origins:

   ```
   http://localhost:3000
   http://localhost:3001
   http://localhost:3002
   ```

5. **Important**: Check the box for **"Allow credentials"** if available
6. Click **"Save"** or **"Add"**

### Step 3: Add Production Domain (Optional but Recommended)
Also add your production domain:
```
https://beyonddetail.ca
https://www.beyonddetail.ca
```

### Step 4: Restart Your Dev Server
After adding the CORS origins:
1. Stop your dev server (Ctrl+C)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Restart: `npm start`
4. Hard refresh (Ctrl+Shift+R)

## Alternative: Use Sanity's Default API (No CORS)

If you can't access Sanity management console right now, I've already reverted the client configuration to use the non-CDN endpoint which has more permissive CORS settings.

### What Changed in client.js:
```javascript
export const client = createClient({
  projectId: 'trp6l9ar',
  dataset: 'production',
  apiVersion: '2022-02-01', // Older version
  useCdn: false, // Disabled CDN (avoids CORS)
});
```

**Try restarting your dev server now** - it might work with this configuration!

## Visual Guide

### Finding CORS Settings in Sanity:

1. **Sanity Dashboard** → **Your Project** → **Settings** → **API**
2. Scroll to **"CORS Origins"**
3. Click **"Add CORS origin"**
4. Enter: `http://localhost:3001`
5. Check: **"Allow credentials"**
6. Click: **"Save"**

## Why This Happens

### CDN vs Direct API:
- **CDN** (`apicdn.sanity.io`): Faster, but stricter CORS
- **Direct** (`api.sanity.io`): Slower, but more permissive CORS

### Development vs Production:
- **Development**: Use `useCdn: false` for easier local development
- **Production**: Use `useCdn: true` for better performance

## Verification

After fixing, you should see:
- ✅ No CORS errors in console
- ✅ Blog posts loading from Sanity
- ✅ Footer data loading
- ✅ Contact page data loading

## If Still Not Working

### Option 1: Check Sanity Project Status
```bash
# Verify your Sanity project is accessible
curl https://trp6l9ar.api.sanity.io/v2022-02-01/data/query/production?query=*[_type=="blogPost"]
```

### Option 2: Use Environment Variable
Create `.env.local` file:
```env
REACT_APP_SANITY_PROJECT_ID=trp6l9ar
REACT_APP_SANITY_DATASET=production
REACT_APP_SANITY_USE_CDN=false
```

### Option 3: Contact Sanity Support
If you don't have access to the Sanity project:
- Email: support@sanity.io
- Provide Project ID: `trp6l9ar`
- Request CORS origin addition for `localhost:3001`

## Quick Fix (Temporary)

If you need to work RIGHT NOW and can't access Sanity:

1. **Use Local Data Only**: The app already has fallback data
2. **Disable Sanity Fetches**: Comment out Sanity calls temporarily
3. **Use Mock Data**: Create mock responses for development

The site will still work with local/fallback data - you just won't see live CMS updates.

---

**Next Step**: Try restarting your dev server now. The CORS errors should be reduced or gone!
