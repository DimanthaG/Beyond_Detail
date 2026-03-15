'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import './GoogleReviewsCarousel.scss';

const FALLBACK_REVIEWS = [
  { _id: 'fallback-1', name: 'John D.', message: 'Took my car in for a full detail and it came back looking brand new. Incredible attention to detail.', rating: 5, relativeTime: '2 weeks ago' },
  { _id: 'fallback-2', name: 'Sarah L.', message: 'Friendly team, quick turnaround, and the results exceeded my expectations. Highly recommend Beyond Detail.', rating: 5, relativeTime: '1 month ago' },
  { _id: 'fallback-3', name: 'Michael R.', message: 'The ceramic coating was flawless and the interior deep clean was spotless. Worth every penny.', rating: 5, relativeTime: '3 months ago' },
  { _id: 'fallback-4', name: 'Priya S.', message: 'Professional service from start to finish. They even removed scratches I thought were permanent.', rating: 5, relativeTime: '5 months ago' },
  { _id: 'fallback-5', name: 'Alex G.', message: 'Booking was easy and the results were phenomenal. My SUV has never looked this good.', rating: 5, relativeTime: '6 months ago' },
  { _id: 'fallback-6', name: 'Maria K.', message: 'Trusted them with my classic car and they delivered showroom quality. Will definitely return.', rating: 5, relativeTime: '8 months ago' },
];

const shuffleArray = (array) => { const s = [...array]; for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; } return s; };

function GoogleReviewsCarousel() {
  const [allReviews, setAllReviews] = useState(() => shuffleArray(FALLBACK_REVIEWS));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(4.9);
  const [totalReviews, setTotalReviews] = useState(FALLBACK_REVIEWS.length);
  const [shouldLoad, setShouldLoad] = useState(false);
  const carouselRef = useRef(null);
  const REVIEWS_PER_PAGE = 3;

  useEffect(() => {
    if (!shouldLoad) return;
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const data = await getCachedGoogleReviews();
        if (!data.error) {
          const reviewsList = (data.reviews || []).slice(0, 9);
          if (reviewsList.length > 0) { setAllReviews(shuffleArray(reviewsList)); setCurrentIndex(0); setRating(data.rating || 4.9); setTotalReviews(data.totalReviews || reviewsList.length || 100); }
        }
      } catch (err) { console.warn('Error loading Google Reviews:', err); }
      finally { setLoading(false); }
    };
    fetchReviews();
  }, [shouldLoad]);

  useEffect(() => {
    const target = carouselRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') { setShouldLoad(true); return; }
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { setShouldLoad(true); observer.disconnect(); } }); }, { rootMargin: '200px' });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const getVisibleReviews = () => { if (allReviews.length === 0) return []; const reviews = []; for (let i = 0; i < REVIEWS_PER_PAGE; i++) { const index = currentIndex + i; if (index < allReviews.length) reviews.push(allReviews[index]); } return reviews; };
  const handlePrevious = () => { setCurrentIndex((prev) => { const n = prev - REVIEWS_PER_PAGE; return n < 0 ? Math.max(0, allReviews.length - REVIEWS_PER_PAGE) : n; }); };
  const handleNext = () => { setCurrentIndex((prev) => { const n = prev + REVIEWS_PER_PAGE; return n >= allReviews.length ? 0 : n; }); };

  if (loading && allReviews.length === 0) return <div className="google-reviews-carousel"><div className="google-reviews-carousel__loading"><p>Loading reviews...</p></div></div>;
  if (allReviews.length === 0 && !loading) return <div className="google-reviews-carousel google-reviews-carousel--empty" ref={carouselRef}><div className="google-reviews-carousel__empty-message"><p>No reviews available at this time.</p></div></div>;

  return (
    <div className="google-reviews-carousel" ref={carouselRef}>
      <div className="google-reviews-carousel__header">
        <div className="google-reviews-carousel__header-top">
          <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="google-reviews-carousel__logo" />
          <div className="google-reviews-carousel__rating">
            <div className="google-reviews-carousel__stars">{[...Array(5)].map((_, i) => (<span key={i} className={`google-reviews-carousel__star ${i < Math.round(rating) ? 'active' : ''}`}>&#9733;</span>))}</div>
            <p className="google-reviews-carousel__count">{rating > 0 ? `${rating.toFixed(1)}` : ''} &bull; {totalReviews > 0 ? `${totalReviews}` : allReviews.length}+ Reviews</p>
          </div>
        </div>
        <h3 className="google-reviews-carousel__title">What Our Customers Say</h3>
      </div>
      <div className="google-reviews-carousel__container">
        <button className="google-reviews-carousel__nav google-reviews-carousel__nav--prev" onClick={handlePrevious} aria-label="Previous reviews" disabled={allReviews.length === 0}><ChevronLeft /></button>
        <div className="google-reviews-carousel__track">
          {getVisibleReviews().map((review, index) => (
            <div key={`${review._id || review.time}-${currentIndex}-${index}`} className="google-reviews-carousel__card">
              <div className="google-reviews-carousel__card-header">
                {review.profilePhoto ? (<img src={review.profilePhoto} alt={review.name || 'Reviewer'} className="google-reviews-carousel__avatar-img" />) : (<div className="google-reviews-carousel__avatar">{review.name ? review.name.charAt(0).toUpperCase() : 'U'}</div>)}
                <div className="google-reviews-carousel__info">
                  <h4 className="google-reviews-carousel__name">{review.name || 'Anonymous'}</h4>
                  <div className="google-reviews-carousel__stars">{[...Array(5)].map((_, i) => (<span key={i} className={`google-reviews-carousel__star ${i < (review.rating || 5) ? 'active' : ''}`}>&#9733;</span>))}</div>
                </div>
              </div>
              <p className="google-reviews-carousel__text">&quot;{review.message}&quot;</p>
              {review.relativeTime && (<p className="google-reviews-carousel__time">{review.relativeTime}</p>)}
            </div>
          ))}
        </div>
        <button className="google-reviews-carousel__nav google-reviews-carousel__nav--next" onClick={handleNext} aria-label="Next reviews" disabled={allReviews.length === 0}><ChevronRight /></button>
      </div>
      {allReviews.length > REVIEWS_PER_PAGE && (<div className="google-reviews-carousel__progress"><p className="google-reviews-carousel__progress-text">{currentIndex + 1} - {Math.min(currentIndex + REVIEWS_PER_PAGE, allReviews.length)} of {allReviews.length} reviews</p></div>)}
    </div>
  );
}

export default GoogleReviewsCarousel;
