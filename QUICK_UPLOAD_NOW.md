# ⚡ Quick Upload - Ready to Use!

Your API token is configured. Here's how to upload images right now:

---

## 🚀 Method 1: Use the Helper Script (Easiest!)

I've created a helper script that sets your token automatically.

**Upload images:**
```powershell
cd backend_sanity
.\scripts\setup-and-upload.ps1 window-tint "C:\path\to\your\images\folder" 1
```

**Example:**
```powershell
.\scripts\setup-and-upload.ps1 window-tint "C:\Users\Pemina\Documents\images\window-tint" 1
```

---

## 🚀 Method 2: Manual (If you prefer)

**Step 1: Set token**
```powershell
cd backend_sanity
$env:SANITY_API_TOKEN="skXKR1KKefnf9OAJ1QCAutvquMrbFPhrNwFreFO3p72AAQE9PD7ncUNMNDIzLqNf52RUoQ5reHQCAbeq0s8KXciIRuiXzzhlVyBVhCgEyMQeBC9L0vzhpzNjMbFziIfbsdniUQJDVECy511TQTNioApcGKW6nCWVujLTizYyH9EIAGDucTWG"
```

**Step 2: Run upload**
```powershell
node scripts/bulk-upload-complete.js window-tint "C:\path\to\images\folder" 1
```

---

## 📝 Examples

### Upload Window Tint Images:
```powershell
.\scripts\setup-and-upload.ps1 window-tint "C:\Users\Pemina\Documents\images\window-tint" 1
```

### Upload Paint Correction Images:
```powershell
.\scripts\setup-and-upload.ps1 paint-correction "C:\Users\Pemina\Documents\images\paint-correction" 1
```

### Upload Auto Detail Images:
```powershell
.\scripts\setup-and-upload.ps1 auto-detail "C:\Users\Pemina\Documents\images\auto-detail" 1
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

## ⚡ What Happens

1. Script scans your folder for images (.jpg, .png, .webp)
2. Uploads each image to Sanity
3. Creates Service Gallery entries automatically
4. Sets display order (1, 2, 3, etc.)
5. Shows progress for each image

**Time:** ~3-5 minutes for 20 images!

---

## ✅ Ready to Go!

Just run the command with your folder path and you're done! 🚀

---

## 🔒 Security Note

Your API token is now in the helper script. For better security:
- Don't commit the script to git (or use .gitignore)
- Consider using a `.env` file instead
- Rotate your token periodically

