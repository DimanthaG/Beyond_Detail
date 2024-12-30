export default {
  name: 'homeInfoSection',
  title: 'Home - Info Section',
  type: 'document',
  fields: [
    {
      name: 'headerOne',
      title: 'Header One',
      type: 'string',
    },
    {
      name: 'messageOne',
      title: 'Message One',
      type: 'string',
    },
    {
      name: 'imageOne',
      title: 'Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonLabelOne',
      title: 'Button Label One',
      type: 'string',
    },
    {
      name: 'headerTwo',
      title: 'Header Two',
      type: 'string',
    },
    {
      name: 'messageTwo',
      title: 'Message Two',
      type: 'string',
    },
    {
      name: 'buttonLabelTwo',
      title: 'Button Label Two',
      type: 'string',
    },
    {
      name: 'imageTwo',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
