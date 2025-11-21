import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Sparkles, Award, Star, Clock } from 'lucide-react';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import PartnersCompact from '../Partners/PartnersCompact';
import carImage from '../../assets/bd/bd-48.webp';
import carImage400w from '../../assets/bd/bd-48-400w.webp';
import carImage800w from '../../assets/bd/bd-48-800w.webp';
import './TintsHero.scss';

export function TintsHero({ scrollTarget = "#pricing" }) {
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
      <div id="hero" className="tints-hero" ref={heroRef}>
        {/* Car Image Background - Optimized without heavy parallax */}
        <div className="tints-hero__background">
          <div className="tints-hero__background-image">
            <img 
              src={carImage}
              srcSet={`
                ${carImage400w} 400w,
                ${carImage800w} 800w,
                ${carImage} 1200w
              `}
              sizes="100vw"
              alt="Window tint service" 
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="1200"
              height="800"
            />
          </div>
          <div className="tints-hero__background-overlay"></div>
          <div className="tints-hero__background-gradient"></div>
        </div>

        <div className="tints-hero__content">
          <div className="tints-hero__container">
            {/* Trust Badges - Top Bar */}
            <motion.div
              className="tints-hero__trust-badges"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {reviews.rating > 0 && (
                <div className="tints-hero__trust-badge">
                  <Star className="tints-hero__trust-icon" fill="currentColor" />
                  <div>
                    <span className="tints-hero__trust-rating">{reviews.rating.toFixed(1)}</span>
                    <span className="tints-hero__trust-text">
                      {reviews.totalReviews > 0 ? `${reviews.totalReviews}+ Reviews` : 'Rated'}
                    </span>
                  </div>
                </div>
              )}
              <div className="tints-hero__trust-badge">
                <Award className="tints-hero__trust-icon" />
                <span>LLUMAR Certified</span>
              </div>
              <div className="tints-hero__trust-badge">
                <Shield className="tints-hero__trust-icon" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="tints-hero__trust-badge">
                <Clock className="tints-hero__trust-icon" />
                <span>Same-Day Service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="tints-hero__inner"
            >

              {/* Title Section */}
              <motion.div
                className="tints-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1
                  className="tints-hero__main-title"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span
                    className="tints-hero__title-line tints-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    LLUMAR Window Tinting in
                  </motion.span>
                  <motion.span
                    className="tints-hero__title-line tints-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    TORONTO &
                  </motion.span>
                  <motion.span
                    className="tints-hero__title-line tints-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    SCARBOROUGH
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="tints-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Tired of sun glare, faded interiors, and lack of privacy? Get <strong>professional LLUMAR window tinting</strong> in Toronto & Scarborough. Trusted experts. Premium films. Lifetime warranty. Get the style & protection your car deserves.
                </motion.p>

                {/* Feature Icons */}
                <motion.div
                  className="tints-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div
                    className="tints-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="tints-hero__feature-icon" />
                    <span>Lifetime Warranty</span>
                  </motion.div>
                  <motion.div
                    className="tints-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="tints-hero__feature-icon" />
                    <span>Premium LLUMAR Films</span>
                  </motion.div>
                  <motion.div
                    className="tints-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="tints-hero__feature-icon" />
                    <span>Expert Installation</span>
                  </motion.div>
                </motion.div>

                {/* Fast CTAs - Primary Actions */}
                <motion.div
                  className="tints-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a
                    href="#contact"
                    className="tints-hero__action-button tints-hero__action-button--primary"
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
                    <ArrowRight className="tints-hero__icon" />
                  </motion.a>
                  <motion.a
                    href="tel:16476896109"
                    className="tints-hero__action-button tints-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="tints-hero__icon" />
                    <span>Call (647) 689-6109</span>
                  </motion.a>
                </motion.div>

                {/* Service Shortcuts - Quick Links */}
                <motion.div
                  className="tints-hero__service-shortcuts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <span className="tints-hero__shortcuts-label">Related Services:</span>
                  <div className="tints-hero__shortcuts-list">
                    <Link to="/ceramic-coatings" className="tints-hero__shortcut">
                      Ceramic Coating
                    </Link>
                    <Link to="/paint-correction" className="tints-hero__shortcut">
                      Paint Correction
                    </Link>
                    <Link to="/auto-detail" className="tints-hero__shortcut">
                      Auto Detailing
                    </Link>
                  </div>
                </motion.div>

                {/* Live Reviews - Recent */}
                {reviews.recentReviews.length > 0 && (
                  <motion.div
                    className="tints-hero__reviews-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                  >
                    <div className="tints-hero__reviews-header">
                      <Star className="tints-hero__reviews-icon" fill="currentColor" />
                      <span>Recent Reviews</span>
                    </div>
                    <div className="tints-hero__reviews-list">
                      {reviews.recentReviews.map((review, idx) => (
                        <div key={idx} className="tints-hero__review-card">
                          <div className="tints-hero__review-header">
                            <div className="tints-hero__review-stars">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`tints-hero__review-star ${i < (review.rating || 5) ? 'filled' : ''
                                    }`}
                                  size={12}
                                  fill={i < (review.rating || 5) ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="tints-hero__review-name">{review.name}</span>
                          </div>
                          <p className="tints-hero__review-text">"{review.message?.substring(0, 80)}..."</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Partners Compact Section */}
          <div className="tints-hero__partners">
            <PartnersCompact />
          </div>

          {/* Reviews Carousel Below Hero */}
          <div className="tints-hero__reviews">
            <GoogleReviewsCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default TintsHero;

