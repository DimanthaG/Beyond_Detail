export default {
  name: 'headlightRestoration',
  title: 'Headlight Restoration',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'pricing',
      title: 'Pricing Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'packageName', title: 'Package Name', type: 'string' },
            { name: 'price', title: 'Price', type: 'number' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'features',
      title: 'Features/Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
