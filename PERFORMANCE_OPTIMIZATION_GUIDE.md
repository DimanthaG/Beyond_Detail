# Performance Optimization Guide - Beyond Detail

## Date: November 20, 2025

This guide will help you boost your PageSpeed score from **63 to 85+** by fixing the four main performance issues.

---

## 1. 🔧 FIX GOOGLE REVIEWS API (Eliminates Console Errors)

### Current Issue:
- API key configuration errors
- Server API key not configured
- 500 Internal Server Errors

### Solution: Configure Environment Variables

#### For Vercel (Production):
1. Go to your Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```
GOOGLE_PLACES_SERVER_KEY=YOUR_GOOGLE_API_KEY_HERE
GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY
```

#### For Local Development:
1. Create `.env.local` in `frontend_beyond_detail/` directory
2. Add:

```env
GOOGLE_PLACES_SERVER_KEY=YOUR_GOOGLE_API_KEY_HERE
GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY
REACT_APP_GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY
```

#### How to Get Your Google API Key:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Places API (New)**
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. **Restrict the API key**:
   - Application restrictions: HTTP referrers
   - Add your domain: `beyonddetail.ca/*`
   - API restrictions: Select "Places API"
6. Copy the API key

#### How to Get Your Place ID:
1. Go to [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "Beyond Detail Toronto, Unit 11, 170 Finchdene Square, Scarborough"
3. Copy the Place ID
4. Or use the existing one: `ChIJFeApoP4d1YkRv0VpV6_h8sY`

#### After Configuration:
1. Redeploy your Vercel app (or restart local dev server)
2. Check browser console - errors should be gone
3. Google Reviews should load properly

---

## 2. 🖼️ IMAGE OPTIMIZATION (Biggest Performance Win)

### Current Issue:
- **11,300 KiB** potential savings from images
- Images not compressed
- No width/height attributes
- Not using modern formats (WebP)

### Solution A: Automated Image Optimization Script

I've created `optimize-images.js` script for you. See the separate file.

### Solution B: Manual Optimization

#### Tools to Use:
1. **TinyPNG** (https://tinypng.com/) - Compress PNG/JPG
2. **Squoosh** (https://squoosh.app/) - Convert to WebP
3. **ImageOptim** (Mac) or **FileOptimizer** (Windows)

#### Process:
1. Find all images in `public/` and `src/assets/`
2. Compress each image (aim for 70-80% quality)
3. Convert to WebP format
4. Keep original as fallback

#### Add Width/Height to Images:
```jsx
// Before
<img src="/image.jpg" alt="Description" />

// After
<img 
  src="/image.webp" 
  alt="Description" 
  width="800" 
  height="600"
  loading="lazy"
/>
```

### Expected Impact:
- **11,300 KiB** reduction in page size
- **2-3 seconds** faster load time
- **+15-20 points** in Performance score

---

## 3. 📦 CACHING HEADERS (11,973 KiB Savings)

### Current Issue:
- No cache headers set
- Browser downloads same files every visit
- 11,973 KiB potential savings

### Solution: Configure Vercel Headers

Create `vercel.json` in root (or update existing):

```json
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*\\.(jpg|jpeg|png|gif|webp|svg|ico))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*\\.(js|css))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*\\.(woff|woff2|ttf|otf))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

### What This Does:
- **Static files** (images, JS, CSS): Cached for 1 year
- **HTML pages**: Always fresh (revalidate)
- **Fonts**: Cached for 1 year
- **Immutable**: Browser never checks if file changed

### Expected Impact:
- **11,973 KiB** savings on repeat visits
- **Faster page loads** for returning visitors
- **+5-10 points** in Performance score

---

## 4. 📦 JAVASCRIPT BUNDLE OPTIMIZATION

### Current Issue:
- **215 KiB** unused JavaScript
- **50 KiB** unused CSS
- **9 KiB** legacy JavaScript
- Large bundle sizes

### Solution A: Code Splitting (Already Implemented!)

Your code already uses lazy loading:
```javascript
const GoogleReviewsCarousel = lazy(() => import('...'));
```

Good job! This is already optimized.

### Solution B: Remove Unused Dependencies

#### Analyze Bundle:
```bash
npm install --save-dev webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

#### Common Unused Dependencies to Remove:
- Unused icon libraries
- Duplicate dependencies
- Large moment.js (use date-fns instead)

### Solution C: Tree Shaking

Ensure imports are specific:
```javascript
// ❌ Bad - imports entire library
import { HiChevronLeft } from 'react-icons/hi';

// ✅ Good - imports only what's needed
import HiChevronLeft from 'react-icons/hi/HiChevronLeft';
```

### Solution D: Minification (Automatic in Production)

Ensure production build:
```bash
npm run build
```

### Expected Impact:
- **215 KiB** JavaScript reduction
- **50 KiB** CSS reduction
- **+5-10 points** in Performance score
- **Faster initial load**

---

## 5. 🎨 FONT OPTIMIZATION (120ms Savings)

### Current Issue:
- Font display causing 120ms delay
- Fonts blocking render

### Solution: Optimize Font Loading

#### In your CSS:
```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/yourfont.woff2') format('woff2');
  font-display: swap; /* ← Add this */
  font-weight: 400;
  font-style: normal;
}
```

#### Or use Google Fonts with display=swap:
```html
<link 
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" 
  rel="stylesheet"
/>
```

### Expected Impact:
- **120ms** faster render
- **No flash of invisible text**
- **+2-5 points** in Performance score

---

## 6. 🔗 FIX DESCRIPTIVE LINK TEXT (SEO Issue)

### Current Issue:
- 5 links with non-descriptive text ("1st Party", "Learn More")

### Solution: Add Descriptive Text

#### Find and Update:
```jsx
// ❌ Bad
<a href="/tint">Learn More</a>

// ✅ Good
<a href="/tint">Learn More About Window Tinting</a>

// Or use aria-label
<a href="/tint" aria-label="Learn more about window tinting services">
  Learn More
</a>
```

### Expected Impact:
- **Better SEO** (from 92 to 95+)
- **Better accessibility**
- **Clearer user experience**

---

## 📊 EXPECTED RESULTS AFTER ALL FIXES

### Before:
| Metric | Score |
|--------|-------|
| Performance | 63 |
| Accessibility | 83 |
| Best Practices | 96 |
| SEO | 92 |

### After:
| Metric | Score | Improvement |
|--------|-------|-------------|
| Performance | **85+** | **+22** |
| Accessibility | **90+** | **+7** |
| Best Practices | **98+** | **+2** |
| SEO | **95+** | **+3** |

### Load Time Improvements:
- **First Contentful Paint**: 4.0s → **1.5s** (-2.5s)
- **Largest Contentful Paint**: 8.6s → **2.5s** (-6.1s)
- **Speed Index**: 5.7s → **2.0s** (-3.7s)
- **Total Page Size**: 12,137 KiB → **5,000 KiB** (-7,137 KiB)

---

## 🚀 IMPLEMENTATION PRIORITY

### Priority 1: Quick Wins (Do Today)
1. ✅ Configure Google Reviews API keys (5 min)
2. ✅ Add caching headers to vercel.json (5 min)
3. ✅ Fix descriptive link text (10 min)

**Expected Impact**: +10-15 points, eliminates errors

### Priority 2: Medium Effort (This Week)
1. 🖼️ Compress and optimize images (1-2 hours)
2. 🎨 Add font-display: swap (10 min)
3. 📦 Remove unused CSS/JS (30 min)

**Expected Impact**: +15-20 points, much faster load

### Priority 3: Long-term (This Month)
1. 🔄 Convert images to WebP (1 hour)
2. 📊 Analyze and optimize bundles (2 hours)
3. ⚡ Implement service worker for caching (2 hours)

**Expected Impact**: +5-10 points, perfect score

---

## 🧪 TESTING AFTER CHANGES

### After Each Fix:
1. Deploy to Vercel
2. Wait 5 minutes for deployment
3. Test at: https://pagespeed.web.dev/
4. Enter: `https://beyonddetail.ca/`
5. Check improvements

### Monitor:
- Performance score
- Load times (FCP, LCP)
- Console errors (should be 0)
- Page size reduction

---

## 📝 CHECKLIST

### Google Reviews API
- [ ] Get Google API key
- [ ] Enable Places API
- [ ] Add to Vercel environment variables
- [ ] Add to .env.local for local dev
- [ ] Redeploy and test
- [ ] Verify no console errors

### Image Optimization
- [ ] Run optimize-images.js script
- [ ] Or manually compress all images
- [ ] Convert to WebP format
- [ ] Add width/height attributes
- [ ] Add loading="lazy" to below-fold images
- [ ] Test page load time

### Caching Headers
- [ ] Update vercel.json with cache headers
- [ ] Deploy to Vercel
- [ ] Test with DevTools Network tab
- [ ] Verify cache headers present

### JavaScript Optimization
- [ ] Analyze bundle with webpack-bundle-analyzer
- [ ] Remove unused dependencies
- [ ] Ensure tree shaking works
- [ ] Verify lazy loading working
- [ ] Test bundle size reduction

### Font Optimization
- [ ] Add font-display: swap to all fonts
- [ ] Preload critical fonts
- [ ] Test font loading performance

### Link Text
- [ ] Find all "Learn More" links
- [ ] Add descriptive text or aria-labels
- [ ] Test with screen reader
- [ ] Verify SEO score improves

---

## 🆘 TROUBLESHOOTING

### Google Reviews Still Not Working?
1. Check Vercel environment variables are set
2. Verify API key is valid and not restricted
3. Check Places API is enabled in Google Cloud
4. Look at Vercel function logs for errors
5. Test API endpoint directly: `/api/get-google-reviews`

### Images Still Large?
1. Check if WebP is supported by browser
2. Verify images are actually compressed
3. Use DevTools Network tab to check sizes
4. Consider using CDN (Cloudinary, Imgix)

### Caching Not Working?
1. Check vercel.json is in root directory
2. Verify headers in DevTools Network tab
3. Clear browser cache and test again
4. Check Vercel deployment logs

### Bundle Still Large?
1. Run `npm run build` to see actual sizes
2. Check for duplicate dependencies
3. Ensure production build is deployed
4. Consider code splitting more components

---

## 📚 RESOURCES

### Tools:
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **Bundle Analyzer**: https://www.npmjs.com/package/webpack-bundle-analyzer
- **Google Cloud Console**: https://console.cloud.google.com/

### Documentation:
- **Vercel Headers**: https://vercel.com/docs/edge-network/headers
- **Google Places API**: https://developers.google.com/maps/documentation/places/web-service
- **Web Vitals**: https://web.dev/vitals/
- **Image Optimization**: https://web.dev/fast/#optimize-your-images

---

**Created**: November 20, 2025
**Target**: Performance 85+, SEO 95+
**Current**: Performance 63, SEO 92
**Improvement Potential**: +22 points Performance, +3 points SEO
