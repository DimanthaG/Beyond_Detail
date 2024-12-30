export default {
  name: 'homeDetailSection',
  title: 'Home - Detail Section',
  type: 'document',
  fields: [
    {
      name: 'services',
      title: 'Services',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'string', title: 'Description' },
      ],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
};
