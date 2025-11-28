# 🔍 Troubleshooting: Only One Image Showing

If you're only seeing one image in the gallery, here's how to fix it:

---

## ✅ Quick Checks

### 1. Check Browser Console

Open your browser's Developer Tools (F12) and check the Console tab. Look for:
```
[ServiceGallery] Received X images from Sanity
```

**If it says "Received 1 images":**
- Only one image is uploaded in Sanity
- Upload more images (see below)

**If it says "Received 0 images":**
- Images might not be published
- Service type might not match
- Check the serviceType mapping

---

### 2. Verify Images in Sanity

1. Go to **Sanity Studio**: https://beyonddetail.sanity.studio
2. Click **"Service Gallery"** in the left sidebar
3. Check how many entries you have
4. Make sure they're all **Published** (not drafts)
5. Verify the **Service Type** matches:
   - For `/window-tint` page → Service Type should be **"Window Tint"** (value: `tint`)
   - For `/paint-correction` page → Service Type should be **"Paint Correction"** (value: `paint-correction`)

---

### 3. Service Type Mapping

Make sure your images use the correct service type values:

| Page URL | Sanity Service Type Value |
|----------|---------------------------|
| `/window-tint` | `tint` |
| `/paint-correction` | `paint-correction` |
| `/ceramic-coatings` | `ceramic-coating` |
| `/auto-detail` | `auto-detail` |

---

## 🚀 Solution: Upload More Images

### Option 1: Upload via Sanity Studio (Manual)

1. Go to **Sanity Studio** → **Service Gallery**
2. Click **"+ Create"** for each image
3. Set **Service Type** correctly
4. Upload image
5. Click **"Publish"**
6. Repeat for all images

### Option 2: Bulk Upload (Faster)

```powershell
cd backend_sanity
$env:SANITY_API_TOKEN="your-token-here"
node scripts/bulk-upload-complete.js window-tint "C:\path\to\images\folder"
```

**Make sure:**
- Folder path points to the specific service folder (e.g., `\window-tint`)
- Images are in the folder (`.jpg`, `.png`, `.webp`)
- Service type matches the folder name

---

## 🔍 Debug Steps

1. **Check Console Logs:**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Look for `[ServiceGallery]` messages
   - Check how many images it says it received

2. **Check Sanity Studio:**
   - Count how many Service Gallery entries you have
   - Verify they're all published
   - Check the Service Type field matches

3. **Test Query:**
   - In Sanity Studio, go to **Vision** tab
   - Run this query:
   ```
   *[_type == "serviceGallery" && serviceType == "tint"]
   ```
   - Replace `"tint"` with your service type
   - See how many results you get

---

## ✅ Expected Behavior

- **Multiple images:** Should show carousel with navigation arrows
- **Dots navigation:** Should appear at bottom (if more than 1 image)
- **Arrow buttons:** Should work to navigate between images

---

## 🎯 Quick Fix

If you only have 1 image uploaded:
1. Upload more images using the bulk upload script
2. Or manually add more in Sanity Studio
3. Refresh your website
4. You should see multiple images in the carousel

---

## Still Not Working?

Check:
- ✅ Images are **Published** (not drafts)
- ✅ **Service Type** matches exactly
- ✅ Images have valid image data (not broken)
- ✅ Browser console shows correct count
- ✅ No JavaScript errors in console

If all checks pass but still only seeing one image, the component should show all images. The carousel will only show navigation if there's more than 1 image.


