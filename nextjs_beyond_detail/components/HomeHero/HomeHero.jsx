'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, Shield, Zap, Star, Award, Clock } from 'lucide-react';
import Link from 'next/link';
import PartnersCompact from '../Partners/PartnersCompact';
import { ServiceLinker } from '../../utils/serviceLinker';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import ImageWithSchema from '../ImageWithSchema/ImageWithSchema';
import { trackPhoneClick, trackCTAClick } from '../../utils/analytics';
import './HomeHero.scss';

const carImageAvif = '/images/hero-home.avif';
const carImage = '/images/hero-home.webp';
const carImage400w = '/images/hero-home-400w.webp';
const carImage800w = '/images/hero-home-800w.webp';
const carImage1200w = '/images/hero-home.webp';
const carImage1600w = '/images/hero-home.webp';

export function HomeHero() {
  const heroRef = useRef(null);
  const [reviews, setReviews] = useState({ rating: 0, totalReviews: 0, recentReviews: [] });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getCachedGoogleReviews();
        if (data && !data.error) {
          setReviews({
            rating: data.rating || 0,
            totalReviews: data.totalReviews || 0,
            recentReviews: (data.reviews || []).slice(0, 2)
          });
        }
      } catch (error) {
        console.error('Error loading reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <>
      <div className="home-hero" ref={heroRef}>
        <div className="home-hero__background">
          <div className="home-hero__background-image">
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
              <ImageWithSchema
                src={carImage}
                srcSet={`
                  ${carImage400w} 400w,
                  ${carImage800w} 800w,
                  ${carImage1200w} 1200w,
                  ${carImage1600w} 1600w,
                  ${carImage} 1920w
                `}
                sizes="(min-width: 1280px) 1200px, 100vw"
                alt="Window tinting and auto detailing services in Scarborough, Toronto - Beyond Detail professional car care and ceramic coating"
                name="Ceramic Coating Ferrari"
                description="Professional ceramic coating showing mirror-like gloss on Ferrari at Beyond Detail auto detailing studio in Scarborough"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="1920"
                height="1080"
              />
            </picture>
          </div>
          <div className="home-hero__background-overlay"></div>
          <div className="home-hero__background-gradient"></div>
        </div>

        <div className="home-hero__content">
          <div className="home-hero__container">
            <motion.div
              className="home-hero__trust-badges"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {reviews.rating > 0 && (
                <div className="home-hero__trust-badge">
                  <Star className="home-hero__trust-icon" fill="currentColor" />
                  <div>
                    <span className="home-hero__trust-rating">{reviews.rating.toFixed(1)}</span>
                    <span className="home-hero__trust-text">
                      {reviews.totalReviews > 0 ? `${reviews.totalReviews}+ Reviews` : 'Rated'}
                    </span>
                  </div>
                </div>
              )}
              <div className="home-hero__trust-badge">
                <Award className="home-hero__trust-icon" />
                <span>LLUMAR Certified</span>
              </div>
              <div className="home-hero__trust-badge">
                <Shield className="home-hero__trust-icon" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="home-hero__trust-badge">
                <Clock className="home-hero__trust-icon" />
                <span>Same-Day Service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="home-hero__inner"
            >
              <motion.div
                className="home-hero__title-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.h1
                  className="home-hero__main-title"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.span
                    className="home-hero__title-line home-hero__title-line--white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    #1 Car Detailing
                  </motion.span>
                  <motion.span
                    className="home-hero__title-line home-hero__title-line--highlight"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ display: 'block', visibility: 'visible' }}
                  >
                    in Scarborough
                  </motion.span>
                  <motion.span
                    className="home-hero__title-line home-hero__title-line--white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ fontSize: '0.5em', opacity: 0.8, marginTop: '0.5rem', display: 'block' }}
                  >
                    Also Serving Markham, North York & Pickering
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="home-hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Premium <ServiceLinker text="auto detailing" />, <ServiceLinker text="ceramic coating" /> & <ServiceLinker text="window tinting" />. Trusted by 2000+ customers in Scarborough.
                </motion.p>

                <motion.div
                  className="home-hero__features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div className="home-hero__feature-item" whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Shield className="home-hero__feature-icon" />
                    <span>5+ Year Protection</span>
                  </motion.div>
                  <motion.div className="home-hero__feature-item" whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Sparkles className="home-hero__feature-icon" />
                    <span>Free Consultation</span>
                  </motion.div>
                  <motion.div className="home-hero__feature-item" whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Zap className="home-hero__feature-icon" />
                    <span>No Contracts Required</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="home-hero__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.a
                    href="#contact"
                    className="home-hero__action-button home-hero__action-button--primary"
                    onClick={(e) => {
                      e.preventDefault();
                      trackCTAClick('book_detail', 'homepage');
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>BOOK YOUR DETAIL</span>
                    <ArrowRight className="home-hero__icon" />
                  </motion.a>
                  <motion.a
                    href="tel:16476896109"
                    className="home-hero__action-button home-hero__action-button--outline"
                    onClick={() => trackPhoneClick('hero')}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="home-hero__icon" />
                    <span>Call (647) 689-6109</span>
                  </motion.a>
                  <Link
                    href="/pricing"
                    className="home-hero__action-button home-hero__action-button--outline"
                    style={{ textDecoration: 'none', border: '2px solid #f07900', color: 'white' }}
                  >
                    <span>View Pricing</span>
                  </Link>
                </motion.div>

                <motion.div
                  className="home-hero__service-shortcuts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <span className="home-hero__shortcuts-label">Popular Services:</span>
                  <div className="home-hero__shortcuts-list">
                    <Link href="/ceramic-coating-scarborough" className="home-hero__shortcut">Ceramic Coating Scarborough</Link>
                    <Link href="/window-tinting-scarborough" className="home-hero__shortcut">Window Tinting Scarborough</Link>
                    <Link href="/paint-correction-scarborough" className="home-hero__shortcut">Paint Correction</Link>
                    <Link href="/auto-detailing-markham" className="home-hero__shortcut">Markham</Link>
                    <Link href="/car-detailing-north-york" className="home-hero__shortcut">North York</Link>
                  </div>
                </motion.div>

              </motion.div>
            </motion.div>
          </div>

          <div className="home-hero__partners">
            <PartnersCompact />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
