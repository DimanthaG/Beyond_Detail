import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, MapPin, Clock, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceLinker } from '../../utils/serviceLinker';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import Map from '../Map/Map';
import carImage from '../../assets/bd/bd-20.jpg';
import './HomeHeroImproved.scss';

export function HomeHeroImproved() {
  const heroRef = useRef(null);
  const [reviews, setReviews] = useState({ rating: 0, totalReviews: 0, recentReviews: [] });
  const [loadingReviews, setLoadingReviews] = useState(true);

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

  return (
    <div className="home-hero-improved" ref={heroRef}>
      {/* Background Image - Optimized without heavy parallax */}
      <div className="home-hero-improved__background">
        <img 
          src={carImage} 
          alt="Premium car detailing" 
          loading="eager"
          className="home-hero-improved__background-image"
        />
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
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="home-hero-improved__map-header">
                  <MapPin className="home-hero-improved__map-icon" />
                  <span>Visit Us in Scarborough</span>
                </div>
                <div className="home-hero-improved__map-container">
                  <Map />
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
                                className={`home-hero-improved__review-star ${
                                  i < (review.rating || 5) ? 'filled' : ''
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



