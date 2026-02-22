import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationOne, transition } from '../../components/Transition';
import { Loading, FAQSection, SkillShowcase, TrustBadges, ErrorBoundary } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './InteriorDetailing.scss';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

// Lazy load heavy components to improve initial bundle size
import SEO from '../../components/SEO';
import InteriorDetailingHero from '../../components/InteriorDetailingHero/InteriorDetailingHero';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function InteriorDetailing() {
  // ScrollToTop component handles scrolling to hero section

  // FAQ Data
  const interiorDetailingFAQs = [
    {
      question: "Does interior detailing remove bad odors?",
      answer: "Yes, our interior detailing process is highly effective at removing odors. We deep clean all fabrics, shampoo carpets, and can use ozone treatment to neutralize persistent smells like cigarette smoke, pet odors, and mildew."
    },
    {
      question: "How long does it take for seats to dry after shampooing?",
      answer: "Typically, seats and carpets will be dry within 2-4 hours after shampoo extraction, depending on weather conditions. We use powerful extractors to remove most moisture during the process to ensure quick drying times."
    },
    {
      question: "Do you remove pet hair?",
      answer: "Absolutely. We specialize in pet hair removal using specialized tools and techniques to lift embedded hair from carpets and upholstery. This is included in our 'Premium' interior package or can be added to other services."
    },
    {
      question: "Does interior detailing include the trunk?",
      answer: "Yes, the trunk is included in all our interior detailing packages. We vacuum and clean the trunk area to the same high standard as the rest of the vehicle's cabin."
    }
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Interior Car Detailing Scarborough | Deep Cleaning from $149 | Beyond Detail'
          description='Professional interior car detailing in Scarborough. Steam cleaning, leather conditioning, odor removal. Starting at $149. Same-day service available.'
          name='Beyond Detail Interior'
          type='website'
          serviceType='Interior Detailing'
          keywords='interior car detailing scarborough, steam cleaning car, car upholstery cleaner, ozone treatment car, pet hair removal car, car salt stain removal'
          faq={interiorDetailingFAQs}
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='interior-detailing__wrapper'>
            <Breadcrumb />
            <InteriorDetailingHero scrollTarget="#pricing" />

            {/* Premium Overview */}
            <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="seo-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Deep Interior Restoration</h2>
                <p className="seo-text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  From salt stains to pet hair, our interior detailing tackles the toughest challenges.
                  We use <strong>hot water extraction</strong> and professional-grade steam cleaners to restore your cabin to showroom condition.
                </p>
              </div>
            </section>
            <ServiceInfoSection
              title="Comprehensive Interior Restoration Services"
              subtitle="Steam, Shampoo, and Sanitize"
              description="Our interior detailing services specialize in correcting the wear and tear of daily driving. From removing pet hair and stubborn salt stains to professional shampoo extraction, we restore your interior to like-new condition."
              benefits={[
                {
                  title: "Steam Cleaning & Sanitization",
                  description: "We use high-temperature steam to kill bacteria and deep clean high-touch areas like vents, cup holders, and steering wheels without harsh chemicals."
                },
                {
                  title: "Hot Water Extraction (Shampoo)",
                  description: "Our heated extractors inject solution and vacuum it out instantly to lift heavy salt stains, coffee spills, and deep grime from carpets and cloth seats."
                },
                {
                  title: "Leather Cleaning & Conditioning",
                  description: "We gently agitate leather pores to remove dirt, then apply a premium conditioner to prevent cracking and restore a natural matte finish (non-greasy)."
                },
                {
                  title: "Odor Removal (Ozone Treatment)",
                  description: "For persistent smells like smoke or mold, we use an Ozone Generator that neutralizes odor particles at the molecular level rather than just masking them."
                },
                {
                  title: "Pet Hair Removal",
                  description: "We use specialized rubber brushes, air purging, and static-combating tools to extract stubborn dog or cat hair from every crevice of your upholstery."
                },
                {
                  title: "Salt Stain Removal",
                  description: "Living in Scarborough means winter salt. We dissolve and extract hardened white salt crusts to save your carpets from permanent rotting."
                }
              ]}
              process={[
                {
                  title: "Comprehensive Vacuuming",
                  description: "We begin with thorough vacuuming of all interior surfaces including seats, carpets, floor mats, trunk, and hard-to-reach areas using specialized attachments designed for pet hair removal."
                },
                {
                  title: "Upholstery Cleaning",
                  description: "All upholstery surfaces are thoroughly cleaned using appropriate methods for fabric, leather, or vinyl, removing surface stains and embedded dirt."
                },
                {
                  title: "Professional Shampoo Extraction",
                  description: "Professional-grade shampoo is applied to seats and carpets, then extracted with powerful equipment that removes deeply embedded stains, salt deposits, pet hair, and contaminants."
                },
                {
                  title: "Detailed Surface Cleaning",
                  description: "Dashboard, console, and door panels are meticulously cleaned and scrubbed, removing dust, fingerprints, and discoloration from all plastic, vinyl, and leather surfaces."
                },
                {
                  title: "Sanitization & Disinfection",
                  description: "Interior surfaces are sanitized and disinfected to eliminate bacteria, germs, smoke odors, and allergens, ensuring a fresh and healthy environment."
                },
                {
                  title: "Window & Mirror Cleaning",
                  description: "All interior windows and mirrors receive crystal-clear cleaning for optimal visibility and appearance."
                },
                {
                  title: "Final Protection",
                  description: "Protective treatments are applied where appropriate, and a comprehensive quality check ensures every detail has been addressed."
                }
              ]}
              features={[
                "Interior Vacuumed & Dusted",
                "Carpets, Seats, & Mats Vacuumed",
                "All Upholstery Cleaned",
                "Dashboard, Console & Doors Cleaned",
                "Professional Shampoo Extraction",
                "Pet Hair Removal",
                "Salt Stain Removal",
                "Fabric Stain Treatment",
                "Smoke Odor Elimination",
                "Steam Cleaning Available",
                "Interior Sanitized & Disinfected",
                "Interior Windows Cleaned",
                "All Mirrors Cleaned"
              ]}
            />

            <ServicePricing
              title="Interior Detailing Packages"
              packages={[
                {
                  name: "Interior Refresh Package",
                  priceRange: { start: 149 },
                  priceNote: "Starting price. Larger vehicles may cost extra.",
                  description: "Essential interior cleaning for regular maintenance. Perfect for keeping your vehicle's interior fresh and clean.",
                  features: [
                    "Interior Vacuumed & Dusted",
                    "Carpets, Seats, & Mats Vacuumed",
                    "All Upholstery Cleaned",
                    "Interior Windows Cleaned",
                    "All Mirrors Cleaned"
                  ],
                  ctaText: "Book This Package"
                },
                {
                  name: "Full Interior Deep Clean (Most Popular)",
                  priceRange: { start: 249 },
                  priceNote: "Starting price. Larger vehicles may cost extra.",
                  description: "Enhanced interior cleaning with sanitization. Ideal for vehicles that need deeper cleaning and odor elimination.",
                  features: [
                    "Interior Vacuumed & Dusted",
                    "Carpets, Seats, & Mats Vacuumed",
                    "All Upholstery Cleaned",
                    "Interior Windows Cleaned",
                    "All Mirrors Cleaned",
                    "Interior Sanitized & Disinfected"
                  ],
                  featured: true,
                  ctaText: "Book This Package"
                },
                {
                  name: "Premium Interior + Ozone",
                  priceRange: { start: 299 },
                  priceNote: "Starting price. Larger vehicles may cost extra.",
                  description: "Comprehensive deep cleaning with professional shampoo extraction. Removes embedded stains, pet hair, salt deposits, and deeply embedded dirt.",
                  features: [
                    "Interior Vacuumed & Dusted",
                    "Dashboard, Console & Doors Cleaned",
                    "Carpets, Seats, & Mats Vacuumed",
                    "All Upholstery Cleaned",
                    "Interior Windows Cleaned",
                    "All Mirrors Cleaned",
                    "Interior Sanitized & Disinfected",
                    "Seats Extracted / Shampoo Wash To Remove Deep Embedded Stains And Grime",
                    "Carpets Extracted / Shampoo Wash To Remove Deep Embedded Stains And Grime"
                  ],
                  ctaText: "Book This Package"
                }
              ]}
            />

            {/* Cross-sell: Upgrade to Full Service */}
            <section style={{ maxWidth: '900px', margin: '0 auto 3rem', padding: '2.5rem 2rem', background: 'linear-gradient(135deg, rgba(240,121,0,0.15), rgba(240,121,0,0.05))', borderRadius: '16px', border: '1px solid rgba(240,121,0,0.3)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#fff', marginBottom: '0.75rem' }}>
                Want Exterior Too? Upgrade to Full Service
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '650px', margin: '0 auto 1.5rem', lineHeight: '1.7' }}>
                Add a premium exterior hand wash, clay bar, and wax protection to any interior package. Auto Detailing packages start at just <strong style={{ color: '#f07900' }}>$199</strong> — interior + exterior included.
              </p>
              <Link to="/auto-detail" style={{ display: 'inline-block', background: '#f07900', color: '#fff', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '1.05rem', transition: 'transform 0.2s' }}>
                View Auto Detailing Packages →
              </Link>
            </section>

            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <TrustBadges />
            <SkillShowcase />
            <FAQSection data={interiorDetailingFAQs} title="Interior Detailing FAQs" />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(InteriorDetailing);

