# Gallery Images

This folder contains gallery images for each service page.

## 📁 Folder Structure

Each service page has its own folder where you can upload specific images for that page's gallery:

- `paint-correction/` - Images for Paint Correction Gallery
- `ceramic-coating/` - Images for Ceramic Coating Gallery
- `window-tint/` - Images for Window Tint Gallery
- `auto-detail/` - Images for Auto Detail Gallery
- `interior-detailing/` - Images for Interior Detailing Gallery
- `exterior-detailing/` - Images for Exterior Detailing Gallery
- `headlight-restoration/` - Images for Headlight Restoration Gallery
- `odour-removal/` - Images for Odour Removal Gallery
- `leather-cleaning/` - Images for Leather Cleaning Gallery
- `paint-removal/` - Images for Paint Removal Gallery
- `fleet-services/` - Images for Fleet Services Gallery

## 📝 How to Add Images

1. **Navigate to the specific gallery folder** for the page you want to update
   - Example: `paint-correction/` for Paint Correction page images

2. **Upload your images** to that folder
   - Recommended formats: JPG, PNG, WEBP
   - Recommended size: 1200x800px or larger (maintains aspect ratio)
   - File naming: Use descriptive names like `paint-correction-1.jpg`, `paint-correction-2.jpg`, etc.

3. **Images will appear** in the gallery on that page
   - For Paint Correction, Ceramic Coating, and Window Tint: Images need to be manually imported in `galleryImages.js` after uploading
   - Images are displayed in alphabetical order by filename
   - After importing, restart the dev server and refresh the page

## ⚠️ Important Notes

- **Image formats supported:** JPG, JPEG, PNG, WEBP
- **Recommended resolution:** 1200x800px minimum for best quality
- **File size:** Optimize images before uploading for faster page loads
- **Naming:** Use lowercase, hyphen-separated names (e.g., `ceramic-coating-result-1.jpg`)
- **No limit:** You can upload as many images as needed to each folder

## 🎯 Example

To add images to the Paint Correction Gallery:
1. Go to `galleries/paint-correction/`
2. Upload images: `pc-before-1.jpg`, `pc-after-1.jpg`, `pc-result-2.jpg`, etc.
3. Save and refresh the Paint Correction page - images will appear automatically!




