import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, ErrorBoundary, FAQSection, SkillShowcase, TrustBadges } from '../../components';
import { PAINT_CORRECTION_PACKAGES } from '../../constants/servicePackages';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import PaintProtectionInfo from '../../components/PaintProtectionInfo/PaintProtectionInfo';
import './PaintCorrection.scss';
import PaintCorrectionHero from '../../components/PaintCorrectionHero/PaintCorrectionHero';
import SEO from '../../components/SEO';

const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function PaintCorrection() {
  const paintCorrectionFAQs = [
    {
      question: "What is paint correction?",
      answer: "Paint correction is the process of permanently removing surface imperfections like swirl marks, scratches, oxidation, and etching from your vehicle's paint using machine polishers and specialized compounds. It restores the true gloss and depth of your paint."
    },
    {
      question: "Does car detailing remove scratches?",
      answer: "Yes, expert car detailing with paint correction removes most clear coat scratches, swirl marks, and etching. Using machine polishers, we level the clear coat to permanently eliminate defects. However, deep scratches that penetrate the base coat require touch-up paint or repainting."
    },
    {
      question: "How long does paint correction take?",
      answer: "A single-stage correction typically takes 4-6 hours. Two-stage correction takes 8-12 hours, and multi-stage correction can take 2+ days depending on the severity of defects and desired finish."
    },
    {
      question: "Do I need ceramic coating after paint correction?",
      answer: "While not mandatory, we highly recommend ceramic coating after paint correction. Since correction removes a tiny layer of clear coat to level defects, your paint needs strong protection. Ceramic coating locks in the flawless finish and protects against future marring."
    }
  ];

  return (
    <>
      <SEO
        title='Paint Correction Scarborough | Scratch Removal & Car Polishing'
        description='Expert paint correction in Scarborough. Permanently remove swirl marks, scratches, and oxidation. 1-Stage polish and multi-stage restoration available. Book a free paint inspection.'
        name='Beyond Detail Paint Correction'
        type='website'
        serviceType='Paint Correction'
        keywords='paint correction scarborough, car scratch removal, swirl mark removal, car polishing toronto, cut and polish car, buffing car scratches'
        faq={paintCorrectionFAQs}
      />
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={{ ...transition, delay: 0 }}
      >
        <div className='paint-correction__wrapper'>
          <PaintCorrectionHero
            scrollTarget="#pricing"
            titleLine1="Car Detailing &"
            titleLine2="Scratch Repair"
            titleLine3="TORONTO"
            subtitle="Expert <strong>paint correction</strong> to restore your vehicle's showroom shine."
          />

          <ErrorBoundary fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Gallery unavailable (offline)</div>}>
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="paint-correction"
                title="Paint Correction Gallery"
                forceLandscape
              />
            </Suspense>
          </ErrorBoundary>

          {/* Premium Overview */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="seo-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Restoring Perfection</h2>
              <p className="seo-text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
                Swirl marks, scratches, and oxidation dull your vehicle's finish.
                Our <strong>Paint Correction</strong> process safely removes these defects, revealing the true depth and gloss of your paint.
                We use precision tools to measure your paint depth before we touch it, ensuring a safe and permanent result.
              </p>
            </div>
          </section>

          <PaintProtectionInfo />

          <div id="pricing">
            <ServicePricing
              title="Paint Correction Packages"
              packages={PAINT_CORRECTION_PACKAGES}
            />
          </div>

          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', borderRadius: '12px', marginBottom: '3rem', border: '1px solid var(--glass-border)' }}>
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
              Expert Correction in Scarborough
            </h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
              <p>
                Located at <strong>170 Finchdene Square</strong>, we are the choice for enthusiasts in <Link to="/car-detailing-scarborough" style={{ fontWeight: 'bold' }}>Scarborough</Link>, <Link to="/car-detailing-markham" style={{ fontWeight: 'bold' }}>Markham</Link>, and Toronto.
                Typically, vehicles like the <strong>Honda Civic</strong> or <strong>Tesla Model 3</strong> have softness in their factory clear coat that scratches easily.
                We fix this permanently.
              </p>
              <p style={{ marginTop: '1rem' }}>
                After correction, lock in that shine with a <Link to="/ceramic-coatings" style={{ color: '#f07900' }}>Ceramic Coating</Link> for years of protection.
              </p>
            </div>
          </section>

          <Suspense fallback={null}>
            <GoogleReviewsCarousel />
          </Suspense>

          <TrustBadges />
          <SkillShowcase />

          <FAQSection data={paintCorrectionFAQs} title="Paint Correction FAQs" />

          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </div>
      </motion.div>
    </>
  );
}

export default React.memo(PaintCorrection);

