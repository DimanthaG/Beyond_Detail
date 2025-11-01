import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import './InteriorDetailing.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
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
          title='Interior Detailing - Beyond Detail Toronto'
          description="Professional interior detailing services in Toronto. Deep clean and protect your vehicle's interior with our comprehensive interior detailing services."
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
          <div className='interior-detailing__wrapper'>
            <BackgroundPaths 
              title="Interior Detailing"
              scrollTarget="#pricing"
              description="Breathe new life into your vehicle's interior. Our deep cleaning services go beyond surface cleaning to remove embedded dirt, eliminate odors, and restore that like-new freshness. Professional shampoo extraction, leather conditioning, and meticulous attention to every detail."
            />
            <Suspense fallback={null}>
              <ServiceGallery serviceType="interior-detailing" title="Interior Detailing Gallery" />
            </Suspense>
            <ServiceInfoSection
              title="Complete Interior Detailing Services"
              subtitle="Deep Cleaning & Restoration"
              description="Our interior detailing services go far beyond basic vacuuming. We provide comprehensive deep cleaning, shampoo extraction, and detailed restoration of every interior surface, from upholstery and carpets to dashboards and air vents, ensuring your vehicle's interior looks and feels like new."
              benefits={[
                {
                  title: "Deep Clean Upholstery",
                  description: "Professional shampoo and extraction removes deeply embedded dirt, stains, and odors from seats, carpets, and fabric surfaces, restoring their original appearance and freshness."
                },
                {
                  title: "Sanitized Interior",
                  description: "Thorough cleaning eliminates bacteria, allergens, and germs, creating a healthier environment for you and your passengers."
                },
                {
                  title: "Restored Interior Appearance",
                  description: "Remove years of accumulated dirt, grime, and wear to restore your vehicle's interior to showroom condition."
                },
                {
                  title: "Enhanced Resale Value",
                  description: "A professionally detailed interior significantly increases your vehicle's resale value and appeal to potential buyers."
                },
                {
                  title: "Odor Elimination",
                  description: "Deep cleaning removes the source of unpleasant odors, leaving your interior smelling fresh and clean."
                },
                {
                  title: "Protection & Conditioning",
                  description: "Premium conditioners protect leather, vinyl, and plastic surfaces from cracking, fading, and premature aging."
                }
              ]}
              process={[
                {
                  title: "Comprehensive Vacuuming",
                  description: "We begin with thorough vacuuming of all interior surfaces including seats, carpets, floor mats, trunk, and hard-to-reach areas using specialized attachments and tools."
                },
                {
                  title: "Shampoo & Extraction",
                  description: "Professional-grade shampoo is applied to upholstery, carpets, and fabric surfaces, then extracted with powerful equipment that removes dirt, stains, and embedded contaminants."
                },
                {
                  title: "Detailed Surface Cleaning",
                  description: "All plastic, vinyl, and leather surfaces are meticulously cleaned and scrubbed, including dashboard, console, door panels, air vents, and cup holders."
                },
                {
                  title: "Headliner & Trim Care",
                  description: "Fabric headliners are carefully cleaned, and all interior trim pieces receive attention to remove dust, stains, and discoloration."
                },
                {
                  title: "Leather Conditioning",
                  description: "Leather surfaces are cleaned, conditioned, and protected with premium products that restore suppleness and protect against cracking and fading."
                },
                {
                  title: "Final Protection",
                  description: "Protective treatments are applied to appropriate surfaces, and a final inspection ensures every detail has been addressed."
                }
              ]}
              features={[
                "Complete interior vacuuming (seats, carpets, trunk)",
                "Professional shampoo and extraction",
                "Deep cleaning of all upholstery",
                "Carpet and floor mat shampoo treatment",
                "Dashboard and console detailed cleaning",
                "Air vent and cup holder cleaning",
                "Fabric headliner cleaning",
                "Plastic and vinyl surface scrubbing",
                "Leather cleaning and conditioning",
                "Door panel and trim restoration",
                "Interior glass cleaning",
                "Final protection and finishing"
              ]}
            />
            <ServicePricing
              title="Interior Detailing Packages"
              packages={[
                {
                  name: "Basic Interior Detail",
                  duration: "3-4 hours",
                  priceRange: { start: 199, end: 249 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Essential interior cleaning for regular maintenance. Keeps your vehicle's interior fresh and clean.",
                  features: [
                    "Complete interior vacuuming",
                    "Dashboard and console cleaning",
                    "Window and mirror cleaning",
                    "Basic surface cleaning",
                    "Trunk vacuuming",
                    "Interior wipe-down"
                  ],
                  ctaText: "Book This Package"
                },
                {
                  name: "Premium Interior Detail",
                  duration: "5-7 hours",
                  priceRange: { start: 349, end: 449 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Deep cleaning with shampoo extraction. Restores your interior to like-new condition with thorough cleaning.",
                  features: [
                    "Complete interior vacuuming",
                    "Shampoo and extraction of seats",
                    "Carpet and floor mat deep cleaning",
                    "Dashboard and console detailed cleaning",
                    "Air vent and cup holder cleaning",
                    "Fabric headliner cleaning",
                    "Plastic and vinyl scrubbing",
                    "Leather cleaning and conditioning"
                  ],
                  featured: true,
                  ctaText: "Book This Package"
                },
                {
                  name: "Ultimate Interior Detail",
                  duration: "7-9 hours",
                  priceRange: { start: 499, end: 699 },
                  priceNote: "Pricing varies by vehicle size and condition",
                  description: "Comprehensive interior restoration with professional-grade equipment. Maximum results for heavily soiled or neglected interiors.",
                  features: [
                    "Complete interior vacuuming (all areas)",
                    "Professional shampoo and extraction",
                    "Deep cleaning of all upholstery",
                    "Carpet and floor mat professional treatment",
                    "Complete dashboard and console restoration",
                    "Air vent deep cleaning",
                    "Fabric headliner professional cleaning",
                    "Complete leather restoration and conditioning",
                    "Odor elimination treatment",
                    "Interior protection application"
                  ],
                  ctaText: "Book This Package"
                }
              ]}
            />
            <Testimonials
              title="What Our Customers Say"
              subtitle="Hear from customers who have experienced our interior detailing services"
              badgeText="Customer Reviews"
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(InteriorDetailing);

