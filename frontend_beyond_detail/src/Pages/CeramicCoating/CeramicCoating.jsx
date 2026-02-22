import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, ErrorBoundary, FAQSection, TrustBadges, SkillShowcase } from '../../components';
import { CERAMIC_COATING_PACKAGES } from '../../constants/servicePackages';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import CeramicCoatingInfo from '../../components/CeramicCoatingInfo/CeramicCoatingInfo';
import './CeramicCoating.scss';

import CeramicCoatingHero from '../../components/CeramicCoatingHero/CeramicCoatingHero';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function CeramicCoating() {
  const ceramicCoatingFAQs = [
    {
      question: "What is a ceramic coating?",
      answer: "A ceramic coating is a liquid polymer that chemically bonds to your vehicle's paint, creating a permanent layer of protection. It is significantly harder and more durable than wax or sealant, offering years of protection against UV rays, bird droppings, road salts, and chemical stains."
    },
    {
      question: "How long does ceramic coating last?",
      answer: "Our professional ceramic coatings last between 3 to 7 years depending on the package chosen and how the vehicle is maintained. Unlike wax which lasts weeks, ceramic coating provides long-term peace of mind."
    },
    {
      question: "Is ceramic coating scratch proof?",
      answer: "Ceramic coating is scratch-resistant, not scratch-proof. It protects against light wash marring and fine swirls, but it will not prevent deep key scratches or rock chips. For rock chip protection, we recommend Paint Protection Film (PPF)."
    },
    {
      question: "Do I still need to wash my car?",
      answer: "Yes, you still need to wash your car, but it will be much easier! The hydrophobic properties mean dirt and grime don't stick as easily, so your car stays cleaner longer and washes clean with minimal effort."
    },
    {
      question: "Can I take my ceramic coated car to an automatic car wash?",
      answer: "We strongly advise AGAINST soft-cloth automatic car washes (the ones with brushes) as they can still mar the finish. Touchless washes are generally safe, but hand washing is always the best method to maintain the coating's longevity."
    }
  ];

  return (
    <>
      <SEO
        title='Ceramic Coating Scarborough | 5+ Year Paint Protection | Beyond Detail'
        description='Professional ceramic coating in Scarborough. 5+ year protection, paint correction included, lifetime warranty. Free consultation. Request a quote today.'
        name='Beyond Detail Ceramic Coating'
        type='website'
        serviceType='Ceramic Coating'
        keywords='ceramic coating scarborough, car paint protection, hydrophobic coating, paint protection toronto, ceramic pro alternative'
        faq={ceramicCoatingFAQs}
      />
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={{ ...transition, delay: 0 }}
      >
        <div className='ceramic-coating__wrapper'>
          <Breadcrumb />
          <CeramicCoatingHero
            scrollTarget="#pricing"
            titleLine1="Ceramic"
            titleLine2="Coating"
            titleLine3="Protection"
            subtitle="The ultimate shield for your vehicle. <strong>Unmatched gloss</strong> and <strong>years of protection</strong>."
          />

          <ErrorBoundary fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Gallery unavailable (offline)</div>}>
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="ceramic-coating"
                title="Ceramic Coating Gallery"
                forceLandscape
              />
            </Suspense>
          </ErrorBoundary>

          {/* Premium Overview */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="seo-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ultimate Paint Protection</h2>
              <p className="seo-text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
                Living in Scarborough means dealing with road salt, UV rays, and bird droppings.
                A <strong>Professional Ceramic Coating</strong> hardens your clear coat, making it resistant to chemical etching and oxidation.
                Plus, the hydrophobic finish means your car stays cleaner, longer.
              </p>
            </div>
          </section>

          <CeramicCoatingInfo />

          <div id="pricing">
            <ServicePricing
              title="Ceramic Coating Packages"
              packages={CERAMIC_COATING_PACKAGES}
            />
          </div>

          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', borderRadius: '12px', marginBottom: '3rem', border: '1px solid var(--glass-border)' }}>
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
              Why Choose Beyond Detail?
            </h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
              <p>
                We don't just "apply a wax". We perform a full <Link to="/paint-correction" style={{ color: '#f07900' }}>Paint Correction</Link> before every ceramic coating installation
                to ensure we are locking in perfect paint, not scratches.
                Our studio at <strong>170 Finchdene Square</strong> is temperature-controlled to ensure proper curing of professional-grade coatings.
              </p>
            </div>
          </section>

          <Suspense fallback={null}>
            <GoogleReviewsCarousel />
          </Suspense>

          <TrustBadges />
          <SkillShowcase />

          <FAQSection data={ceramicCoatingFAQs} title="Ceramic Coating FAQs" />
          <Contact />
        </div>
      </motion.div>
    </>
  );
}

export default React.memo(CeramicCoating);
