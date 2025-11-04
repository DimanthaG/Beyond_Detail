# Blog Images

This folder is for blog post images. Images uploaded here can be used in blog posts.

## 📝 How to Add Blog Images

1. **Upload your images** to this folder (`frontend_beyond_detail/src/assets/blog/`)
   - Recommended formats: JPG, JPEG, PNG, WEBP
   - Recommended size: 1200x800px or larger (maintains aspect ratio)
   - File naming: Use descriptive names like `paint-protection-tips.jpg`, `ceramic-coating-comparison.jpg`, etc.

2. **Import the image** in `blogImages.js`
   - Open `frontend_beyond_detail/src/Pages/Blog/blogImages.js`
   - Add an import statement at the top:
     ```javascript
     import yourImageName from '../../assets/blog/your-image-name.jpg';
     ```
   - Add it to the `blogImages` object with the blog slug as the key:
     ```javascript
     export const blogImages = {
       'blog-slug': yourImageName,
       // ... other images
     };
     ```

3. **Use in Blog.jsx**
   - The image will automatically be used if the slug matches in the `blogImages` object

## 🎯 Current Blog Post Image Mapping

- **5 Essential Tips to Protect Your Vehicle's Paint** → Paint correction gallery images
- **Ceramic Coating vs Traditional Wax** → Ceramic coating gallery images
- **Preparing Your Vehicle for Winter** → General bd folder images
- **The Complete Guide to Interior Detailing** → Interior bd folder images
- **Why Headlight Restoration Matters** → Headlight bd folder images
- **Inside Look: Our Paint Correction Process** → Paint correction gallery images

## 📋 Image Topics

If you upload images to this folder, you can organize them by topic:

- Paint protection tips
- Ceramic coating
- Winter preparation
- Interior detailing
- Headlight restoration
- Paint correction
- General car care

## ⚠️ Important Notes

- **Image formats supported:** JPG, JPEG, PNG, WEBP
- **Recommended resolution:** 1200x800px minimum for best quality
- **File size:** Optimize images before uploading for faster page loads
- **Naming:** Use lowercase, hyphen-separated names (e.g., `paint-protection-tips.jpg`)
- After adding new images, restart the dev server if needed

