import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const serverKey = process.env.GOOGLE_PLACES_SERVER_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!serverKey) {
      return NextResponse.json({
        reviews: [],
        rating: 5,
        totalReviews: 70,
        error: 'Server API key not configured',
      });
    }

    if (!placeId) {
      return NextResponse.json({
        reviews: [],
        rating: 5,
        totalReviews: 70,
        error: 'Place ID not configured',
      });
    }

    const fields = 'reviews,rating,user_ratings_total,name,formatted_address';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=${fields}&key=${serverKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK' || !data.result) {
      return NextResponse.json({
        reviews: [],
        rating: 0,
        totalReviews: 0,
        error: data.error_message || `Google API error: ${data.status}`,
      });
    }

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

    return NextResponse.json({
      reviews: formattedReviews,
      rating: result.rating || 0,
      totalReviews: result.user_ratings_total || 0,
      businessName: result.name,
      address: result.formatted_address,
    });
  } catch (err) {
    console.error('[google-reviews] Error:', err.message);
    return NextResponse.json({
      reviews: [],
      rating: 5,
      totalReviews: 70,
      error: err.message,
    });
  }
}
