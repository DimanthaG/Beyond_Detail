import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Shield, Sparkles, Award } from 'lucide-react';
import PartnersCompact from '../Partners/PartnersCompact';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import carImage from '../../assets/bd/bd-26.jpg';
import './LeatherCleaningHero.scss';

export function LeatherCleaningHero({ scrollTarget = "#contact" }) {
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
      <div className="leather-cleaning-hero" ref={heroRef}>
        <motion.div 
          className="leather-cleaning-hero__background"
          style={{ y, opacity }}
        >
          <motion.div 
            className="leather-cleaning-hero__background-image"
            style={{
              x: mousePosition.x * 15,
              y: mousePosition.y * 15,
            }}
          >
            <img src={carImage} alt="Leather cleaning service" />
          </motion.div>
          <div className="leather-cleaning-hero__background-overlay"></div>
          <div className="leather-cleaning-hero__background-gradient"></div>
        </motion.div>

        <div className="leather-cleaning-hero__content">
          <div className="leather-cleaning-hero__container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="leather-cleaning-hero__inner"
            >
              <motion.div 
                className="leather-cleaning-hero__top-button-wrapper"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a 
                  href={scrollTarget} 
                  className="leather-cleaning-hero__top-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(scrollTarget);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  <span>Get Quote</span>
                  <ArrowRight className="leather-cleaning-hero__icon" />
                </a>
              </motion.div>

              <motion.div 
                className="leather-cleaning-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1 
                  className="leather-cleaning-hero__main-title"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span 
                    className="leather-cleaning-hero__title-line leather-cleaning-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Premium Leather
                  </motion.span>
                  <motion.span 
                    className="leather-cleaning-hero__title-line leather-cleaning-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Care & Protection
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="leather-cleaning-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Restore your leather to luxurious condition and protect it for years to come. Our professional cleaning removes embedded dirt and stains, while premium conditioning treatments restore suppleness and create a protective barrier against UV damage, cracking, and wear.
                </motion.p>

                <motion.div 
                  className="leather-cleaning-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div 
                    className="leather-cleaning-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="leather-cleaning-hero__feature-icon" />
                    <span>Restoration</span>
                  </motion.div>
                  <motion.div 
                    className="leather-cleaning-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="leather-cleaning-hero__feature-icon" />
                    <span>Protection</span>
                  </motion.div>
                  <motion.div 
                    className="leather-cleaning-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="leather-cleaning-hero__feature-icon" />
                    <span>Premium Care</span>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="leather-cleaning-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a 
                    href={scrollTarget} 
                    className="leather-cleaning-hero__action-button leather-cleaning-hero__action-button--primary"
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
                    <ArrowRight className="leather-cleaning-hero__icon" />
                  </motion.a>
                  <motion.a 
                    href="tel:16476896109"
                    className="leather-cleaning-hero__action-button leather-cleaning-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="leather-cleaning-hero__icon" />
                    <span>Call Now</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="leather-cleaning-hero__partners">
            <PartnersCompact />
          </div>

          <div className="leather-cleaning-hero__reviews">
            <GoogleReviewsCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeatherCleaningHero;

