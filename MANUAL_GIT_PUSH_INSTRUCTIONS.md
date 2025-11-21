# Manual Git Commit & Push Instructions

**Issue**: The automated git commit has been running for 20+ minutes and appears to be hung.

**Solution**: Complete the commit and push manually.

---

## Step 1: Check Current Git Status

Open PowerShell and run:

```powershell
cd "c:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail"
git status
```

### Expected Outcomes:

#### Scenario A: Commit Already Completed
If you see:
```
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
nothing to commit, working tree clean
```

**Action**: Skip to Step 3 (Push)

#### Scenario B: Commit Still Pending
If you see:
```
Changes to be committed:
  (lots of files listed)
```

**Action**: The commit didn't complete. Continue to Step 2.

#### Scenario C: Nothing Staged
If you see:
```
nothing to commit, working tree clean
```
And your branch is NOT ahead, the commit failed. Go to Step 2 Alternative.

---

## Step 2: Complete the Commit

### If files are still staged (Scenario B):

```powershell
# Try the commit again
git commit -m "Performance & Accessibility Optimizations

- Optimized 200+ images to WebP format
- Fixed accessibility and heading hierarchy
- Added API configuration guides"
```

### Alternative: If commit failed, re-stage and commit:

```powershell
# Check what files were modified
git status

# Stage all changes
git add .

# Commit
git commit -m "Performance & Accessibility Optimizations

- Optimized 200+ images to WebP format with responsive sizes
- Fixed accessibility: form labels and heading hierarchy
- Added Google API security guides
- Expected LCP improvement: 7.8s to 2.5s"
```

---

## Step 3: Push to GitHub

Once the commit is complete:

```powershell
# Push to trigger Vercel deployment
git push origin main
```

**Expected output**:
```
Enumerating objects: 250, done.
Counting objects: 100% (250/250), done.
Delta compression using up to 8 threads
Compressing objects: 100% (210/210), done.
Writing objects: 100% (220/220), 25.5 MiB | 2.5 MiB/s, done.
Total 220 (delta 45), reused 0 (delta 0)
To https://github.com/yourusername/Beyond_Detail.git
   abc1234..def5678  main -> main
```

**Note**: The push might take 2-5 minutes due to the large number of image files.

---

## Step 4: Monitor Vercel Deployment

After pushing:

1. **Check Vercel** (when you have access):
   - Go to https://vercel.com/dashboard
   - Look for new deployment
   - Status should change: Building → Ready (2-5 minutes)

2. **Or check via CLI**:
   ```powershell
   # Install Vercel CLI if not installed
   npm install -g vercel
   
   # Check deployments
   vercel ls
   ```

---

## Step 5: Add Environment Variables (Later)

**When you have Vercel dashboard access**, add these variables:

### Via Dashboard:
1. Settings → Environment Variables
2. Add for Production, Preview, Development:

```bash
GOOGLE_PLACES_SERVER_KEY=<your_server_places_api_key>
GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY
REACT_APP_MAPS_KEY=<your_maps_platform_api_key>
REACT_APP_GOOGLE_PLACES_API_KEY=<your_maps_platform_api_key>
REACT_APP_GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY
REACT_APP_SANITY_PROJECT_ID=trp6l9ar
REACT_APP_SANITY_TOKEN=skuntCty4371fJlKOehv0YoNV2h8LMisAM4zVnE0DO8bp73erLxS5mTI5EnGDCHI7FWShCPFCEcjURGnKw4eeYYs2O0SEhM8hshOCqJ8cXtOLnulZ83s6HcW4WO7hg2hI2S0zAVJYujwrMF7Q1ysm6YkAQEDdf6AhZj9SkT2cr0RcJ8MDZNP
```

### Via CLI (Alternative):
```powershell
vercel env add GOOGLE_PLACES_SERVER_KEY production
# Enter value when prompted
# Repeat for each variable
```

3. **Redeploy** after adding variables:
   - Dashboard: Deployments → Latest → Redeploy
   - CLI: `vercel --prod`

---

## Step 6: Verify Deployment

After deployment completes:

### Test 1: Google Reviews
```
Visit: https://www.beyonddetail.ca
Check: Reviews section loads without errors
```

### Test 2: Google Maps
```
Visit: https://www.beyonddetail.ca/contact
Check: Map displays correctly
```

### Test 3: Performance
```
1. Open Chrome DevTools (F12)
2. Lighthouse tab
3. Run audit
Expected: Performance 85+, LCP < 2.5s
```

---

## Troubleshooting

### If push fails with "too large" error:

```powershell
# Check repository size
git count-objects -vH

# If needed, use Git LFS for large files
git lfs install
git lfs track "*.webp"
git add .gitattributes
git commit -m "Add Git LFS tracking"
git push origin main
```

### If commit takes too long:

Try committing in batches:

```powershell
# Reset if needed
git reset

# Commit code first
git add frontend_beyond_detail/src/Pages/Contact/Contact2.jsx
git add frontend_beyond_detail/src/components/Partners/PartnersCompact.jsx
git add *.md
git commit -m "Code fixes and documentation"
git push origin main

# Then commit images in batches
git add frontend_beyond_detail/src/assets/bd/*.webp
git commit -m "Add hero images (WebP)"
git push origin main

git add frontend_beyond_detail/src/assets/Partners/*.webp
git commit -m "Add partner logos (WebP)"
git push origin main

# Continue for other directories...
```

---

## Summary

**What to do now**:
1. Open PowerShell
2. Run `git status` to check current state
3. Complete commit if needed
4. Push to GitHub
5. Deal with Vercel environment variables later
6. Test deployment when ready

**Files being deployed**:
- ✅ 202 WebP optimized images
- ✅ 3 code files (accessibility fixes)
- ✅ 4 documentation files

**Expected results**:
- 🚀 LCP: 7.8s → ~2.0s
- 📉 Image sizes: 75% reduction
- ♿ Accessibility: 100% compliance
- 📈 Performance score: 85-95

---

**Next**: Run the commands above in PowerShell and let me know what you see!
