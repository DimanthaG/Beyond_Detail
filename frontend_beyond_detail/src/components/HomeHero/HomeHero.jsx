import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, Shield, Zap } from 'lucide-react';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import carImage from '../../assets/bd/bd-20.jpg';
import './HomeHero.scss';

export function HomeHero() {
  const sliderRef = useRef(null);
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
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

  useEffect(() => {
    // Infinite scroll effect for brands
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    let isScrolling = true;

    const scroll = () => {
      if (slider && isScrolling) {
        scrollAmount += scrollSpeed;
        slider.scrollLeft = scrollAmount;

        // Reset scroll position when we've scrolled through half the content
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
          slider.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      isScrolling = false;
    };
    const handleMouseLeave = () => {
      isScrolling = true;
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const brands = [
    { name: 'LLumar', logo: null },
    { name: 'EASTMAN', logo: null },
    { name: 'IWFA', logo: null },
    { name: 'Skin Cancer Foundation', logo: null },
  ];

  return (
    <>
      <div className="home-hero" ref={heroRef}>
        {/* Car Image Background with Parallax */}
        <motion.div 
          className="home-hero__background"
          style={{ y, opacity }}
        >
          <motion.div 
            className="home-hero__background-image"
            style={{
              x: mousePosition.x * 20,
              y: mousePosition.y * 20,
            }}
          >
            <img src={carImage} alt="Premium car detailing" />
          </motion.div>
          <div className="home-hero__background-overlay"></div>
          <div className="home-hero__background-gradient"></div>
        </motion.div>

        <div className="home-hero__content">
          <div className="home-hero__container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="home-hero__inner"
            >
              {/* Top Button */}
              <motion.div 
                className="home-hero__top-button-wrapper"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a 
                  href="#home-services" 
                  className="home-hero__top-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#home-services");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="home-hero__icon" />
                </a>
              </motion.div>

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
                    Experience Premium
                  </motion.span>
                  <motion.span 
                    className="home-hero__title-line home-hero__title-line--white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Automotive Care
                  </motion.span>
                  <motion.span 
                    className="home-hero__title-line home-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Beyond Detail
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="home-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Toronto's trusted automotive care specialists. From window tint installation to ceramic coating, paint correction, and comprehensive detailing — we deliver exceptional results that protect and enhance your vehicle's appearance and value.
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

                {/* Action Buttons */}
                <motion.div 
                  className="home-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a 
                    href="#home-services" 
                    className="home-hero__action-button home-hero__action-button--primary"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector("#home-services");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Services</span>
                    <ArrowRight className="home-hero__icon" />
                  </motion.a>
                  <motion.a 
                    href="tel:16476896109"
                    className="home-hero__action-button home-hero__action-button--outline"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="home-hero__icon" />
                    <span>Call Now</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Reviews Carousel Below Hero */}
          <div className="home-hero__reviews">
            <GoogleReviewsCarousel />
          </div>
        </div>
      </div>

      {/* Brands Slider Section */}
      <section className="home-hero__brands-section">
        <div className="home-hero__brands-container">
          <div className="home-hero__brands-wrapper">
            <div className="home-hero__brands-label">
              <p>Powering the best teams</p>
            </div>
            <div className="home-hero__brands-slider-wrapper">
              <div 
                ref={sliderRef}
                className="home-hero__brands-slider"
              >
                {/* Duplicate brands for seamless loop */}
                {[...brands, ...brands].map((brand, index) => (
                  <div key={index} className="home-hero__brand-item">
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="home-hero__brand-logo"
                      />
                    ) : (
                      <div className="home-hero__brand-placeholder">
                        {brand.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Fade gradients */}
              <div className="home-hero__brands-fade home-hero__brands-fade--left"></div>
              <div className="home-hero__brands-fade home-hero__brands-fade--right"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeHero;

