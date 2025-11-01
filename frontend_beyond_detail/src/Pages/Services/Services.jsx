import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, HomeProcess } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import './Services.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function Services() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Auto Detail - Beyond Detail Toronto'
          description='Complete auto detailing services in Toronto and Scarborough. Comprehensive interior and exterior detailing, paint correction, and protection services to keep your vehicle looking its best.'
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
          <div className='auto-detail__wrapper'>
            <BackgroundPaths 
              title="Auto Detail"
              scrollTarget="#pricing"
              description="Complete auto detailing that brings your vehicle back to showroom condition. From deep interior cleaning to exterior paint enhancement, we combine expert craftsmanship with premium products to deliver results that exceed expectations. Your satisfaction is our priority."
            />
            <Suspense fallback={null}>
              <ServiceGallery serviceType="auto-detail" title="Auto Detailing Gallery" />
            </Suspense>
            <ServiceInfoSection
              title="Complete Auto Detailing Services"
              subtitle="Interior & Exterior Excellence"
              description="Our comprehensive auto detailing services combine expert interior and exterior care to fully restore and protect your vehicle. From deep cleaning and stain removal to paint enhancement and protection, we treat every surface with meticulous attention to detail, ensuring your vehicle looks and feels like new."
              benefits={[
                {
                  title: "Complete Vehicle Restoration",
                  description: "Both interior and exterior surfaces are professionally cleaned, restored, and protected in one comprehensive service, ensuring your entire vehicle receives expert care."
                },
                {
                  title: "Showroom-Quality Results",
                  description: "Our dual approach combines interior deep cleaning with exterior paint enhancement to achieve showroom-quality results that transform your vehicle's appearance."
                },
                {
                  title: "Enhanced Protection",
                  description: "Protective treatments are applied to interior and exterior surfaces, shielding against UV damage, stains, spills, and environmental contaminants."
                },
                {
                  title: "Increased Vehicle Value",
                  description: "Professional detailing significantly increases your vehicle's resale value by maintaining and restoring both interior and exterior surfaces."
                },
                {
                  title: "Healthier Interior Environment",
                  description: "Thorough interior cleaning eliminates bacteria, allergens, and odors while exterior protection defends against environmental hazards."
                },
                {
                  title: "Comprehensive Service",
                  description: "One service covers everything from carpet shampooing and leather conditioning to paint polishing and sealant application, saving you time and ensuring consistent quality."
                }
              ]}
              process={[
                {
                  title: "Exterior Wash & Decontamination",
                  description: "We begin with a premium hand wash using the two-bucket method, followed by clay bar treatment to remove embedded contaminants from the paint surface."
                },
                {
                  title: "Interior Deep Cleaning",
                  description: "Comprehensive vacuuming of all interior areas, followed by professional shampoo and extraction of upholstery and carpets to remove embedded dirt and stains."
                },
                {
                  title: "Exterior Paint Enhancement",
                  description: "Light polishing removes minor imperfections, swirl marks, and oxidation to restore paint clarity and depth, revealing your vehicle's true color."
                },
                {
                  title: "Interior Surface Restoration",
                  description: "All plastic, vinyl, and leather surfaces are meticulously cleaned and conditioned. Dashboard, console, air vents, and door panels receive detailed attention."
                },
                {
                  title: "Wheel & Trim Care",
                  description: "Wheels, tires, and all exterior trim are thoroughly cleaned, conditioned, and protected to maintain their appearance and prevent deterioration."
                },
                {
                  title: "Protection Application",
                  description: "High-quality protection is applied to both interior (conditioners, fabric protectors) and exterior (wax, sealant) surfaces for long-lasting results."
                },
                {
                  title: "Final Inspection",
                  description: "A comprehensive quality check ensures every detail has been addressed and your vehicle meets our high standards before delivery."
                }
              ]}
              features={[
                "Premium hand wash and chamois dry",
                "Clay bar decontamination treatment",
                "Complete interior vacuuming (all areas)",
                "Professional shampoo and extraction",
                "Light paint polishing and enhancement",
                "Dashboard and console detailed cleaning",
                "Wheel and tire deep cleaning",
                "Air vent and cup holder cleaning",
                "Leather cleaning and conditioning",
                "Exterior trim restoration",
                "Glass cleaning (interior and exterior)",
                "Protection application (wax/sealant)",
                "Final quality inspection"
              ]}
            />

            <ServicePricing
              title="Complete Auto Detailing Packages"
              packages={[
                {
                  name: "Standard Detail Package",
                  duration: "5-6 hours",
                  priceRange: { start: 349, end: 449 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Comprehensive interior and exterior detailing package perfect for regular maintenance. Restores your vehicle to clean, fresh condition.",
                  features: [
                    "Premium hand wash and dry",
                    "Complete interior vacuuming",
                    "Interior surface cleaning",
                    "Dashboard and console cleaning",
                    "Wheel and tire cleaning",
                    "Basic paint enhancement",
                    "Window cleaning (interior & exterior)",
                    "Quick wax application"
                  ],
                  ctaText: "Book This Package"
                },
                {
                  name: "Premium Detail Package",
                  duration: "7-9 hours",
                  priceRange: { start: 549, end: 699 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Deep cleaning package with shampoo extraction and paint enhancement. Ideal for restoring neglected or heavily used vehicles.",
                  features: [
                    "Premium hand wash and dry",
                    "Clay bar decontamination",
                    "Complete interior vacuuming",
                    "Shampoo and extraction (seats & carpets)",
                    "Light paint polishing",
                    "Detailed dashboard and console cleaning",
                    "Air vent and cup holder cleaning",
                    "Fabric headliner cleaning",
                    "Leather cleaning and conditioning",
                    "Wheel and tire deep cleaning",
                    "Premium wax or sealant application",
                    "Complete protection treatment"
                  ],
                  featured: true,
                  ctaText: "Book This Package"
                },
                {
                  name: "Ultimate Detail Package",
                  duration: "10-12 hours",
                  priceRange: { start: 799, end: 1099 },
                  priceNote: "Pricing varies by vehicle size and condition",
                  description: "Comprehensive restoration package combining interior deep cleaning with exterior paint correction. Maximum results for showroom-quality finish.",
                  features: [
                    "Premium hand wash and dry",
                    "Clay bar decontamination",
                    "Complete interior vacuuming (all areas)",
                    "Professional shampoo and extraction",
                    "Multi-stage paint correction",
                    "Complete dashboard and console restoration",
                    "Deep cleaning of all upholstery",
                    "Carpet and floor mat professional treatment",
                    "Complete leather restoration",
                    "Complete wheel and tire detail",
                    "Premium ceramic sealant application",
                    "Complete trim restoration",
                    "Crystal-clear glass treatment",
                    "Odor elimination (if needed)",
                    "Comprehensive protection application"
                  ],
                  ctaText: "Book This Package"
                }
              ]}
            />

            <Testimonials
              title="What Our Customers Say"
              subtitle="Hear from customers who have experienced our complete auto detailing services"
              badgeText="Customer Reviews"
            />

            <HomeProcess />

            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(Services);
