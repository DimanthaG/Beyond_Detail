import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Sparkles, Award, Star, Clock } from 'lucide-react';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import PartnersCompact from '../Partners/PartnersCompact';
import carImage from '../../assets/bd/bd-28.webp';
import carImage400w from '../../assets/bd/bd-28-400w.webp';
import carImage800w from '../../assets/bd/bd-28-800w.webp';
import carImage1200w from '../../assets/bd/bd-28-1200w.webp';
import carImage1600w from '../../assets/bd/bd-28-1600w.webp';
import './CeramicCoatingHero.scss';

export function CeramicCoatingHero({ 
  scrollTarget = "#pricing",
  titleLine1 = "Ceramic Coating in",
  titleLine2 = "TORONTO &",
  titleLine3 = "SCARBOROUGH",
  titleLine4 = "for Lasting Protection",
  subtitle = "Worried about paint fading, scratches, and UV damage? Get <strong>long-lasting ceramic coating</strong> in Toronto & Scarborough. Our premium formula bonds to your paint for unmatched gloss, UV protection & years of durability."
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
      <div id="hero" className="ceramic-coating-hero" ref={heroRef}>
        {/* Car Image Background - Optimized without heavy parallax */}
        <div className="ceramic-coating-hero__background">
          <div className="ceramic-coating-hero__background-image">
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
              alt="Ceramic coating service" 
              loading="eager" 
              fetchpriority="high"
              decoding="async"
              width="1920"
              height="1080"
            />
          </div>
          <div className="ceramic-coating-hero__background-overlay"></div>
          <div className="ceramic-coating-hero__background-gradient"></div>
        </div>

        <div className="ceramic-coating-hero__content">
          <div className="ceramic-coating-hero__container">
            {/* Trust Badges - Top Bar */}
            <motion.div
              className="ceramic-coating-hero__trust-badges"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {reviews.rating > 0 && (
                <div className="ceramic-coating-hero__trust-badge">
                  <Star className="ceramic-coating-hero__trust-icon" fill="currentColor" />
                  <div>
                    <span className="ceramic-coating-hero__trust-rating">{reviews.rating.toFixed(1)}</span>
                    <span className="ceramic-coating-hero__trust-text">
                      {reviews.totalReviews > 0 ? `${reviews.totalReviews}+ Reviews` : 'Rated'}
                    </span>
                  </div>
                </div>
              )}
              <div className="ceramic-coating-hero__trust-badge">
                <Award className="ceramic-coating-hero__trust-icon" />
                <span>Expert Certified</span>
              </div>
              <div className="ceramic-coating-hero__trust-badge">
                <Shield className="ceramic-coating-hero__trust-icon" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="ceramic-coating-hero__trust-badge">
                <Clock className="ceramic-coating-hero__trust-icon" />
                <span>Same-Day Service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="ceramic-coating-hero__inner"
            >

              {/* Title Section */}
              <motion.div
                className="ceramic-coating-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1
                  className="ceramic-coating-hero__main-title"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span
                    className="ceramic-coating-hero__title-line ceramic-coating-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {titleLine1}
                  </motion.span>
                  <motion.span
                    className="ceramic-coating-hero__title-line ceramic-coating-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {titleLine2}
                  </motion.span>
                  <motion.span
                    className="ceramic-coating-hero__title-line ceramic-coating-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {titleLine3}
                  </motion.span>
                  {titleLine4 && (
                    <motion.span
                      className="ceramic-coating-hero__title-line ceramic-coating-hero__title-line--white"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      {titleLine4}
                    </motion.span>
                  )}
                </motion.h1>
                <motion.p
                  className="ceramic-coating-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                >
                </motion.p>

                {/* Feature Icons */}
                <motion.div
                  className="ceramic-coating-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div
                    className="ceramic-coating-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="ceramic-coating-hero__feature-icon" />
                    <span>5+ Year Protection</span>
                  </motion.div>
                  <motion.div
                    className="ceramic-coating-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="ceramic-coating-hero__feature-icon" />
                    <span>9H Hardness Rating</span>
                  </motion.div>
                  <motion.div
                    className="ceramic-coating-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="ceramic-coating-hero__feature-icon" />
                    <span>Hydrophobic Surface</span>
                  </motion.div>
                </motion.div>

                {/* Fast CTAs - Primary Actions */}
                <motion.div
                  className="ceramic-coating-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a
                    href="#contact"
                    className="ceramic-coating-hero__action-button ceramic-coating-hero__action-button--primary"
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
                    <ArrowRight className="ceramic-coating-hero__icon" />
                  </motion.a>
                  <motion.a
                    href="tel:16476896109"
                    className="ceramic-coating-hero__action-button ceramic-coating-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="ceramic-coating-hero__icon" />
                    <span>Call (647) 689-6109</span>
                  </motion.a>
                </motion.div>

                {/* Service Shortcuts - Quick Links */}
                <motion.div
                  className="ceramic-coating-hero__service-shortcuts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <span className="ceramic-coating-hero__shortcuts-label">Related Services:</span>
                  <div className="ceramic-coating-hero__shortcuts-list">
                    <Link to="/paint-correction" className="ceramic-coating-hero__shortcut">
                      Paint Correction
                    </Link>
                    <Link to="/tint" className="ceramic-coating-hero__shortcut">
                      Window Tinting
                    </Link>
                    <Link to="/auto-detail" className="ceramic-coating-hero__shortcut">
                      Auto Detailing
                    </Link>
                  </div>
                </motion.div>

                {/* Live Reviews - Recent */}
                {reviews.recentReviews.length > 0 && (
                  <motion.div
                    className="ceramic-coating-hero__reviews-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                  >
                    <div className="ceramic-coating-hero__reviews-header">
                      <Star className="ceramic-coating-hero__reviews-icon" fill="currentColor" />
                      <span>Recent Reviews</span>
                    </div>
                    <div className="ceramic-coating-hero__reviews-list">
                      {reviews.recentReviews.map((review, idx) => (
                        <div key={idx} className="ceramic-coating-hero__review-card">
                          <div className="ceramic-coating-hero__review-header">
                            <div className="ceramic-coating-hero__review-stars">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`ceramic-coating-hero__review-star ${i < (review.rating || 5) ? 'filled' : ''
                                    }`}
                                  size={12}
                                  fill={i < (review.rating || 5) ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="ceramic-coating-hero__review-name">{review.name}</span>
                          </div>
                          <p className="ceramic-coating-hero__review-text">"{review.message?.substring(0, 80)}..."</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Partners Compact Section */}
          <div className="ceramic-coating-hero__partners">
            <PartnersCompact />
          </div>

          {/* Reviews Carousel Below Hero */}
          <div className="ceramic-coating-hero__reviews">
            <GoogleReviewsCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default CeramicCoatingHero;
