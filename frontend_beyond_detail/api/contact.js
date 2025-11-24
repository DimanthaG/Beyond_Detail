import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'trp6l9ar',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: false,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, interestedIn, vehicleType, bookingDate } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create the contact document
    const contact = {
      _type: 'contact',
      name,
      email,
      phone,
      message,
      interestedIn,
      vehicleType,
      bookingDate,
    };

    const result = await client.create(contact);
    
    res.status(200).json({ 
      success: true, 
      id: result._id,
      message: 'Contact form submitted successfully' 
    });
  } catch (err) {
    console.error('Error creating contact:', err);
    res.status(500).json({ 
      error: 'Failed to submit contact form',
      details: err.message 
    });
  }
}

