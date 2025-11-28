# 📸 Complete Guide: Uploading Images to Sanity CMS

This guide explains how to upload images to Sanity CMS instead of using local files in the root folder. All images uploaded to Sanity will automatically appear on your website.

---

## ✅ What's Already Set Up

Your website is already configured to use Sanity CMS for images:

1. **Service Gallery** - ✅ Already using Sanity
   - Images appear on service pages (Window Tint, Paint Correction, Ceramic Coating, etc.)
   - Component: `ServiceGallery`
   - Schema: `serviceGallery`

2. **Service Page Header Images** - ✅ Already using Sanity
   - Header images for each service page
   - Stored in service documents (paintCorrection, ceramicCoatings, etc.)

3. **Recent Work Gallery** - ✅ Already using Sanity
   - Fetches from `serviceGallery` schema
   - Displays on homepage and service pages

---

## 🎯 How to Upload Images to Sanity

### Step 1: Access Sanity Studio

**Option A: Online Studio (Recommended)**
- Visit: **https://beyonddetail.sanity.studio** or **https://trp6l9ar.sanity.studio**
- Or go to: https://www.sanity.io/manage
- Login with your Sanity account
- Click on "beyond_detail" project
- Click "Open Studio"

**Option B: Local Studio**
```bash
cd backend_sanity
npm install
npm start
```
Then visit: http://localhost:3333

---

### Step 2: Upload Service Gallery Images

Service gallery images appear on specific service pages (e.g., `/window-tint`, `/paint-correction`).

1. **In Sanity Studio**, click **"Service Gallery"** in the left sidebar
2. Click **"+ Create"** button (top right)
3. Fill in the form:
   - **Service Type**: Select from dropdown:
     - Window Tint → `tint`
     - Paint Correction → `paint-correction`
     - Ceramic Coating → `ceramic-coating`
     - Auto Detail → `auto-detail`
     - Interior Detailing → `interior-detailing`
     - Exterior Detailing → `exterior-detailing`
     - Headlight Restoration → `headlight-restoration`
     - Odour Removal → `odour-removal`
     - Leather Cleaning → `leather-cleaning`
     - Paint Removal → `paint-removal`
     - Fleet Services → `fleet-services`
   
   - **Image Title** (Optional): Add a caption or description
     - Example: "Tesla Model 3 Window Tint", "BMW Paint Correction"
   
   - **Gallery Image**: Click "Select" → "Upload" → Choose image from your computer
     - Supported formats: JPG, JPEG, PNG, WEBP
     - Recommended size: 1200x800px or larger
     - Sanity automatically optimizes images
   
   - **Display Order**: Enter a number (1, 2, 3, etc.)
     - Lower numbers appear first
     - Use this to control which images show first

4. Click **"Publish"** button (top right)

5. **To Add More Images - Repeat Steps 2-4:**
   - After publishing, click **"+ Create"** again (top right)
   - Fill in the same form with a different image
   - **Important:** Use the same **Service Type** for all images of that service
   - Use different **Display Order** numbers (1, 2, 3, 4, etc.)
   - Click **"Publish"** for each image
   
   **Example for Window Tint Gallery:**
   - Image 1: Service Type = "Window Tint", Display Order = 1, Upload image → Publish
   - Image 2: Service Type = "Window Tint", Display Order = 2, Upload image → Publish
   - Image 3: Service Type = "Window Tint", Display Order = 3, Upload image → Publish
   - Continue until you've uploaded 10-15 best images
   
   **Tip:** You can upload multiple images quickly by:
   1. Creating the first entry and publishing it
   2. Clicking the entry in the list
   3. Clicking "Duplicate" (if available) or creating a new entry
   4. Changing only the image and display order
   5. Publishing again

---

### Step 3: Upload Service Header Images

Header images appear at the top of each service page.

1. **In Sanity Studio**, click on a service type in the left sidebar:
   - Paint Correction
   - Ceramic Coatings
   - Interior Detailing
   - Exterior Detailing
   - Headlight Restoration
   - Odour Removal
   - Leather Cleaning
   - Paint Removal
   - Fleet Services

2. **Edit** an existing service document or **Create** a new one

3. Find the **"Header Image"** field

4. Click **"Select"** → **"Upload"** → Choose your image
   - Recommended size: 1920x1080px (16:9 aspect ratio)
   - This image appears at the top of the service page

5. Click **"Publish"**

---

### Step 4: Upload General Gallery Images (Optional)

For general website showcase images (not service-specific):

1. **In Sanity Studio**, click **"Gallery"** in the left sidebar
2. Click **"+ Create"**
3. Fill in:
   - **Header One**: Title/description for the image
   - **Gallery Picture**: Upload your image (2048px x 1550px recommended)
   - **Order**: Display order (optional)
4. Click **"Publish"**

---

## 📋 Service Type Mapping

When uploading to Service Gallery, use these exact values:

| Website Route | Sanity Service Type Value |
|--------------|---------------------------|
| `/window-tint` | `tint` |
| `/paint-correction` | `paint-correction` |
| `/ceramic-coatings` | `ceramic-coating` |
| `/interior-detailing` | `interior-detailing` |
| `/exterior-detailing` | `exterior-detailing` |
| `/headlight-restoration` | `headlight-restoration` |
| `/odour-removal` | `odour-removal` |
| `/leather-cleaning` | `leather-cleaning` |
| `/paint-removal` | `paint-removal` |
| `/fleet-services` | `fleet-services` |
| `/services` (Auto Detail) | `auto-detail` |

---

## 🎨 Image Best Practices

### Image Selection
- ✅ Choose your **best 10-15 images** per service
- ✅ Avoid duplicates or very similar images
- ✅ Select images that showcase your work quality
- ✅ Use high-resolution images (1200px+ width)

### Image Optimization
- Sanity automatically optimizes images
- Images are served in multiple sizes for performance
- No need to manually compress images before uploading

### Display Order Tips
- **Order 1-5**: Your absolute best work (appears first)
- **Order 6-10**: High-quality examples
- **Order 11+**: Additional showcase images

---

## 🔍 Where Images Appear

### Service Gallery Images
- **Service Pages**: `/window-tint`, `/paint-correction`, `/ceramic-coatings`, etc.
  - Appears in the "Gallery" section
  - Shows as a carousel/slider
  - Clickable lightbox for full-size viewing

- **Homepage Recent Work**: 
  - Fetches from service gallery
  - Shows recent work for each service

### Service Header Images
- **Top of Service Pages**: 
  - Large hero image at the top
  - Appears behind the service title

### General Gallery Images
- **Homepage**: Recent work section (if no service-specific images)
- **Gallery Page**: General portfolio showcase

---

## ✅ Verification Checklist

After uploading images:

1. ✅ **Publish** each image (not just save as draft)
2. ✅ Check the **Service Type** matches the correct service
3. ✅ Verify **Display Order** is set (1, 2, 3, etc.)
4. ✅ Visit your website and check the service page
5. ✅ Images should appear within a few seconds (CDN cache)

---

## 🚀 Quick Start Example

**Upload Window Tint Gallery Images:**

1. Go to https://beyonddetail.sanity.studio
2. Click **"Service Gallery"** → **"+ Create"**
3. **Service Type**: Select "Window Tint" (`tint`)
4. **Gallery Image**: Upload your best window tint photo
5. **Display Order**: Enter `1`
6. Click **"Publish"**
7. Repeat for 10-15 more images (order 2, 3, 4, etc.)
8. Visit `/window-tint` on your website to see the gallery!

---

## 📞 Need Help?

- **Sanity Studio Issues**: Check `SANITY_ACCESS_GUIDE.md`
- **Gallery Not Showing**: Check browser console for errors
- **Images Not Appearing**: Make sure images are **Published** (not drafts)

---

## 🎯 Summary

✅ **Service Gallery Images** → Upload to "Service Gallery" in Sanity
✅ **Service Header Images** → Upload to service documents (Paint Correction, etc.)
✅ **General Showcase** → Upload to "Gallery" in Sanity
✅ **All images automatically appear** on your website after publishing

No more uploading to root folders! Everything is managed through Sanity CMS. 🎉

