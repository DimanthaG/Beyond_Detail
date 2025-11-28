# Gallery Management with Sanity CMS

## ✅ Current Status

Your Sanity CMS is already configured with a `serviceGallery` schema that supports:
- Multiple service types (Window Tint, Paint Correction, Ceramic Coating, etc.)
- Image uploads with automatic optimization
- Custom ordering
- Optional titles/captions

## 🎯 How to Upload Images to Sanity

### Step 1: Access Sanity Studio

1. Navigate to your Sanity Studio (usually at `http://localhost:3333` or your deployed Sanity URL)
2. Log in with your Sanity credentials

### Step 2: Add Gallery Images

1. In the Sanity Studio sidebar, click on **"Service Gallery"**
2. Click **"Create new Service Gallery"**
3. Fill in the fields:
   - **Service Type**: Select the service (e.g., "Window Tint", "Paint Correction")
   - **Image Title** (Optional): Add a caption or description
   - **Gallery Image**: Click to upload your image
   - **Display Order**: Enter a number (1, 2, 3, etc.) to control the order

4. Click **"Publish"** to save

### Step 3: Repeat for All Images

- Upload as many images as you want for each service
- Use the **Display Order** field to control which images appear first
- You can edit or delete images anytime

## 🔧 Switching to Sanity Gallery

To switch from local files to Sanity CMS, update `ServiceGallery.jsx`:

### Current Code (Local Files):
```javascript
import { getGalleryImages } from '../../utils/galleryImages';

useEffect(() => {
  const galleryImages = getGalleryImages(serviceType);
  setImages(galleryImages);
}, [serviceType]);
```

### New Code (Sanity CMS):
```javascript
import { client, urlFor } from '../../client';

useEffect(() => {
  const fetchGalleryImages = async () => {
    setLoading(true);
    try {
      // Map service type to Sanity schema values
      const serviceTypeMap = {
        'window-tint': 'tint',
        'paint-correction': 'paint-correction',
        'ceramic-coating': 'ceramic-coating',
        'auto-detail': 'auto-detail',
      };

      const sanityServiceType = serviceTypeMap[serviceType] || serviceType;
      
      const query = `*[_type == "serviceGallery" && serviceType == $serviceType] | order(order asc) {
        _id,
        title,
        image,
        order
      }`;

      const result = await client.fetch(query, { serviceType: sanityServiceType });
      
      const formattedImages = result.map((item) => ({
        _id: item._id,
        src: urlFor(item.image).width(1200).url(),
        title: item.title,
        image: item.image,
      }));

      setImages(formattedImages);
    } catch (error) {
      console.error('Error fetching gallery:', error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  fetchGalleryImages();
}, [serviceType]);
```

## 📊 Service Type Mapping

Make sure to use these exact values in Sanity:

| Page Service Type | Sanity Value |
|-------------------|--------------|
| window-tint | tint |
| paint-correction | paint-correction |
| ceramic-coating | ceramic-coating |
| auto-detail | auto-detail |
| interior-detailing | interior-detailing |
| exterior-detailing | exterior-detailing |
| headlight-restoration | headlight-restoration |
| odour-removal | odour-removal |
| leather-cleaning | leather-cleaning |
| paint-removal | paint-removal |
| fleet-services | fleet-services |

## ✨ Benefits of Sanity Gallery

1. **No Code Changes**: Add/remove images without rebuilding the site
2. **Automatic Optimization**: Sanity handles image compression and responsive sizes
3. **Easy Management**: Upload, reorder, and delete images through a visual interface
4. **Unique Images**: Each service has its own separate gallery
5. **No Duplicates**: Only upload each image once
6. **Proper Orientation**: Images display correctly automatically

## 🚀 Next Steps

1. Upload 5-10 images for each service to Sanity Studio
2. Test the gallery on your local development server
3. Once confirmed working, deploy to production
4. Delete the old local image files from `src/assets/galleries/`

## 📝 Notes

- Images are automatically converted to WebP format for better performance
- Recommended image size: 1200-1600px wide
- Sanity handles all responsive image variants automatically
- You can add/edit images anytime without code changes
