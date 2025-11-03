# Brand Logos Setup Guide

## 📁 Where to Upload Images

Add your logo images to this folder:
```
frontend_beyond_detail/src/assets/brands/
```

## 📝 File Names Required

Upload the following logo files with **exact** file names (case-sensitive):

1. **llumar_logo.png** - LLumar logo
2. **eastman_logo.png** - EASTMAN logo  
3. **iwfa_logo.png** - IWFA (International Window Film Association) logo
4. **skin_cancer_logo.png** - Skin Cancer Foundation logo

## 🎨 Image Requirements

- **Format**: PNG (recommended) or SVG
- **Background**: Transparent background preferred
- **Size**: Recommended 400-800px width, maintain aspect ratio
- **Quality**: High resolution for crisp display

## 📋 Steps to Add Logos

1. **Download or obtain the logo images** from each brand's official website or brand guidelines
2. **Rename the files** to match exactly:
   - `llumar_logo.png`
   - `eastman_logo.png`
   - `iwfa_logo.png`
   - `skin_cancer_logo.png`
3. **Copy the files** into: `frontend_beyond_detail/src/assets/brands/`
4. **Refresh your development server** - the logos should appear automatically!

## ⚠️ Troubleshooting

- If logos don't appear, check:
  - File names match exactly (including .png extension)
  - Files are in the correct folder: `src/assets/brands/`
  - Restart your development server
  - Check browser console for any import errors

## 🎯 Current Status

The code is already set up to display logos. Once you add the image files, they will automatically replace the text placeholders.

If images are missing, the component will gracefully show the brand name as a placeholder.

