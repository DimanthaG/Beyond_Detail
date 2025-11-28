export default {
    name: 'blogPost',
    title: 'Blog Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
            description: 'The main title of the blog post (max 100 characters for SEO)',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
            description: 'URL-friendly version of the title (auto-generated from title)',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
            initialValue: 'Beyond Detail Team',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
            description: 'When this post was/will be published',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Paint Protection', value: 'Paint Protection' },
                    { title: 'Ceramic Coating', value: 'Ceramic Coating' },
                    { title: 'Window Tinting', value: 'Window Tinting' },
                    { title: 'Interior Detailing', value: 'Interior Detailing' },
                    { title: 'Exterior Detailing', value: 'Exterior Detailing' },
                    { title: 'Paint Correction', value: 'Paint Correction' },
                    { title: 'Seasonal Care', value: 'Seasonal Care' },
                    { title: 'Safety', value: 'Safety' },
                    { title: 'Car Care Tips', value: 'Car Care Tips' },
                    { title: 'Local SEO', value: 'Local SEO' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().min(100).max(200),
            description: 'Short summary of the post (100-200 characters) - shows in blog list',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                    description: 'Describe the image for SEO and accessibility',
                },
            ],
            validation: (Rule) => Rule.required(),
            description: 'Featured image for the blog post',
        },
        {
            name: 'contentImages',
            title: 'Content Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string',
                            description: 'Optional caption to display below the image',
                        },
                    ],
                },
            ],
            description: 'Additional images to use throughout the blog post content',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                        validation: (Rule) =>
                                            Rule.uri({
                                                scheme: ['http', 'https', 'mailto', 'tel'],
                                            }),
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        type: 'boolean',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string',
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
            description: 'Main content of the blog post - use rich text editor',
        },
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            validation: (Rule) => Rule.max(60),
            description: 'Custom title for search engines (max 60 chars). Leave empty to use main title.',
        },
        {
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.max(160),
            description: 'Custom description for search engines (max 160 chars). Leave empty to use excerpt.',
        },
        {
            name: 'keywords',
            title: 'Focus Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
            description: 'Main keywords for this post (e.g., "car detailing scarborough", "ceramic coating")',
        },
        {
            name: 'relatedServices',
            title: 'Related Services',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Window Tinting', value: 'window-tint' },
                    { title: 'Auto Detailing', value: 'auto-detail' },
                    { title: 'Paint Correction', value: 'paint-correction' },
                    { title: 'Ceramic Coating', value: 'ceramic-coating' },
                    { title: 'Interior Detailing', value: 'interior-detailing' },
                    { title: 'Exterior Detailing', value: 'exterior-detailing' },
                    { title: 'Headlight Restoration', value: 'headlight-restoration' },
                ],
            },
            description: 'Link to related service pages',
        },
        {
            name: 'featured',
            title: 'Featured Post',
            type: 'boolean',
            initialValue: false,
            description: 'Show this post prominently on the blog page',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Optional: Lower numbers appear first. If not set, posts are sorted by date.',
            validation: (Rule) => Rule.min(0).integer(),
        },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'mainImage',
            category: 'category',
            publishedAt: 'publishedAt',
        },
        prepare({ title, author, media, category, publishedAt }) {
            const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'No date';
            return {
                title: title,
                subtitle: `${category || 'No category'} | ${author} | ${date}`,
                media: media,
            };
        },
    },
    orderings: [
        {
            title: 'Published Date, New',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
        {
            title: 'Published Date, Old',
            name: 'publishedAtAsc',
            by: [{ field: 'publishedAt', direction: 'asc' }],
        },
        {
            title: 'Title, A-Z',
            name: 'titleAsc',
            by: [{ field: 'title', direction: 'asc' }],
        },
        {
            title: 'Category',
            name: 'categoryAsc',
            by: [{ field: 'category', direction: 'asc' }],
        },
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
};
