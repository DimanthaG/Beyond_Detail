export default {
  name: 'contact',
  title: 'Contact',
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
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      title: 'Interested In',
      name: 'interestedIn',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'vehicleType',
      title: 'Vehicle Type',
      type: 'string',
    },
    {
      title: 'Booking Date & Time',
      name: 'bookingDate',
      type: 'datetime',
      options: {
        dateFormat: 'MMMM d, yyyy -',
        timeFormat: 'h:mm a',
      },
    },
  ],
};
