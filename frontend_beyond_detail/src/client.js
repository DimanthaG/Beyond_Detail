import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client for read-only operations (no token needed for public reads)
// Token should only be used server-side for write operations
export const client = createClient({
  projectId: 'trp6l9ar', // Beyond Detail Sanity project
  dataset: 'production',
  apiVersion: '2022-02-01', // Using older stable version
  useCdn: false, // Disable CDN to avoid CORS issues in development
  // Token removed from frontend - should only be used server-side for write operations
  // If you need write operations, create a backend API endpoint
});

const builder = imageUrlBuilder(client);

// Optimized image URL builder with compression and modern formats
// Returns a chainable builder that can be further customized
export const urlFor = (source) => {
  return builder
    .image(source)
    .format('webp') // Modern format with better compression (falls back to original if WebP not supported)
    .quality(85); // Good quality with smaller file size
};

// Helper for optimized image URLs with auto-sizing
export const urlForOptimized = (source, options = {}) => {
  const { width, height, quality = 85, format = 'webp' } = options;
  let imgBuilder = builder.image(source).quality(quality);

  if (width) imgBuilder = imgBuilder.width(width);
  if (height) imgBuilder = imgBuilder.height(height);
  if (format) imgBuilder = imgBuilder.format(format);

  return imgBuilder;
};
