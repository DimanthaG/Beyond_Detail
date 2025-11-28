# Adding the Malvern Landing Page to Your Routes

## Quick Guide

You need to add the Malvern page route to your React Router configuration.

### Step 1: Find Your Routes File

Look for one of these files:
- `src/App.js`
- `src/routes.js`
- `src/Routes.js`
- `src/router/index.js`

### Step 2: Add the Import

At the top of the file, add:

```javascript
import CarDetailingMalvern from './Pages/Neighborhoods/CarDetailingMalvern';
```

### Step 3: Add the Route

In your `<Routes>` or `<Switch>` component, add:

```javascript
<Route path="/car-detailing-malvern" element={<CarDetailingMalvern />} />
```

**OR** if using older React Router:

```javascript
<Route path="/car-detailing-malvern" component={CarDetailingMalvern} />
```

### Step 4: Test Locally

```bash
cd frontend_beyond_detail
npm start
# Go to http://localhost:3000/car-detailing-malvern
```

---

## Example: Complete Routes File

Here's what your routes file might look like:

```javascript
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Existing imports
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Tints from './Pages/Tints/Tints';
import Blog from './Pages/Blog/Blog';
// ... other imports

// NEW: Neighborhood pages
import CarDetailingMalvern from './Pages/Neighborhoods/CarDetailingMalvern';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/window-tint" element={<Tints />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Blog />} />
      
      {/* NEW: Neighborhood landing pages */}
      <Route path="/car-detailing-malvern" element={<CarDetailingMalvern />} />
      
      {/* ... other routes */}
    </Routes>
  );
}

export default AppRoutes;
```

---

## Future Neighborhood Pages

When you create more neighborhood pages, add them the same way:

```javascript
// Imports
import CarDetailingMalvern from './Pages/Neighborhoods/CarDetailingMalvern';
import CarDetailingMorningsideHeights from './Pages/Neighborhoods/CarDetailingMorningsideHeights';
import CarDetailingAgincourt from './Pages/Neighborhoods/CarDetailingAgincourt';

// Routes
<Route path="/car-detailing-malvern" element={<CarDetailingMalvern />} />
<Route path="/car-detailing-morningside-heights" element={<CarDetailingMorningsideHeights />} />
<Route path="/car-detailing-agincourt" element={<CarDetailingAgincourt />} />
```

---

## Internal Linking

Once the route is added, you can link to it from anywhere:

```javascript
<Link to="/car-detailing-malvern">Car Detailing in Malvern</Link>
```

Or in your homepage content:

```javascript
<p>
  Serving <Link to="/car-detailing-malvern">Malvern</Link>, 
  <Link to="/car-detailing-morningside-heights">Morningside Heights</Link>, 
  and all of Scarborough.
</p>
```

---

## Sitemap Update

Don't forget to add the new page to your sitemap.xml:

```xml
<url>
  <loc>https://beyonddetail.ca/car-detailing-malvern</loc>
  <lastmod>2025-11-28</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Google Search Console

After deploying, submit the new URL to Google:

1. Go to Google Search Console
2. Click "URL Inspection"
3. Enter: https://beyonddetail.ca/car-detailing-malvern
4. Click "Request Indexing"

---

## Need Help?

If you can't find your routes file or need help adding the route, just let me know and I can help you locate it!
