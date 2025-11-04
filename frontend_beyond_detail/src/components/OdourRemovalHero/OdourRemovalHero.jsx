import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Wind, Shield, Sparkles } from 'lucide-react';
import PartnersCompact from '../Partners/PartnersCompact';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import carImage from '../../assets/bd/bd-26.jpg';
import './OdourRemovalHero.scss';

export function OdourRemovalHero({ scrollTarget = "#contact" }) {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
      <div id="hero" className="odour-removal-hero" ref={heroRef}>
        <motion.div 
          className="odour-removal-hero__background"
          style={{ y, opacity }}
        >
          <motion.div 
            className="odour-removal-hero__background-image"
            style={{
              x: mousePosition.x * 15,
              y: mousePosition.y * 15,
            }}
          >
            <img src={carImage} alt="Odour removal service" />
          </motion.div>
          <div className="odour-removal-hero__background-overlay"></div>
          <div className="odour-removal-hero__background-gradient"></div>
        </motion.div>

        <div className="odour-removal-hero__content">
          <div className="odour-removal-hero__container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="odour-removal-hero__inner"
            >
              <motion.div 
                className="odour-removal-hero__top-button-wrapper"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a 
                  href={scrollTarget} 
                  className="odour-removal-hero__top-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(scrollTarget);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  <span>Get Quote</span>
                  <ArrowRight className="odour-removal-hero__icon" />
                </a>
              </motion.div>

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
                    Eliminate Odors
                  </motion.span>
                  <motion.span 
                    className="odour-removal-hero__title-line odour-removal-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Permanently
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="odour-removal-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Eliminate persistent odors permanently, not temporarily. Our advanced treatments penetrate deep into materials to neutralize odors at their source—whether from smoke, pets, mold, or biological contaminants. Professional-grade solutions that deliver lasting results.
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

                <motion.div 
                  className="odour-removal-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a 
                    href={scrollTarget} 
                    className="odour-removal-hero__action-button odour-removal-hero__action-button--primary"
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
                    <ArrowRight className="odour-removal-hero__icon" />
                  </motion.a>
                  <motion.a 
                    href="tel:16476896109"
                    className="odour-removal-hero__action-button odour-removal-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="odour-removal-hero__icon" />
                    <span>Call Now</span>
                  </motion.a>
                </motion.div>
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

