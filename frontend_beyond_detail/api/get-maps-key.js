// Serverless function to securely provide Google Maps API key
// This keeps the API key on the server and restricts it to specific domains
// Compatible with Vercel and other serverless platforms

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    // Get the server-side API key from environment variables
    const serverKey = process.env.GOOGLE_MAPS_SERVER_KEY;

    if (!serverKey) {
      res.status(500).json({ error: 'Maps API key not configured on server' });
      return;
    }

    // Return the API key (it will be restricted by domain in Google Cloud Console)
    // The key should be restricted to: https://beyonddetail.ca/* and https://*.beyonddetail.ca/*
    res.status(200).json({ apiKey: serverKey });
  } catch (err) {
    console.error('Error in get-maps-key:', err);
    res.status(500).json({ error: err.message || 'Unexpected server error' });
  }
}




