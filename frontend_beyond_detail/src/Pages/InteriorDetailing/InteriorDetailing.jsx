import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, FAQSection } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './InteriorDetailing.scss';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const InteriorDetailingHero = lazy(() => import('../../components/InteriorDetailingHero/InteriorDetailingHero'));
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
          title='Interior Car Detailing Scarborough | Shampoo, Steam Clean & Odor Removal'
          description='Deep interior cleaning in Scarborough. Specialized in salt stain removal, hot water extraction, pet hair removal, and ozone odor treatment. Book your interior fresh start today.'
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
            <InteriorDetailingHero scrollTarget="#pricing" />
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
            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <FAQSection data={interiorDetailingFAQs} title="Interior Detailing FAQs" />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(InteriorDetailing);

