import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import GoogleReviewsCarousel from '../GoogleReviewsCarousel/GoogleReviewsCarousel';
import './HomeHero.scss';

export function HomeHero() {
  const sliderRef = useRef(null);

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
      <div className="home-hero">
        {/* Video Background Container */}
        <div className="home-hero__video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="home-hero__video"
          >
            <source src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477" type="video/mp4" />
          </video>
        </div>

        <div className="home-hero__content">
          <div className="home-hero__container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="home-hero__inner"
            >
              {/* Top Button */}
              <div className="home-hero__top-button-wrapper">
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
              </div>

              {/* Title Section */}
              <div className="home-hero__title-section">
                <h1 className="home-hero__main-title">
                  <span className="home-hero__title-line">Build 10x Faster with</span>
                  <span className="home-hero__title-line home-hero__title-line--highlight">Beyond Detail</span>
                </h1>
                <p className="home-hero__description">
                  Highly customizable components for building modern websites and applications you mean it.
                </p>

                {/* Action Buttons */}
                <div className="home-hero__actions">
                  <a 
                    href="#home-services" 
                    className="home-hero__action-button home-hero__action-button--primary"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector("#home-services");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                  >
                    <span>Start Building</span>
                    <ArrowRight className="home-hero__icon" />
                  </a>
                  <a 
                    href="#contact" 
                    className="home-hero__action-button home-hero__action-button--outline"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                  >
                    <span>Request a demo</span>
                  </a>
                </div>
              </div>
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

