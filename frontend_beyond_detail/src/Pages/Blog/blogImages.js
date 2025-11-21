// Blog images mapped by topic
// Import images from galleries and assets based on blog post topics

// Paint Protection / General Tips - Use paint correction or ceramic coating images
import paintProtectionImg1 from '../../assets/galleries/paint-correction/IMG_3358.JPG';
import paintProtectionImg2 from '../../assets/galleries/paint-correction/IMG_5024.JPG';
import paintProtectionImg3 from '../../assets/galleries/ceramic-coating/IMG_3451.JPG';

// Paint Correction Process - Use paint correction gallery images
import paintCorrectionImg1 from '../../assets/galleries/paint-correction/IMG_3420.JPG';
import paintCorrectionImg2 from '../../assets/galleries/paint-correction/IMG_3458.JPG';
import paintCorrectionImg3 from '../../assets/galleries/paint-correction/IMG_3711.JPG';

// Export all images for use in content
export const allBlogImages = {
  paintProtectionImg1,
  paintProtectionImg2,
  paintProtectionImg3,
  ceramicCoatingImg1,
  ceramicCoatingImg2,
  ceramicCoatingImg3,
  winterPrepImg1,
  winterPrepImg2,
  winterPrepImg3,
  interiorImg1,
  interiorImg2,
  interiorImg3,
  headlightImg1,
  headlightImg2,
  headlightImg3,
  paintCorrectionImg1,
  paintCorrectionImg2,
  paintCorrectionImg3,
};

// Export images mapped to blog slugs (main images)
export const blogImages = {
  '5-essential-tips-protect-vehicle-paint': paintProtectionImg1,
  'ceramic-coating-vs-traditional-wax': ceramicCoatingImg1,
  'preparing-your-car-for-winter': winterPrepImg1,
  'interior-detailing-guide': interiorImg1,
  'headlight-restoration-benefits': headlightImg1,
  'paint-correction-process-explained': paintCorrectionImg1,
};

// Export image collections by topic
export const blogImageCollections = {
  '5-essential-tips-protect-vehicle-paint': [paintProtectionImg1, paintProtectionImg2, paintProtectionImg3],
  'ceramic-coating-vs-traditional-wax': [ceramicCoatingImg1, ceramicCoatingImg2, ceramicCoatingImg3],
  'preparing-your-car-for-winter': [winterPrepImg1, winterPrepImg2, winterPrepImg3],
  'interior-detailing-guide': [interiorImg1, interiorImg2, interiorImg3],
  'headlight-restoration-benefits': [headlightImg1, headlightImg2, headlightImg3],
  'paint-correction-process-explained': [paintCorrectionImg1, paintCorrectionImg2, paintCorrectionImg3],
};

// Export default
export default blogImages;

