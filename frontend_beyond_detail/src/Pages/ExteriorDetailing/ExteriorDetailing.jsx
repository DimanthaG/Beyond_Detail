import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, FAQSection } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './ExteriorDetailing.scss';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const ExteriorDetailingHero = lazy(() => import('../../components/ExteriorDetailingHero/ExteriorDetailingHero'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function ExteriorDetailing() {
  // ScrollToTop component handles scrolling to hero section

  // FAQ Data
  const exteriorDetailingFAQs = [
    {
      question: "What does exterior detailing include?",
      answer: "Our exterior detailing service includes a thorough two-bucket hand wash, wheel and tire cleaning, clay bar decontamination to remove embedded grit, and application of a premium sealant for protection. Premium packages also include paint correction and ceramic coating options."
    },
    {
      question: "Will exterior detailing remove scratches?",
      answer: "Standard exterior detailing focuses on deep cleaning and protection. To remove scratches, swirl marks, and oxidation, you would need our 'Paint Correction' service, which can be added to any detailing package or booked as a standalone service."
    },
    {
      question: "How often should I detail my car's exterior?",
      answer: "We recommend a comprehensive exterior detail every 4-6 months to maintain your paint's condition and protection. However, regular maintenance washes should be done every 2 weeks to prevent dirt buildup and salt damage."
    },
    {
      question: "What is the difference between wax and sealant?",
      answer: "Waxes are typically natural products that offer a deep warm shine but last only 4-8 weeks. Sealants are synthetic, offering 4-6 months of durable protection against UV rays, road salts, and environmental contaminants. We use premium sealants for longer-lasting results."
    }
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Exterior Detailing Toronto, Scarborough, Markham, Pickering | Paint Protection & Wash'
          description='Professional exterior detailing services in Toronto, Scarborough, Markham, and Pickering. Expert exterior wash, paint correction, ceramic coating, and protection. Premium exterior care across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Exterior Detailing'
          keywords='exterior detailing Toronto, car exterior cleaning Scarborough, vehicle exterior detailing Markham, paint protection Pickering, exterior car care GTA'
          faq={exteriorDetailingFAQs}
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='exterior-detailing__wrapper'>
            <ExteriorDetailingHero scrollTarget="#pricing" />
            <ServiceInfoSection
              title="Exterior Detailing Services"
              subtitle="Premium Exterior Care"
              description="Our exterior detailing services provide comprehensive cleaning, protection, and enhancement of your vehicle's exterior. From basic hand washing to advanced paint correction and ceramic coating, we restore and protect your vehicle's exterior while defending against environmental damage, road debris, and harsh weather conditions."
              benefits={[
                {
                  title: "Restored Paint Finish",
                  description: "Professional cleaning and polishing removes oxidation, light scratches, and surface imperfections to reveal your vehicle's true color and shine."
                },
                {
                  title: "Environmental Protection",
                  description: "Sealants and ceramic coatings shield your paint from UV rays, acid rain, bird droppings, tree sap, road salt, and other contaminants that cause damage over time."
                },
                {
                  title: "Enhanced Appearance",
                  description: "Transform your vehicle's exterior with a deep, glossy finish that makes it look brand new and maintains its showroom-quality appearance."
                },
                {
                  title: "Extended Paint Life",
                  description: "Regular professional detailing and protection extends the life of your paint, helping maintain your vehicle's value and appearance."
                },
                {
                  title: "Protection Against Elements",
                  description: "Advanced sealants protect against harsh weather conditions, road salt, environmental hazards, and daily wear and tear."
                },
                {
                  title: "Comprehensive Care",
                  description: "From paint to trim, wheels to glass, every exterior surface receives meticulous attention and professional care."
                }
              ]}
              process={[
                {
                  title: "Premium Hand Wash",
                  description: "We begin with a premium two-bucket hand wash using high-quality products, carefully cleaning every exterior surface including paint, wheels, tires, door jams, and trunk jams."
                },
                {
                  title: "Decontamination Treatment",
                  description: "Clay bar treatment removes embedded contaminants, road film, and industrial fallout that normal washing cannot eliminate from the paint surface."
                },
                {
                  title: "Tire & Wheel Care",
                  description: "Wheels and tires are thoroughly cleaned, conditioned, and protected to maintain their appearance and prevent deterioration from brake dust and road debris."
                },
                {
                  title: "Trim & Glass Cleaning",
                  description: "All exterior trim pieces receive attention, and all glass surfaces are cleaned to crystal-clear perfection for optimal visibility."
                },
                {
                  title: "Protection Application",
                  description: "High-quality sealants are applied to protect your vehicle's finish and provide long-lasting shine and protection against the elements."
                },
                {
                  title: "Final Inspection",
                  description: "A comprehensive quality check ensures every detail has been addressed and your vehicle meets our high standards."
                }
              ]}
              features={[
                "Exterior Hand Wash",
                "Tire and Rims Cleaned",
                "Door Jams Cleaned",
                "Trunk Jams Cleaned",
                "Exterior Windows Cleaned",
                "All Mirrors Cleaned",
                "Clay Bar Decontamination (Signature & Premium)",
                "Premium Sealant Application (Signature & Premium)",
                "Paint Correction Available (Premium)",
                "Ceramic Coating Available (Premium)"
              ]}
            />
            <ServicePricing
              title="Exterior Detailing Packages"
              packages={[
                {
                  name: "Express Wash",
                  priceRange: { start: 50 },
                  priceNote: "Starting price. Larger vehicles may cost extra.",
                  description: "Essential exterior cleaning perfect for regular maintenance. Keeps your vehicle looking fresh and clean.",
                  features: [
                    "Exterior Hand Wash",
                    "Tire and Rims Cleaned",
                    "Exterior Windows Cleaned",
                    "All Mirrors Cleaned"
                  ],
                  ctaText: "Book This Package"
                },
                {
                  name: "Signature Wash",
                  priceRange: { start: 150 },
                  priceNote: "Starting price. Larger vehicles may cost extra.",
                  description: "Enhanced exterior cleaning with decontamination and sealant protection. Ideal for vehicles that need deeper cleaning and protection.",
                  features: [
                    "Exterior Hand Wash",
                    "Tire and Rims Cleaned",
                    "Door Jams Cleaned",
                    "Trunk Jams Cleaned",
                    "Exterior Windows Cleaned",
                    "All Mirrors Cleaned",
                    "Clay Bar Decontamination",
                    "Premium Sealant Application"
                  ],
                  featured: true,
                  ctaText: "Book This Package"
                },
                {
                  name: "Premium Exterior Service",
                  priceRange: { start: 0, end: 0 },
                  priceNote: "Paint Correction & Ceramic Coating Services",
                  description: "For comprehensive paint correction and long-lasting ceramic coating protection, please see our Paint Correction and Ceramic Coating pages for detailed packages and pricing.",
                  features: [
                    "Professional Paint Correction",
                    "Ceramic Coating Application",
                    "Complete Exterior Restoration",
                    "Long-Lasting Protection"
                  ],
                  ctaText: "View Paint Correction",
                  links: [
                    { text: "View Paint Correction", href: "/paint-correction" },
                    { text: "View Ceramic Coating", href: "/ceramic-coating" }
                  ]
                }
              ]}
            />
            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <FAQSection data={exteriorDetailingFAQs} title="Exterior Detailing FAQs" />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(ExteriorDetailing);

