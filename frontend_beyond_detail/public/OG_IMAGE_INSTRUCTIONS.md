# OG Image Setup Instructions

## What is an OG Image?

An Open Graph (OG) image is the image that appears when your website is shared on social media platforms like Facebook, Twitter, and LinkedIn. It's a crucial element for social media marketing and SEO.

## Current Status

The SEO component is configured to use an OG image at: `https://beyonddetail.ca/og-image.jpg`

However, this file doesn't exist yet in the `public` folder.

## How to Create an OG Image

### Requirements:
- **Dimensions:** 1200 x 630 pixels (Facebook recommended)
- **Format:** JPG or PNG
- **File Size:** Under 1MB (preferably under 300KB)
- **Aspect Ratio:** 1.91:1

### Content Should Include:
1. Your logo (Beyond Detail)
2. Main headline: "Professional Auto Detailing"
3. Location: "Scarborough & Toronto"
4. Key services: "Window Tinting | Paint Correction | Ceramic Coating"
5. Contact: "(647) 689-6109"
6. Professional car detailing image in background

### Tools to Create:
1. **Canva** (Free): https://www.canva.com
   - Search for "Facebook Post" template (1200x630)
   - Customize with your branding
   - Download as JPG

2. **Photoshop/GIMP**
   - Create new document: 1200 x 630 pixels
   - Design with your branding
   - Export as JPG

3. **Online Tools:**
   - https://www.bannerbear.com
   - https://og-image.vercel.app

## Steps to Add:

1. Create the image (1200x630px)
2. Save as `og-image.jpg`
3. Place in `frontend_beyond_detail/public/` folder
4. The SEO component will automatically use it

## Testing:

After adding the image, test it using:
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

Enter your URL and click "Scrape Again" to see the preview.

## Alternative: Use Existing Logo

If you want a quick solution, you can temporarily use your existing logo:
- Copy `logo512.png` to `og-image.jpg`
- Or create a simple image with your logo and text

## Impact on SEO:

- ✅ Better social media previews
- ✅ More professional appearance
- ✅ Higher click-through rates
- ✅ Better social media authority score

