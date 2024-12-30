export default {
  name: 'galleryComparisonSlider',
  title: 'Gallery - Comparison Slider',
  type: 'document',
  fields: [
    {
      name: 'comparisonSlider1',
      title: 'Comparison Slider 1',
      type: 'object',
      fields: [
        {
          name: 'image1',
          title: 'Image 1',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'image2',
          title: 'Image 2',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'comparisonSlider2',
      title: 'Comparison Slider 2',
      type: 'object',
      fields: [
        {
          name: 'image1',
          title: 'Image 1',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'image2',
          title: 'Image 2',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
