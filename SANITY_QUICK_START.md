# 🎨 Quick Start: Upload Images to Sanity Studio

## ✅ Sanity Studio is Now Running!

Visit: **http://localhost:3333**

## 📸 Step-by-Step Upload Guide

### 1. **Login to Sanity Studio**
- Open http://localhost:3333 in your browser
- Login with your Sanity credentials

### 2. **Navigate to Service Gallery**
- Look for "Service Gallery" in the left sidebar
- Click on it

### 3. **Create New Gallery Entry**
- Click the **"+ Create"** button (top right)
- You'll see a form with these fields:
  - **Service Type** (dropdown)
  - **Image Title** (optional text)
  - **Gallery Image** (upload button)
  - **Display Order** (number)

### 4. **Upload Your First Image**

#### For Window Tint:
1. **Service Type**: Select "Window Tint" from dropdown
2. **Image Title**: Leave blank or add description (e.g., "Tesla Model 3")
3. **Gallery Image**: Click "Select" → "Upload" → Choose image from:
   ```
   C:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\assets\galleries\window-tint\
   ```
4. **Display Order**: Enter `1`
5. Click **"Publish"** button (top right)

#### Repeat for More Images:
- Create another entry with Display Order `2`
- Then `3`, `4`, `5`, etc.
- Upload 10-15 best images

### 5. **Upload for Other Services**

#### Paint Correction:
- **Service Type**: "Paint Correction"
- **Source Folder**: `...galleries\paint-correction\`
- Upload 10-15 best images

#### Ceramic Coating:
- **Service Type**: "Ceramic Coating"  
- **Source Folder**: `...galleries\ceramic-coating\`
- Upload 10-15 best images

#### Auto Detail:
- **Service Type**: "Auto Detail"
- **Source Folder**: `...galleries\auto-detail\`
- Upload 10-15 best images

## 🎯 Pro Tips:

1. **Select Best Images Only**
   - Don't upload all 246 window tint images
   - Choose the 10-15 most impressive shots

2. **Avoid Duplicates**
   - Skip images that look similar
   - Each image should be unique

3. **Use Display Order**
   - Start with your BEST image as #1
   - Number sequentially: 1, 2, 3, 4...

4. **Image Orientation**
   - Sanity will preserve the correct orientation
   - If an image is sideways, you can rotate it in the upload interface

5. **Publish Each Image**
   - Don't forget to click "Publish" after each upload
   - Unpublished images won't appear on the website

## ✅ Verify Images Are Working

After uploading images, check your website:

1. **Window Tint Gallery**: http://localhost:3000/window-tint
2. **Paint Correction Gallery**: http://localhost:3000/paint-correction
3. **Ceramic Coating Gallery**: http://localhost:3000/ceramic-coating
4. **Auto Detail Gallery**: http://localhost:3000/auto-detail

You should see:
- ✅ Unique images (no duplicates!)
- ✅ Correct orientation
- ✅ Images in the order you specified

## 🚀 When Done:

Once all galleries look good:

```bash
# Build and deploy
cd frontend_beyond_detail
npm run build

# Commit and push
cd ..
git add -A
git commit -m "Gallery images uploaded to Sanity CMS"
git push origin master
```

## 📊 Quick Reference

| Service | Sanity Dropdown Value | # of Images to Upload |
|---------|----------------------|----------------------|
| Window Tint | "Window Tint" | 10-15 best |
| Paint Correction | "Paint Correction" | 10-15 best |
| Ceramic Coating | "Ceramic Coating" | 10-15 best |
| Auto Detail | "Auto Detail" | 10-15 best |

## ❓ Troubleshooting

**Can't see Service Gallery in sidebar?**
- Refresh the page
- Make sure you're logged in

**Images not showing on website?**
- Make sure you clicked "Publish" in Sanity
- Refresh your browser (Ctrl+F5)
- Check browser console for errors

**Wrong service type?**
- You can edit the entry in Sanity
- Change the Service Type dropdown
- Click "Publish" again

---

**Need Help?** The galleries will automatically update on your website as soon as you publish images in Sanity!
