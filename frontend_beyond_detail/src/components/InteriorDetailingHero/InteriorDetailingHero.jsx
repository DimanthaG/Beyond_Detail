import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, Shield, Award } from 'lucide-react';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import carImage from '../../assets/bd/bd-26.jpg';
import './InteriorDetailingHero.scss';

export function InteriorDetailingHero({ scrollTarget = "#pricing" }) {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      <div className="interior-detailing-hero" ref={heroRef}>
        {/* Car Image Background with Parallax */}
        <motion.div 
          className="interior-detailing-hero__background"
          style={{ y, opacity }}
        >
          <motion.div 
            className="interior-detailing-hero__background-image"
            style={{
              x: mousePosition.x * 15,
              y: mousePosition.y * 15,
            }}
          >
            <img src={carImage} alt="Interior detailing service" />
          </motion.div>
          <div className="interior-detailing-hero__background-overlay"></div>
          <div className="interior-detailing-hero__background-gradient"></div>
        </motion.div>

        <div className="interior-detailing-hero__content">
          <div className="interior-detailing-hero__container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="interior-detailing-hero__inner"
            >
              {/* Top Button */}
              <motion.div 
                className="interior-detailing-hero__top-button-wrapper"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a 
                  href={scrollTarget} 
                  className="interior-detailing-hero__top-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(scrollTarget);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  <span>View Packages</span>
                  <ArrowRight className="interior-detailing-hero__icon" />
                </a>
              </motion.div>

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
                    Deep Interior Care
                  </motion.span>
                  <motion.span 
                    className="interior-detailing-hero__title-line interior-detailing-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Like-New Freshness
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="interior-detailing-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Breathe new life into your vehicle's interior. Our deep cleaning services go beyond surface cleaning to remove embedded dirt, eliminate odors, and restore that like-new freshness. Professional shampoo extraction, leather conditioning, and meticulous attention to every detail.
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

                {/* Action Buttons */}
                <motion.div 
                  className="interior-detailing-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a 
                    href={scrollTarget} 
                    className="interior-detailing-hero__action-button interior-detailing-hero__action-button--primary"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(scrollTarget);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="interior-detailing-hero__icon" />
                  </motion.a>
                  <motion.a 
                    href="tel:16476896109"
                    className="interior-detailing-hero__action-button interior-detailing-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="interior-detailing-hero__icon" />
                    <span>Call Now</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
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

