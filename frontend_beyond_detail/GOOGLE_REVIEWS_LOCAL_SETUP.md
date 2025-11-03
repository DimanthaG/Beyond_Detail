# Google Reviews Local Setup

## Quick Start

1. **Create `.env.local` file** in `frontend_beyond_detail/` with your server key:
   ```
   GOOGLE_PLACES_SERVER_KEY=your_server_key_here
   GOOGLE_PLACE_ID=ChIJFeApoP4d1YkRv0VpV6_h8sY
   ```

2. **Run Vercel dev server** (this will serve both React app and `/api` routes):
   ```bash
   npm run dev
   ```
   Or manually:
   ```bash
   vercel dev
   ```

3. **First time setup**: Vercel CLI will prompt you to:
   - Login to Vercel (or create account)
   - Link to existing project or create new one
   - It will automatically detect your React app

4. **Access your app**: Vercel will give you a local URL (usually `http://localhost:3000`)

## What This Does

- Runs your React app (same as `npm start`)
- Also serves `/api/get-google-reviews` as a serverless function
- Uses `GOOGLE_PLACES_SERVER_KEY` from `.env.local` (this key should have "None" for application restrictions in Google Console)

## Production Deployment

When you deploy to Vercel:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `GOOGLE_PLACES_SERVER_KEY` = your server key
   - `GOOGLE_PLACE_ID` = `ChIJFeApoP4d1YkRv0VpV6_h8sY`
3. Redeploy

## Notes

- `.env.local` is gitignored (not committed to GitHub)
- The browser key (`REACT_APP_GOOGLE_PLACES_API_KEY`) stays in `.env` and can have referrer restrictions
- The server key (`GOOGLE_PLACES_SERVER_KEY`) should have "None" for application restrictions


