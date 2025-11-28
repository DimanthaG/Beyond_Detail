# Gallery Image Troubleshooting Guide

## Issue: Some gallery images aren't showing

### Possible Causes:

1. **Images not published in Sanity**
   - Images might be saved as drafts but not published
   - Solution: Go to Sanity Studio and publish all draft images

2. **Missing image assets**
   - Image field exists but no actual image file uploaded
   - Solution: Upload images to each gallery item

3. **Service type mismatch**
   - The serviceType in Sanity doesn't match what the frontend is requesting
   - Check the mapping in ServiceGallery.jsx

4. **Image asset references broken**
   - The image asset might have been deleted
   - Solution: Re-upload the images

## Quick Diagnostic Steps:

### Step 1: Check Sanity Studio
1. Open Sanity Studio: `cd backend_sanity && npm start`
2. Go to http://localhost:3333
3. Click on "Service Gallery" in the sidebar
4. Look for items that:
   - Have a "DRAFT" label (unpublished)
   - Don't have a thumbnail image
   - Have a red warning icon

### Step 2: Check Browser Console
1. Open your website
2. Press F12 to open Developer Tools
3. Go to the Console tab
4. Look for messages starting with `[ServiceGallery]`
5. Check for errors about missing images or failed fetches

### Step 3: Verify Service Types Match

**Frontend expects these values:**
- `tint` (for Window Tint)
- `auto-detail` (for Auto Detail)
- `paint-correction` (for Paint Correction)
- `ceramic-coating` (for Ceramic Coating)
- `interior-detailing`
- `exterior-detailing`
- `headlight-restoration`
- `odour-removal`
- `leather-cleaning`
- `paint-removal`
- `fleet-services`

**Check in Sanity:**
1. Open each gallery item
2. Verify the "Service Type" dropdown matches exactly
3. Make sure it's not set to a different value

### Step 4: Re-upload Missing Images

If you find items without images:
1. Click on the item in Sanity Studio
2. Click the "Gallery Image" field
3. Upload a new image
4. Click "Publish" (not just Save)

### Step 5: Check for Unpublished Drafts

In Sanity Studio:
1. Look for items with "DRAFT" label
2. Click on each draft
3. Review the changes
4. Click "Publish" to make them live

## Common Fixes:

### Fix 1: Publish All Drafts
```
1. Go to Sanity Studio
2. Filter by "Drafts" if available
3. Open each draft
4. Click "Publish"
```

### Fix 2: Bulk Re-upload
If many images are missing, use the bulk upload script:
```powershell
cd backend_sanity
node scripts/bulk-upload-complete.js
```

### Fix 3: Clear CDN Cache
If images show in Sanity but not on website:
```
1. Wait 5-10 minutes for CDN cache to clear
2. Or add ?v=2 to the end of your URL to force refresh
3. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

## Testing:

After making changes:
1. Wait 1-2 minutes for Sanity CDN to update
2. Hard refresh your browser (Ctrl+Shift+R)
3. Check the browser console for `[ServiceGallery]` logs
4. Verify the image count matches what you uploaded

## Need More Help?

Check the browser console logs - they will tell you:
- How many images were fetched from Sanity
- Which service type is being queried
- If any images are missing the image field
- The exact query being used
