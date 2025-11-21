import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, Shield, Zap, Star, MapPin, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnersCompact from '../Partners/PartnersCompact';
import { ServiceLinker } from '../../utils/serviceLinker';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import Map from '../Map/Map';
import carImage from '../../assets/bd/bd-20.webp';
import carImage400w from '../../assets/bd/bd-20-400w.webp';
import carImage800w from '../../assets/bd/bd-20-800w.webp';
import carImage1200w from '../../assets/bd/bd-20-1200w.webp';
import carImage1600w from '../../assets/bd/bd-20-1600w.webp';
import './HomeHero.scss';

export function HomeHero() {
  const heroRef = useRef(null);
  const [reviews, setReviews] = useState({ rating: 0, totalReviews: 0, recentReviews: [] });

  // Preload hero image dynamically (works with webpack hashed filenames)
  // Preloads appropriate size based on viewport width for optimal LCP
  useEffect(() => {
    // Determine which image size to preload based on viewport
    const getOptimalImage = () => {
      const width = window.innerWidth;
      if (width <= 400) return carImage400w;
      if (width <= 800) return carImage800w;
      if (width <= 1200) return carImage1200w;
      if (width <= 1600) return carImage1600w;
      return carImage;
    };
    
    // Create a temporary image to get the actual resolved path
    const img = new Image();
    img.src = getOptimalImage();
    
    // Preload the optimal image immediately
    img.onload = () => {
      // Once image path is resolved, add preload link
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src;
      link.type = 'image/webp';
      link.setAttribute('fetchpriority', 'high');
      
      // Only add if not already present
      const existingLink = document.querySelector(`link[href="${img.src}"]`);
      if (!existingLink) {
        document.head.insertBefore(link, document.head.firstChild);
      }
    };
    
    // Start loading immediately
    img.loading = 'eager';
    
    // Cleanup on unmount
    return () => {
      const linkToRemove = document.querySelector(`link[href="${img.src}"]`);
      if (linkToRemove && linkToRemove.rel === 'preload') {
        linkToRemove.remove();
      }
    };
  }, []);

  // Fetch Google Reviews for trust badges and live reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getCachedGoogleReviews();
        if (data && !data.error) {
          setReviews({
            rating: data.rating || 0,
            totalReviews: data.totalReviews || 0,
            recentReviews: (data.reviews || []).slice(0, 2) // Show 2 most recent reviews
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
      <div className="home-hero" ref={heroRef}>
        {/* Car Image Background - Optimized without heavy parallax */}
        <div className="home-hero__background">
          <div className="home-hero__background-image">
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
              alt="Premium car detailing" 
              loading="eager" 
              fetchPriority="high"
              decoding="async"
              width="1920"
              height="1080"
            />
          </div>
          <div className="home-hero__background-overlay"></div>
          <div className="home-hero__background-gradient"></div>
        </div>

        <div className="home-hero__content">
          <div className="home-hero__container">
            {/* Trust Badges - Top Bar */}
            <motion.div
              className="home-hero__trust-badges"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {reviews.rating > 0 && (
                <div className="home-hero__trust-badge">
                  <Star className="home-hero__trust-icon" fill="currentColor" />
                  <div>
                    <span className="home-hero__trust-rating">{reviews.rating.toFixed(1)}</span>
                    <span className="home-hero__trust-text">
                      {reviews.totalReviews > 0 ? `${reviews.totalReviews}+ Reviews` : 'Rated'}
                    </span>
                  </div>
                </div>
              )}
              <div className="home-hero__trust-badge">
                <Award className="home-hero__trust-icon" />
                <span>LLUMAR Certified</span>
              </div>
              <div className="home-hero__trust-badge">
                <Shield className="home-hero__trust-icon" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="home-hero__trust-badge">
                <Clock className="home-hero__trust-icon" />
                <span>Same-Day Service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="home-hero__inner"
            >

              {/* Title Section */}
              <motion.div
                className="home-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1
                  className="home-hero__main-title"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span
                    className="home-hero__title-line home-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Scarborough Auto Detailing
                  </motion.span>
                  <motion.span
                    className="home-hero__title-line home-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    You Love Your Car. We'll Make It Show.
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="home-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Tired of swirl marks, faded paint, and a dull finish? Get that <strong>new-car feel</strong> with our professional <ServiceLinker text="auto detailing" />, <ServiceLinker text="ceramic coating" />, <ServiceLinker text="paint correction" />, and <ServiceLinker text="window tinting" /> in Scarborough & Toronto. We restore, protect, and elevate your ride — with expert installation, premium products, and lifetime warranties you can count on.
                </motion.p>

                {/* Feature Icons */}
                <motion.div
                  className="home-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div
                    className="home-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="home-hero__feature-icon" />
                    <span>Lifetime Warranties</span>
                  </motion.div>
                  <motion.div
                    className="home-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="home-hero__feature-icon" />
                    <span>Premium Products</span>
                  </motion.div>
                  <motion.div
                    className="home-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Zap className="home-hero__feature-icon" />
                    <span>Expert Installation</span>
                  </motion.div>
                </motion.div>

                {/* Fast CTAs - Primary Actions */}
                <motion.div
                  className="home-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a
                    href="#contact"
                    className="home-hero__action-button home-hero__action-button--primary"
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
                    <ArrowRight className="home-hero__icon" />
                  </motion.a>
                  <motion.a
                    href="tel:16476896109"
                    className="home-hero__action-button home-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="home-hero__icon" />
                    <span>Call (647) 689-6109</span>
                  </motion.a>
                </motion.div>

                {/* Service Shortcuts - Quick Links */}
                <motion.div
                  className="home-hero__service-shortcuts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <span className="home-hero__shortcuts-label">Popular Services:</span>
                  <div className="home-hero__shortcuts-list">
                    <Link to="/tint" className="home-hero__shortcut">
                      Window Tinting
                    </Link>
                    <Link to="/ceramic-coatings" className="home-hero__shortcut">
                      Ceramic Coating
                    </Link>
                    <Link to="/paint-correction" className="home-hero__shortcut">
                      Paint Correction
                    </Link>
                    <Link to="/auto-detail" className="home-hero__shortcut">
                      Auto Detailing
                    </Link>
                  </div>
                </motion.div>

                {/* Live Reviews - Recent */}
                {reviews.recentReviews.length > 0 && (
                  <motion.div
                    className="home-hero__reviews-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                  >
                    <div className="home-hero__reviews-header">
                      <Star className="home-hero__reviews-icon" fill="currentColor" />
                      <span>Recent Reviews</span>
                    </div>
                    <div className="home-hero__reviews-list">
                      {reviews.recentReviews.map((review, idx) => (
                        <div key={idx} className="home-hero__review-card">
                          <div className="home-hero__review-header">
                            <div className="home-hero__review-stars">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`home-hero__review-star ${i < (review.rating || 5) ? 'filled' : ''
                                    }`}
                                  size={12}
                                  fill={i < (review.rating || 5) ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="home-hero__review-name">{review.name}</span>
                          </div>
                          <p className="home-hero__review-text">"{review.message?.substring(0, 80)}..."</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Partners Compact Section */}
          <div className="home-hero__partners">
            <PartnersCompact />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;

