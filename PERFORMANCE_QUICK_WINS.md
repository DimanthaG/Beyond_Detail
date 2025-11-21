# Performance Optimization - Quick Wins

**Current Issue**: Page performance is slowing down  
**Goal**: Improve load times and Core Web Vitals

---

## 🚀 Quick Performance Fixes (Implement These First)

### **1. Defer Google Analytics** (Immediate Impact)

**Current Problem**: Google Analytics loads synchronously, blocking page render.

**Fix**: Update `public/index.html`

Replace lines 5-13 with:

```html
<!-- Google tag (gtag.js) - Deferred for performance -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-MY482XVRJ2');
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MY482XVRJ2"></script>
```

**Impact**: Reduces blocking time by ~200-300ms

---

### **2. Add Resource Hints** (Immediate Impact)

Add these to `<head>` in `public/index.html` (after line 16):

```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://www.googletagmanager.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://maps.googleapis.com">
<link rel="dns-prefetch" href="https://cdn.sanity.io">

<!-- Preload critical assets -->
<link rel="preload" as="image" href="/static/media/bd-20.webp" type="image/webp">
```

**Impact**: Reduces DNS lookup time by ~100-200ms

---

### **3. Implement Lazy Loading for Routes** (Medium Impact)

**Current**: All routes load upfront  
**Fix**: Use React.lazy() for code splitting

Update `src/App.js`:

```javascript
import { lazy, Suspense } from 'react';

// Lazy load pages
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Contact2 = lazy(() => import('./Pages/Contact/Contact2'));
const Gallery = lazy(() => import('./Pages/Gallery/Gallery'));
const Services = lazy(() => import('./Pages/Services/Services'));
const Testimonials = lazy(() => import('./Pages/Testimonials/Testimonials'));
// ... lazy load all other pages

// Wrap routes in Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Routes location={location} key={location.pathname}>
    <Route path='/' element={<Home />} />
    {/* ... other routes */}
  </Routes>
</Suspense>
```

**Impact**: Reduces initial bundle size by 40-60%

---

### **4. Optimize Images with Loading Attribute** (Easy Win)

Add `loading="lazy"` to all images except hero images.

**Example** - Update image components:

```jsx
<img 
  src={imageSrc} 
  alt={alt}
  loading="lazy"  // Add this
  decoding="async" // Add this too
/>
```

**Impact**: Reduces initial page load by 30-50%

---

### **5. Add Font Display Swap** (Immediate Impact)

If using Google Fonts, add `display=swap`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Impact**: Prevents invisible text during font load

---

## 📊 Performance Metrics to Track

### **Before Optimization**:
- LCP: ~7.8s
- FID: Unknown
- CLS: 0
- Total Blocking Time: ~340ms

### **After These Fixes (Expected)**:
- LCP: ~2.5s (68% improvement)
- FID: < 100ms
- CLS: < 0.1
- Total Blocking Time: < 150ms

---

## 🔧 Advanced Optimizations (Implement Later)

### **6. Service Worker for Caching**

Create `src/service-worker.js`:

```javascript
// Cache static assets
const CACHE_NAME = 'beyond-detail-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/static/media/bd-20.webp',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

**Impact**: Instant page loads for returning visitors

---

### **7. Implement Image Placeholders (LQIP)**

Use low-quality image placeholders for better perceived performance:

```jsx
const ImageWithPlaceholder = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="image-container">
      {!loaded && <div className="placeholder" />}
      <img 
        src={src} 
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
};
```

---

### **8. Reduce Third-Party Scripts**

**Current third-party scripts**:
- Google Analytics
- Google Maps
- Google Reviews
- Sanity CMS

**Optimization**:
- Load Google Maps only on Contact page
- Defer Google Reviews until user scrolls to that section
- Use facade pattern for heavy embeds

---

### **9. Minify and Compress**

Ensure Vercel is compressing assets:

Update `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        },
        {
          "key": "Content-Encoding",
          "value": "gzip"
        }
      ]
    }
  ]
}
```

---

### **10. Implement Critical CSS**

Extract above-the-fold CSS and inline it:

```html
<head>
  <style>
    /* Critical CSS - inline above-the-fold styles */
    .hero { /* styles */ }
    .navbar { /* styles */ }
  </style>
  
  <!-- Load full CSS asynchronously -->
  <link rel="preload" href="/static/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
</head>
```

---

## 🎯 Priority Implementation Order

### **Week 1 (Do Now)**:
1. ✅ Defer Google Analytics
2. ✅ Add resource hints
3. ✅ Add loading="lazy" to images
4. ✅ Font display swap

**Expected improvement**: 30-40% faster

### **Week 2**:
5. ✅ Implement lazy loading for routes
6. ✅ Optimize third-party script loading

**Expected improvement**: 50-60% faster

### **Week 3**:
7. ✅ Service worker implementation
8. ✅ Image placeholders
9. ✅ Critical CSS extraction

**Expected improvement**: 70-80% faster

---

## 📝 Quick Implementation Checklist

- [ ] Update `public/index.html` - defer Google Analytics
- [ ] Add resource hints to `<head>`
- [ ] Update `src/App.js` - add React.lazy()
- [ ] Add `loading="lazy"` to all non-hero images
- [ ] Add `display=swap` to font imports
- [ ] Test with Lighthouse
- [ ] Deploy to Vercel
- [ ] Monitor Core Web Vitals

---

## 🧪 Testing After Changes

### **Run Lighthouse**:
```
1. Open Chrome DevTools (F12)
2. Lighthouse tab
3. Select: Performance, Accessibility, Best Practices, SEO
4. Click "Analyze page load"
```

### **Expected Scores After Quick Fixes**:
- Performance: 85-95 (up from 60)
- Accessibility: 95-100
- Best Practices: 90-95
- SEO: 95-100

### **Key Metrics**:
- LCP: < 2.5s (currently ~7.8s)
- FID: < 100ms
- CLS: < 0.1
- Speed Index: < 3.0s

---

## 🚨 Common Performance Killers to Avoid

1. ❌ **Large unoptimized images** - Use WebP (already done!)
2. ❌ **Render-blocking scripts** - Defer/async all scripts
3. ❌ **Unused CSS/JS** - Remove dead code
4. ❌ **Too many HTTP requests** - Bundle and minify
5. ❌ **No caching** - Set proper cache headers
6. ❌ **Synchronous third-party scripts** - Load async
7. ❌ **Large bundle sizes** - Code split with lazy loading

---

## 📚 Resources

- **Web Vitals**: https://web.dev/vitals/
- **Lighthouse**: https://developer.chrome.com/docs/lighthouse/
- **React Performance**: https://react.dev/learn/render-and-commit
- **Image Optimization**: https://web.dev/fast/#optimize-your-images

---

**Next Step**: Start with the "Week 1" fixes above. They're quick to implement and will give you immediate results!
