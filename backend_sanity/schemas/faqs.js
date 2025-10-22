export default {
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Services', value: 'services' },
          { title: 'Pricing', value: 'pricing' },
          { title: 'Booking', value: 'booking' },
        ],
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
