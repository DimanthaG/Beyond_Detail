import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Sparkles, Award, TrendingUp, Star, Shield, Clock } from 'lucide-react';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import PartnersCompact from '../Partners/PartnersCompact';
import carImage from '../../assets/bd/bd-24.webp';
import carImage400w from '../../assets/bd/bd-24-400w.webp';
import carImage800w from '../../assets/bd/bd-24-800w.webp';
import carImage1200w from '../../assets/bd/bd-24-1200w.webp';
import carImage1600w from '../../assets/bd/bd-24-1600w.webp';
import './PaintCorrectionHero.scss';

export function PaintCorrectionHero({ scrollTarget = "#pricing" }) {
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
      <div id="hero" className="paint-correction-hero" ref={heroRef}>
        {/* Car Image Background - Optimized without heavy parallax */}
        <div className="paint-correction-hero__background">
          <div className="paint-correction-hero__background-image">
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
              alt="Paint correction service" 
              loading="eager" 
              fetchpriority="high"
              decoding="async"
              width="1920"
              height="1080"
            />
          </div>
          <div className="paint-correction-hero__background-overlay"></div>
          <div className="paint-correction-hero__background-gradient"></div>
        </div>

        <div className="paint-correction-hero__content">
          <div className="paint-correction-hero__container">
            {/* Trust Badges - Top Bar */}
            <motion.div
              className="paint-correction-hero__trust-badges"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {reviews.rating > 0 && (
                <div className="paint-correction-hero__trust-badge">
                  <Star className="paint-correction-hero__trust-icon" fill="currentColor" />
                  <div>
                    <span className="paint-correction-hero__trust-rating">{reviews.rating.toFixed(1)}</span>
                    <span className="paint-correction-hero__trust-text">
                      {reviews.totalReviews > 0 ? `${reviews.totalReviews}+ Reviews` : 'Rated'}
                    </span>
                  </div>
                </div>
              )}
              <div className="paint-correction-hero__trust-badge">
                <Award className="paint-correction-hero__trust-icon" />
                <span>Expert Certified</span>
              </div>
              <div className="paint-correction-hero__trust-badge">
                <Shield className="paint-correction-hero__trust-icon" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="paint-correction-hero__trust-badge">
                <Clock className="paint-correction-hero__trust-icon" />
                <span>Same-Day Service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="paint-correction-hero__inner"
            >

              {/* Title Section */}
              <motion.div
                className="paint-correction-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1
                  className="paint-correction-hero__main-title"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span
                    className="paint-correction-hero__title-line paint-correction-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Professional Paint Correction in
                  </motion.span>
                  <motion.span
                    className="paint-correction-hero__title-line paint-correction-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    TORONTO &
                  </motion.span>
                  <motion.span
                    className="paint-correction-hero__title-line paint-correction-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    SCARBOROUGH
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="paint-correction-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Tired of swirl marks, scratches, and dull paint? Remove imperfections with <strong>expert paint correction</strong> in Toronto & Scarborough. Restore gloss, depth & value — and love your car again.
                </motion.p>

                {/* Feature Icons */}
                <motion.div
                  className="paint-correction-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div
                    className="paint-correction-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="paint-correction-hero__feature-icon" />
                    <span>Showroom Finish</span>
                  </motion.div>
                  <motion.div
                    className="paint-correction-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="paint-correction-hero__feature-icon" />
                    <span>Multi-Stage Correction</span>
                  </motion.div>
                  <motion.div
                    className="paint-correction-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="paint-correction-hero__feature-icon" />
                    <span>Value Enhancement</span>
                  </motion.div>
                </motion.div>

                {/* Fast CTAs - Primary Actions */}
                <motion.div
                  className="paint-correction-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a
                    href="#contact"
                    className="paint-correction-hero__action-button paint-correction-hero__action-button--primary"
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
                    <ArrowRight className="paint-correction-hero__icon" />
                  </motion.a>
                  <motion.a
                    href="tel:16476896109"
                    className="paint-correction-hero__action-button paint-correction-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="paint-correction-hero__icon" />
                    <span>Call (647) 689-6109</span>
                  </motion.a>
                </motion.div>

                {/* Service Shortcuts - Quick Links */}
                <motion.div
                  className="paint-correction-hero__service-shortcuts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <span className="paint-correction-hero__shortcuts-label">Related Services:</span>
                  <div className="paint-correction-hero__shortcuts-list">
                    <Link to="/ceramic-coatings" className="paint-correction-hero__shortcut">
                      Ceramic Coating
                    </Link>
                    <Link to="/tint" className="paint-correction-hero__shortcut">
                      Window Tinting
                    </Link>
                    <Link to="/auto-detail" className="paint-correction-hero__shortcut">
                      Auto Detailing
                    </Link>
                  </div>
                </motion.div>

                {/* Live Reviews - Recent */}
                {reviews.recentReviews.length > 0 && (
                  <motion.div
                    className="paint-correction-hero__reviews-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                  >
                    <div className="paint-correction-hero__reviews-header">
                      <Star className="paint-correction-hero__reviews-icon" fill="currentColor" />
                      <span>Recent Reviews</span>
                    </div>
                    <div className="paint-correction-hero__reviews-list">
                      {reviews.recentReviews.map((review, idx) => (
                        <div key={idx} className="paint-correction-hero__review-card">
                          <div className="paint-correction-hero__review-header">
                            <div className="paint-correction-hero__review-stars">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`paint-correction-hero__review-star ${i < (review.rating || 5) ? 'filled' : ''
                                    }`}
                                  size={12}
                                  fill={i < (review.rating || 5) ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="paint-correction-hero__review-name">{review.name}</span>
                          </div>
                          <p className="paint-correction-hero__review-text">"{review.message?.substring(0, 80)}..."</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Partners Compact Section */}
          <div className="paint-correction-hero__partners">
            <PartnersCompact />
          </div>

          {/* Reviews Carousel Below Hero */}
          <div className="paint-correction-hero__reviews">
            <GoogleReviewsCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default PaintCorrectionHero;

