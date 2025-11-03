// Serverless function to fetch Google Reviews securely using a server-side API key
// Compatible with platforms like Vercel (Node 18+ provides native fetch)

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const serverKey = process.env.GOOGLE_PLACES_SERVER_KEY;
    const placeId = req.query.placeId || process.env.GOOGLE_PLACE_ID;

    if (!serverKey) {
      res.status(500).json({ error: 'Server API key not configured' });
      return;
    }
    if (!placeId) {
      res.status(400).json({ error: 'Place ID not provided' });
      return;
    }

    const fields = 'reviews,rating,user_ratings_total,name,formatted_address';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=${fields}&key=${serverKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      res.status(response.status).json({ error: data?.error_message || 'Failed to fetch' });
      return;
    }

    // Normalize to the structure the frontend expects
    if (data.status === 'OK' && data.result) {
      const result = data.result;
      const formattedReviews = (result.reviews || []).map((review) => ({
        _id: review.time || Date.now() + Math.random(),
        name: review.author_name,
        message: review.text,
        rating: review.rating,
        time: review.time,
        profilePhoto: review.profile_photo_url || null,
        relativeTime: review.relative_time_description,
      }));

      res.status(200).json({
        reviews: formattedReviews,
        rating: result.rating || 0,
        totalReviews: result.user_ratings_total || 0,
        businessName: result.name,
        address: result.formatted_address,
      });
      return;
    }

    res.status(200).json({
      reviews: [],
      rating: 0,
      totalReviews: 0,
      error: data.error_message || data.status || 'Failed to fetch reviews',
    });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Unexpected server error' });
  }
}




