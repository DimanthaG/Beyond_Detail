import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Lightbulb, Shield, Sparkles } from 'lucide-react';
import PartnersCompact from '../Partners/PartnersCompact';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import carImage from '../../assets/bd/bd-24.jpg';
import './HeadlightRestorationHero.scss';

export function HeadlightRestorationHero({ scrollTarget = "#contact" }) {
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
      <div className="headlight-restoration-hero" ref={heroRef}>
        {/* Car Image Background with Parallax */}
        <motion.div 
          className="headlight-restoration-hero__background"
          style={{ y, opacity }}
        >
          <motion.div 
            className="headlight-restoration-hero__background-image"
            style={{
              x: mousePosition.x * 15,
              y: mousePosition.y * 15,
            }}
          >
            <img src={carImage} alt="Headlight restoration service" />
          </motion.div>
          <div className="headlight-restoration-hero__background-overlay"></div>
          <div className="headlight-restoration-hero__background-gradient"></div>
        </motion.div>

        <div className="headlight-restoration-hero__content">
          <div className="headlight-restoration-hero__container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="headlight-restoration-hero__inner"
            >
              {/* Top Button */}
              <motion.div 
                className="headlight-restoration-hero__top-button-wrapper"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a 
                  href={scrollTarget} 
                  className="headlight-restoration-hero__top-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(scrollTarget);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  <span>Get Quote</span>
                  <ArrowRight className="headlight-restoration-hero__icon" />
                </a>
              </motion.div>

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
                    Restore Your
                  </motion.span>
                  <motion.span 
                    className="headlight-restoration-hero__title-line headlight-restoration-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Headlights
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="headlight-restoration-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Restore cloudy, yellowed headlights to crystal-clear perfection. Our professional restoration process removes years of oxidation and damage, dramatically improving your vehicle's appearance and significantly enhancing nighttime driving safety with UV protection included.
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

                {/* Action Buttons */}
                <motion.div 
                  className="headlight-restoration-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a 
                    href={scrollTarget} 
                    className="headlight-restoration-hero__action-button headlight-restoration-hero__action-button--primary"
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
                    <ArrowRight className="headlight-restoration-hero__icon" />
                  </motion.a>
                  <motion.a 
                    href="tel:16476896109"
                    className="headlight-restoration-hero__action-button headlight-restoration-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="headlight-restoration-hero__icon" />
                    <span>Call Now</span>
                  </motion.a>
                </motion.div>
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

