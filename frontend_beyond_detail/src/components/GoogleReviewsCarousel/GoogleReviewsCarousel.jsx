import React, { useState, useEffect, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import './GoogleReviewsCarousel.scss';

function GoogleReviewsCarousel() {
  const [allReviews, setAllReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
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
          // Only log error once to reduce console noise
          if (!window.__googleReviewsErrorShown) {
            if (data.error.includes('npm run dev')) {
              console.warn('Google Reviews:', data.error);
            } else {
              console.error('Google Reviews error:', data.error);
            }
            window.__googleReviewsErrorShown = true;
          }
        } else {
          const reviewsList = (data.reviews || []).slice(0, 6); // limit for perf
          // Shuffle reviews to show different ones each time page loads
          const shuffledReviews = shuffleArray(reviewsList);
          
          setAllReviews(shuffledReviews);
          setCurrentIndex(0);
          setRating(data.rating || 0);
          setTotalReviews(data.totalReviews || shuffledReviews.length || 0);
        }
      } catch (err) {
        console.error('Error loading Google Reviews:', err);
        setError(err.message || 'Failed to load reviews');
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

  // Show loading state or handle errors gracefully
  if (loading) {
    return (
      <div className="google-reviews-carousel">
        <div className="google-reviews-carousel__loading">
          <p>Loading reviews...</p>
        </div>
      </div>
    );
  }

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
    
    // In production, show a minimal fallback instead of hiding completely
    if (!isDevelopment) {
      // For API endpoint errors (shouldn't happen in production), log and hide
      if (isApiEndpointError) {
        console.warn('[Google Reviews] API endpoint error in production - check Vercel function logs');
        return null;
      }
      
      // For API key errors, log detailed info and show fallback
      if (isApiKeyError) {
        console.error('[Google Reviews] API key configuration error:', {
          error,
          message: 'Check Vercel environment variables: GOOGLE_PLACES_SERVER_KEY and GOOGLE_PLACE_ID'
        });
        // Show a subtle fallback message instead of hiding completely
        return (
          <div className="google-reviews-carousel google-reviews-carousel--error" style={{ display: 'none' }}>
            {/* Hidden but logged for debugging */}
          </div>
        );
      }
      
      // For other errors, log and hide gracefully
      console.error('[Google Reviews] Unknown error:', error);
      return null;
    }
    
    // In development, show detailed error UI
    const isProxyError = error.includes('server configuration') || error.includes('Unable to fetch') || isApiEndpointError;
    return (
      <div className="google-reviews-carousel google-reviews-carousel--error">
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

  if (allReviews.length === 0 && !loading) {
    // Show empty state instead of hiding completely
    return (
      <div className="google-reviews-carousel google-reviews-carousel--empty">
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
                  className={`google-reviews-carousel__star ${
                    i < Math.round(rating) ? 'active' : ''
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
                        className={`google-reviews-carousel__star ${
                          i < (review.rating || 5) ? 'active' : ''
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
