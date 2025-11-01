import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import './LeatherCleaning.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function LeatherCleaning() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Leather Cleaning - Beyond Detail Toronto'
          description="Professional leather cleaning and conditioning services in Toronto. Restore and protect your vehicle's leather upholstery with our expert leather care services."
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
          <div className='leather-cleaning__wrapper'>
            <BackgroundPaths 
              title="Leather Cleaning"
              scrollTarget="#pricing"
              description="Restore your leather to luxurious condition and protect it for years to come. Our professional cleaning removes embedded dirt and stains, while premium conditioning treatments restore suppleness and create a protective barrier against UV damage, cracking, and wear."
            />
            <Suspense fallback={null}>
              <ServiceGallery serviceType="leather-cleaning" title="Leather Cleaning Gallery" />
            </Suspense>
            <ServiceInfoSection
              title="Expert Leather Care Services"
              subtitle="Restoration & Protection"
              description="Leather upholstery requires specialized care to maintain its luxury appearance and longevity. Our professional leather cleaning and conditioning services use premium products and techniques to clean, restore, and protect your vehicle's leather surfaces. We also offer advanced protective coatings that create a durable barrier against stains, spills, and wear."
              benefits={[
                {
                  title: "Restored Suppleness",
                  description: "Professional conditioning restores lost moisture and oils, bringing back the soft, supple feel of your leather that makes it comfortable and luxurious."
                },
                {
                  title: "Stain & Spill Protection",
                  description: "Advanced protective coatings create a barrier that prevents liquids and stains from penetrating leather, making spills easy to clean and preventing permanent damage."
                },
                {
                  title: "Prevents Cracking & Fading",
                  description: "Proper conditioning prevents leather from drying out and cracking, while UV protection prevents fading from sun exposure, extending the life of your leather."
                },
                {
                  title: "Enhanced Appearance",
                  description: "Thorough cleaning removes dirt, oils, and discoloration, revealing the true color and grain of your leather and restoring its original beauty."
                },
                {
                  title: "Abrasion Resistance",
                  description: "Protective coatings reduce wear on high-contact areas like side bolsters and armrests, maintaining the leather's appearance over time."
                },
                {
                  title: "Long-Term Value",
                  description: "Well-maintained leather significantly increases your vehicle's resale value and ensures your investment in luxury upholstery is protected."
                }
              ]}
              process={[
                {
                  title: "Leather Inspection",
                  description: "We assess the condition of your leather, identifying specific issues like stains, cracks, discoloration, or areas of heavy wear that need attention."
                },
                {
                  title: "Deep Cleaning",
                  description: "Premium leather cleaners are applied using specialized techniques to remove dirt, oils, stains, and contaminants without damaging the leather's surface or color."
                },
                {
                  title: "Stain Treatment",
                  description: "Specific treatments are applied to remove or lighten stubborn stains, using appropriate methods for different types of leather and stain sources."
                },
                {
                  title: "Conditioning Treatment",
                  description: "High-quality leather conditioners penetrate deep into the leather, restoring lost moisture and natural oils that keep leather supple and prevent cracking."
                },
                {
                  title: "Protective Coating Application",
                  description: "For enhanced protection, premium protective coatings can be applied that create a durable, invisible barrier against stains, spills, and UV damage."
                },
                {
                  title: "Final Finishing",
                  description: "Leather is buffed and finished to achieve a smooth, clean surface with proper protection in place for long-lasting results."
                }
              ]}
              features={[
                "Complete leather surface inspection",
                "Professional deep cleaning treatment",
                "Stain removal and treatment",
                "Premium leather conditioning",
                "UV protection application",
                "Protective coating option available",
                "Abrasion-resistant treatment for high-wear areas",
                "All leather surfaces treated (seats, door panels, console)",
                "Color restoration and enhancement",
                "Crack prevention and repair",
                "Quality inspection",
                "Maintenance recommendations"
              ]}
            />
            <ServicePricing
              title="Leather Care Packages"
              packages={[
                {
                  name: "Leather Cleaning & Conditioning",
                  duration: "2-3 hours",
                  priceRange: { start: 199, end: 299 },
                  priceNote: "Pricing varies by vehicle size and leather surface area",
                  description: "Professional cleaning and conditioning to restore leather suppleness and protect against cracking and fading.",
                  features: [
                    "Complete leather surface inspection",
                    "Professional deep cleaning treatment",
                    "Stain removal and treatment",
                    "Premium leather conditioning",
                    "UV protection application",
                    "All leather surfaces treated"
                  ],
                  ctaText: "Book This Service"
                },
                {
                  name: "Leather Restoration & Protection",
                  duration: "4-5 hours",
                  priceRange: { start: 399, end: 599 },
                  priceNote: "Pricing varies by vehicle size and condition",
                  description: "Comprehensive restoration with protective coating. Perfect for high-end vehicles requiring maximum protection and longevity.",
                  features: [
                    "Complete leather surface inspection",
                    "Professional deep cleaning treatment",
                    "Advanced stain removal",
                    "Premium leather conditioning",
                    "UV protection application",
                    "Protective coating application",
                    "Abrasion-resistant treatment",
                    "Extended warranty on coating"
                  ],
                  featured: true,
                  ctaText: "Book This Service"
                },
                {
                  name: "Premium Leather Coating System",
                  duration: "6-8 hours",
                  price: 599,
                  priceNote: "Starting price, varies by vehicle size",
                  description: "Ultimate leather protection with premium coating system. Maximum durability, stain resistance, and UV protection for luxury vehicles.",
                  features: [
                    "Complete leather surface inspection",
                    "Professional deep cleaning treatment",
                    "Advanced stain removal and restoration",
                    "Premium multi-layer conditioning",
                    "UV protection application",
                    "Premium protective coating system",
                    "Abrasion-resistant treatment",
                    "All leather surfaces (seats, panels, console)",
                    "Premium warranty coverage",
                    "Long-term protection guarantee"
                  ],
                  ctaText: "Book This Service"
                }
              ]}
            />
            <Testimonials
              title="What Our Customers Say"
              subtitle="Hear from customers who have experienced our leather cleaning services"
              badgeText="Customer Reviews"
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(LeatherCleaning);

