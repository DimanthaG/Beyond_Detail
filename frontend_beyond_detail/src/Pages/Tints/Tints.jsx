import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, ErrorBoundary, FAQSection, TrustBadges } from '../../components';
import './Tints.scss';

// Lazy load heavy components to improve initial bundle size
import TintsHero from '../../components/TintsHero/TintsHero';
import SEO from '../../components/SEO';

// Lazy load heavy components to improve initial bundle size
// const SEO = lazy(() => import('../../components/SEO'));
// const TintsHero = lazy(() => import('../../components/TintsHero/TintsHero'));
const TintsFeatures = lazy(() => import('../../components/TintsFeatures/TintsFeatures'));
const TintBenefitsInfo = lazy(() => import('../../components/TintBenefitsInfo/TintBenefitsInfo'));
const TintSpecsChart = lazy(() => import('../../components/TintSpecsChart/TintSpecsChart'));
const TintsPercentageTabs = lazy(() => import('../../components/TintsPercentageTabs/TintsPercentageTabs'));
const TintsPercentage = lazy(() => import('../../components/TintsPercentage/TintsPercentage'));
const TintLawsChart = lazy(() => import('../../components/TintsLaws/TintLawsChart'));
const TintLawsExplanation = lazy(() => import('../../components/TintsLaws/TintLawsExplanation'));
const TintLawsSources = lazy(() => import('../../components/TintsLaws/TintLawsSources'));
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
      {/* Suspense fallback={<Loading />}>  REMOVED OUTER SUSPENSE */}
      {/* FAQ Schema managed by SEO component now */}
      <SEO
        title='Llumar Window Tinting Scarborough | Starting at $250 | Lifetime Warranty'
        description='Llumar authorized dealer in Scarborough. Professional window tinting with 97% heat rejection (IRX), UV protection, and lifetime warranty. Serving Toronto & GTA. Same-day service available.'
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

          {/* GEO Answer Block - Optimized for ChatGPT/Perplexity Citations */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px' }}>
            <h2 className="seo-title">
              Why is Llumar the best window tint for Scarborough summers?
            </h2>
            <div>
              <p className="seo-text-lg" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Llumar IRX ceramic tint is the superior choice for Scarborough drivers because it <strong>blocks 97% of infrared heat</strong> and <strong>99.9% of UV rays</strong>,
                which is critical during humid GTA summers when cabin temperatures can exceed 140°F. Unlike standard dyed films that fade purple within 3 years,
                Llumar's nano-ceramic technology maintains crystal-clear visibility for safer driving on Highway 401 and Markham Road while preventing dashboard cracking and seat fading.
                As an <strong>authorized Llumar dealer at 170 Finchdene Square</strong>, we install IRX film with a <strong>lifetime manufacturer warranty</strong> against bubbling, peeling, and color change.
                Starting at $250 for sedans, you get same-day installation and heat rejection that keeps your car 60% cooler than factory glass —
                essential for comfort during Toronto's increasingly intense heatwaves.
              </p>
            </div>
          </section>

          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '2rem auto 0' }}>
            <h2 className="seo-title">
              Advanced LLumar Ceramic Tinting in Scarborough
            </h2>
            <div>
              <p className="seo-text-lg">
                Looking for competitive <strong>window tinting prices in Toronto and Scarborough</strong>? Beyond Detail is your trusted specialist.
                Located at <strong>170 Finchdene Square, Unit 11, Scarborough</strong>, we provide premium LLumar window tint installation
                with same-day service available. Transparency is key: our professional tint packages <strong>start at $250</strong> for sedans, with no hidden fees.
              </p>
              <p className="seo-text-lg">
                Whether you're in <Link to="/window-tinting-scarborough">Scarborough</Link>,{' '}
                <Link to="/window-tinting-markham">Markham</Link>,{' '}
                <Link to="/window-tinting-pickering">Pickering</Link>,
                or anywhere in the GTA, we're your local window tinting experts.
                All installations include a <strong>lifetime warranty</strong> and professional service you can trust.
              </p>
            </div>
          </section>

          {/* Internal Linking Section */}
          <div className="seo-content-box" style={{ maxWidth: '1000px', margin: '3rem auto 0' }}>
            <p className="seo-text-lg">
              Beyond Detail provides premium <strong><Link to="/tint">window tinting in Toronto</Link></strong> using LLumar films.
              Combine your tint service with <Link to="/ceramic-coating-scarborough">ceramic coating</Link> for ultimate protection.
              We also offer comprehensive <Link to="/auto-detail">auto detailing</Link> to keep your car looking showroom new inside and out.
            </p>
          </div>

          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <TintsFeatures />
              <TintBenefitsInfo />
              <TintLawsExplanation />
              <TintSpecsChart />
              <TintsPercentageTabs />
              <TintLawsChart />
              <TintsPercentage />
              <TintLawsSources />
              <TrustBadges />
              <FAQSection data={tintsFAQs} title="Window Tinting FAQs" />
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </div>
      </motion.div>
      {/* </Suspense> */}
    </>
  );
}

export default React.memo(Tints);
