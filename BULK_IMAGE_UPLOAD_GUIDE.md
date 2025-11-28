# 🚀 Bulk Image Upload Guide for Service Gallery

This guide shows you how to upload multiple images at once instead of one-by-one.

---

## 🎯 Method 1: Using Media Plugin (Easiest - Recommended)

The Media plugin is already installed in your Sanity Studio. This method lets you upload multiple images first, then quickly create gallery entries.

### Step 1: Upload Images to Media Library

1. **In Sanity Studio**, click **"Media"** in the top navigation bar
2. Click **"Upload"** or drag and drop multiple images
3. **Select multiple images** at once (hold Ctrl/Cmd to select multiple files)
4. Wait for all uploads to complete
5. Note the image filenames or IDs (you'll need these)

### Step 2: Create Gallery Entries (Two Options)

#### Option A: Quick Manual Method (5-10 images)

1. Go to **"Service Gallery"** in the left sidebar
2. Click **"+ Create"**
3. Fill in:
   - **Service Type**: Select your service
   - **Gallery Image**: Click "Select" → Choose from **Media library** (all your uploaded images are here!)
   - **Display Order**: Enter `1`
   - Click **"Publish"**
4. **Repeat** for each image, but now you can quickly select from Media library instead of uploading each time

**Tip:** Once images are in Media library, creating entries is much faster!

#### Option B: Use Bulk Upload Script (10+ images)

Use the automated script to create multiple entries at once.

---

## 🔧 Method 2: Using Bulk Upload Script (Best for 10+ Images)

### Prerequisites

1. **Node.js** installed on your computer
2. **Sanity API Token** (see below)

### Step 1: Get Your Sanity API Token

1. Go to https://www.sanity.io/manage
2. Login and select your **"beyond_detail"** project
3. Go to **API** → **Tokens**
4. Click **"Add API token"**
5. Name it: "Bulk Upload Script"
6. Set permissions to **Editor** (or **Admin**)
7. Click **"Save"** and **copy the token**

### Step 2: Set Up the Script

1. **Open Terminal/PowerShell** in your project folder
2. Navigate to the backend folder:
   ```bash
   cd backend_sanity
   ```
3. **Install dependencies** (if not already done):
   ```bash
   npm install @sanity/client
   ```
4. **Set your API token** (choose one method):

   **Windows PowerShell:**
   ```powershell
   $env:SANITY_API_TOKEN="your-token-here"
   ```

   **Windows CMD:**
   ```cmd
   set SANITY_API_TOKEN=your-token-here
   ```

   **Mac/Linux:**
   ```bash
   export SANITY_API_TOKEN="your-token-here"
   ```

### Step 3: Upload Images to Media Library First

1. In Sanity Studio, go to **"Media"** tab
2. Upload all your images (you can select multiple at once)
3. Note the image filenames or take a screenshot

### Step 4: Run the Bulk Upload Script

1. **Run the script:**
   ```bash
   node scripts/bulk-upload-gallery.js
   ```

2. **Follow the prompts:**
   - Enter service type (e.g., `window-tint`, `auto-detail`)
   - The script will show all images in your Media library
   - Enter image asset IDs (comma-separated) or type `all` for all images
   - Enter starting display order (usually `1`)

3. **Wait for completion** - The script will create all entries automatically!

### Example Session:

```
📸 Bulk Service Gallery Upload Tool

Available service types:
  1. window-tint
  2. paint-correction
  3. ceramic-coating
  ...

Enter service type: window-tint

📋 Getting image assets from Media library...
📸 Found 15 images in Media library:
  1. tint-image-1.jpg (ID: image-abc123...)
  2. tint-image-2.jpg (ID: image-def456...)
  ...

Enter image asset IDs (comma-separated) or "all" for all images: all
Enter starting display order (default: 1): 1

🚀 Creating entries...
✅ Created entry #1 for window-tint
✅ Created entry #2 for window-tint
...
✅ Successfully created 15 out of 15 entries!
```

---

## 📋 Method 3: CSV Import (Advanced - For Large Batches)

For very large batches (50+ images), you can use a CSV file.

### Step 1: Prepare CSV File

Create a file `bulk-upload.csv`:

```csv
serviceType,imageAssetId,displayOrder,title
window-tint,image-abc123,1,Tesla Model 3
window-tint,image-def456,2,BMW 3 Series
window-tint,image-ghi789,3,Mercedes C-Class
```

### Step 2: Create Import Script

Create `scripts/csv-import.js`:

```javascript
const fs = require('fs');
const csv = require('csv-parser');
const { bulkCreateEntries } = require('./bulk-upload-gallery');

// Read CSV and create entries
const entries = [];
fs.createReadStream('bulk-upload.csv')
  .pipe(csv())
  .on('data', (row) => entries.push(row))
  .on('end', async () => {
    // Group by service type
    const grouped = {};
    entries.forEach(entry => {
      if (!grouped[entry.serviceType]) {
        grouped[entry.serviceType] = [];
      }
      grouped[entry.serviceType].push({
        assetId: entry.imageAssetId,
        order: parseInt(entry.displayOrder),
        title: entry.title || ''
      });
    });

    // Create entries for each service type
    for (const [serviceType, items] of Object.entries(grouped)) {
      await bulkCreateEntries({
        serviceType,
        imageAssetIds: items.map(i => i.assetId),
        startOrder: Math.min(...items.map(i => i.order)),
        titles: items.map(i => i.title)
      });
    }
  });
```

---

## ✅ Quick Comparison

| Method | Best For | Speed | Difficulty |
|--------|----------|-------|------------|
| **Media Plugin + Manual** | 5-10 images | Medium | Easy ⭐ |
| **Bulk Upload Script** | 10-50 images | Fast | Medium ⭐⭐ |
| **CSV Import** | 50+ images | Very Fast | Advanced ⭐⭐⭐ |

---

## 🎯 Recommended Workflow

**For most users (5-20 images):**
1. Use **Method 1** - Upload to Media library
2. Create entries manually (faster since images are already uploaded)

**For power users (20+ images):**
1. Use **Method 2** - Bulk upload script
2. Upload images to Media library first
3. Run the script to create all entries automatically

---

## 🔍 Troubleshooting

### "No images found in Media library"
- Make sure you uploaded images using the **Media** tab in Sanity Studio
- Images uploaded directly in Service Gallery won't appear in Media library

### "SANITY_API_TOKEN not set"
- Make sure you set the environment variable before running the script
- The token must have Editor or Admin permissions

### "Error creating entry"
- Check that the image asset ID is correct
- Make sure the service type matches exactly (e.g., `window-tint`, not `window_tint`)

### Script not found
- Make sure you're in the `backend_sanity` directory
- The script should be at: `backend_sanity/scripts/bulk-upload-gallery.js`

---

## 💡 Pro Tips

1. **Upload to Media First**: Always upload images to Media library first, then create entries
2. **Batch by Service**: Upload all images for one service type at a time
3. **Use Display Order**: Set order 1-5 for your best work (shows first)
4. **Test with 2-3 Images**: Before bulk uploading 50 images, test with 2-3 first
5. **Keep Token Secure**: Never commit your API token to git

---

## 🎉 That's It!

You now have three methods to bulk upload images. Choose the one that works best for your needs!

**Need help?** Check the script comments or the troubleshooting section above.


