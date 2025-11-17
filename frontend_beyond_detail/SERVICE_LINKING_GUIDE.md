# Service Linking Implementation Guide

## Overview
This guide explains how service names are automatically converted to internal links throughout the website for better SEO and user navigation.

## What Was Implemented

### 1. ServiceLinker Utility Component
Created `src/utils/serviceLinker.jsx` - A React component that automatically converts service mentions to internal links.

**Supported Services:**
- Window tint / Window tinting → `/tint`
- Paint correction → `/paint-correction`
- Ceramic coating / Ceramic coatings → `/ceramic-coatings`
- Auto detailing → `/auto-detail`
- Interior detailing → `/interior-detailing`
- Exterior detailing → `/exterior-detailing`
- Headlight restoration → `/headlight-restoration`
- Odour removal → `/odour-removal`
- Leather cleaning → `/leather-cleaning`
- Paint removal → `/paint-removal`
- Fleet services / Fleet service → `/fleet-services`

### 2. CSS Styling
Added `.service-link` class styling in `src/index.scss`:
- Orange color matching brand (`--secondary-color`)
- Hover effects with underline
- Smooth transitions

### 3. Files Already Updated
The following files have been updated to use ServiceLinker:
- ✅ `src/Pages/About/About.jsx` - Story section
- ✅ `src/components/HomeHero/HomeHero.jsx` - Hero description
- ✅ `src/components/PaintProtectionInfo/PaintProtectionInfo.jsx` - Service mentions
- ✅ `src/components/CeramicCoatingInfo/CeramicCoatingInfo.jsx` - Paint correction references

## How to Use ServiceLinker

### Basic Usage
```jsx
import { ServiceLinker } from '../../utils/serviceLinker';

// In your JSX:
<p>
  We offer professional <ServiceLinker text="window tint" /> installation 
  and <ServiceLinker text="paint correction" /> services.
</p>
```

### Example
**Before:**
```jsx
<p>
  Our services include window tint, paint correction, and ceramic coating.
</p>
```

**After:**
```jsx
import { ServiceLinker } from '../../utils/serviceLinker';

<p>
  Our services include <ServiceLinker text="window tint" />, 
  <ServiceLinker text="paint correction" />, and 
  <ServiceLinker text="ceramic coating" />.
</p>
```

## Files That May Need Updates

Based on the search results, these files contain service mentions that could benefit from linking:

### High Priority (User-Facing Content)
- `src/Pages/Blog/Blog.jsx` - Blog posts may mention services
- `src/Pages/FAQs/FAQs.jsx` - FAQ answers
- `src/Pages/Services/Services.jsx` - Services listing page
- `src/components/FleetExpertise/FleetExpertise.jsx` - May mention other services
- `src/components/Contact/Contact.jsx` - Contact page content

### Medium Priority
- `src/data/faqsData.js` - Fallback FAQ data (structured format, may need special handling)
- `src/components/SEO.jsx` - Meta descriptions (may not need links)
- Various hero components for other services

### Lower Priority
- Gallery README files
- Blog image files
- Asset documentation

## Implementation Steps for Remaining Files

1. **Import ServiceLinker:**
   ```jsx
   import { ServiceLinker } from '../../utils/serviceLinker';
   // or relative path from your file location
   ```

2. **Find service mentions in text content:**
   - Look for service names in `<p>`, `<span>`, or other text elements
   - Check descriptions, paragraphs, and content sections

3. **Wrap service names:**
   ```jsx
   // Replace:
   window tint
   // With:
   <ServiceLinker text="window tint" />
   ```

4. **Test the links:**
   - Verify links navigate correctly
   - Check that styling appears correctly
   - Ensure no broken links

## Notes

- ServiceLinker is case-insensitive
- It matches whole words only (won't match "tinting" in "retinting")
- Links automatically scroll to top on navigation
- Styling uses brand orange color with hover effects

## Future Enhancements

Consider:
- Adding more service name variations
- Creating a bulk text processor for large content blocks
- Adding analytics tracking for service link clicks
- Creating a CMS field type for automatic linking in Sanity content

