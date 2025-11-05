import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, Shield, Award } from 'lucide-react';
import PartnersCompact from '../Partners/PartnersCompact';
import carImage from '../../assets/bd/bd-32.jpg';
import './AutoDetailHero.scss';

export function AutoDetailHero({ scrollTarget = "#pricing" }) {
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
      <div id="hero" className="auto-detail-hero" ref={heroRef}>
        {/* Car Image Background with Parallax */}
        <motion.div 
          className="auto-detail-hero__background"
          style={{ y, opacity }}
        >
          <motion.div 
            className="auto-detail-hero__background-image"
            style={{
              x: mousePosition.x * 15,
              y: mousePosition.y * 15,
            }}
          >
            <img src={carImage} alt="Auto detailing service" />
          </motion.div>
          <div className="auto-detail-hero__background-overlay"></div>
          <div className="auto-detail-hero__background-gradient"></div>
        </motion.div>

        <div className="auto-detail-hero__content">
          <div className="auto-detail-hero__container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="auto-detail-hero__inner"
            >
              {/* Top Button */}
              <motion.div 
                className="auto-detail-hero__top-button-wrapper"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a 
                  href={scrollTarget} 
                  className="auto-detail-hero__top-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(scrollTarget);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  <span>View Packages</span>
                  <ArrowRight className="auto-detail-hero__icon" />
                </a>
              </motion.div>

              {/* Title Section */}
              <motion.div 
                className="auto-detail-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1 
                  className="auto-detail-hero__main-title"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span 
                    className="auto-detail-hero__title-line auto-detail-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    COMPLETE
                  </motion.span>
                  <motion.span 
                    className="auto-detail-hero__title-line auto-detail-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                  >
                    AUTO DETAILING
                  </motion.span>
                  <motion.span 
                    className="auto-detail-hero__title-line auto-detail-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    INSIDE & OUT
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="auto-detail-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Complete auto detailing that brings your vehicle back to showroom condition. From deep interior cleaning to exterior paint enhancement, we combine expert craftsmanship with premium products to deliver results that exceed expectations.
                </motion.p>

                {/* Feature Icons */}
                <motion.div 
                  className="auto-detail-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div 
                    className="auto-detail-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="auto-detail-hero__feature-icon" />
                    <span>Interior & Exterior</span>
                  </motion.div>
                  <motion.div 
                    className="auto-detail-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="auto-detail-hero__feature-icon" />
                    <span>Premium Products</span>
                  </motion.div>
                  <motion.div 
                    className="auto-detail-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="auto-detail-hero__feature-icon" />
                    <span>Expert Care</span>
                  </motion.div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="auto-detail-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a 
                    href={scrollTarget} 
                    className="auto-detail-hero__action-button auto-detail-hero__action-button--primary"
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
                    <ArrowRight className="auto-detail-hero__icon" />
                  </motion.a>
                  <motion.a 
                    href="tel:16476896109"
                    className="auto-detail-hero__action-button auto-detail-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="auto-detail-hero__icon" />
                    <span>Call Now</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Partners Compact Section */}
          <div className="auto-detail-hero__partners">
            <PartnersCompact />
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoDetailHero;

