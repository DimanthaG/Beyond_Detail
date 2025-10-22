# Sanity CMS - Content Population Instructions

This guide explains how to add content to your Sanity CMS for the Beyond Detail website. All new content will automatically appear on the website once published.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Service Pages](#service-pages)
3. [FAQs](#faqs)
4. [Blog Posts](#blog-posts)
5. [Common Tasks](#common-tasks)
6. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Step 1: Access Sanity Studio

1. Navigate to your Sanity Studio URL (typically `https://yourproject.sanity.studio` or run `npm start` in the `backend_sanity` folder)
2. Log in with your Sanity account credentials
3. You should see the main dashboard with a list of document types on the left sidebar

### Step 2: Understand the Dashboard

- **Left Sidebar**: Lists all available document types (Services, FAQs, Blog, etc.)
- **Main Area**: Shows existing documents or form to create new ones
- **Publish Button**: Appears at the top-right when you have unsaved changes

---

## Service Pages

The website now has individual pages for each service. Each service page displays:
- Service title and description
- Header image
- Features/benefits list
- Pricing options

### Available Service Types

Create documents for any of these service types:

1. **Paint Correction** - Route: `/paint-correction`
2. **Ceramic Coatings** - Route: `/ceramic-coatings`
3. **Interior Detailing** - Route: `/interior-detailing`
4. **Exterior Detailing** - Route: `/exterior-detailing`
5. **Headlight Restoration** - Route: `/headlight-restoration`
6. **Odour Removal** - Route: `/odour-removal`
7. **Leather Cleaning** - Route: `/leather-cleaning`
8. **Paint Removal** - Route: `/paint-removal`
9. **Fleet Services** - Route: `/fleet-services`

### How to Create a Service Page

#### Step 1: Start Creating

1. In Sanity Studio, click on one of the service types in the left sidebar (e.g., "Paint Correction")
2. Click the **Create** button or **+ Create** button
3. A form will appear with fields to fill

#### Step 2: Fill in the Fields

**Title** (Required)
- Enter the service name exactly (e.g., "Paint Correction")
- This will appear as the main heading on the page

**Description** (Required)
- Short summary of the service (2-3 sentences)
- Appears below the title on the page
- Example: "Professional paint correction to remove swirl marks and light scratches."

**Detailed Description** (Required)
- Rich text field for longer explanation
- Use the formatting toolbar to:
  - Add bold/italic text
  - Create bullet points
  - Add links
  - Format headings

**Header Image** (Required)
- Click the image area to upload
- Recommended size: 1200 x 600 pixels
- Format: JPG or PNG
- After uploading, you can crop the image by dragging the corners

**Pricing Options** (Required - Add at least 1)
- Click "Add Pricing Option"
- For each option, fill in:
  - **Package Name**: e.g., "Basic", "Professional", "Premium"
  - **Price**: e.g., "$99" or "$99-$199" (include currency symbol)
  - **Description**: What's included in this package
- Add multiple pricing tiers (e.g., 3-5 options)

**Features** (Required - Add at least 5)
- Click "Add Feature"
- Enter each feature/benefit as a separate item
- Examples:
  - "Professional-grade equipment"
  - "Eco-friendly products"
  - "Free consultation"
  - "Satisfaction guaranteed"

#### Step 3: Preview and Publish

1. Scroll to the top and click the **Preview** button to see how it looks
2. If satisfied, click the **Publish** button
3. The content will appear on the website immediately

#### Example: Paint Correction Service

```
Title: Paint Correction

Description: 
Remove swirl marks and light scratches with our professional paint correction service. 

Detailed Description:
Paint correction is a specialized process that removes surface imperfections without damaging the original paint. Our team uses advanced techniques and professional-grade equipment to restore your vehicle's finish to its original glory.

What's Included:
• Professional clay bar treatment
• Multi-stage paint correction
• Ceramic protectant application
• Final inspection

Header Image: [Upload paint-correction-hero.jpg]

Pricing Options:
1. Basic Package: $299 - Single panel correction and protection
2. Full Vehicle: $599 - Complete vehicle correction and ceramic coat
3. Premium Plus: $899 - Full correction, ceramic coat, and 12-month warranty

Features:
• Uses professional-grade compounds
• Eco-friendly and safe for your vehicle
• Free color matching service
• Satisfaction guaranteed or money back
• Experienced technicians with 10+ years
```

---

## FAQs

The website has a dedicated FAQs page at `/faqs` with category filtering and an accordion interface.

### How to Create an FAQ

#### Step 1: Start Creating

1. In Sanity Studio, click on **"FAQs"** in the left sidebar
2. Click the **Create** button
3. A form will appear with FAQ fields

#### Step 2: Fill in the Fields

**Question** (Required)
- Enter the frequently asked question
- Examples:
  - "How long does paint correction take?"
  - "Is the service safe for my vehicle's paint?"
  - "What payment methods do you accept?"

**Answer** (Required)
- Use the rich text editor to provide a detailed answer
- You can:
  - Add bold/italic text
  - Create bullet points and numbered lists
  - Add links
  - Format as needed

**Category** (Required)
- Select one of four categories:
  - **General** - General questions about the business
  - **Services** - Questions about specific services
  - **Pricing** - Questions about pricing and payment
  - **Booking** - Questions about scheduling and appointments

**Order** (Optional)
- Enter a number to control display order (1, 2, 3, etc.)
- Lower numbers appear first
- Leave blank if order doesn't matter

#### Step 3: Publish

1. Click **Publish** when complete
2. The FAQ will appear on the `/faqs` page immediately

#### Example FAQs

**FAQ 1 - General Category**
```
Question: What is Beyond Detail?

Answer:
Beyond Detail is a professional automotive detailing service specializing in paint correction, ceramic coatings, interior/exterior detailing, and more. Our experienced team uses cutting-edge equipment and eco-friendly products to restore and protect your vehicle's finish.

Order: 1
Category: General
```

**FAQ 2 - Services Category**
```
Question: What's the difference between paint correction and polishing?

Answer:
• Polishing: Surface treatment that adds shine but doesn't remove defects
• Paint Correction: Professional process that removes swirl marks, scratches, and other imperfections

Paint correction is a more intensive process but provides superior results for damaged paint.

Order: 1
Category: Services
```

**FAQ 3 - Pricing Category**
```
Question: Do you offer discounts for multiple services?

Answer:
Yes! We offer package discounts for customers bundling multiple services. For example:
• Paint Correction + Ceramic Coating = 15% off total
• Full Detail + Ceramic Coating + Headlight Restoration = 20% off total

Contact us for a custom quote.

Order: 1
Category: Pricing
```

---

## Blog Posts

The website has a blog section at `/blog` where you can publish articles. Each blog post appears on the list and has its own detail page.

### How to Create a Blog Post

#### Step 1: Start Creating

1. In Sanity Studio, click on **"Blog"** in the left sidebar
2. Click the **Create** button
3. A blog post form will appear

#### Step 2: Fill in the Fields

**Title** (Required)
- Enter the blog post title
- Examples:
  - "5 Tips to Keep Your Car's Paint Looking New"
  - "How to Prepare Your Vehicle for Winter"
  - "Inside Look: Our Paint Correction Process"

**Slug** (Auto-generated)
- This creates the URL for the blog post
- Auto-generates from the title but can be edited
- Example: If title is "5 Tips to Keep Paint New", slug is "5-tips-to-keep-paint-new"
- URL becomes: `/blog/5-tips-to-keep-paint-new`
- Keep it short and descriptive

**Author** (Required)
- Enter your name or the writer's name
- Example: "John Smith" or "Beyond Detail Team"

**Published At** (Required)
- Click to set the publication date and time
- Use this to schedule posts or set past dates for backlog

**Excerpt** (Required)
- Short summary (2-3 sentences) that appears in the blog list
- Should entice readers to click on the full post
- Example: "Learn professional tips from our detailing experts to keep your car looking showroom-fresh for years."

**Main Image** (Recommended)
- Featured image for the blog post
- Appears in blog list and at top of detail page
- Recommended size: 800 x 400 pixels
- Can crop/adjust after uploading

**Content** (Required)
- Main blog post content using rich text editor
- Add:
  - Paragraphs of text
  - Headings (use H2, H3 for subheadings)
  - Bold/italic text for emphasis
  - Bullet and numbered lists
  - Images inline with the text

**Categories** (Optional)
- Add topic tags to organize blog posts
- Examples: "Maintenance", "Paint Protection", "Seasonal Tips", "How-To"
- You can create new categories or select existing ones

#### Step 3: Preview and Publish

1. Click **Preview** to see how the blog post looks
2. Click **Publish** to make it live
3. The post will appear on `/blog` and at `/blog/{slug}`

#### Example Blog Post

```
Title: 5 Essential Tips to Protect Your Vehicle's Paint

Slug: 5-essential-tips-protect-vehicle-paint

Author: Beyond Detail Team

Published At: October 22, 2025

Excerpt:
Your vehicle's paint is constantly exposed to environmental hazards. Learn five professional tips from our detailing experts to keep your car's finish protected and looking new.

Main Image: [Upload blog-paint-tips.jpg]

Content:
Your vehicle's paint is under constant assault from UV rays, bird droppings, tree sap, road salt, and more. Protecting it requires a multi-faceted approach.

Here are five essential tips to keep your paint looking pristine:

1. Wash Regularly (Every 2 Weeks)
Regular washing removes contaminants before they etch into the paint. Use a two-bucket method to prevent swirl marks.

2. Use a Ceramic Coating
A professional ceramic coating creates a protective barrier that lasts 1-3 years. It repels water, UV rays, and contaminants.

3. Park in the Shade
UV rays fade paint over time. Whenever possible, park in a garage or under cover to minimize sun exposure.

4. Avoid Automatic Car Washes
Automatic brushes cause micro-scratches. Use touchless or hand washes instead.

5. Get Professional Detail Regularly
Have your paint professionally corrected and protected 1-2 times per year. Our team can remove damage before it becomes permanent.

Categories: [Maintenance, Paint Protection, How-To]
```

---

## Common Tasks

### How to Edit Existing Content

1. Click on the document type in the left sidebar
2. Find the document you want to edit in the list
3. Click on it to open
4. Make your changes
5. Click **Publish** to save (you may need to click **Save** first if it's a draft)

### How to Delete Content

1. Open the document you want to delete
2. Click the **Delete** button (usually in the top toolbar)
3. Confirm the deletion

### How to Preview Changes

1. While editing a document, click the **Preview** button
2. A side-by-side preview will show how it looks on the website
3. Changes update in real-time as you type

### How to Schedule Publication

1. Open a document and make your changes
2. Instead of clicking Publish immediately, you can set a scheduled time
3. Click the publish dropdown and select "Schedule"
4. Choose the date and time
5. The document will automatically publish at that time

### How to Save as Draft

1. While editing, click **Save** instead of **Publish**
2. The document will save as a draft and won't appear on the website
3. You can return to edit drafts later
4. Click **Publish** when ready to go live

---

## Troubleshooting

### Content Not Appearing on Website

**Problem**: I published content but it's not showing on the website

**Solutions**:
1. **Check it's published**: In Sanity Studio, look for a green checkmark indicating published status
2. **Clear browser cache**: Press Ctrl+Shift+Delete and clear browser cache
3. **Refresh the website**: Press Ctrl+R (or Cmd+R on Mac) to hard refresh
4. **Check document type name**: Make sure it matches exactly (e.g., "paintCorrection" not "paint-correction")
5. **Wait a moment**: Sometimes it takes a few seconds to sync

### Image Not Uploading

**Problem**: Image upload fails or hangs

**Solutions**:
1. Check file size is under 20MB
2. Ensure file format is JPG or PNG
3. Try a different image
4. Clear browser cache and try again
5. Try a different browser

### Rich Text Formatting Not Working

**Problem**: Bold, italic, or list formatting isn't applying

**Solutions**:
1. Select the text first, then click the formatting button
2. Use keyboard shortcuts:
   - **Bold**: Ctrl+B (or Cmd+B)
   - **Italic**: Ctrl+I (or Cmd+I)
3. Reload the page and try again

### Can't Find Document Type

**Problem**: I don't see the service or document type I'm looking for

**Solutions**:
1. Scroll down in the left sidebar - you may need to scroll to find it
2. Check spelling of document type name
3. The document type may need to be created first in schema
4. Contact your developer if it's still missing

### Form Validation Errors

**Problem**: Can't publish because of "required field" errors

**Solutions**:
1. Look for fields highlighted in red
2. Fill in all required fields (marked with *)
3. Make sure:
   - Title is not empty
   - At least one image is uploaded (if required)
   - Category is selected (for FAQs)
   - Price is formatted correctly (include currency)
4. Click Publish again

---

## Quick Reference - Field Types

### Text Field
- Simple single-line text
- Used for titles, names, etc.
- Click in the box and type

### Rich Text Field (WYSIWYG Editor)
- Multi-line text with formatting options
- Supports bold, italic, headings, lists, links, images
- Click in the area and use the toolbar above

### Dropdown/Select Field
- Choose one option from a list
- Click to open dropdown menu
- Select one option

### Image Field
- Upload or select an image
- Click to open file picker or drag-and-drop
- After upload, you can crop/adjust

### Array Field (Add multiple items)
- Useful for pricing options, features, etc.
- Look for "Add [Item Name]" button
- Click to add new items
- Click the X to remove items

---

## Important Notes

1. **Always Publish**: Changes only appear on the website after clicking **Publish**
2. **Spelling Matters**: URLs and routing are based on exact naming (e.g., "paintCorrection" vs "paint-correction")
3. **Images Recommended**: Service pages and blog posts look better with high-quality images
4. **Responsive Design**: Content automatically adapts to mobile, tablet, and desktop
5. **No HTML Needed**: Use the rich text editor instead of writing HTML
6. **Backup Content**: Consider keeping copies of important content in case you need to restore

---

## Need Help?

If you encounter issues:
1. Check this guide first - your question may be answered above
2. Try refreshing your browser and Sanity Studio
3. Check the Sanity CMS documentation at https://www.sanity.io/docs
4. Contact your developer for more complex issues

---

## Content Checklist

Before considering your website complete, create at minimum:

### Services
- [ ] Paint Correction
- [ ] Ceramic Coatings
- [ ] Interior Detailing
- [ ] Exterior Detailing

### FAQs
- [ ] 2-3 FAQs per category (8-12 total)
- [ ] Categories: General, Services, Pricing, Booking

### Blog
- [ ] 3-5 initial blog posts
- [ ] Mix of educational and promotional content

---

**Last Updated**: October 22, 2025
**Version**: 1.0
