import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import './GoogleReviewsCarousel.scss';

function GoogleReviewsCarousel() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);

  // Fetch reviews from Google Places API
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError(null);
      
      // Debug: Log API configuration
      console.log('Google Reviews - API Key:', process.env.REACT_APP_GOOGLE_PLACES_API_KEY ? 'Set' : 'Missing');
      console.log('Google Reviews - Place ID:', process.env.REACT_APP_GOOGLE_PLACE_ID || 'Not set');
      
      try {
        const data = await getCachedGoogleReviews();
        console.log('Google Reviews - API Response:', data);
        
        if (data.error) {
          setError(data.error);
          console.error('Google Reviews error:', data.error);
        } else {
          const reviewsList = data.reviews || [];
          console.log('Google Reviews - Fetched reviews count:', reviewsList.length);
          setReviews(reviewsList);
          setRating(data.rating || 0);
          setTotalReviews(data.totalReviews || 0);
        }
      } catch (err) {
        console.error('Error loading Google Reviews:', err);
        setError(err.message || 'Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    if (reviews.length <= 3) return; // Don't auto-scroll if we have 3 or fewer reviews
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev >= reviews.length - 3 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, reviews.length - 3) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev >= reviews.length - 3 ? 0 : prev + 1
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

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

  // Show error message for debugging (development) or hide in production
  if (error) {
    return (
      <div className="google-reviews-carousel google-reviews-carousel--error">
        <div className="google-reviews-carousel__error-message">
          <p><strong>Unable to load Google Reviews</strong></p>
          <p>{error}</p>
          <p style={{ fontSize: '0.875rem', marginTop: '1rem', opacity: 0.8 }}>
            Please check the browser console for more details.
          </p>
        </div>
      </div>
    );
  }

  if (reviews.length === 0 && !loading) {
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
              {rating > 0 ? `${rating.toFixed(1)}` : ''} • {totalReviews > 0 ? `${totalReviews}` : reviews.length}+ Reviews
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
        >
          <HiChevronLeft />
        </button>

        <div className="google-reviews-carousel__track">
          {visibleReviews.map((review, index) => (
            <motion.div
              key={review._id || index}
              className="google-reviews-carousel__card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>

        <button 
          className="google-reviews-carousel__nav google-reviews-carousel__nav--next"
          onClick={handleNext}
          aria-label="Next reviews"
        >
          <HiChevronRight />
        </button>
      </div>

      {reviews.length > 3 && (
        <div className="google-reviews-carousel__indicators">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, i) => (
            <button
              key={i}
              className={`google-reviews-carousel__indicator ${
                Math.floor(currentIndex / 3) === i ? 'active' : ''
              }`}
              onClick={() => setCurrentIndex(i * 3)}
              aria-label={`Go to review set ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default GoogleReviewsCarousel;

