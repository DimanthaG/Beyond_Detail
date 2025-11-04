# Blog Image Swap Guide

## 📁 Folder Locations

### Main Blog Code File
**Location:** `frontend_beyond_detail/src/Pages/Blog/blogImages.js`

This is the file you need to edit to change which images are used for each blog post.

### Image Storage Folders

#### 1. **General Blog Images** (bd folder)
**Path:** `frontend_beyond_detail/src/assets/bd/`
- Contains: `bd-1.jpg`, `bd-2.jpg`, `bd-3.jpg`, etc.
- Used for: Winter Preparation, Interior Detailing
- **To use:** Upload your images here and reference them in `blogImages.js`

#### 2. **Paint Correction Gallery**
**Path:** `frontend_beyond_detail/src/assets/galleries/paint-correction/`
- Contains: `IMG_3358.JPG`, `IMG_3420.JPG`, etc.
- Used for: Paint Protection Tips, Paint Correction Process, Headlight Restoration
- **To use:** Upload your images here and reference them in `blogImages.js`

#### 3. **Ceramic Coating Gallery**
**Path:** `frontend_beyond_detail/src/assets/galleries/ceramic-coating/`
- Contains: `IMG_5026.JPG`, `IMG_5027.JPG`, etc.
- Used for: Ceramic Coating vs Wax blog post
- **To use:** Upload your images here and reference them in `blogImages.js`

#### 4. **Blog-Specific Folder** (Optional - for future use)
**Path:** `frontend_beyond_detail/src/assets/blog/`
- Currently empty, but you can upload images here for blog-specific use

---

## 🔄 How to Swap Images

### Step 1: Upload Your New Image

1. **Choose the appropriate folder** based on the topic:
   - Paint-related: `frontend_beyond_detail/src/assets/galleries/paint-correction/`
   - Ceramic coating: `frontend_beyond_detail/src/assets/galleries/ceramic-coating/`
   - General/Interior: `frontend_beyond_detail/src/assets/bd/`
   - Blog-specific: `frontend_beyond_detail/src/assets/blog/`

2. **Upload your image** to that folder
   - Use descriptive names like: `headlight-restoration-1.jpg`
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.JPG`

### Step 2: Update blogImages.js

Open: `frontend_beyond_detail/src/Pages/Blog/blogImages.js`

**Example - Changing Headlight Restoration Images:**

```javascript
// OLD:
import headlightImg1 from '../../assets/bd/bd-32.jpg';

// NEW (after uploading to paint-correction folder):
import headlightImg1 from '../../assets/galleries/paint-correction/headlight-restoration-1.jpg';
```

**Example - Changing Interior Detailing Images:**

```javascript
// OLD:
import interiorImg1 from '../../assets/bd/bd-27.jpg';

// NEW (after uploading to bd folder):
import interiorImg1 from '../../assets/bd/interior-detailing-1.jpg';
```

### Step 3: Update All Three Images

For each blog topic, there are 3 images (main image + 2 content images):

```javascript
// Headlight Restoration - Change all three
import headlightImg1 from '../../assets/galleries/paint-correction/YOUR-NEW-IMAGE-1.jpg';
import headlightImg2 from '../../assets/galleries/paint-correction/YOUR-NEW-IMAGE-2.jpg';
import headlightImg3 from '../../assets/galleries/paint-correction/YOUR-NEW-IMAGE-3.jpg';
```

---

## 📋 Current Blog Image Mappings

### 1. Paint Protection Tips
- **Main:** `IMG_3358.JPG` from paint-correction
- **Content:** `IMG_3358.JPG`, `IMG_5024.JPG`, `IMG_3451.JPG`

### 2. Ceramic Coating vs Wax
- **Main:** `IMG_5026.JPG` from ceramic-coating
- **Content:** `IMG_5026.JPG`, `IMG_5027.JPG`, `IMG_5256.JPG`

### 3. Winter Preparation
- **Main:** `bd-1.jpg` from bd folder
- **Content:** `bd-1.jpg`, `bd-2.jpg`, `bd-3.jpg`

### 4. Interior Detailing
- **Main:** `bd-27.jpg` from bd folder
- **Content:** `bd-27.jpg`, `bd-28.jpg`, `bd-29.jpg`

### 5. Headlight Restoration (SAFETY)
- **Main:** `IMG_3721.JPG` from paint-correction
- **Content:** `IMG_3721.JPG`, `IMG_3903.JPG`, `IMG_4610.JPG`

### 6. Paint Correction Process
- **Main:** `IMG_3420.JPG` from paint-correction
- **Content:** `IMG_3420.JPG`, `IMG_3458.JPG`, `IMG_3711.JPG`

---

## 🎯 Quick Reference - File Structure

```
frontend_beyond_detail/
├── src/
│   ├── assets/
│   │   ├── bd/                    ← General/Interior images
│   │   │   ├── bd-1.jpg
│   │   │   ├── bd-2.jpg
│   │   │   └── ... (your images here)
│   │   │
│   │   ├── blog/                  ← Blog-specific images (optional)
│   │   │   └── (upload here)
│   │   │
│   │   └── galleries/
│   │       ├── paint-correction/  ← Paint-related images
│   │       │   ├── IMG_3358.JPG
│   │       │   └── ... (your images here)
│   │       │
│   │       └── ceramic-coating/   ← Ceramic coating images
│   │           ├── IMG_5026.JPG
│   │           └── ... (your images here)
│   │
│   └── Pages/
│       └── Blog/
│           ├── blogImages.js      ← EDIT THIS FILE to change images
│           ├── Blog.jsx
│           └── Blog.scss
```

---

## ⚠️ Important Notes

1. **After uploading new images:**
   - Update the import paths in `blogImages.js`
   - Restart your development server (if running)
   - Refresh the browser

2. **Image Naming:**
   - Use lowercase with hyphens: `headlight-restoration-1.jpg`
   - Or keep existing naming: `IMG_1234.JPG`
   - Avoid spaces in filenames

3. **Image Formats:**
   - Supported: `.jpg`, `.jpeg`, `.png`, `.JPG`
   - Recommended size: 1200x800px or larger

4. **Case Sensitivity:**
   - Make sure the file extension matches exactly (`.JPG` vs `.jpg`)

---

## 🚀 Quick Example

**To change the Headlight Restoration main image:**

1. Upload your image to: `frontend_beyond_detail/src/assets/galleries/paint-correction/my-headlight-image.jpg`

2. Open: `frontend_beyond_detail/src/Pages/Blog/blogImages.js`

3. Find this line:
   ```javascript
   import headlightImg1 from '../../assets/galleries/paint-correction/IMG_3721.JPG';
   ```

4. Change it to:
   ```javascript
   import headlightImg1 from '../../assets/galleries/paint-correction/my-headlight-image.jpg';
   ```

5. Save the file and refresh your browser!

---

## 📍 Full Paths (Windows)

**Main Blog File:**
```
C:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\Pages\Blog\blogImages.js
```

**Image Folders:**
```
C:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\assets\bd\
C:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\assets\galleries\paint-correction\
C:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\assets\galleries\ceramic-coating\
C:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\assets\blog\
```

