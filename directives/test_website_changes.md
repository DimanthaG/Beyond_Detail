# Directive: Test Website Changes

## Goal
Systematically verify that website changes are working correctly in the browser before considering them complete.

## Context
After making code changes, especially bulk updates, it's critical to verify in a real browser that:
- Components render correctly
- No console errors appear
- Styling is applied properly
- Interactions work as expected

## Tools/Scripts to Use
- **Dev Server**: `npm run dev` (runs on port 5173 or 3000)
- **Browser Subagent**: For automated testing and screenshots
- **Manual Testing**: For complex interactions

## Testing Process

### 1. Start/Verify Dev Server
```bash
# Check if server is running
# If not, start it:
cd frontend_beyond_detail
npm run dev
```

### 2. Browser Testing Checklist
- [ ] Homepage loads without errors
- [ ] Service pages display all components
- [ ] TrustBadges visible (4 badges)
- [ ] SkillShowcase visible ("MASTERY IN DETAIL")
- [ ] Glassmorphism effects rendering
- [ ] Smooth animations/transitions
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] No console errors (except expected warnings)

### 3. Specific Component Verification

**TrustBadges:**
- Lifetime Warranty badge visible
- Certified Professionals badge visible
- Top Rated in GTA badge visible
- Satisfaction Guaranteed badge visible

**SkillShowcase:**
- "MASTERY IN DETAIL" heading visible
- Expertise areas displayed
- Icons rendering correctly

**Glassmorphism:**
- Blur effects applied
- Subtle borders visible
- Transparency working

### 4. Page-Specific Tests

**Service Pages:**
- Hero section loads
- Gallery displays (if applicable)
- Premium overview section visible
- ServicePricing component shows packages
- GoogleReviewsCarousel loads
- TrustBadges before Contact
- SkillShowcase before Contact

**Neighborhood Pages:**
- Location-specific content correct
- Internal links working
- TrustBadges and SkillShowcase present
- No duplicate components

## Browser Subagent Task Template
```
Navigate to http://localhost:5173 (or :3000) and verify:
1. Open the homepage
2. Navigate to [specific page]
3. Scroll to verify [specific component]
4. Take screenshot showing [component]
5. Check console for errors
6. Report findings
```

## Success Criteria
- ✅ All pages load without critical errors
- ✅ All new components visible and styled correctly
- ✅ No broken imports or missing dependencies
- ✅ Performance acceptable (no major slowdowns)
- ✅ Screenshots confirm visual correctness

## Common Issues & Solutions

### Port Issues
- **Problem**: Server not on expected port
- **Solution**: Try both :5173 and :3000, check terminal output

### Component Not Visible
- **Problem**: Component imported but not rendering
- **Solution**: Check Suspense wrapping, verify import path, check console

### Styling Issues
- **Problem**: Components render but look wrong
- **Solution**: Verify SCSS imports, check CSS variables, inspect element

### Console Errors
- **Problem**: Import errors or missing dependencies
- **Solution**: Check file paths, verify component exports, npm install if needed

## Expected Warnings (Safe to Ignore)
- Google Reviews API warnings in local environment
- Sanity CMS connection warnings (if CMS is down)
- Development-only React warnings

## Learnings (Updated: 2026-01-22)
- **Port Flexibility**: Dev server may run on :5173 or :3000
- **Screenshot Verification**: Always capture screenshots as proof
- **Console Monitoring**: Check for errors, but ignore expected warnings
- **Scroll Testing**: Components may be below fold, scroll to verify
- **Multiple Pages**: Test at least one page from each category

## Related Directives
- `apply_premium_design_standards.md` - What to verify
- `update_neighborhood_pages.md` - Bulk update testing
