# 🎨 Access Sanity Studio - Two Options

## ⚠️ Local Studio Connection Issue

The local Sanity Studio at `localhost:3333` isn't connecting. This is normal and we have two solutions:

---

## ✅ **OPTION 1: Use Online Sanity Studio (RECOMMENDED)**

### Access Your Deployed Studio:

Visit one of these URLs:
- **https://beyonddetail.sanity.studio**
- **https://trp6l9ar.sanity.studio**

Or go to:
1. Visit https://www.sanity.io/manage
2. Login with your Sanity account
3. Click on your "beyond_detail" project
4. Click "Open Studio" button

### Upload Images Online:

Once in the studio:
1. Click **"Service Gallery"** in left sidebar
2. Click **"+ Create"** button
3. Fill in the form:
   - **Service Type**: Select from dropdown (e.g., "Window Tint")
   - **Gallery Image**: Click "Select" → "Upload" → Choose image from your computer
   - **Display Order**: Enter number (1, 2, 3, etc.)
4. Click **"Publish"**

**Advantages:**
- ✅ Works immediately
- ✅ No setup required
- ✅ Can upload from anywhere
- ✅ Changes appear on website instantly

---

## 🔧 **OPTION 2: Fix Local Studio**

If you prefer to use local studio:

### Step 1: Install Dependencies

```bash
cd backend_sanity
npm install
```

### Step 2: Start Studio

```bash
npm start
```

### Step 3: Access Local Studio

Visit: http://localhost:3333

---

## 📸 **How to Upload Images (Either Option)**

### For Window Tint Gallery:

1. **In Sanity Studio**, click "Service Gallery" → "+ Create"
2. **Service Type**: Select "Window Tint"
3. **Gallery Image**: Upload from your computer
   - Browse to: `C:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\assets\galleries\window-tint\`
   - Select one of your best images
4. **Display Order**: Enter `1`
5. Click **"Publish"**
6. Repeat for 10-15 more images (use order 2, 3, 4, etc.)

### For Other Services:

Repeat the same process, but select different Service Types:
- **Paint Correction** → Upload from `paint-correction` folder
- **Ceramic Coating** → Upload from `ceramic-coating` folder
- **Auto Detail** → Upload from `auto-detail` folder

---

## ✅ **Verify Images Are Working**

After uploading images, check your website:

1. Make sure your frontend is running:
   ```bash
   cd frontend_beyond_detail
   npm start
   ```

2. Visit these URLs:
   - http://localhost:3000/window-tint
   - http://localhost:3000/paint-correction
   - http://localhost:3000/ceramic-coating
   - http://localhost:3000/auto-detail

You should see:
- ✅ Your uploaded images
- ✅ No duplicates
- ✅ Correct orientation
- ✅ Images in the order you specified

---

## 🚀 **When Done Uploading**

Once all galleries look good:

```bash
# Build the frontend
cd frontend_beyond_detail
npm run build

# Commit and push
cd ..
git add -A
git commit -m "Gallery images managed through Sanity CMS"
git push origin master
```

Vercel will automatically deploy your changes!

---

## 📊 **Service Type Reference**

| Service Page | Sanity Dropdown Value |
|--------------|----------------------|
| /window-tint | Window Tint |
| /paint-correction | Paint Correction |
| /ceramic-coating | Ceramic Coating |
| /auto-detail | Auto Detail |
| /interior-detailing | Interior Detailing |
| /exterior-detailing | Exterior Detailing |

---

## 💡 **Pro Tips**

1. **Use Online Studio** - It's faster and easier than local
2. **Upload 10-15 best images** per service (not all!)
3. **Use Display Order** to control which images show first
4. **Publish each image** - Unpublished images won't appear
5. **Check website** after uploading to verify

---

## ❓ **Troubleshooting**

**Can't login to online studio?**
- Make sure you're using the correct Sanity account
- Try password reset if needed

**Images not showing on website?**
- Make sure you clicked "Publish" in Sanity
- Refresh your browser (Ctrl+F5)
- Check that Service Type matches exactly

**Want to delete/edit an image?**
- Find it in Service Gallery list
- Click to open
- Click "Delete" or edit fields
- Click "Publish" to save changes

---

## 🎯 **Recommended: Use Online Studio**

For the fastest setup, use the online Sanity Studio:
1. Visit https://www.sanity.io/manage
2. Login and open your project
3. Start uploading images
4. Check your website to see them appear!

No local setup required! 🚀
