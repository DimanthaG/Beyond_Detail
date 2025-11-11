# Auto Detailing Gallery Images

Upload your auto detailing gallery images to this folder.

## Supported Formats
- JPG / JPEG
- PNG
- WEBP
- SVG

## How to Add Images

1. **Upload your images** directly to this folder
2. **Run the auto-update script**: `npm run update-galleries`
   - Or simply restart your dev server (it auto-runs before start)
3. Images will automatically appear in the Auto Detailing gallery on the Services page

## Image Requirements
- Recommended size: 1200x800px or larger
- Maintain aspect ratio
- Optimize file sizes for faster loading

## Automatic Detection

The gallery system automatically scans this folder for new images when you:
- Run `npm start` (auto-runs before starting)
- Run `npm run build` (auto-runs before building)
- Manually run `npm run update-galleries`

No manual code changes needed! Just upload images and restart.

## Location

This folder is located at:
```
frontend_beyond_detail/src/assets/galleries/auto-detail/
```

The gallery will display on the Auto Detail page (Services page) between the "Why Choose Our Auto Detailing" section and the "Our Auto Detailing Packages" section.









