export default {
  name: 'homeServicesCards',
  title: 'Home - Services Cards',
  type: 'document',
  fields: [
    {
      name: 'cardOne',
      title: 'Card 1',
      type: 'object',
      fields: [
        {
          name: 'bgImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        { name: 'dollarSign', type: 'string', title: 'Dollar Sign' },
        { name: 'price', type: 'string', title: 'Price' },
        { name: 'heading', type: 'string', title: 'Heading' },
        { name: 'description', type: 'string', title: 'Description' },
        { name: 'buttonLabel', type: 'string', title: 'Button Label' },
        { name: 'buttonUrl', type: 'string', title: 'Button URL' },
      ],
    },
    {
      name: 'cardTwo',
      title: 'Card 2',
      type: 'object',
      fields: [
        {
          name: 'bgImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        { name: 'dollarSign', type: 'string', title: 'Dollar Sign' },
        { name: 'price', type: 'string', title: 'Price' },
        { name: 'heading', type: 'string', title: 'Heading' },
        { name: 'description', type: 'string', title: 'Description' },
        { name: 'buttonLabel', type: 'string', title: 'Button Label' },
        { name: 'buttonUrl', type: 'string', title: 'Button URL' },
      ],
    },
    {
      name: 'cardThree',
      title: 'Card 3',
      type: 'object',
      fields: [
        {
          name: 'bgImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        { name: 'dollarSign', type: 'string', title: 'Dollar Sign' },
        { name: 'price', type: 'string', title: 'Price' },
        { name: 'heading', type: 'string', title: 'Heading' },
        { name: 'description', type: 'string', title: 'Description' },
        { name: 'buttonLabel', type: 'string', title: 'Button Label' },
        { name: 'buttonUrl', type: 'string', title: 'Button URL' },
      ],
    },
  ],
};
