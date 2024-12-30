export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'aboutMainHeader',
      title: 'About Main Header',
      type: 'string',
    },
    {
      name: 'topRow',
      title: 'Top Row',
      type: 'object',
      fields: [
        {
          name: 'testimonialPicture',
          title: 'Testimonial Picture',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'testimonial',
          title: 'Testimonial',
          type: 'string',
        },
        {
          name: 'clientName',
          title: 'Client Name',
          type: 'string',
        },
        {
          name: 'clientCompany',
          title: 'Client Company',
          type: 'string',
        },
        {
          name: 'topRowHeader',
          title: 'Top Row Header',
          type: 'string',
        },
        {
          name: 'checkList',
          title: 'CheckList',
          type: 'object',
          fields: [
            {
              name: 'text1',
              title: 'Text1',
              type: 'string',
            },
            {
              name: 'text2',
              title: 'Text2',
              type: 'string',
            },
            {
              name: 'text3',
              title: 'Text3',
              type: 'string',
            },
            {
              name: 'text4',
              title: 'Text4',
              type: 'string',
            },
          ],
        },
        {
          name: 'topRowDescription',
          title: 'Top Row Description',
          type: 'string',
        },
        {
          name: 'progressBar',
          title: 'Progress Bar',
          type: 'object',
          fields: [
            {
              name: 'percentage1',
              title: 'Percentage 1',
              type: 'string',
            },
            {
              name: 'percentage1Description',
              title: 'Percentage 1 Description',
              type: 'string',
            },
            {
              name: 'percentage2',
              title: 'Percentage 2',
              type: 'string',
            },
            {
              name: 'percentage2Description',
              title: 'Percentage 2 Description',
              type: 'string',
            },
            {
              name: 'percentage3',
              title: 'Percentage 3',
              type: 'string',
            },
            {
              name: 'percentage3Description',
              title: 'Percentage 3 Description',
              type: 'string',
            },
          ],
        },
      ],
    },

    {
      name: 'bottomRow',
      title: 'Bottom Row',
      type: 'object',
      fields: [
        {
          name: 'bottomRowPicture',
          title: 'Bottom Row Picture',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'bottomRowHeader',
          title: 'Bottom Row Header',
          type: 'string',
        },
        {
          name: 'bottomRowDescription',
          title: 'Bottom Row Description',
          type: 'string',
        },
      ],
    },
  ],
};
