import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, ErrorBoundary, FAQSection, TrustBadges, SkillShowcase } from '../../components';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { WINDOW_TINT_PACKAGES } from '../../constants/servicePackages';
import './Tints.scss';

// Lazy load heavy components to improve initial bundle size
import TintsHero from '../../components/TintsHero/TintsHero';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const TintsPercentageTabs = lazy(() => import('../../components/TintsPercentageTabs/TintsPercentageTabs'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function Tints() {
  // FAQ Data
  const tintsFAQs = [
    {
      question: "How much does window tinting cost in Scarborough?",
      answer: "Window tinting in Scarborough typically ranges from $200-$600 depending on your vehicle type and film selection. At Beyond Detail, we offer premium LLUMAR tinting starting at $250 for sedans, with lifetime warranty included. Prices vary based on vehicle size (sedan, SUV, truck) and film type (ATC, CTX, or IRX series)."
    },
    {
      question: "Is window tinting legal in Ontario?",
      answer: "Yes, window tinting is legal in Ontario with specific regulations. Front side windows must allow at least 70% light transmission (VLT). Rear side windows and back windshield can be any darkness. Windshield can only have tint on the top 127mm (5 inches). We ensure all installations comply with Ontario regulations."
    },
    {
      question: "Are ceramic tints legal in Ontario?",
      answer: "Yes, ceramic tints like LLumar IRX are fully legal in Ontario as long as they meet VLT (Visible Light Transmission) requirements. Since ceramic films are available in clear or light shades (like 70% or 80%), you can get maximum heat rejection legally on front windows without breaking the law."
    },
    {
      question: "How long does window tint installation take?",
      answer: "Professional window tint installation typically takes 2-4 hours depending on your vehicle type. Sedans usually take 2-3 hours, while larger SUVs or trucks may take 3-4 hours. We use computer-cut LLUMAR films for precise fit and faster installation. Same-day service available in Scarborough."
    },
    {
      question: "What is the best window tint for Scarborough summers?",
      answer: "For maximum heat rejection during Scarborough summers, we recommend **LLumar IRX Series Ceramic Tint**. It blocks up to **97% of infrared heat** and 99% of UV rays, keeping your car significantly cooler than standard dyed films. It's the ultimate choice for comfort in the GTA."
    },
    {
      question: "Does window tint come with a warranty?",
      answer: "Yes! All our LLUMAR window tint installations include a lifetime warranty covering fading, bubbling, peeling, and cracking. This manufacturer-backed warranty is transferable if you sell your vehicle, adding to its resale value. We also provide a satisfaction guarantee on all installations."
    },
    {
      question: "Can I wash my car after window tinting?",
      answer: "Wait 3-5 days before washing your car after window tint installation. This allows the tint to fully cure and adhere to the glass. Avoid rolling down windows for 3-5 days as well. After the curing period, you can wash normally using soft cloths and ammonia-free cleaners. We provide detailed aftercare instructions."
    }
  ];

  return (
    <>
      <SEO
        title='Window Tinting Scarborough | Ontario Law Compliant | Beyond Detail'
        description='Expert window tinting in Scarborough. UV protection, heat reduction, privacy tinting. Ontario tint laws compliant. Lifetime warranty available. (647) 689-6109'
        name='Beyond Detail Scarborough'
        type='website'
        serviceType='Window Tinting'
        keywords='Llumar Window Tinting Scarborough, Window Tinting Scarborough, Ceramic Window Tint Scarborough, Llumar Authorized Dealer, Heat Rejection Film Scarborough, IRX Window Tint'
        faq={tintsFAQs}
      />
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={{ ...transition, delay: 0 }}
      >
        <div className='tints__wrapper'>
          <Breadcrumb />
          <TintsHero
            scrollTarget="#pricing"
            titleLine1="Llumar Window Tinting"
            titleLine2="Scarborough"
            titleLine3="Starting at $250"
          />

          <ErrorBoundary fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Gallery unavailable (offline)</div>}>
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="window-tint"
                title="Window Tint Gallery"
              />
            </Suspense>
          </ErrorBoundary>

          {/* Premium Overview Section */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
            <h2 className="seo-title" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
              Advanced LLumar Ceramic Content
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ color: '#f07900', fontSize: '1.5rem', marginBottom: '1rem' }}>Why Choose Ceramic Tint?</h3>
                <p className="seo-text-lg">
                  Standard carbon tints only provide privacy. <strong>Ceramic tint</strong> blocks <strong>heat</strong>.
                  Our LLumar IRX films use nano-ceramic technology to reject up to <strong>97% of infrared heat</strong>, keeping your cabin significantly cooler in Scarborough summers.
                  It also blocks 99% of harmful UV rays, protecting your skin and preventing your dashboard from cracking.
                </p>
              </div>
              <div>
                <h3 style={{ color: '#f07900', fontSize: '1.5rem', marginBottom: '1rem' }}>Lifetime Warranty</h3>
                <p className="seo-text-lg">
                  We are an authorized LLumar dealer. Every installation comes with a <strong>manufacturer-backed lifetime warranty</strong> against bubbling, peeling, fading, or turning purple.
                  Located at <strong>170 Finchdene Square</strong>, we provide same-day service for clients across Toronto, Markham, and Pickering.
                </p>
              </div>
            </div>
          </section>

          <ServicePricing
            title="Window Tint Packages"
            packages={WINDOW_TINT_PACKAGES}
          />

          {/* Consolidated Technical Info */}
          <Suspense fallback={<Loading />}>
            <section style={{ margin: '4rem 0' }}>
              <TintsPercentageTabs />
            </section>

            <TrustBadges />
            <SkillShowcase />
            <FAQSection data={tintsFAQs} title="Window Tinting FAQs" />
            <Contact />
          </Suspense>
        </div>
      </motion.div>
    </>
  );
}

export default React.memo(Tints);
