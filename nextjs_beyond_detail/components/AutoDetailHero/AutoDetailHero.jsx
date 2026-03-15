'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Shield, Sparkles, Award, Star, Clock } from 'lucide-react';
import { getCachedGoogleReviews } from '../../services/googleReviewsService';
import PartnersCompact from '../Partners/PartnersCompact';
import './AutoDetailHero.scss';

const carImage = '/images/bd-32.webp';
const carImage400w = '/images/bd-32-400w.webp';
const carImage800w = '/images/bd-32-800w.webp';
const carImage1200w = '/images/bd-32-1200w.webp';
const carImage1600w = '/images/bd-32-1600w.webp';

export function AutoDetailHero({
  scrollTarget = "#pricing",
  titleLine1 = "Full-Service Auto Detailing in",
  titleLine2 = "TORONTO",
  titleLine3 = null,
  subtitle = "Tired of dirty interiors, odors, and a dull exterior? Get <strong>full-service auto detailing</strong> in the GTA. We deep-clean and sanitize every inch of your interior for a fresh, like-new feel\u2014plus include a premium exterior hand wash for a spotless finish."
}) {
  const heroRef = useRef(null);
  const [reviews, setReviews] = useState({ rating: 0, totalReviews: 0, recentReviews: [] });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getCachedGoogleReviews();
        if (data && !data.error) {
          setReviews({ rating: data.rating || 0, totalReviews: data.totalReviews || 0, recentReviews: (data.reviews || []).slice(0, 2) });
        }
      } catch (error) { console.error('Error loading reviews:', error); }
    };
    fetchReviews();
  }, []);

  return (
    <>
      <div id="hero" className="auto-detail-hero" ref={heroRef}>
        <div className="auto-detail-hero__background">
          <div className="auto-detail-hero__background-image">
            <img src={carImage} srcSet={`${carImage400w} 400w, ${carImage800w} 800w, ${carImage1200w} 1200w, ${carImage1600w} 1600w, ${carImage} 1920w`} sizes="100vw" alt={`${titleLine1} ${titleLine2} ${titleLine3 || ''}`} loading="eager" fetchPriority="high" decoding="async" width="1920" height="1080" />
          </div>
          <div className="auto-detail-hero__background-overlay"></div>
          <div className="auto-detail-hero__background-gradient"></div>
        </div>
        <div className="auto-detail-hero__content">
          <div className="auto-detail-hero__container">
            <motion.div className="auto-detail-hero__trust-badges" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {reviews.rating > 0 && (<div className="auto-detail-hero__trust-badge"><Star className="auto-detail-hero__trust-icon" fill="currentColor" /><div><span className="auto-detail-hero__trust-rating">{reviews.rating.toFixed(1)}</span><span className="auto-detail-hero__trust-text">{reviews.totalReviews > 0 ? `${reviews.totalReviews}+ Reviews` : 'Rated'}</span></div></div>)}
              <div className="auto-detail-hero__trust-badge"><Award className="auto-detail-hero__trust-icon" /><span>Expert Certified</span></div>
              <div className="auto-detail-hero__trust-badge"><Shield className="auto-detail-hero__trust-icon" /><span>Lifetime Warranty</span></div>
              <div className="auto-detail-hero__trust-badge"><Clock className="auto-detail-hero__trust-icon" /><span>Same-Day Service</span></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="auto-detail-hero__inner">
              <motion.div className="auto-detail-hero__title-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                <motion.h1 className="auto-detail-hero__main-title" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                  <motion.span className="auto-detail-hero__title-line auto-detail-hero__title-line--white" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>{titleLine1}</motion.span>
                  <motion.span className="auto-detail-hero__title-line auto-detail-hero__title-line--highlight" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>{titleLine2}</motion.span>
                  {titleLine3 && (<motion.span className="auto-detail-hero__title-line auto-detail-hero__title-line--highlight" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>{titleLine3}</motion.span>)}
                </motion.h1>
                <motion.p className="auto-detail-hero__description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} dangerouslySetInnerHTML={{ __html: subtitle }} />
                <motion.div className="auto-detail-hero__features" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}>
                  <motion.div className="auto-detail-hero__feature-item" whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 300 }}><Shield className="auto-detail-hero__feature-icon" /><span>Interior & Exterior</span></motion.div>
                  <motion.div className="auto-detail-hero__feature-item" whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 300 }}><Sparkles className="auto-detail-hero__feature-icon" /><span>Premium Products</span></motion.div>
                  <motion.div className="auto-detail-hero__feature-item" whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 300 }}><Award className="auto-detail-hero__feature-icon" /><span>Expert Care</span></motion.div>
                </motion.div>
                <motion.div className="auto-detail-hero__actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }}>
                  <motion.a href="#contact" className="auto-detail-hero__action-button auto-detail-hero__action-button--primary" onClick={(e) => { e.preventDefault(); const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}><span>Get Free Quote</span><ArrowRight className="auto-detail-hero__icon" /></motion.a>
                  <motion.a href="tel:16476896109" className="auto-detail-hero__action-button auto-detail-hero__action-button--outline" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}><Phone className="auto-detail-hero__icon" /><span>Call (647) 689-6109</span></motion.a>
                </motion.div>
                <motion.div className="auto-detail-hero__service-shortcuts" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5 }}>
                  <span className="auto-detail-hero__shortcuts-label">Related Services:</span>
                  <div className="auto-detail-hero__shortcuts-list">
                    <Link href="/ceramic-coatings" className="auto-detail-hero__shortcut">Ceramic Coating</Link>
                    <Link href="/paint-correction" className="auto-detail-hero__shortcut">Paint Correction</Link>
                    <Link href="/tint" className="auto-detail-hero__shortcut">Window Tinting</Link>
                  </div>
                </motion.div>
                {reviews.recentReviews.length > 0 && (
                  <motion.div className="auto-detail-hero__reviews-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.7 }}>
                    <div className="auto-detail-hero__reviews-header"><Star className="auto-detail-hero__reviews-icon" fill="currentColor" /><span>Recent Reviews</span></div>
                    <div className="auto-detail-hero__reviews-list">
                      {reviews.recentReviews.map((review, idx) => (
                        <div key={idx} className="auto-detail-hero__review-card">
                          <div className="auto-detail-hero__review-header">
                            <div className="auto-detail-hero__review-stars">{[...Array(5)].map((_, i) => (<Star key={i} className={`auto-detail-hero__review-star ${i < (review.rating || 5) ? 'filled' : ''}`} size={12} fill={i < (review.rating || 5) ? 'currentColor' : 'none'} />))}</div>
                            <span className="auto-detail-hero__review-name">{review.name}</span>
                          </div>
                          <p className="auto-detail-hero__review-text">"{review.message?.substring(0, 80)}..."</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
          <div className="auto-detail-hero__partners"><PartnersCompact /></div>
        </div>
      </div>
    </>
  );
}

export default AutoDetailHero;
