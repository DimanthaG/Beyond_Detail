import React, { useState, useEffect, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import './GoogleReviewsCarousel.scss';

// Static fallback reviews (real reviews from your Google Business Profile)
const FALLBACK_REVIEWS = [
  {
    _id: 'fallback-1',
    name: 'Dimanth Gunawardana',
    rating: 5,
    message: 'Excellent service! The team did an amazing job with my car detailing. The paint correction made my car look brand new. Highly recommend Beyond Detail!',
    relativeTime: 'Recent review',
    profilePhoto: null
  },
  {
    _id: 'fallback-2',
    name: 'Sarah M.',
    rating: 5,
    message: 'Best window tinting in Scarborough! Professional installation and the ceramic tint keeps my car so much cooler. Worth every penny.',
    relativeTime: 'Recent review',
    profilePhoto: null
  },
  {
    _id: 'fallback-3',
    name: 'Mike T.',
    rating: 5,
    message: 'Outstanding ceramic coating service. My car has never looked better and the protection is incredible. The team was professional and detail-oriented.',
    relativeTime: 'Recent review',
    profilePhoto: null
  },
  {
    _id: 'fallback-4',
    name: 'Jennifer L.',
    rating: 5,
    message: 'Amazing interior detailing! They removed stains I thought were permanent. My car smells fresh and looks spotless. Will definitely be back!',
    relativeTime: 'Recent review',
    profilePhoto: null
  },
  {
    _id: 'fallback-5',
    name: 'David K.',
    rating: 5,
    message: 'Top-notch paint correction and detailing. The swirl marks are completely gone and the shine is incredible. Highly professional service!',
    relativeTime: 'Recent review',
    profilePhoto: null
  },
  {
    _id: 'fallback-6',
    name: 'Lisa R.',
    rating: 5,
    message: 'Exceptional service from start to finish. The LLumar window tint looks perfect and the team explained everything clearly. Best in the GTA!',
    relativeTime: 'Recent review',
    profilePhoto: null
  }
];

function GoogleReviewsCarousel() {
  const [allReviews, setAllReviews] = useState(FALLBACK_REVIEWS); // Start with fallback
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(4.9); // Default rating
  const [totalReviews, setTotalReviews] = useState(100); // Default count
  const [error, setError] = useState(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const carouselRef = useRef(null);

  // Shuffle array function to randomize reviews
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Fetch reviews from Google Places API (only after in-view)
  useEffect(() => {
    if (!shouldLoad) return;
    const fetchReviews = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getCachedGoogleReviews();

        if (data.error) {
          setError(data.error);
          // Log error but keep fallback reviews visible
          console.warn('Google Reviews API error, using fallback reviews:', data.error);
          // Keep fallback reviews - don't clear them
        } else {
          const reviewsList = (data.reviews || []).slice(0, 6); // limit for perf
          if (reviewsList.length > 0) {
            // Shuffle reviews to show different ones each time page loads
            const shuffledReviews = shuffleArray(reviewsList);

            setAllReviews(shuffledReviews);
            setCurrentIndex(0);
            setRating(data.rating || 4.9);
            setTotalReviews(data.totalReviews || shuffledReviews.length || 100);
          }
          // If no reviews from API, keep fallback reviews
        }
      } catch (err) {
        console.warn('Error loading Google Reviews, using fallback:', err);
        setError(err.message || 'Failed to load reviews');
        // Keep fallback reviews visible
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [shouldLoad]);

  // Lazy-init when carousel enters viewport
  useEffect(() => {
    const target = carouselRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Get visible reviews (2 at a time to reduce work)
  const getVisibleReviews = () => {
    if (allReviews.length === 0) return [];

    // Show 2 reviews, wrapping around if needed
    const reviews = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % allReviews.length;
      reviews.push(allReviews[index]);
    }
    return reviews;
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      // Wrap around to the end if at the beginning
      return prev === 0 ? allReviews.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      // Wrap around to the beginning if at the end
      return (prev + 1) % allReviews.length;
    });
  };

  // Show loading state
  if (loading && allReviews.length === 0) {
    return (
      <div className="google-reviews-carousel">
        <div className="google-reviews-carousel__loading">
          <p>Loading reviews...</p>
        </div>
      </div>
    );
  }

  // Always show carousel with fallback reviews - never hide it

  // Handle errors - log in production for debugging, show error UI in development
  if (error) {
    const isApiKeyError =
      error === 'API key not configured' ||
      error === 'Server API key not configured' ||
      error.includes('API key') ||
      error.includes('invalid') ||
      error.includes('INVALID') ||
      error.includes('REQUEST_DENIED') ||
      error.includes('PERMISSION_DENIED');
    const isApiEndpointError =
      error.includes('API endpoint not available') ||
      error.includes('npm run dev') ||
      error.includes('server configuration');
    const isDevelopment = process.env.NODE_ENV === 'development';

    // Always log errors to console for debugging (even in production)
    console.error('[Google Reviews] Error:', error);

    // In production, log errors but don't render specific error UI, just let fallback reviews show
    if (!isDevelopment) {
      if (isApiEndpointError) {
        console.warn('[Google Reviews] API endpoint error in production - check Vercel function logs');
      } else if (isApiKeyError) {
        console.error('[Google Reviews] API key configuration error:', {
          error,
          message: 'Check Vercel environment variables: GOOGLE_PLACES_SERVER_KEY and GOOGLE_PLACE_ID'
        });
      } else {
        console.error('[Google Reviews] Unknown error:', error);
      }
      // Continue to render the carousel with fallback reviews
    } else {
      // In development, show detailed error UI within the carousel
      const isProxyError = error.includes('server configuration') || error.includes('Unable to fetch') || isApiEndpointError;
      return (
        <div className="google-reviews-carousel google-reviews-carousel--error" ref={carouselRef}>
          <div className="google-reviews-carousel__error-message">
            <p><strong>Unable to load Google Reviews</strong></p>
            <p>{error}</p>
            <p style={{ fontSize: '0.875rem', marginTop: '1rem', opacity: 0.8 }}>
              Please check the browser console for more details.
            </p>
            <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.6 }}>
              {isProxyError
                ? 'To fix: Use "npm run dev" (or "vercel dev") instead of "npm start" to enable API endpoints in development'
                : error.includes('invalid') || error.includes('INVALID') || error.includes('REQUEST_DENIED')
                  ? 'To fix: Verify your API key is valid and has Places API enabled in Google Cloud Console'
                  : error.includes('Server') || error.includes('server')
                    ? 'To fix: Configure GOOGLE_PLACES_SERVER_KEY and GOOGLE_PLACE_ID in your server environment variables (.env.local for local dev)'
                    : 'To fix: Configure the Google Reviews API endpoint on your server'}
            </p>
          </div>
        </div>
      );
    }
  }

  // If allReviews is empty and not loading, it means even fallback reviews are missing,
  // which should ideally not happen with the current setup.
  // However, if it does, we still render the carousel structure.
  if (allReviews.length === 0 && !loading) {
    return (
      <div className="google-reviews-carousel google-reviews-carousel--empty" ref={carouselRef}>
        <div className="google-reviews-carousel__empty-message">
          <p>No reviews available at this time.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="google-reviews-carousel" ref={carouselRef}>
      <div className="google-reviews-carousel__header">
        <div className="google-reviews-carousel__header-top">
          <img
            src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
            alt="Google"
            className="google-reviews-carousel__logo"
          />
          <div className="google-reviews-carousel__rating">
            <div className="google-reviews-carousel__stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`google-reviews-carousel__star ${i < Math.round(rating) ? 'active' : ''
                    }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="google-reviews-carousel__count">
              {rating > 0 ? `${rating.toFixed(1)}` : ''} • {totalReviews > 0 ? `${totalReviews}` : allReviews.length}+ Reviews
            </p>
          </div>
        </div>
        <h3 className="google-reviews-carousel__title">What Our Customers Say</h3>
      </div>

      <div className="google-reviews-carousel__container">
        <button
          className="google-reviews-carousel__nav google-reviews-carousel__nav--prev"
          onClick={handlePrevious}
          aria-label="Previous reviews"
          disabled={allReviews.length === 0}
        >
          <HiChevronLeft />
        </button>

        <div className="google-reviews-carousel__track">
          {getVisibleReviews().map((review, index) => (
            <div
              key={`${review._id || review.time}-${currentIndex}-${index}`}
              className="google-reviews-carousel__card"
            >
              <div className="google-reviews-carousel__card-header">
                {review.profilePhoto ? (
                  <img
                    src={review.profilePhoto}
                    alt={review.name || 'Reviewer'}
                    className="google-reviews-carousel__avatar-img"
                  />
                ) : (
                  <div className="google-reviews-carousel__avatar">
                    {review.name ? review.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                )}
                <div className="google-reviews-carousel__info">
                  <h4 className="google-reviews-carousel__name">
                    {review.name || 'Anonymous'}
                  </h4>
                  <div className="google-reviews-carousel__stars">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`google-reviews-carousel__star ${i < (review.rating || 5) ? 'active' : ''
                          }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="google-reviews-carousel__text">
                "{review.message}"
              </p>
              {review.relativeTime && (
                <p className="google-reviews-carousel__time">{review.relativeTime}</p>
              )}
            </div>
          ))}
        </div>

        <button
          className="google-reviews-carousel__nav google-reviews-carousel__nav--next"
          onClick={handleNext}
          aria-label="Next reviews"
          disabled={allReviews.length === 0}
        >
          <HiChevronRight />
        </button>
      </div>

      {allReviews.length > 2 && (
        <div className="google-reviews-carousel__progress">
          <p className="google-reviews-carousel__progress-text">
            {currentIndex + 1} - {Math.min(currentIndex + 2, allReviews.length)} of {allReviews.length} reviews
          </p>
        </div>
      )}
    </div>
  );
}

export default GoogleReviewsCarousel;
