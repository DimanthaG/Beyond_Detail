# ⚡ SUPER FAST Upload Method - 2 Simple Steps!

## 🚀 The Fastest Way to Upload Service Gallery Images

This method uses Sanity's built-in CLI to upload images, then automatically creates all gallery entries. **Much faster than manual uploads!**

---

## 📋 Step 1: Upload Images (One Command)

Use Sanity's built-in media import:

```bash
cd backend_sanity
npx sanity media import "C:\path\to\your\images\folder"
```

**Example:**
```bash
npx sanity media import "C:\Users\Pemina\Documents\images\window-tint"
```

This uploads **all images** in the folder to Sanity's Media library automatically!

---

## 📋 Step 2: Create Gallery Entries (One Command)

After images are uploaded, create all Service Gallery entries:

```bash
node scripts/quick-bulk-upload.js window-tint 1
```

The script will:
- Show you all recently uploaded images
- Ask how many to add
- Create all entries automatically!

---

## 🎯 Complete Example

Let's say you have 15 window tint images in `C:\images\window-tint\`:

### Step 1: Upload Images
```powershell
cd backend_sanity
npx sanity media import "C:\images\window-tint"
```

Wait for upload to complete (shows progress).

### Step 2: Create Entries
```powershell
$env:SANITY_API_TOKEN="your-token-here"
node scripts/quick-bulk-upload.js window-tint 1
```

Follow the prompts:
- It shows your uploaded images
- Enter how many to add (e.g., `15`)
- Done! All entries created! ✅

---

## ⚡ Speed Comparison

| Method | Time for 20 Images |
|--------|-------------------|
| Manual one-by-one | ~30-40 minutes |
| Media library + manual | ~15-20 minutes |
| **This method** | **~3-5 minutes** ⚡ |

---

## 📝 Quick Reference

### Upload Images:
```bash
npx sanity media import "<folder-path>"
```

### Create Entries:
```bash
node scripts/quick-bulk-upload.js <serviceType> [startOrder]
```

### Service Types:
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

## ✅ That's It!

**2 commands = All images uploaded and gallery entries created!**

This is the fastest method available! 🚀


