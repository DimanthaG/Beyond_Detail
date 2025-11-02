import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import './ExteriorDetailing.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const ExteriorDetailingHero = lazy(() => import('../../components/ExteriorDetailingHero/ExteriorDetailingHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function ExteriorDetailing() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Exterior Detailing - Beyond Detail Toronto'
          description="Professional exterior detailing services in Toronto. Restore and protect your vehicle's exterior with our premium exterior detailing and paint protection services."
          name='Beyond Detail Toronto'
          type='website'
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
            <Suspense fallback={null}>
              <ServiceGallery serviceType="exterior-detailing" title="Exterior Detailing Gallery" />
            </Suspense>
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
                "Premium Hand Wash",
                "Tire and Rims Cleaned",
                "Door Jams Cleaned",
                "Trunk Jams Cleaned",
                "Exterior Windows Cleaned",
                "All Mirrors Cleaned",
                "Clay Bar Decontamination (Intermediate & Advanced)",
                "Premium Sealant Application (Intermediate & Advanced)",
                "Paint Correction Available (Advanced)",
                "Ceramic Coating Available (Advanced)"
              ]}
            />
            <ServicePricing
              title="Exterior Detailing Packages"
              packages={[
                {
                  name: "Basic Wash",
                  priceRange: { start: 50, end: 50 },
                  priceNote: "Fixed pricing for all vehicle sizes",
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
                  name: "Intermediate Wash",
                  priceRange: { start: 150, end: 150 },
                  priceNote: "Fixed pricing for all vehicle sizes",
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
                  name: "Advanced Exterior Service",
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
            <Testimonials
              title="What Our Customers Say"
              subtitle="Hear from customers who have experienced our exterior detailing services"
              badgeText="Customer Reviews"
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(ExteriorDetailing);

