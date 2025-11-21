# How to Run Lighthouse Audit

## Method 1: Chrome DevTools (Recommended - Most Reliable)

1. **Open Chrome Browser**
2. **Navigate to:** https://beyonddetail.ca
3. **Open DevTools:**
   - Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
   - Or right-click → "Inspect"
4. **Open Lighthouse Tab:**
   - Click on the "Lighthouse" tab in DevTools
   - If you don't see it, click the `>>` icon to find it
5. **Configure Audit:**
   - Select categories: ✅ Performance, ✅ Accessibility
   - Device: Select "Mobile" or "Desktop"
   - Click "Analyze page load"
6. **View Results:**
   - Wait for audit to complete (~30-60 seconds)
   - Review scores and recommendations

## Method 2: Chrome DevTools Command Line

1. Open Chrome
2. Navigate to: `chrome://flags/#enable-devtools-experiments`
3. Enable "Developer Tools experiments"
4. Restart Chrome
5. Open DevTools → Settings → Experiments → Enable "Lighthouse"
6. Run audit from DevTools

## Method 3: PageSpeed Insights (Online)

1. Go to: https://pagespeed.web.dev/
2. Enter URL: `https://beyonddetail.ca`
3. Click "Analyze"
4. View results (includes both mobile and desktop)

## Method 4: Lighthouse CLI (If Permission Issues)

If you encounter permission errors, try:

```bash
# Run with admin privileges or use a different temp directory
set TEMP=C:\temp
lighthouse https://beyonddetail.ca --output=html --output-path=./lighthouse-report.html
```

Or install locally in project:
```bash
cd frontend_beyond_detail
npm install --save-dev lighthouse
npx lighthouse https://beyonddetail.ca --output=html --output-path=../lighthouse-report.html
```

## Expected Scores After Optimizations

Based on the optimizations we've implemented:

| Category | Before | Expected After |
|----------|--------|----------------|
| Performance | 71 | 85-90+ |
| Accessibility | 86 | 90+ |
| Best Practices | 96 | 96+ |
| SEO | 100 | 100 |

### Key Metrics to Check:

- **LCP (Largest Contentful Paint):** Should be <2.5s (was 8.5s)
- **FCP (First Contentful Paint):** Should be <1.5s (was 1.8s)
- **TBT (Total Blocking Time):** Should be <100ms (was 130ms)
- **CLS (Cumulative Layout Shift):** Should be <0.1 (was 0)

## What to Look For

### Performance Issues:
- ✅ Images should load faster (responsive images working)
- ✅ Fonts should load asynchronously
- ✅ JavaScript should be code-split
- ⚠️ Check for any remaining render-blocking resources

### Accessibility Issues:
- ✅ Form labels should be present
- ✅ All images should have alt text
- ✅ Color contrast should meet WCAG standards

## Troubleshooting

If scores don't improve as expected:
1. **Clear browser cache** before testing
2. **Test in incognito mode** to avoid extensions
3. **Wait for deployment** - changes may not be live yet
4. **Check network tab** - verify responsive images are loading
5. **Verify build** - ensure optimizations are in production build

