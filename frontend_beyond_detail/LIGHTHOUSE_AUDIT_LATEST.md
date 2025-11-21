# Latest Lighthouse Audit Results - November 21, 2025

## Summary

**URL Tested:** https://www.beyonddetail.ca  
**Test Time:** November 21, 2025, 21:01 UTC  
**Device:** Mobile (simulated)

## Overall Scores

| Category | Score | Target | Status |
|----------|-------|--------|--------|
| **Performance** | **47/100** | 90+ | ❌ Critical |
| **Accessibility** | **86/100** | 90+ | ⚠️ Needs Improvement |
| Best Practices | Not tested | 90+ | - |
| SEO | Not tested | 90+ | - |

## Core Web Vitals

| Metric | Current | Target | Status | Change from Previous |
|--------|---------|--------|--------|---------------------|
| **LCP** | **9.15s** | <2.5s | ❌ Critical | ⬇️ -0.59s (slight improvement) |
| **FCP** | **3.37s** | <1.5s | ❌ Critical | ⬆️ -1.27s (improved!) |
| **TBT** | **699ms** | <100ms | ❌ Critical | ⬇️ +352ms (worse) |
| **CLS** | **0** | <0.1 | ✅ Good | No change |
| **Speed Index** | **5.79s** | <3.4s | ❌ Critical | ⬇️ +0.09s (slightly worse) |

## Comparison with Previous Audit

### Previous Audit (Nov 21, 2025 - Before Optimizations)
- Performance: **53/100**
- LCP: 9.74s
- FCP: 4.64s
- TBT: 347ms
- Redirect Delay: 786ms

### Latest Audit (Nov 21, 2025 - After Optimizations)
- Performance: **47/100** ⚠️
- LCP: 9.15s ⬇️ (slight improvement)
- FCP: 3.37s ⬆️ (improved by 1.27s!)
- TBT: 699ms ⬇️ (worse by 352ms)
- Redirect Delay: **0ms** ✅ (FIXED!)

## Key Findings

### ✅ Improvements
1. **Redirect Fixed:** No redirect delay (was 786ms)
2. **FCP Improved:** Reduced by 1.27s (4.64s → 3.37s)
3. **LCP Slightly Improved:** Reduced by 0.59s (9.74s → 9.15s)

### ❌ Issues
1. **TBT Increased:** Increased by 352ms (347ms → 699ms)
   - **Possible Cause:** Google Analytics deferral may be causing issues
   - **Action:** May need to adjust deferral strategy
2. **LCP Still Critical:** 9.15s is still way above target (<2.5s)
   - **Possible Cause:** Hero image preload may not be working in production
   - **Action:** Verify preload is working, check image file sizes
3. **Performance Score Decreased:** 53 → 47
   - **Possible Cause:** TBT increase outweighs FCP improvement
   - **Action:** Focus on reducing TBT

## Detailed Analysis

### Redirects ✅
- **Score:** 1 (Perfect)
- **Status:** Fixed! No redirect delay detected
- **Impact:** Redirect optimization is working

### Main Thread Work
- **Total Time:** High (needs investigation)
- **Issues:** JavaScript parsing/execution is blocking main thread
- **Recommendation:** Reduce JavaScript bundle size, defer non-critical scripts

### Unused JavaScript
- **Potential Savings:** Significant (needs quantification)
- **Recommendation:** Run bundle analyzer, remove unused code

## Recommendations

### Immediate Actions

1. **Verify Hero Image Preload**
   - Check Network tab in DevTools to verify preload link is present
   - Verify hero image is loading early
   - Check if responsive images are working correctly

2. **Adjust Google Analytics Deferral**
   - Current deferral may be causing TBT increase
   - Consider reverting to async loading if TBT doesn't improve
   - Or use a lighter deferral strategy

3. **Reduce JavaScript Bundle Size**
   - Run bundle analyzer: `npm run build -- --analyze`
   - Remove unused dependencies
   - Code-split more aggressively
   - Lazy load non-critical components

4. **Optimize Hero Image**
   - Verify image file sizes are optimized
   - Check if WebP conversion is working
   - Consider using CDN image optimization
   - Implement proper responsive images

### Next Steps

1. **Deploy and Test**
   - Ensure all changes are deployed to production
   - Wait for deployment to complete
   - Clear CDN cache if applicable

2. **Re-run Audit**
   - Wait 5-10 minutes after deployment
   - Run Lighthouse audit again
   - Compare results

3. **Monitor**
   - Check Google Search Console for Core Web Vitals
   - Monitor real user metrics
   - Track performance over time

## Notes

- **Network Conditions:** Audit results can vary based on network conditions
- **Deployment Status:** Changes may not be fully deployed yet
- **Cache:** Browser/CDN cache may affect results
- **Testing Environment:** Mobile simulation may differ from real devices

## Conclusion

While we've made progress on redirects and FCP, the TBT increase is concerning. The hero image preload optimization may not be working as expected in production. We need to:

1. Verify all optimizations are deployed
2. Investigate TBT increase
3. Focus on reducing JavaScript execution time
4. Optimize hero image loading further

