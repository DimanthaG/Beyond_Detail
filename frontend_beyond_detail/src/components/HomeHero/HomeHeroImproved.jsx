import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, MapPin, Clock, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceLinker } from '../../utils/serviceLinker';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import carImageAvif from '../../assets/bd/bd-20.avif';
import carImage from '../../assets/bd/bd-20.webp';
import carImage400w from '../../assets/bd/bd-20-400w.webp';
import carImage800w from '../../assets/bd/bd-20-800w.webp';
import carImage1200w from '../../assets/bd/bd-20-1200w.webp';
import carImage1600w from '../../assets/bd/bd-20-1600w.webp';
import './HomeHeroImproved.scss';

const LazyMap = lazy(() => import('../Map/Map'));

export function HomeHeroImproved() {
  const heroRef = useRef(null);
  const [reviews, setReviews] = useState({ rating: 0, totalReviews: 0, recentReviews: [] });
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef(null);

  // Preload hero image dynamically (works with webpack hashed filenames)
  // Preloads appropriate size based on viewport width for optimal LCP
  // CRITICAL: Preload happens immediately, not after image loads
  useEffect(() => {
    // Use requestIdleCallback for non-critical preload, but start immediately if available
    const preloadImage = () => {
      // Determine which image size to preload based on viewport
      const getOptimalImage = () => {
        const width = window.innerWidth;
        if (width <= 400) return carImage400w;
        if (width <= 800) return carImage800w;
        if (width <= 1200) return carImage1200w;
        if (width <= 1600) return carImage1600w;
        return carImage;
      };
      
      // Get the optimal image source immediately
      const optimalImageSrc = getOptimalImage();
      
      // Check if preload already exists
      const existingLink = document.querySelector(`link[rel="preload"][as="image"][href*="bd-20"]`);
      if (existingLink) return;
      
      // Create preload link immediately
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimalImageSrc;
      link.type = 'image/webp';
      link.setAttribute('fetchpriority', 'high');
      link.setAttribute('imagesrcset', `
        ${carImage400w} 400w,
        ${carImage800w} 800w,
        ${carImage1200w} 1200w,
        ${carImage1600w} 1600w,
        ${carImage} 1920w
      `);
      link.setAttribute('imagesizes', '100vw');
      
      // Insert at the beginning of head for highest priority
      document.head.insertBefore(link, document.head.firstChild);
      
      // Also preload the image using Image() API for better browser support
      const img = new Image();
      img.src = optimalImageSrc;
      img.loading = 'eager';
      img.setAttribute('fetchpriority', 'high');
    };
    
    // Execute immediately (don't wait)
    preloadImage();
    
    // Cleanup on unmount
    return () => {
      const linksToRemove = document.querySelectorAll(`link[rel="preload"][as="image"][href*="bd-20"]`);
      linksToRemove.forEach(link => link.remove());
    };
  }, []);

  // Fetch Google Reviews for trust badges
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
      } finally {
        setLoadingReviews(false);
      }
    };
    fetchReviews();
  }, []);

  // Defer map render until its container is near viewport to cut initial JS
  useEffect(() => {
    if (showMap) return;
    const target = mapRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') {
      setShowMap(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowMap(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [showMap]);
  
  return (
    <div className="home-hero-improved" ref={heroRef}>
      {/* Background Image - Optimized */}
      <div className="home-hero-improved__background">
        <picture>
          <source
            type="image/avif"
            srcSet={`${carImageAvif} 1600w`}
            sizes="(min-width: 1280px) 1200px, 100vw"
          />
          <source
            type="image/webp"
            srcSet={`
              ${carImage400w} 400w,
              ${carImage800w} 800w,
              ${carImage1200w} 1200w,
              ${carImage1600w} 1600w,
              ${carImage} 1920w
            `}
            sizes="(min-width: 1280px) 1200px, 100vw"
          />
        <img
            src={carImage}
            srcSet={`
              ${carImage400w} 400w,
              ${carImage800w} 800w,
              ${carImage1200w} 1200w,
              ${carImage1600w} 1600w,
              ${carImage} 1920w
            `}
            sizes="(min-width: 1280px) 1200px, 100vw"
            alt="Premium car detailing"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="home-hero-improved__background-image"
          />
        </picture>
        <div className="home-hero-improved__background-overlay"></div>
      </div>

      <div className="home-hero-improved__content">
        <div className="home-hero-improved__container">
          {/* Trust Badges - Top Bar */}
          <motion.div
            className="home-hero-improved__trust-badges"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {reviews.rating > 0 && (
              <div className="home-hero-improved__trust-badge">
                <Star className="home-hero-improved__trust-icon" fill="currentColor" />
                <div>
                  <span className="home-hero-improved__trust-rating">{reviews.rating.toFixed(1)}</span>
                  <span className="home-hero-improved__trust-text">
                    {reviews.totalReviews > 0 ? `${reviews.totalReviews}+ Reviews` : 'Rated'}
                  </span>
                </div>
              </div>
            )}
            <div className="home-hero-improved__trust-badge">
              <Award className="home-hero-improved__trust-icon" />
              <span>LLUMAR Certified</span>
            </div>
            <div className="home-hero-improved__trust-badge">
              <Shield className="home-hero-improved__trust-icon" />
              <span>Lifetime Warranty</span>
            </div>
            <div className="home-hero-improved__trust-badge">
              <Clock className="home-hero-improved__trust-icon" />
              <span>Same-Day Service</span>
            </div>
          </motion.div>

          <div className="home-hero-improved__main">
            {/* Left Column - Main Content */}
            <div className="home-hero-improved__left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Main Headline - Customer-Focused */}
                <h1 className="home-hero-improved__title">
                  <span className="home-hero-improved__title-line home-hero-improved__title-line--white">
                    Scarborough Auto Detailing
                  </span>
                  <span className="home-hero-improved__title-line home-hero-improved__title-line--highlight">
                    You Love Your Car. We'll Make It Show.
                  </span>
                </h1>

                {/* Pain-Point Driven Description */}
                <p className="home-hero-improved__description">
                  Tired of swirl marks, faded paint, and a dull finish? Get that <strong>new-car feel</strong> with our professional <ServiceLinker text="auto detailing" />, <ServiceLinker text="ceramic coating" />, <ServiceLinker text="paint correction" />, and <ServiceLinker text="window tinting" /> in Scarborough & Toronto. We restore, protect, and elevate your ride — with expert installation, premium products, and lifetime warranties you can count on.
                </p>

                {/* Fast CTAs - Primary Actions */}
                <div className="home-hero-improved__ctas">
                  <motion.a
                    href="#contact"
                    className="home-hero-improved__cta home-hero-improved__cta--primary"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="home-hero-improved__cta-icon" />
                  </motion.a>
                  <motion.a
                    href="tel:16476896109"
                    className="home-hero-improved__cta home-hero-improved__cta--secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="home-hero-improved__cta-icon" />
                    <span>Call (647) 689-6109</span>
                  </motion.a>
                </div>

                {/* Service Shortcuts - Quick Links */}
                <div className="home-hero-improved__service-shortcuts">
                  <span className="home-hero-improved__shortcuts-label">Popular Services:</span>
                  <div className="home-hero-improved__shortcuts-list">
                    <Link to="/tint" className="home-hero-improved__shortcut">
                      Window Tinting
                    </Link>
                    <Link to="/ceramic-coatings" className="home-hero-improved__shortcut">
                      Ceramic Coating
                    </Link>
                    <Link to="/paint-correction" className="home-hero-improved__shortcut">
                      Paint Correction
                    </Link>
                    <Link to="/auto-detail" className="home-hero-improved__shortcut">
                      Auto Detailing
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Map & Reviews */}
            <div className="home-hero-improved__right">
              {/* Map Embed - Compact */}
              <motion.div
                className="home-hero-improved__map-section"
                ref={mapRef}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="home-hero-improved__map-header">
                  <MapPin className="home-hero-improved__map-icon" />
                  <span>Visit Us in Scarborough</span>
                </div>
                <div className="home-hero-improved__map-container">
                  {showMap ? (
                    <Suspense fallback={<div style={{ height: '280px', background: '#0f0f0f' }} />}>
                      <LazyMap />
                    </Suspense>
                  ) : (
                    <div style={{ height: '280px', background: '#0f0f0f' }} />
                  )}
                </div>
              </motion.div>

              {/* Live Reviews - Recent */}
              {reviews.recentReviews.length > 0 && (
                <motion.div
                  className="home-hero-improved__reviews-section"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="home-hero-improved__reviews-header">
                    <Star className="home-hero-improved__reviews-icon" fill="currentColor" />
                    <span>Recent Reviews</span>
                  </div>
                  <div className="home-hero-improved__reviews-list">
                    {reviews.recentReviews.map((review, idx) => (
                      <div key={idx} className="home-hero-improved__review-card">
                        <div className="home-hero-improved__review-header">
                          <div className="home-hero-improved__review-stars">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`home-hero-improved__review-star ${i < (review.rating || 5) ? 'filled' : ''
                                  }`}
                                size={12}
                                fill={i < (review.rating || 5) ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                          <span className="home-hero-improved__review-name">{review.name}</span>
                        </div>
                        <p className="home-hero-improved__review-text">"{review.message?.substring(0, 80)}..."</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroImproved;




