# 🎨 How to Access Sanity Studio Backend

## ✅ **EASIEST METHOD: Online Studio (Recommended)**

### Access Your Sanity Studio:

You have **3 ways** to access your Sanity backend:

#### **Option 1: Direct Studio URL**
Visit: **https://beyonddetail.sanity.studio**

#### **Option 2: Alternative Studio URL**
Visit: **https://trp6l9ar.sanity.studio**

#### **Option 3: Via Sanity Dashboard**
1. Go to: **https://www.sanity.io/manage**
2. Login with your Sanity account
3. Click on **"beyond_detail"** project
4. Click **"Open Studio"** button

---

## 🔐 **Login Credentials**

Use the same account you created when setting up Sanity:
- **Email**: Your Sanity account email
- **Password**: Your Sanity account password

If you forgot your password:
1. Go to https://www.sanity.io/
2. Click "Sign In"
3. Click "Forgot password?"

---

## 📸 **How to Upload Gallery Images**

Once you're in the Sanity Studio:

### Step 1: Navigate to Service Gallery
- Click **"Service Gallery"** in the left sidebar

### Step 2: Create New Gallery Item
- Click the **"+ Create"** button (top right)

### Step 3: Fill in the Form
1. **Service Type**: Select from dropdown
   - Window Tint
   - Paint Correction
   - Ceramic Coating
   - Auto Detail
   - Interior Detailing
   - Exterior Detailing

2. **Gallery Image**: 
   - Click **"Select"**
   - Click **"Upload"**
   - Choose image from your computer

3. **Display Order**: Enter a number (1, 2, 3, etc.)
   - Lower numbers appear first
   - Example: 1 = first image, 2 = second image

### Step 4: Publish
- Click **"Publish"** button (bottom right)
- Your image will appear on the website immediately!

---

## 🖼️ **Where Are Your Images?**

Your local images are stored at:
```
C:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\assets\galleries\
```

Folders:
- `window-tint/` - Window tinting photos
- `paint-correction/` - Paint correction photos
- `ceramic-coating/` - Ceramic coating photos
- `auto-detail/` - Auto detailing photos

**Upload your best 10-15 images per service!**

---

## 🔍 **Verify Images on Website**

After uploading, check these pages:
- https://beyonddetail.ca/tint (Window Tint)
- https://beyonddetail.ca/paint-correction
- https://beyonddetail.ca/ceramic-coatings
- https://beyonddetail.ca/auto-detail

Images should appear within **10-30 seconds** of publishing!

---

## 🛠️ **Local Studio (Alternative Method)**

If you prefer to run Sanity Studio locally:

### Step 1: Navigate to Backend
```bash
cd "c:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\backend_sanity"
```

### Step 2: Install Dependencies (First Time Only)
```bash
npm install
```

### Step 3: Start Studio
```bash
npm start
```

### Step 4: Access Local Studio
Visit: **http://localhost:3333**

---

## 📋 **Service Type Reference**

| Website Page | Sanity Dropdown Value |
|--------------|----------------------|
| /tint | Window Tint |
| /paint-correction | Paint Correction |
| /ceramic-coatings | Ceramic Coating |
| /auto-detail | Auto Detail |
| /interior-detailing | Interior Detailing |
| /exterior-detailing | Exterior Detailing |

---

## 💡 **Pro Tips**

1. ✅ **Use Online Studio** - No setup required, works anywhere
2. ✅ **Upload 10-15 best images** per service (quality over quantity)
3. ✅ **Use Display Order** to control image sequence
4. ✅ **Always click Publish** - Unpublished images won't show
5. ✅ **Check website** after uploading to verify

---

## ❓ **Troubleshooting**

### Can't Access Studio?
- Try all 3 URLs above
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private browsing mode

### Can't Login?
- Reset password at https://www.sanity.io/
- Make sure you're using the correct email

### Images Not Showing?
- Did you click **"Publish"**? (Not just save)
- Wait 30 seconds and refresh browser (Ctrl+F5)
- Check that **Service Type** matches exactly
- Verify image uploaded successfully in Sanity

### Want to Edit/Delete an Image?
1. Go to **Service Gallery** in sidebar
2. Find the image in the list
3. Click to open it
4. Make changes or click **"Delete"**
5. Click **"Publish"** to save changes

---

## 🎯 **Quick Start (5 Minutes)**

1. **Visit**: https://beyonddetail.sanity.studio
2. **Login** with your Sanity account
3. **Click**: "Service Gallery" → "+ Create"
4. **Select**: Service Type (e.g., "Window Tint")
5. **Upload**: Your best image
6. **Enter**: Display Order (e.g., "1")
7. **Click**: "Publish"
8. **Check**: https://beyonddetail.ca/tint

Done! Your image is live! 🎉

---

## 📞 **Need Help?**

If you're having trouble accessing Sanity:
1. Check your email for Sanity signup confirmation
2. Try password reset
3. Contact Sanity support: https://www.sanity.io/help

---

**Last Updated**: 2025-11-28  
**Recommended Method**: Online Studio (https://beyonddetail.sanity.studio)
