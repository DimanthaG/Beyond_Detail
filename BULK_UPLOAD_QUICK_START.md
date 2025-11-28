# ⚡ Quick Start: Bulk Upload Images

## 🎯 Fastest Method (Recommended for Most Users)

### Step 1: Upload Images to Media Library (Bulk)

1. Open Sanity Studio: https://beyonddetail.sanity.studio
2. Click **"Media"** tab (top navigation)
3. Click **"Upload"** or drag & drop
4. **Select multiple images at once** (Ctrl+Click or Cmd+Click)
5. Wait for uploads to complete ✅

### Step 2: Create Gallery Entries (Quick)

1. Go to **"Service Gallery"** (left sidebar)
2. Click **"+ Create"**
3. Fill in:
   - **Service Type**: Select your service
   - **Gallery Image**: Click "Select" → Choose from **Media** (all your images are here!)
   - **Display Order**: `1`
   - Click **"Publish"**
4. **Repeat** for each image (much faster now since images are already uploaded!)

**Time saved:** Instead of uploading each image individually, you upload once to Media, then quickly create entries!

---

## 🚀 Advanced Method: Automated Script (For 20+ Images)

### One-Time Setup:

1. **Get API Token:**
   - Go to: https://www.sanity.io/manage
   - Select "beyond_detail" project
   - API → Tokens → Add API token
   - Set permissions: **Editor**
   - Copy the token

2. **Install dependency:**
   ```bash
   cd backend_sanity
   npm install @sanity/client
   ```

3. **Set token** (Windows PowerShell):
   ```powershell
   $env:SANITY_API_TOKEN="paste-your-token-here"
   ```

### Run Bulk Upload:

1. **Upload images to Media library** (same as Step 1 above)

2. **Run script:**
   ```bash
   node scripts/bulk-upload-gallery.js
   ```

3. **Follow prompts:**
   - Enter service type: `window-tint` (or your service)
   - Enter `all` to use all images, or specific IDs
   - Enter starting order: `1`

4. **Done!** All entries created automatically ✅

---

## 📊 Which Method Should I Use?

- **5-10 images?** → Use Media Plugin method (Step 1-2 above)
- **10-20 images?** → Media Plugin method is still fastest
- **20+ images?** → Use the automated script
- **50+ images?** → Definitely use the script!

---

## ✅ That's It!

The Media Plugin method is the easiest and works great for most cases. The script is there if you need to upload many images at once!


