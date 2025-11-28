export default {
  name: 'serviceGallery',
  title: 'Service Gallery',
  type: 'document',
  fields: [
    {
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          { title: 'Window Tint', value: 'tint' },
          { title: 'Auto Detail', value: 'auto-detail' },
          { title: 'Paint Correction', value: 'paint-correction' },
          { title: 'Ceramic Coating', value: 'ceramic-coating' },
          { title: 'Interior Detailing', value: 'interior-detailing' },
          { title: 'Exterior Detailing', value: 'exterior-detailing' },
          { title: 'Headlight Restoration', value: 'headlight-restoration' },
          { title: 'Odour Removal', value: 'odour-removal' },
          { title: 'Leather Cleaning', value: 'leather-cleaning' },
          { title: 'Paint Removal', value: 'paint-removal' },
          { title: 'Fleet Services', value: 'fleet-services' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Image Title (Optional)',
      type: 'string',
      description: 'Optional title to display with the image',
    },
    {
      name: 'image',
      title: 'Gallery Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order (Optional)',
      type: 'number',
      description: 'Optional: Lower numbers appear first. If not set, images will be shown in random order.',
      validation: (Rule) => Rule.min(0).integer(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      serviceType: 'serviceType',
      media: 'image',
      order: 'order',
    },
    prepare({ title, serviceType, media, order }) {
      return {
        title: title || 'Untitled Image',
        subtitle: `Service: ${serviceType || 'Not specified'}${order != null ? ` - Order: ${order}` : ' - Random Order'}`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: 'Service Type, Order',
      name: 'serviceTypeOrder',
      by: [
        { field: 'serviceType', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};




























