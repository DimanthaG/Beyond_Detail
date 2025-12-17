import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, ErrorBoundary, FAQSection } from '../../components';
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
      question: "How long does window tint installation take?",
      answer: "Professional window tint installation typically takes 2-4 hours depending on your vehicle type. Sedans usually take 2-3 hours, while larger SUVs or trucks may take 3-4 hours. We use computer-cut LLUMAR films for precise fit and faster installation. Same-day service available in Scarborough."
    },
    {
      question: "What's the best window tint for heat rejection in Toronto?",
      answer: "For maximum heat rejection in Toronto's climate, we recommend LLUMAR IRX series ceramic tint. It blocks up to 97% of infrared heat while maintaining 70% visibility for front windows (legal in Ontario). IRX provides superior heat rejection without interfering with electronics, plus 99% UV protection and lifetime warranty."
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
        title='Window Tinting Scarborough | LLUMAR Tint Installation | Starting at $250'
        description='Professional window tinting in Scarborough. ⭐ 68 Five-Star Reviews | Premium LLUMAR Films | Lifetime Warranty | Same-Day Service | Starting at $250 | Call (647) 689-6109'
        name='Beyond Detail Toronto'
        type='website'
        serviceType='Window Tinting'
        keywords='window tinting scarborough, window tint scarborough, car tint scarborough, LLUMAR tint scarborough, window tint near me, ceramic tint scarborough, auto tinting scarborough, window tinting markham, window tinting pickering'
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
          <TintsHero scrollTarget="#pricing" />
          <ErrorBoundary fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Gallery unavailable (offline)</div>}>
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="window-tint"
                title="Window Tint Gallery"
              />
            </Suspense>
          </ErrorBoundary>

          {/* Location-Specific Content: Window Tinting in Scarborough */}
          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
              Professional Window Tinting in Scarborough
            </h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
              <p>
                Beyond Detail is Scarborough's trusted window tinting specialist, serving customers throughout the Greater Toronto Area.
                Located at <strong>170 Finchdene Square, Unit 11, Scarborough</strong>, we provide premium LLUMAR window tint installation
                with same-day service available. Our expert technicians have installed thousands of window tints for Scarborough residents,
                ensuring every installation meets Ontario's legal requirements while maximizing heat rejection and UV protection.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Whether you're in <Link to="/window-tinting-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>Scarborough</Link>,
                <Link to="/window-tinting-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>Markham</Link>,
                <Link to="/window-tinting-pickering" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>Pickering</Link>,
                or anywhere in the GTA, we're your local window tinting experts.
                All installations include a <strong>lifetime warranty</strong> and professional service you can trust.
              </p>
            </div>
          </section>

          {/* Internal Linking Section */}
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
              Beyond Detail provides premium <strong><Link to="/tint" style={{ color: '#f07900', textDecoration: 'none' }}>window tinting in Scarborough</Link></strong> using LLUMAR films.
              Combine your tint service with <Link to="/ceramic-coating-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating</Link> for ultimate protection.
              We also offer comprehensive <Link to="/auto-detail" style={{ color: '#f07900', textDecoration: 'none' }}>auto detailing</Link> to keep your car looking showroom new inside and out.
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
