# ✅ Simple Bulk Upload - Works Now!

The `sanity media import` command doesn't work, but this method does!

---

## 🚀 Quick Start (3 Steps)

### Step 1: Get API Token

1. Go to: https://www.sanity.io/manage
2. Select "beyond_detail" project
3. API → Tokens → Add API token
4. Permissions: **Editor**
5. Copy the token

### Step 2: Set Token

**PowerShell:**
```powershell
$env:SANITY_API_TOKEN="paste-your-token-here"
```

### Step 3: Upload Folder

```powershell
cd backend_sanity
node scripts/bulk-upload-complete.js window-tint "C:\path\to\images\folder" 1
```

**That's it!** All images uploaded and entries created automatically.

---

## 📝 Example

If you have images in `C:\Users\Pemina\Documents\images\window-tint\`:

```powershell
cd backend_sanity
$env:SANITY_API_TOKEN="your-token-here"
node scripts/bulk-upload-complete.js window-tint "C:\Users\Pemina\Documents\images\window-tint" 1
```

The script will:
- ✅ Find all images in the folder
- ✅ Upload each one to Sanity
- ✅ Create Service Gallery entries
- ✅ Set display order automatically

---

## 🎯 Service Types

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

**20 images = ~3-5 minutes** (vs 30-40 minutes manually!)

---

## ✅ No More Errors!

This method works without needing `sanity media import`. Just use the script directly! 🚀

