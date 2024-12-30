export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'addressTitle',
      title: 'Address Title',
      type: 'string',
    },
    {
      name: 'addressUnit',
      title: 'Address Unit',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'socialName1', type: 'string', title: 'Social Link Name 1' },
        { name: 'socialUrl1', type: 'string', title: 'Social Link URL 1' },
        { name: 'socialName2', type: 'string', title: 'Social Link Name 2' },
        { name: 'socialUrl2', type: 'string', title: 'Social Link URL 2' },
        { name: 'socialName3', type: 'string', title: 'Social Link Name 3' },
        { name: 'socialUrl3', type: 'string', title: 'Social Link URL 3' },
        { name: 'socialName4', type: 'string', title: 'Social Link Name 4' },
        { name: 'socialUrl4', type: 'string', title: 'Social Link URL 4' },
      ],
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'object',
      fields: [
        { name: 'hoursHeading', type: 'string', title: 'Hours Heading' },
        { name: 'hoursDay1', type: 'string', title: 'Hours Days 1' },
        { name: 'hours1', type: 'string', title: 'Hours 1' },
        { name: 'hoursDay2', type: 'string', title: 'Hours Days 2' },
        { name: 'hours2', type: 'string', title: 'Hours 2' },
      ],
    },
  ],
};
