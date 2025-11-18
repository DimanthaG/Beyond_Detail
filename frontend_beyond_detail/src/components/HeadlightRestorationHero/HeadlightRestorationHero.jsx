import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Lightbulb, Shield, Sparkles, Star, Award, Clock } from 'lucide-react';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import PartnersCompact from '../Partners/PartnersCompact';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import carImage from '../../assets/bd/bd-24.jpg';
import './HeadlightRestorationHero.scss';

export function HeadlightRestorationHero({ scrollTarget = "#contact" }) {
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
      <div id="hero" className="headlight-restoration-hero" ref={heroRef}>
        {/* Car Image Background - Optimized without heavy parallax */}
        <div className="headlight-restoration-hero__background">
          <div className="headlight-restoration-hero__background-image">
            <img src={carImage} alt="Headlight restoration service" loading="eager" />
          </div>
          <div className="headlight-restoration-hero__background-overlay"></div>
          <div className="headlight-restoration-hero__background-gradient"></div>
        </div>

        <div className="headlight-restoration-hero__content">
          <div className="headlight-restoration-hero__container">
            {/* Trust Badges - Top Bar */}
            <motion.div
              className="headlight-restoration-hero__trust-badges"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {reviews.rating > 0 && (
                <div className="headlight-restoration-hero__trust-badge">
                  <Star className="headlight-restoration-hero__trust-icon" fill="currentColor" />
                  <div>
                    <span className="headlight-restoration-hero__trust-rating">{reviews.rating.toFixed(1)}</span>
                    <span className="headlight-restoration-hero__trust-text">
                      {reviews.totalReviews > 0 ? `${reviews.totalReviews}+ Reviews` : 'Rated'}
                    </span>
                  </div>
                </div>
              )}
              <div className="headlight-restoration-hero__trust-badge">
                <Award className="headlight-restoration-hero__trust-icon" />
                <span>Expert Certified</span>
              </div>
              <div className="headlight-restoration-hero__trust-badge">
                <Shield className="headlight-restoration-hero__trust-icon" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="headlight-restoration-hero__trust-badge">
                <Clock className="headlight-restoration-hero__trust-icon" />
                <span>Same-Day Service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="headlight-restoration-hero__inner"
            >

              {/* Title Section */}
              <motion.div 
                className="headlight-restoration-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1 
                  className="headlight-restoration-hero__main-title"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span 
                    className="headlight-restoration-hero__title-line headlight-restoration-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Headlight Restoration in
                  </motion.span>
                  <motion.span 
                    className="headlight-restoration-hero__title-line headlight-restoration-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    TORONTO &
                  </motion.span>
                  <motion.span 
                    className="headlight-restoration-hero__title-line headlight-restoration-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    SCARBOROUGH
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="headlight-restoration-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Tired of cloudy, yellowed headlights and poor visibility? <strong>Restore your headlights to crystal-clear perfection</strong>. Our professional restoration process removes years of oxidation and damage, dramatically improving your vehicle's appearance and significantly enhancing nighttime driving safety with UV protection included.
                </motion.p>

                {/* Feature Icons */}
                <motion.div 
                  className="headlight-restoration-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div 
                    className="headlight-restoration-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Lightbulb className="headlight-restoration-hero__feature-icon" />
                    <span>Better Visibility</span>
                  </motion.div>
                  <motion.div 
                    className="headlight-restoration-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="headlight-restoration-hero__feature-icon" />
                    <span>Crystal Clear</span>
                  </motion.div>
                  <motion.div 
                    className="headlight-restoration-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="headlight-restoration-hero__feature-icon" />
                    <span>UV Protection</span>
                  </motion.div>
                </motion.div>

                {/* Fast CTAs - Primary Actions */}
                <motion.div 
                  className="headlight-restoration-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a 
                    href="#contact" 
                    className="headlight-restoration-hero__action-button headlight-restoration-hero__action-button--primary"
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
                    <ArrowRight className="headlight-restoration-hero__icon" />
                  </motion.a>
                  <motion.a 
                    href="tel:16476896109"
                    className="headlight-restoration-hero__action-button headlight-restoration-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="headlight-restoration-hero__icon" />
                    <span>Call (647) 689-6109</span>
                  </motion.a>
                </motion.div>

                {/* Service Shortcuts - Quick Links */}
                <motion.div 
                  className="headlight-restoration-hero__service-shortcuts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <span className="headlight-restoration-hero__shortcuts-label">Related Services:</span>
                  <div className="headlight-restoration-hero__shortcuts-list">
                    <Link to="/paint-correction" className="headlight-restoration-hero__shortcut">
                      Paint Correction
                    </Link>
                    <Link to="/ceramic-coatings" className="headlight-restoration-hero__shortcut">
                      Ceramic Coating
                    </Link>
                    <Link to="/auto-detail" className="headlight-restoration-hero__shortcut">
                      Auto Detailing
                    </Link>
                  </div>
                </motion.div>

                {/* Live Reviews - Recent */}
                {reviews.recentReviews.length > 0 && (
                  <motion.div 
                    className="headlight-restoration-hero__reviews-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                  >
                    <div className="headlight-restoration-hero__reviews-header">
                      <Star className="headlight-restoration-hero__reviews-icon" fill="currentColor" />
                      <span>Recent Reviews</span>
                    </div>
                    <div className="headlight-restoration-hero__reviews-list">
                      {reviews.recentReviews.map((review, idx) => (
                        <div key={idx} className="headlight-restoration-hero__review-card">
                          <div className="headlight-restoration-hero__review-header">
                            <div className="headlight-restoration-hero__review-stars">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`headlight-restoration-hero__review-star ${
                                    i < (review.rating || 5) ? 'filled' : ''
                                  }`}
                                  size={12}
                                  fill={i < (review.rating || 5) ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="headlight-restoration-hero__review-name">{review.name}</span>
                          </div>
                          <p className="headlight-restoration-hero__review-text">"{review.message?.substring(0, 80)}..."</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Partners Compact Section */}
          <div className="headlight-restoration-hero__partners">
            <PartnersCompact />
          </div>

          {/* Reviews Carousel Below Hero */}
          <div className="headlight-restoration-hero__reviews">
            <GoogleReviewsCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadlightRestorationHero;

