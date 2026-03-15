import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'trp6l9ar',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source).format('webp').quality(85);
};

export const urlForOptimized = (source, options = {}) => {
  const { width, height, quality = 85, format = 'webp' } = options;
  let imgBuilder = builder.image(source).quality(quality);
  if (width) imgBuilder = imgBuilder.width(width);
  if (height) imgBuilder = imgBuilder.height(height);
  if (format) imgBuilder = imgBuilder.format(format);
  return imgBuilder;
};
