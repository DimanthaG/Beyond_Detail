# ⚡ FASTEST Method: Upload Entire Folder at Once!

## 🚀 One Command Uploads Everything!

Instead of uploading one-by-one or even using Media library, you can now upload an **entire folder** of images and create all gallery entries **automatically** in one command!

---

## 📋 One-Time Setup (5 minutes)

### Step 1: Get Your Sanity API Token

1. Go to: https://www.sanity.io/manage
2. Select **"beyond_detail"** project
3. Click **API** → **Tokens**
4. Click **"Add API token"**
5. Name: "Bulk Upload"
6. Permissions: **Editor**
7. Click **"Save"** and **copy the token**

### Step 2: Install Dependencies

Open PowerShell/Terminal in your project:

```bash
cd backend_sanity
npm install
```

### Step 3: Set Your Token (Windows PowerShell)

```powershell
$env:SANITY_API_TOKEN="paste-your-token-here"
```

**Note:** You only need to do this once per terminal session. Or create a `.env` file (see below).

---

## 🎯 How to Use (Super Simple!)

### Step 1: Put Your Images in a Folder

Organize your images in folders like this:

```
your-images/
  ├── window-tint/
  │   ├── image1.jpg
  │   ├── image2.jpg
  │   └── image3.jpg
  ├── paint-correction/
  │   ├── img1.jpg
  │   └── img2.jpg
  └── auto-detail/
      ├── photo1.jpg
      └── photo2.jpg
```

### Step 2: Run One Command!

```bash
cd backend_sanity
node scripts/bulk-upload-complete.js window-tint "C:\path\to\your-images\window-tint" 1
```

**That's it!** The script will:
- ✅ Upload all images from the folder
- ✅ Create Service Gallery entries automatically
- ✅ Set display order (1, 2, 3, etc.)
- ✅ Use filenames as titles

---

## 📝 Examples

### Upload Window Tint Images:

```bash
node scripts/bulk-upload-complete.js window-tint "./images/window-tint" 1
```

### Upload Paint Correction Images:

```bash
node scripts/bulk-upload-complete.js paint-correction "./images/paint-correction" 1
```

### Upload Auto Detail Images:

```bash
node scripts/bulk-upload-complete.js auto-detail "./images/auto-detail" 1
```

---

## ⚡ Speed Comparison

| Method | Time for 20 Images |
|--------|-------------------|
| **One-by-one manual** | ~30-40 minutes |
| **Media library + manual entries** | ~15-20 minutes |
| **This method (folder upload)** | **~2-3 minutes** ⚡ |

---

## 🎯 Complete Workflow Example

Let's say you have 15 window tint images:

1. **Put images in folder:**
   ```
   C:\Users\Pemina\Documents\images\window-tint\
     ├── tint1.jpg
     ├── tint2.jpg
     ├── tint3.jpg
     ... (15 images total)
   ```

2. **Run command:**
   ```powershell
   cd backend_sanity
   $env:SANITY_API_TOKEN="your-token-here"
   node scripts/bulk-upload-complete.js window-tint "C:\Users\Pemina\Documents\images\window-tint" 1
   ```

3. **Wait 2-3 minutes** - Script shows progress:
   ```
   🚀 Complete Bulk Upload Tool
   Service Type: window-tint
   Folder: C:\Users\Pemina\Documents\images\window-tint
   Starting Order: 1

   📂 Scanning folder for images...
   ✅ Found 15 image(s)

   [1/15] Processing: tint1.jpg
     ✅ Uploaded: tint1.jpg
     ✅ Created entry #1 (ID: ...)

   [2/15] Processing: tint2.jpg
     ✅ Uploaded: tint2.jpg
     ✅ Created entry #2 (ID: ...)
   
   ... (continues for all 15 images)

   ✅ Successfully processed 15 out of 15 images!
   🎉 Check your Sanity Studio to see the new Service Gallery entries!
   ```

4. **Done!** All 15 images are now in your Service Gallery! ✅

---

## 🔧 Advanced: Create .env File (Optional)

To avoid setting the token every time, create a `.env` file:

1. Create `backend_sanity/.env`:
   ```
   SANITY_API_TOKEN=your-token-here
   ```

2. Install dotenv:
   ```bash
   npm install dotenv
   ```

3. Update the script to load .env (or use a package that auto-loads it)

---

## 📋 Available Service Types

Use these exact names:

- `window-tint`
- `paint-correction`
- `ceramic-coating`
- `auto-detail`
- `interior-detailing`
- `exterior-detailing`
- `headlight-restoration`
- `odour-removal`
- `leather-cleaning`
- `paint-removal`
- `fleet-services`

---

## ✅ Supported Image Formats

- `.jpg` / `.JPG`
- `.jpeg` / `.JPEG`
- `.png` / `.PNG`
- `.webp` / `.WEBP`

---

## 🎯 Pro Tips

1. **Organize First:** Put images in folders by service type before uploading
2. **Rename Files:** Use descriptive names (they become titles)
   - Good: `tesla-model-3-tint.jpg`
   - Bad: `IMG_1234.jpg`
3. **Start Order:** Use `1` to start from the beginning, or use a higher number to append
4. **Batch Multiple Services:** Run the command multiple times for different services

---

## ❓ Troubleshooting

### "Folder not found"
- Use absolute path: `"C:\full\path\to\folder"`
- Or relative path from `backend_sanity` folder: `"../images/window-tint"`

### "No image files found"
- Make sure images are `.jpg`, `.png`, or `.webp`
- Check the folder path is correct

### "SANITY_API_TOKEN not set"
- Make sure you set the environment variable
- Or create a `.env` file

### "Upload failed"
- Check your internet connection
- Verify your API token has Editor permissions
- Try again - sometimes network issues cause temporary failures

---

## 🎉 That's It!

This is the **fastest method** - upload an entire folder in one command and you're done!

**Time saved:** Instead of 30-40 minutes for 20 images, it takes 2-3 minutes! ⚡






