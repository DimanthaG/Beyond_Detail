# ✅ Working Bulk Upload Method

The `sanity media import` command isn't available in your Sanity CLI version. Use this method instead!

---

## 🚀 Method: Direct Folder Upload (Works Now!)

This script uploads images directly from a folder and creates all Service Gallery entries automatically.

### One-Time Setup:

1. **Get Your Sanity API Token:**
   - Go to: https://www.sanity.io/manage
   - Select "beyond_detail" project
   - API → Tokens → Add API token
   - Permissions: **Editor**
   - Copy the token

2. **Install Dependencies:**
   ```bash
   cd backend_sanity
   npm install
   ```

3. **Set Token (PowerShell):**
   ```powershell
   $env:SANITY_API_TOKEN="your-token-here"
   ```

### Upload Images:

**One command uploads everything:**

```powershell
node scripts/bulk-upload-complete.js window-tint "C:\path\to\your\images\folder" 1
```

**Example:**
```powershell
node scripts/bulk-upload-complete.js window-tint "C:\Users\Pemina\Documents\images\window-tint" 1
```

**What it does:**
- ✅ Scans folder for images
- ✅ Uploads each image to Sanity
- ✅ Creates Service Gallery entries automatically
- ✅ Sets display order (1, 2, 3, etc.)

---

## 📝 Examples

### Window Tint:
```powershell
node scripts/bulk-upload-complete.js window-tint "C:\images\window-tint" 1
```

### Paint Correction:
```powershell
node scripts/bulk-upload-complete.js paint-correction "C:\images\paint-correction" 1
```

### Auto Detail:
```powershell
node scripts/bulk-upload-complete.js auto-detail "C:\images\auto-detail" 1
```

---

## 🎯 Available Service Types

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

## ⚡ Speed

- **20 images:** ~3-5 minutes (vs 30-40 minutes manually)
- **All automatic:** No clicking, no manual entry creation

---

## ✅ That's It!

This method works right now - no need for `sanity media import`!

Just run the command with your folder path and you're done! 🚀






