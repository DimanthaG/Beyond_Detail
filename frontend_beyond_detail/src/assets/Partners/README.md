# Partners Logos

## 📁 Automatic Styling

**All logos added to this folder will automatically receive the following styling:**

- **Background**: `#000000` (pure black)
- **Logo Color**: `#808080` (mid-grey) - applied via CSS filter
- **Opacity**: `0.9` (90%) for smooth matte look
- **Hover Effect**: Full color logos on hover

The styling is applied automatically via the `partners__logo-image` CSS class - **no additional configuration needed!**

## 📝 How to Add New Partners

### Step 1: Add Logo File
1. Add your partner logo file to this folder: `src/assets/Partners/`
2. Use descriptive file name: `partner_name_logo.png` (e.g., `llumar_logo.png`)
3. Recommended format: PNG with transparent background

### Step 2: Import in Constants
Open `src/constants/images.jsx` and add the import:
```javascript
import partnerName_logo from '../assets/Partners/partner_name_logo.png';
```

Then add it to the export object:
```javascript
export default {
  // ... other images
  partnerName_logo,
};
```

### Step 3: Add to Partners Component
Open `src/components/Partners/Partners.jsx` and add to the partners array:
```javascript
const partners = [
  // ... existing partners
  {
    name: 'Partner Name',
    logo: images.partnerName_logo,
  },
];
```

That's it! The logo will automatically:
- ✅ Display in mid-grey (#808080) on black background
- ✅ Use 0.9 opacity for matte look
- ✅ Show full color on hover
- ✅ Be responsive and properly sized

## 🎨 Styling Details

The styling is handled automatically by the CSS:
- Default: `filter: grayscale(100%) brightness(0.5); opacity: 0.9;`
- Hover: `filter: grayscale(0%) brightness(1); opacity: 1;`
- Background: `background-color: #000000;`

**You don't need to modify any CSS - it's all automatic!**

## 📋 Current Partners

- `igl_logo.png` - igl coatings
- `huper_logo.png` - HÜPER OPTIK™
- `3m_logo.png` - 3M
- `sparco_logo.png` - spara

## ⚠️ Important Notes

- Logo files should be PNG format (SVG also works)
- Transparent backgrounds recommended
- Recommended size: 400-800px width
- The component automatically handles responsive layout
- All logos receive the same styling automatically




