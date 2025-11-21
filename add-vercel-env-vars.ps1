# Vercel Environment Variables Setup Script
# Run this AFTER you've logged in with `vercel login`

# Instructions:
# 1. Make sure you're logged into Vercel (run: vercel login)
# 2. Get your API keys from Google Cloud Console
# 3. Run each command below and paste the value when prompted

Write-Host "Adding environment variables to Vercel..." -ForegroundColor Green
Write-Host ""

# Navigate to project directory
Set-Location "c:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail"

# Link to Vercel project (if not already linked)
Write-Host "Linking to Vercel project..." -ForegroundColor Yellow
vercel link

Write-Host ""
Write-Host "Now adding environment variables..." -ForegroundColor Yellow
Write-Host "You'll be prompted to enter each value. Get your API keys ready from Google Cloud Console!" -ForegroundColor Cyan
Write-Host ""

# Add environment variables one by one
Write-Host "1/7: Adding GOOGLE_PLACES_SERVER_KEY..." -ForegroundColor Green
vercel env add GOOGLE_PLACES_SERVER_KEY production

Write-Host "2/7: Adding GOOGLE_PLACE_ID..." -ForegroundColor Green
Write-Host "Paste: ChIJFeApoP4d1YkRv0VpV6_h8sY" -ForegroundColor Cyan
vercel env add GOOGLE_PLACE_ID production

Write-Host "3/7: Adding REACT_APP_MAPS_KEY..." -ForegroundColor Green
vercel env add REACT_APP_MAPS_KEY production

Write-Host "4/7: Adding REACT_APP_GOOGLE_PLACES_API_KEY..." -ForegroundColor Green
Write-Host "(Use the same key as REACT_APP_MAPS_KEY)" -ForegroundColor Cyan
vercel env add REACT_APP_GOOGLE_PLACES_API_KEY production

Write-Host "5/7: Adding REACT_APP_GOOGLE_PLACE_ID..." -ForegroundColor Green
Write-Host "Paste: ChIJFeApoP4d1YkRv0VpV6_h8sY" -ForegroundColor Cyan
vercel env add REACT_APP_GOOGLE_PLACE_ID production

Write-Host "6/7: Adding REACT_APP_SANITY_PROJECT_ID..." -ForegroundColor Green
Write-Host "Paste: trp6l9ar" -ForegroundColor Cyan
vercel env add REACT_APP_SANITY_PROJECT_ID production

Write-Host "7/7: Adding REACT_APP_SANITY_TOKEN..." -ForegroundColor Green
Write-Host "Paste: skuntCty4371fJlKOehv0YoNV2h8LMisAM4zVnE0DO8bp73erLxS5mTI5EnGDCHI7FWShCPFCEcjURGnKw4eeYYs2O0SEhM8hshOCqJ8cXtOLnulZ83s6HcW4WO7hg2hI2S0zAVJYujwrMF7Q1ysm6YkAQEDdf6AhZj9SkT2cr0RcJ8MDZNP" -ForegroundColor Cyan
vercel env add REACT_APP_SANITY_TOKEN production

Write-Host ""
Write-Host "All environment variables added!" -ForegroundColor Green
Write-Host "Now deploying to production..." -ForegroundColor Yellow
Write-Host ""

# Deploy to production
vercel --prod

Write-Host ""
Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "Your site should now have Google Maps and Reviews working!" -ForegroundColor Green
