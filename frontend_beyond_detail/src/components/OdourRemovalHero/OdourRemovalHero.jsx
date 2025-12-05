import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Wind, Shield, Sparkles, Star, Award, Clock } from 'lucide-react';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import PartnersCompact from '../Partners/PartnersCompact';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import carImage from '../../assets/bd/bd-26.webp';
import carImage400w from '../../assets/bd/bd-26-400w.webp';
import carImage800w from '../../assets/bd/bd-26-800w.webp';
import carImage1200w from '../../assets/bd/bd-26-1200w.webp';
import carImage1600w from '../../assets/bd/bd-26-1600w.webp';
import './OdourRemovalHero.scss';

export function OdourRemovalHero({
  scrollTarget = "#contact",
  titleLine1 = "Odour Removal in",
  titleLine2 = "TORONTO &",
  titleLine3 = "SCARBOROUGH",
  titleLine4 = null,
  subtitle = "Tired of lingering odors that won't go away? <strong>Eliminate persistent odors permanently</strong>, not temporarily. Our advanced treatments penetrate deep into materials to neutralize odors at their source—whether from smoke, pets, mold, or biological contaminants. Professional-grade solutions that deliver lasting results."
}) {
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
      <div id="hero" className="odour-removal-hero" ref={heroRef}>
        <div className="odour-removal-hero__background">
          <div className="odour-removal-hero__background-image">
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
              alt={`${titleLine1} ${titleLine2} ${titleLine3 || ''} ${titleLine4 || ''}`}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              width="1920"
              height="1080"
            />
          </div>
          <div className="odour-removal-hero__background-overlay"></div>
          <div className="odour-removal-hero__background-gradient"></div>
        </div>

        <div className="odour-removal-hero__content">
          <div className="odour-removal-hero__container">
            {/* Trust Badges - Top Bar */}
            <motion.div
              className="odour-removal-hero__trust-badges"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {reviews.rating > 0 && (
                <div className="odour-removal-hero__trust-badge">
                  <Star className="odour-removal-hero__trust-icon" fill="currentColor" />
                  <div>
                    <span className="odour-removal-hero__trust-rating">{reviews.rating.toFixed(1)}</span>
                    <span className="odour-removal-hero__trust-text">
                      {reviews.totalReviews > 0 ? `${reviews.totalReviews}+ Reviews` : 'Rated'}
                    </span>
                  </div>
                </div>
              )}
              <div className="odour-removal-hero__trust-badge">
                <Award className="odour-removal-hero__trust-icon" />
                <span>Expert Certified</span>
              </div>
              <div className="odour-removal-hero__trust-badge">
                <Shield className="odour-removal-hero__trust-icon" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="odour-removal-hero__trust-badge">
                <Clock className="odour-removal-hero__trust-icon" />
                <span>Same-Day Service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="odour-removal-hero__inner"
            >

              <motion.div
                className="odour-removal-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1
                  className="odour-removal-hero__main-title"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span
                    className="odour-removal-hero__title-line odour-removal-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {titleLine1}
                  </motion.span>
                  <motion.span
                    className="odour-removal-hero__title-line odour-removal-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {titleLine2}
                  </motion.span>
                  {titleLine3 && (
                    <motion.span
                      className="odour-removal-hero__title-line odour-removal-hero__title-line--highlight"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      {titleLine3}
                    </motion.span>
                  )}
                  {titleLine4 && (
                    <motion.span
                      className="odour-removal-hero__title-line odour-removal-hero__title-line--white"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      {titleLine4}
                    </motion.span>
                  )}
                </motion.h1>
                <motion.p
                  className="odour-removal-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                >
                </motion.p>

                <motion.div
                  className="odour-removal-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div
                    className="odour-removal-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Wind className="odour-removal-hero__feature-icon" />
                    <span>Deep Treatment</span>
                  </motion.div>
                  <motion.div
                    className="odour-removal-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="odour-removal-hero__feature-icon" />
                    <span>Complete Neutralization</span>
                  </motion.div>
                  <motion.div
                    className="odour-removal-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="odour-removal-hero__feature-icon" />
                    <span>Sanitized Interior</span>
                  </motion.div>
                </motion.div>

                {/* Fast CTAs - Primary Actions */}
                <motion.div
                  className="odour-removal-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a
                    href="#contact"
                    className="odour-removal-hero__action-button odour-removal-hero__action-button--primary"
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
                    <ArrowRight className="odour-removal-hero__icon" />
                  </motion.a>
                  <motion.a
                    href="tel:16476896109"
                    className="odour-removal-hero__action-button odour-removal-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="odour-removal-hero__icon" />
                    <span>Call (647) 689-6109</span>
                  </motion.a>
                </motion.div>

                {/* Service Shortcuts - Quick Links */}
                <motion.div
                  className="odour-removal-hero__service-shortcuts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <span className="odour-removal-hero__shortcuts-label">Related Services:</span>
                  <div className="odour-removal-hero__shortcuts-list">
                    <Link to="/interior-detailing" className="odour-removal-hero__shortcut">
                      Interior Detailing
                    </Link>
                    <Link to="/leather-cleaning" className="odour-removal-hero__shortcut">
                      Leather Cleaning
                    </Link>
                    <Link to="/auto-detail" className="odour-removal-hero__shortcut">
                      Auto Detailing
                    </Link>
                  </div>
                </motion.div>

                {/* Live Reviews - Recent */}
                {reviews.recentReviews.length > 0 && (
                  <motion.div
                    className="odour-removal-hero__reviews-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                  >
                    <div className="odour-removal-hero__reviews-header">
                      <Star className="odour-removal-hero__reviews-icon" fill="currentColor" />
                      <span>Recent Reviews</span>
                    </div>
                    <div className="odour-removal-hero__reviews-list">
                      {reviews.recentReviews.map((review, idx) => (
                        <div key={idx} className="odour-removal-hero__review-card">
                          <div className="odour-removal-hero__review-header">
                            <div className="odour-removal-hero__review-stars">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`odour-removal-hero__review-star ${i < (review.rating || 5) ? 'filled' : ''
                                    }`}
                                  size={12}
                                  fill={i < (review.rating || 5) ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="odour-removal-hero__review-name">{review.name}</span>
                          </div>
                          <p className="odour-removal-hero__review-text">"{review.message?.substring(0, 80)}..."</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

          <div className="odour-removal-hero__partners">
            <PartnersCompact />
          </div>

          <div className="odour-removal-hero__reviews">
            <GoogleReviewsCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default OdourRemovalHero;

