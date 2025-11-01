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
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
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
            <BackgroundPaths 
              title="Exterior Detailing"
              scrollTarget="#pricing"
              description="Restore and protect your vehicle's exterior to stunning condition. From paint enhancement to comprehensive protection, we transform your vehicle's appearance while defending it against weather, UV damage, and environmental hazards. Showroom quality, guaranteed."
            />
            <Suspense fallback={null}>
              <ServiceGallery serviceType="exterior-detailing" title="Exterior Detailing Gallery" />
            </Suspense>
            <ServiceInfoSection
              title="Complete Exterior Detailing Services"
              subtitle="Premium Exterior Care"
              description="Our exterior detailing services go far beyond a simple car wash. We provide comprehensive cleaning, polishing, and protection that restores your vehicle's exterior to pristine condition while defending against future damage from weather, road debris, and environmental contaminants."
              benefits={[
                {
                  title: "Restored Paint Finish",
                  description: "Remove oxidation, light scratches, and surface imperfections to reveal your vehicle's true color and shine."
                },
                {
                  title: "Environmental Protection",
                  description: "Shield your paint from UV rays, acid rain, bird droppings, tree sap, and other contaminants that cause damage over time."
                },
                {
                  title: "Enhanced Appearance",
                  description: "Transform your vehicle's exterior with a deep, glossy finish that makes it look brand new."
                },
                {
                  title: "Extended Paint Life",
                  description: "Regular professional detailing extends the life of your paint, helping maintain your vehicle's value."
                },
                {
                  title: "Protection Against Elements",
                  description: "Advanced sealants and coatings protect against harsh weather conditions, road salt, and environmental hazards."
                },
                {
                  title: "Comprehensive Care",
                  description: "From paint to trim, wheels to glass, every exterior surface receives meticulous attention and care."
                }
              ]}
              process={[
                {
                  title: "Thorough Wash & Decontamination",
                  description: "We begin with a comprehensive wash using premium products, followed by clay bar treatment to remove embedded contaminants and road film that normal washing cannot eliminate."
                },
                {
                  title: "Paint Enhancement",
                  description: "Light polishing removes minor imperfections, swirl marks, and oxidation to restore clarity and depth to your paint finish."
                },
                {
                  title: "Trim & Wheel Care",
                  description: "All exterior trim, wheels, and tires are meticulously cleaned, conditioned, and protected to maintain their appearance and prevent deterioration."
                },
                {
                  title: "Glass & Mirror Cleaning",
                  description: "Crystal-clear glass cleaning ensures optimal visibility while removing water spots, streaks, and contaminants from all exterior glass surfaces."
                },
                {
                  title: "Protection Application",
                  description: "High-quality wax or sealant is applied to protect your newly restored finish and provide long-lasting shine and protection."
                }
              ]}
              features={[
                "Premium two-bucket wash method",
                "Clay bar decontamination treatment",
                "Light paint polishing and enhancement",
                "Wheel and tire deep cleaning",
                "Trim restoration and protection",
                "Glass cleaning and treatment",
                "High-quality wax or sealant application",
                "Final inspection and quality check"
              ]}
            />
            <ServicePricing
              title="Exterior Detailing Packages"
              packages={[
                {
                  name: "Basic Exterior Detail",
                  duration: "2-3 hours",
                  priceRange: { start: 149, end: 199 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Essential exterior cleaning and protection for regular maintenance. Perfect for keeping your vehicle looking fresh.",
                  features: [
                    "Hand wash and chamois dry",
                    "Wheel and tire cleaning",
                    "Tire dressing application",
                    "Basic paint enhancement",
                    "Exterior trim dressing",
                    "Quick wax application"
                  ],
                  ctaText: "Book This Package"
                },
                {
                  name: "Premium Exterior Detail",
                  duration: "4-6 hours",
                  priceRange: { start: 299, end: 399 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Comprehensive exterior detailing with paint enhancement and protection. Restores shine and protects your investment.",
                  features: [
                    "Premium hand wash and dry",
                    "Wheel, tire, and wheel well cleaning",
                    "Clay bar decontamination",
                    "Light paint polishing",
                    "Premium wax or sealant application",
                    "Exterior trim restoration",
                    "Glass cleaning and treatment",
                    "Complete exterior protection"
                  ],
                  featured: true,
                  ctaText: "Book This Package"
                },
                {
                  name: "Ultimate Exterior Detail",
                  duration: "6-8 hours",
                  priceRange: { start: 499, end: 699 },
                  priceNote: "Pricing varies by vehicle size and condition",
                  description: "Premium exterior restoration with paint correction. Maximum results for achieving showroom-quality appearance.",
                  features: [
                    "Premium hand wash and dry",
                    "Complete wheel and tire detail",
                    "Clay bar decontamination",
                    "Multi-stage paint correction",
                    "Premium ceramic sealant application",
                    "Complete trim restoration",
                    "Crystal-clear glass treatment",
                    "Long-lasting protection"
                  ],
                  ctaText: "Book This Package"
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

