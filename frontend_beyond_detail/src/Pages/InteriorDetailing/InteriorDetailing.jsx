import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './InteriorDetailing.scss';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const InteriorDetailingHero = lazy(() => import('../../components/InteriorDetailingHero/InteriorDetailingHero'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function InteriorDetailing() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Interior Detailing Toronto, Scarborough, Markham, Pickering | Deep Interior Cleaning'
          description='Professional interior detailing services in Toronto, Scarborough, Markham, and Pickering. Deep interior cleaning, pet hair removal, stain removal, steam cleaning, and sanitization. Expert interior care across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Interior Detailing'
          keywords='interior detailing Toronto, car interior cleaning Scarborough, vehicle interior detailing Markham, upholstery cleaning Pickering, interior car wash GTA'
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
              title="Interior Detailing Services"
              subtitle="Deep Cleaning & Restoration"
              description="Our interior detailing services specialize in comprehensive deep cleaning of your vehicle's interior. From removing pet hair and stubborn stains to professional shampoo extraction and sanitization, we restore your interior to like-new condition using proven techniques and professional-grade equipment."
              benefits={[
                {
                  title: "Deep Stain Removal",
                  description: "Professional shampoo extraction and steam cleaning removes deeply embedded stains including pet hair, salt stains, fabric stains, and other contaminants that regular cleaning cannot eliminate."
                },
                {
                  title: "Odor Elimination",
                  description: "Deep cleaning removes the source of unpleasant odors including smoke smell, pet odors, and food odors, leaving your interior fresh and clean."
                },
                {
                  title: "Sanitized Environment",
                  description: "Thorough sanitization eliminates bacteria, allergens, and germs, creating a healthier environment for you and your passengers."
                },
                {
                  title: "Restored Appearance",
                  description: "Remove years of accumulated dirt, grime, and wear to restore your vehicle's interior to showroom condition."
                },
                {
                  title: "Enhanced Resale Value",
                  description: "A professionally detailed interior significantly increases your vehicle's resale value and appeal to potential buyers."
                },
                {
                  title: "Protection & Conditioning",
                  description: "Premium conditioners protect leather, vinyl, and plastic surfaces from cracking, fading, and premature aging."
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
                  name: "Basic Interior Detail",
                  priceRange: { start: 80 },
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
                  name: "Intermediate Interior Detail",
                  priceRange: { start: 130 },
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
                  name: "Advanced Interior Detail",
                  priceRange: { start: 180 },
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
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(InteriorDetailing);

