# Blog SEO Quick Reference Guide
**Beyond Detail - Blog Management**

---

## 🚀 Quick Commands

### Update Sitemap (Run after publishing new blog posts)
```bash
npm run seo:sitemap
```
or
```bash
node generate-sitemap.js
```

### Analyze Blog Posts
```bash
npm run seo:analyze
```
or
```bash
node analyze-blogs.js
```

### Update Blog SEO Recommendations
```bash
npm run seo:update
```
or
```bash
node update-blogs-seo.js
```

---

## 📝 Publishing Checklist

### Before Publishing in Sanity
- [ ] SEO Title: 30-60 characters
- [ ] SEO Description: 120-160 characters
- [ ] Keywords: 5-10 relevant terms
- [ ] Related Services: Select relevant services
- [ ] Main Image: Upload with descriptive alt text
- [ ] Content: 300-2000 words
- [ ] Category: Select appropriate category
- [ ] Published Date: Set correctly

### After Publishing
1. **Update Sitemap:**
   ```bash
   npm run seo:sitemap
   ```

2. **Commit and Deploy:**
   ```bash
   git add public/sitemap.xml
   git commit -m "Update sitemap with new blog post"
   git push
   ```

3. **Submit to Google Search Console:**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Use "URL Inspection" tool
   - Enter blog post URL
   - Click "Request Indexing"

---

## 🔍 SEO Features

### Automatic Internal Linking
**Location:** `src/utils/blogLinker.jsx`

Keywords automatically linked:
- **Services:** window tint, ceramic coating, paint correction, car detailing
- **Locations:** Toronto, Scarborough, Markham, Pickering
- **Combined:** "window tint scarborough", "ceramic coating toronto", etc.

### Structured Data
**Location:** `src/Pages/Blog/Blog.jsx`

Every blog post includes:
- BlogPosting schema
- Article meta tags
- Open Graph tags
- Twitter Card tags

### Image Optimization
All images automatically optimized:
- WebP format with fallback
- Lazy loading
- Proper width/height attributes
- Alt text from Sanity

---

## 📊 Current Blog Statistics

**Total Posts:** 7
- Window Tinting: 3 posts
- Ceramic Coating: 1 post
- Interior Detailing: 1 post
- Seasonal Care: 1 post
- Exterior Detailing: 1 post

**SEO Status:** 100% Optimized ✅

---

## 🎯 Content Gaps to Fill

### High Priority
- Paint Correction (0 posts)
- Headlight Restoration (0 posts)
- More Ceramic Coating posts (only 1)

### Medium Priority
- Fleet Services (0 posts)
- Odour Removal (0 posts)
- Leather Cleaning (0 posts)

### Location-Specific
- Ajax
- Whitby
- Oshawa
- North York
- Vaughan

---

## 📈 Keyword Strategy

### Primary Keywords
- "window tint near me"
- "car detailing near me"
- "ceramic coating near me"
- "paint correction near me"

### Location Keywords
- "window tint scarborough"
- "car detailing toronto"
- "ceramic coating markham"
- "paint correction pickering"

### Price Keywords
- "window tint prices near me"
- "car detailing cost toronto"
- "ceramic coating pricing"

---

## 🔧 Files to Know

### SEO Configuration
- `src/components/SEO.jsx` - Main SEO component
- `src/utils/blogLinker.jsx` - Internal linking system
- `src/Pages/Blog/Blog.jsx` - Blog component with SEO

### Sitemap & Robots
- `public/sitemap.xml` - Sitemap (auto-generated)
- `public/robots.txt` - Robots configuration
- `generate-sitemap.js` - Sitemap generator script

### Analysis & Reports
- `analyze-blogs.js` - Blog analysis script
- `update-blogs-seo.js` - SEO recommendations script
- `BLOG_SEO_AUDIT_REPORT.md` - Comprehensive SEO audit
- `BLOG_IMPLEMENTATION_SUMMARY.md` - Implementation summary

---

## 🆘 Troubleshooting

### Blog not appearing in sitemap?
```bash
npm run seo:sitemap
```
Check `public/sitemap.xml` to verify it's included.

### Internal links not working?
Check `src/utils/blogLinker.jsx` to ensure keywords are configured.

### SEO meta tags not showing?
Verify blog post has `seoTitle`, `seoDescription`, and `keywords` in Sanity.

### Images not optimized?
Ensure images are uploaded to Sanity with proper alt text.

---

## 📚 Documentation

- **Full SEO Guide:** `BLOG_SEO_OPTIMIZATION.md`
- **SEO Audit:** `BLOG_SEO_AUDIT_REPORT.md`
- **Implementation Summary:** `BLOG_IMPLEMENTATION_SUMMARY.md`
- **Blog Analysis:** `BLOG_ANALYSIS_REPORT.md`

---

## 🎉 Quick Tips

### For Best SEO Results
1. Publish consistently (bi-weekly recommended)
2. Use "near me" keywords naturally
3. Include location names in content
4. Link to service pages
5. Add descriptive alt text to images
6. Keep content 300-2000 words
7. Update sitemap after publishing

### For Better Rankings
1. Target long-tail keywords
2. Create location-specific content
3. Update older posts regularly
4. Monitor Google Search Console
5. Request indexing for new posts
6. Build internal links
7. Optimize for mobile

---

**Last Updated:** December 3, 2025  
**Status:** ✅ All systems operational
