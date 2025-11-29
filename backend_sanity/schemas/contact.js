export default {
    name: 'contact',
    title: 'Contact Inquiries',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'subject',
            title: 'Subject',
            type: 'string',
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text',
        },
        {
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: (new Date()).toISOString(),
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'new' },
                    { title: 'In Progress', value: 'inProgress' },
                    { title: 'Completed', value: 'completed' },
                ],
                layout: 'radio',
            },
            initialValue: 'new',
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'email',
            date: 'submittedAt'
        },
        prepare(selection) {
            const { title, subtitle, date } = selection;
            return {
                title: title,
                subtitle: `${subtitle} - ${date ? new Date(date).toLocaleDateString() : ''}`
            };
        },
    },
}
