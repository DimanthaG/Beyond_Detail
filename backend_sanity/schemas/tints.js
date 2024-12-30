export default {
  name: 'tints',
  title: 'Tints',
  type: 'document',
  fields: [
    {
      name: 'tintsInfoSection',
      title: 'Tints - Info Section',
      type: 'object',
      fields: [
        { name: 'topText', type: 'string', title: 'Top Text' },
        { name: 'heading', type: 'string', title: 'Heading' },
        { name: 'description', type: 'string', title: 'Description' },
        { name: 'btnText', type: 'string', title: 'Button Text' },
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
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image 2',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'description', type: 'string', title: 'Description' },
          ],
        },

        {
          name: 'image3',
          title: 'Image 3',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image 3',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'description', type: 'string', title: 'Description' },
          ],
        },

        {
          name: 'image4',
          title: 'Image 4',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image 4',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'description', type: 'string', title: 'Description' },
          ],
        },
      ],
    },

    {
      name: 'tintsMaterials',
      title: 'Tints - Materials Section',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        { name: 'topText', type: 'string', title: 'Top Text' },
        { name: 'heading', type: 'string', title: 'Heading' },
        { name: 'description', type: 'string', title: 'Description' },
      ],
    },

    {
      name: 'tintsSimulator',
      title: 'Tints - Simulator Section',
      type: 'object',
      fields: [
        { name: 'heading', type: 'string', title: 'Heading' },
        { name: 'description', type: 'string', title: 'Description' },
      ],
    },

    {
      name: 'tintsPackages',
      title: 'Tints - Packages Section',
      type: 'object',
      fields: [
        {
          name: 'box1',
          title: 'Box 1',
          type: 'object',
          fields: [
            { name: 'price', type: 'string', title: 'Price' },
            { name: 'startingAt', type: 'string', title: 'Starting At' },
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'btnLabel', type: 'string', title: 'Button Label' },
          ],
        },

        {
          name: 'box2',
          title: 'Box 2',
          type: 'object',
          fields: [
            { name: 'price', type: 'string', title: 'Price' },
            { name: 'startingAt', type: 'string', title: 'Starting At' },
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'btnLabel', type: 'string', title: 'Button Label' },
          ],
        },

        {
          name: 'box3',
          title: 'Box 3',
          type: 'object',
          fields: [
            { name: 'price', type: 'string', title: 'Price' },
            { name: 'startingAt', type: 'string', title: 'Starting At' },
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'btnLabel', type: 'string', title: 'Button Label' },
          ],
        },

        {
          name: 'box4',
          title: 'Box 4',
          type: 'object',
          fields: [
            { name: 'price', type: 'string', title: 'Price' },
            { name: 'startingAt', type: 'string', title: 'Starting At' },
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'btnLabel', type: 'string', title: 'Button Label' },
          ],
        },
      ],
    },
  ],
};
