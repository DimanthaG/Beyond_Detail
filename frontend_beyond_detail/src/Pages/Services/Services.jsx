import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { animationOne, transition } from '../../components/Transition';
import { Loading, ErrorBoundary, FAQSection, SkillShowcase, TrustBadges } from '../../components';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { AUTO_DETAIL_PACKAGES } from '../../constants/servicePackages';
import './Services.scss';

import AutoDetailHero from '../../components/AutoDetailHero/AutoDetailHero';
import SEO from '../../components/SEO';

const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function Services() {
  // FAQ Data for Schema & UI
  const autoDetailFAQs = [
    {
      question: "How much does auto detailing cost in Scarborough?",
      answer: "Our auto detailing packages in Scarborough start at $150 for basic interior cleaning. Full interior detailing starts at $200, and comprehensive full-service detailing (interior + exterior) starts at $300. Prices vary based on vehicle size and condition."
    },
    {
      question: "How long does a full auto detail take?",
      answer: "A full auto detail typically takes between 3 to 6 hours, depending on the condition of the vehicle and the specific package chosen. We focus on quality and ensure every inch of your vehicle is spotless."
    },
    {
      question: "Where are you located in Scarborough?",
      answer: "Beyond Detail is located at 170 Finchdene Square, Unit 11, Scarborough, ON M1X 1B3. We serve clients from across Toronto, Markham, Pickering, and Durham Region."
    },
    {
      question: "Do you offer mobile detailing?",
      answer: "We primarily operate from our professional shop to ensure the highest quality results using our specialized equipment and lighting. However, please contact us for specific mobile fleet service inquiries."
    }
  ];

  return (
    <>
      <SEO
        title='Auto Detailing Toronto, Scarborough, Markham, Pickering | Express, Signature & Premium Packages'
        description='Complete auto detailing services in Toronto, Scarborough, Markham, and Pickering. Choose from Express Detail (quick & affordable), Signature Detail (deep cleaning & sanitizing), or Premium Detail (full-service experience). Professional interior and exterior detailing across the GTA.'
        name='Beyond Detail Toronto'
        type='website'
        serviceType='Auto Detailing'
        keywords='auto detailing Toronto, express detail, signature detail, premium detail, car detailing Scarborough, vehicle detailing Markham, full service detailing Pickering, professional car wash GTA, interior exterior detailing'
        faq={autoDetailFAQs}
      />
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={{ ...transition, delay: 0 }}
      >
        <div className='auto-detail__wrapper'>
          <AutoDetailHero scrollTarget="#pricing" />

          <ErrorBoundary fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Gallery unavailable (offline)</div>}>
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="auto-detail"
                title="Auto Detailing Gallery"
                forceLandscape
              />
            </Suspense>
          </ErrorBoundary>

          {/* Premium Overview */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="seo-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Masterful Auto Detailing</h2>
              <p className="seo-text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
                Beyond Detail provides professional auto detailing services throughout the Greater Toronto Area.
                Whether you need a quick refresh or a deep restoration, our packages are designed to bring your vehicle back to showroom condition.
              </p>
            </div>
          </section>

          <div id="pricing">
            <ServicePricing
              title="Our Detailing Packages"
              packages={AUTO_DETAIL_PACKAGES}
            />
          </div>

          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', borderRadius: '12px', marginBottom: '3rem', border: '1px solid var(--glass-border)' }}>
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
              Full Service Auto Detailing in Scarborough & GTA
            </h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
              <p>
                Beyond Detail is your premier destination for <strong>auto detailing in Scarborough</strong>.
                Our professional detailing studio at <strong>170 Finchdene Square, Unit 11</strong> is fully equipped to handle everything from
                interior shampooing and steam cleaning to exterior paint correction. Whether you're coming from
                <strong>Markham, Pickering, Toronto</strong>, or right here in Scarborough, our detailers treat every vehicle with obsessive care.
              </p>
              <p style={{ marginTop: '1rem' }}>
                We specialize in removing salt stains, pet hair, and odors—common issues for GTA drivers.
                Our <Link to="/paint-correction" style={{ color: '#f07900', textDecoration: 'none' }}>paint correction</Link> and <Link to="/ceramic-coatings" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating</Link> services
                are designed to protect your vehicle against Toronto's harsh seasons.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
              <Link to="/interior-detailing" className="btn-premium">Interior Only</Link>
              <Link to="/exterior-detailing" className="btn-premium">Exterior Only</Link>
            </div>
          </section>

          <Suspense fallback={null}>
            <GoogleReviewsCarousel />
          </Suspense>

          <TrustBadges />
          <SkillShowcase />
          <FAQSection data={autoDetailFAQs} title="Auto Detailing FAQs" />

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

export default React.memo(Services);
