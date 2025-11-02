import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, Award, TrendingUp } from 'lucide-react';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import carImage from '../../assets/bd/bd-24.jpg';
import './PaintCorrectionHero.scss';

export function PaintCorrectionHero({ scrollTarget = "#pricing" }) {
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
      <div className="paint-correction-hero" ref={heroRef}>
        {/* Car Image Background with Parallax */}
        <motion.div 
          className="paint-correction-hero__background"
          style={{ y, opacity }}
        >
          <motion.div 
            className="paint-correction-hero__background-image"
            style={{
              x: mousePosition.x * 15,
              y: mousePosition.y * 15,
            }}
          >
            <img src={carImage} alt="Paint correction service" />
          </motion.div>
          <div className="paint-correction-hero__background-overlay"></div>
          <div className="paint-correction-hero__background-gradient"></div>
        </motion.div>

        <div className="paint-correction-hero__content">
          <div className="paint-correction-hero__container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="paint-correction-hero__inner"
            >
              {/* Top Button */}
              <motion.div 
                className="paint-correction-hero__top-button-wrapper"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a 
                  href={scrollTarget} 
                  className="paint-correction-hero__top-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(scrollTarget);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  <span>View Pricing Packages</span>
                  <ArrowRight className="paint-correction-hero__icon" />
                </a>
              </motion.div>

              {/* Title Section */}
              <motion.div 
                className="paint-correction-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1 
                  className="paint-correction-hero__main-title"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span 
                    className="paint-correction-hero__title-line paint-correction-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Restore Your Paint
                  </motion.span>
                  <motion.span 
                    className="paint-correction-hero__title-line paint-correction-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    To Perfection
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="paint-correction-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Eliminate swirl marks, scratches, and oxidation to reveal your vehicle's true beauty. Our advanced paint correction techniques restore your paint to factory-fresh perfection, enhancing depth, clarity, and that showroom shine you've been missing.
                </motion.p>

                {/* Feature Icons */}
                <motion.div 
                  className="paint-correction-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div 
                    className="paint-correction-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="paint-correction-hero__feature-icon" />
                    <span>Showroom Finish</span>
                  </motion.div>
                  <motion.div 
                    className="paint-correction-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="paint-correction-hero__feature-icon" />
                    <span>Multi-Stage Correction</span>
                  </motion.div>
                  <motion.div 
                    className="paint-correction-hero__feature-item"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="paint-correction-hero__feature-icon" />
                    <span>Value Enhancement</span>
                  </motion.div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="paint-correction-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a 
                    href={scrollTarget} 
                    className="paint-correction-hero__action-button paint-correction-hero__action-button--primary"
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
                    <ArrowRight className="paint-correction-hero__icon" />
                  </motion.a>
                  <motion.a 
                    href="tel:16476896109"
                    className="paint-correction-hero__action-button paint-correction-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="paint-correction-hero__icon" />
                    <span>Call Now</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Reviews Carousel Below Hero */}
          <div className="paint-correction-hero__reviews">
            <GoogleReviewsCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default PaintCorrectionHero;

