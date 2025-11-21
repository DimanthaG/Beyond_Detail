# Quick Deployment Commands

## Ready to Deploy? Follow These Steps:

### 1. Configure Vercel Environment Variables (5 minutes)

Go to: https://vercel.com/dashboard → Your Project → Settings → Environment Variables

Add these variables for **Production, Preview, and Development**:

```bash
GOOGLE_PLACES_SERVER_KEY=AIzaSyC8ZC_1JTSj0CYdgi4my3fON7cAdRi9RN8
GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY
REACT_APP_MAPS_KEY=AIzaSyA1bzyjkG3zLLunV5XqDyFmiJogp9ihuMw
REACT_APP_GOOGLE_PLACES_API_KEY=AIzaSyC8ZC_1JTSj0CYdgi4my3fON7cAdRi9RN8
REACT_APP_GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY
REACT_APP_SANITY_PROJECT_ID=trp6l9ar
REACT_APP_SANITY_TOKEN=skuntCty4371fJlKOehv0YoNV2h8LMisAM4zVnE0DO8bp73erLxS5mTI5EnGDCHI7FWShCPFCEcjURGnKw4eeYYs2O0SEhM8hshOCqJ8cXtOLnulZ83s6HcW4WO7hg2hI2S0zAVJYujwrMF7Q1ysm6YkAQEDdf6AhZj9SkT2cr0RcJ8MDZNP
```

---

### 2. Commit and Push Changes

Open PowerShell/Terminal and run:

```powershell
# Navigate to project
cd "c:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail"

# Check what's changed
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Performance & Accessibility Optimizations

- Optimized 200+ images to WebP format with responsive sizes
- Fixed accessibility: form labels and heading hierarchy  
- Added Google API security configuration
- Expected LCP improvement: 7.8s → 2.5s"

# Push to trigger deployment
git push origin main
```

---

### 3. Monitor Deployment

1. Go to https://vercel.com/dashboard
2. Watch deployment progress (2-5 minutes)
3. Wait for "Ready" status

---

### 4. Test After Deployment

#### Test Google Reviews:
- Visit: https://www.beyonddetail.ca
- Check if reviews load (no errors in console)

#### Test Google Maps:
- Visit: https://www.beyonddetail.ca/contact
- Verify map displays correctly

#### Test Performance:
- Open DevTools (F12) → Lighthouse
- Run performance audit
- **Expected LCP**: < 2.5s (was ~7.8s)

---

## What Was Optimized?

✅ **202 WebP images** created (25-35% smaller)  
✅ **Responsive image sizes** (400w, 800w, 1200w, 1600w)  
✅ **Accessibility fixes** (form labels, heading hierarchy)  
✅ **Google API security** configured  

---

## Expected Results:

| Metric | Before | After | Target |
|--------|--------|-------|--------|
| **LCP** | 7.8s | ~2.0s | < 2.5s |
| **Performance Score** | 60 | 85-95 | > 90 |
| **Accessibility** | 90 | 95-100 | > 95 |
| **Image Size** | ~800KB | ~200KB | Smaller |

---

## Need Help?

- **API Setup**: See `GOOGLE_API_KEY_SECURITY_SETUP.md`
- **Full Guide**: See `DEPLOYMENT_GUIDE.md`
- **Rollback**: Vercel Dashboard → Deployments → Previous version → Promote

---

**Ready to deploy? Start with Step 1 above! 🚀**
