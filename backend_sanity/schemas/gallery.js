export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'headerOne',
      title: 'Header One',
      type: 'string',
    },
    {
      name: 'galleryPicture',
      title: 'Gallery Picture (2048px x 1550px)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
};
