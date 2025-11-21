import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Sparkles, Shield, Award, Star, Clock } from 'lucide-react';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import PartnersCompact from '../Partners/PartnersCompact';
import carImage from '../../assets/bd/bd-26.webp';
import carImage400w from '../../assets/bd/bd-26-400w.webp';
import carImage800w from '../../assets/bd/bd-26-800w.webp';
import carImage1200w from '../../assets/bd/bd-26-1200w.webp';
import carImage1600w from '../../assets/bd/bd-26-1600w.webp';
import './InteriorDetailingHero.scss';

export function InteriorDetailingHero({ scrollTarget = "#pricing" }) {
  const heroRef = useRef(null);
  const [reviews, setReviews] = useState({ rating: 0, totalReviews: 0, recentReviews: [] });

  // Fetch Google Reviews for trust badges and live reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getCachedGoogleReviews();
        if (data && !data.error) {
          setReviews({
            rating: data.rating || 0,
            totalReviews: data.totalReviews || 0,
            recentReviews: (data.reviews || []).slice(0, 2)
          });
        }
      } catch (error) {
        console.error('Error loading reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <>
      <div id="hero" className="interior-detailing-hero" ref={heroRef}>
        {/* Car Image Background - Optimized without heavy parallax */}
        <div className="interior-detailing-hero__background">
          <div className="interior-detailing-hero__background-image">
            <img 
              src={carImage}
              srcSet={`
                ${carImage400w} 400w,
                ${carImage800w} 800w,
                ${carImage1200w} 1200w,
                ${carImage1600w} 1600w,
                ${carImage} 1920w
              `}
              sizes="100vw"
              alt="Interior detailing service" 
              loading="eager" 
              fetchPriority="high"
              decoding="async"
              width="1920"
              height="1080"
            />
          </div>
          <div className="interior-detailing-hero__background-overlay"></div>
          <div className="interior-detailing-hero__background-gradient"></div>
        </div>

        <div className="interior-detailing-hero__content">
          <div className="interior-detailing-hero__container">
            {/* Trust Badges - Top Bar */}
            <motion.div
              className="interior-detailing-hero__trust-badges"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {reviews.rating > 0 && (
                <div className="interior-detailing-hero__trust-badge">
                  <Star className="interior-detailing-hero__trust-icon" fill="currentColor" />
                  <div>
                    <span className="interior-detailing-hero__trust-rating">{reviews.rating.toFixed(1)}</span>
                    <span className="interior-detailing-hero__trust-text">
                      {reviews.totalReviews > 0 ? `${reviews.totalReviews}+ Reviews` : 'Rated'}
                    </span>
                  </div>
                </div>
              )}
              <div className="interior-detailing-hero__trust-badge">
                <Award className="interior-detailing-hero__trust-icon" />
                <span>Expert Certified</span>
              </div>
              <div className="interior-detailing-hero__trust-badge">
                <Shield className="interior-detailing-hero__trust-icon" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="interior-detailing-hero__trust-badge">
                <Clock className="interior-detailing-hero__trust-icon" />
                <span>Same-Day Service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="interior-detailing-hero__inner"
            >

              {/* Title Section */}
              <motion.div 
                className="interior-detailing-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1 
                  className="interior-detailing-hero__main-title"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span 
                    className="interior-detailing-hero__title-line interior-detailing-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Interior Detailing in
                  </motion.span>
                  <motion.span 
                    className="interior-detailing-hero__title-line interior-detailing-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    TORONTO &
                  </motion.span>
                  <motion.span 
                    className="interior-detailing-hero__title-line interior-detailing-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    SCARBOROUGH
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="interior-detailing-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Tired of dirty seats, lingering odors, and a dull interior? <strong>Breathe new life into your vehicle's interior</strong>. Our deep cleaning services go beyond surface cleaning to remove embedded dirt, eliminate odors, and restore that like-new freshness. Professional shampoo extraction, leather conditioning, and meticulous attention to every detail.
                </motion.p>

                {/* Feature Icons */}
                <motion.div 
                  className="interior-detailing-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div 
                    className="interior-detailing-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="interior-detailing-hero__feature-icon" />
                    <span>Deep Cleaning</span>
                  </motion.div>
                  <motion.div 
                    className="interior-detailing-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="interior-detailing-hero__feature-icon" />
                    <span>Odor Elimination</span>
                  </motion.div>
                  <motion.div 
                    className="interior-detailing-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="interior-detailing-hero__feature-icon" />
                    <span>Leather Care</span>
                  </motion.div>
                </motion.div>

                {/* Fast CTAs - Primary Actions */}
                <motion.div 
                  className="interior-detailing-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a 
                    href="#contact" 
                    className="interior-detailing-hero__action-button interior-detailing-hero__action-button--primary"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="interior-detailing-hero__icon" />
                  </motion.a>
                  <motion.a 
                    href="tel:16476896109"
                    className="interior-detailing-hero__action-button interior-detailing-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="interior-detailing-hero__icon" />
                    <span>Call (647) 689-6109</span>
                  </motion.a>
                </motion.div>

                {/* Service Shortcuts - Quick Links */}
                <motion.div 
                  className="interior-detailing-hero__service-shortcuts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <span className="interior-detailing-hero__shortcuts-label">Related Services:</span>
                  <div className="interior-detailing-hero__shortcuts-list">
                    <Link to="/auto-detail" className="interior-detailing-hero__shortcut">
                      Auto Detailing
                    </Link>
                    <Link to="/leather-cleaning" className="interior-detailing-hero__shortcut">
                      Leather Cleaning
                    </Link>
                    <Link to="/odour-removal" className="interior-detailing-hero__shortcut">
                      Odour Removal
                    </Link>
                  </div>
                </motion.div>

                {/* Live Reviews - Recent */}
                {reviews.recentReviews.length > 0 && (
                  <motion.div 
                    className="interior-detailing-hero__reviews-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                  >
                    <div className="interior-detailing-hero__reviews-header">
                      <Star className="interior-detailing-hero__reviews-icon" fill="currentColor" />
                      <span>Recent Reviews</span>
                    </div>
                    <div className="interior-detailing-hero__reviews-list">
                      {reviews.recentReviews.map((review, idx) => (
                        <div key={idx} className="interior-detailing-hero__review-card">
                          <div className="interior-detailing-hero__review-header">
                            <div className="interior-detailing-hero__review-stars">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`interior-detailing-hero__review-star ${
                                    i < (review.rating || 5) ? 'filled' : ''
                                  }`}
                                  size={12}
                                  fill={i < (review.rating || 5) ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="interior-detailing-hero__review-name">{review.name}</span>
                          </div>
                          <p className="interior-detailing-hero__review-text">"{review.message?.substring(0, 80)}..."</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Partners Compact Section */}
          <div className="interior-detailing-hero__partners">
            <PartnersCompact />
          </div>

          {/* Reviews Carousel Below Hero */}
          <div className="interior-detailing-hero__reviews">
            <GoogleReviewsCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default InteriorDetailingHero;

