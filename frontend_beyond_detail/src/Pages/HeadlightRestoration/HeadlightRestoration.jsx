import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, FAQSection, TrustBadges, SkillShowcase } from '../../components';
import HeadlightRestorationHero from '../../components/HeadlightRestorationHero/HeadlightRestorationHero';
import ServiceBenefits from '../../components/ServiceBenefits/ServiceBenefits';
import ServiceContactCTA from '../../components/ServiceContactCTA/ServiceContactCTA';
import './HeadlightRestoration.scss';

// Lazy load heavy components to improve initial bundle size
import SEO from '../../components/SEO';
const Contact = lazy(() => import('../../components/Contact/Contact'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

function HeadlightRestoration() {
  // ScrollToTop component handles scrolling to hero section

  // FAQ Data
  const headlightFAQs = [
    {
      question: "Why do headlights become yellow and cloudy?",
      answer: "Headlights dull over time due to UV exposure from the sun, which breaks down the factory protective coating on the polycarbonate lens. Oxidation, road debris, and environmental contaminants also contribute to the yellowing and haziness."
    },
    {
      question: "Is headlight restoration permanent?",
      answer: "Restoration is a long-lasting solution, but not permanent forever as UV rays will eventually affect the plastic again. However, we apply a high-quality UV-resistant ceramic coating after restoration to protect the clarity for years, far longer than simple polishing kits."
    },
    {
      question: "Does restoration improve night visibility?",
      answer: "Yes, significantly. Cloudy headlights can reduce light output by up to 80%. Restoring them to crystal clarity allows your bulbs to project light properly, drastically improving your visibility and safety while driving at night."
    },
    {
      question: "How long does the restoration process take?",
      answer: "The professional headlight restoration process typically takes 1 to 1.5 hours. This includes multi-stage wet sanding, compound polishing, and the application of the protective ceramic coating layer."
    }
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Headlight Restoration Toronto, Scarborough, Markham, Pickering | Cloudy Headlight Repair'
          description='Professional headlight restoration services in Toronto, Scarborough, Markham, and Pickering. Restore cloudy and yellowed headlights to crystal clear condition. Expert restoration across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Headlight Restoration'
          keywords='headlight restoration Toronto, cloudy headlight repair Scarborough, yellowed headlights Markham, headlight polishing Pickering, headlight restoration GTA'
          faq={headlightFAQs}
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='headlight-restoration__wrapper'>
            <HeadlightRestorationHero scrollTarget="#contact" />

            {/* Premium Overview */}
            <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="seo-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Crystal Clear Headlights</h2>
                <p className="seo-text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Cloudy, yellowed headlights reduce visibility by up to 80%. Our professional restoration process removes oxidation
                  and applies <strong>UV-resistant ceramic coating</strong> for long-lasting clarity and safety.
                </p>
              </div>
            </section>
            <ServiceBenefits
              title="EXPERT HEADLIGHT RESTORATION"
              subtitle="Crystal Clear Results"
              description="Over time, headlights become cloudy, yellowed, and hazy due to UV exposure and oxidation. Our professional restoration process removes years of damage, restoring clarity and improving both the appearance of your vehicle and your nighttime driving safety."
              benefits={[
                {
                  title: "Improved Nighttime Visibility",
                  description: "Restore maximum light output for safer nighttime driving by eliminating the cloudy barrier that reduces headlight effectiveness."
                },
                {
                  title: "Enhanced Vehicle Appearance",
                  description: "Crystal-clear headlights dramatically improve your vehicle's overall appearance, making it look newer and well-maintained."
                },
                {
                  title: "Cost-Effective Solution",
                  description: "Avoid expensive headlight replacement costs. Professional restoration can restore clarity for a fraction of the cost of new headlights."
                },
                {
                  title: "UV Protection Applied",
                  description: "Following restoration, we apply specialized UV-resistant coating to prevent future yellowing and oxidation."
                },
                {
                  title: "Long-Lasting Results",
                  description: "With proper care and the applied protection, restored headlights maintain their clarity for years to come."
                },
                {
                  title: "Professional Technique",
                  description: "Our multi-stage process uses professional-grade compounds and equipment to achieve factory-like clarity and finish."
                }
              ]}
              features={[
                "Complete headlight inspection",
                "Multi-stage sanding process",
                "Professional compound polishing",
                "Optical clarity restoration",
                "UV-resistant protection coating",
                "Both headlights restored",
                "Quality inspection",
                "Maintenance recommendations"
              ]}
            />
            <ServiceContactCTA
              title="READY TO RESTORE YOUR HEADLIGHTS?"
              description="Contact us today for a personalized quote and restore your headlights to crystal-clear perfection."
            />
            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <TrustBadges />
            <SkillShowcase />
            <FAQSection data={headlightFAQs} title="Headlight Restoration FAQs" />
            <Contact />

            {/* Mobile Sticky CTA */}
            <div className="mobile-sticky-cta" style={{
              position: 'fixed',
              bottom: '80px', // Raised to sit above global footer nav if present
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 999,
              width: '90%',
              textAlign: 'center',
              display: 'none'
            }}>
              <style>{`
                @media (max-width: 768px) {
                  .mobile-sticky-cta { display: block !important; }
                }
              `}</style>
              <a href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'block',
                  background: '#f07900',
                  color: '#fff',
                  padding: '14px 20px',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  fontSize: '1rem',
                  letterSpacing: '0.5px'
                }}>
                Book Headlight Restoration
              </a>
            </div>
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(HeadlightRestoration);

