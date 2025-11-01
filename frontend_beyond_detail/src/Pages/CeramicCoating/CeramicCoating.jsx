import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import './CeramicCoating.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Partners = lazy(() => import('../../components/Partners/Partners'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function CeramicCoating() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Ceramic Coating - Beyond Detail Toronto'
          description='Premium ceramic coating services in Toronto. Protect your vehicle with professional-grade ceramic coatings that provide long-lasting protection and shine.'
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
          <div className='ceramic-coating__wrapper'>
            <BackgroundPaths 
              title="Ceramic Coating"
              scrollTarget="#pricing"
              description="Ultimate protection that lasts for years, not months. Our premium ceramic coatings create a permanent shield against UV rays, environmental damage, and daily wear. Experience the brilliance of a mirror-like finish with maintenance made simple."
            />
            <Suspense fallback={null}>
              <ServiceGallery serviceType="ceramic-coating" title="Ceramic Coating Gallery" />
            </Suspense>
            <ServiceInfoSection
              title="Advanced Ceramic Coating Protection"
              subtitle="Long-Lasting Shield"
              description="Ceramic coating is a revolutionary liquid polymer that chemically bonds with your vehicle's paint, creating a permanent protective layer. Unlike traditional waxes or sealants, ceramic coatings provide superior durability, lasting for years while maintaining exceptional gloss and protection against environmental hazards."
              benefits={[
                {
                  title: "Enhanced Gloss & Depth",
                  description: "Achieve a deep, mirror-like finish that accentuates your vehicle's color and design, creating a showroom-quality appearance."
                },
                {
                  title: "UV Protection",
                  description: "Shield your paint from harmful UV rays that cause fading, oxidation, and premature aging, preserving your vehicle's finish for years."
                },
                {
                  title: "Hydrophobic Properties",
                  description: "Water and contaminants bead up and roll off the surface, making cleaning easier and reducing the risk of water spots and stains."
                },
                {
                  title: "Chemical Resistance",
                  description: "Protect against harsh chemicals, bird droppings, tree sap, bug splatter, and other environmental hazards that can damage your paint."
                },
                {
                  title: "Long-Term Durability",
                  description: "Our coatings are tested and proven to meet or exceed their warranty periods, providing protection for years, not months."
                },
                {
                  title: "Maintenance Made Easy",
                  description: "Reduced need for frequent waxing and detailing, saving you time and money while maintaining superior protection."
                }
              ]}
              process={[
                {
                  title: "Surface Preparation",
                  description: "Before application, your vehicle's paint must be perfectly clean and corrected. We perform comprehensive paint correction to remove all defects, ensuring optimal coating adhesion and results."
                },
                {
                  title: "Decontamination",
                  description: "Thorough cleaning using clay bar treatment and iron fallout removers eliminates embedded contaminants that could compromise the coating's performance."
                },
                {
                  title: "Paint Correction",
                  description: "All surface imperfections are removed through multi-stage polishing, creating a flawless foundation for the ceramic coating application."
                },
                {
                  title: "Coating Application",
                  description: "Our certified technicians apply the ceramic coating using precise techniques, ensuring even coverage and optimal bonding with the paint surface."
                },
                {
                  title: "Curing Period",
                  description: "The coating requires proper curing time to fully bond with the paint. We provide detailed instructions for optimal results during this critical period."
                },
                {
                  title: "Quality Inspection",
                  description: "A comprehensive final inspection ensures the coating has been applied correctly and meets our rigorous quality standards."
                }
              ]}
              features={[
                "Complete paint correction included",
                "Thorough decontamination process",
                "Professional ceramic coating application",
                "Multi-layer coating option available",
                "Warranty-backed protection",
                "Detailed aftercare instructions",
                "Follow-up support and maintenance guidance",
                "Premium coating products used"
              ]}
            />
            <ServicePricing
              title="Ceramic Coating Packages"
              packages={[
                {
                  name: "Single Layer Coating",
                  duration: "10-12 hours",
                  priceRange: { start: 1299, end: 1799 },
                  priceNote: "Includes paint correction. Pricing varies by vehicle size",
                  description: "Entry-level ceramic coating with excellent protection. Perfect for daily drivers seeking long-term paint protection.",
                  features: [
                    "Complete paint correction included",
                    "Thorough decontamination",
                    "Single-layer ceramic coating",
                    "Up to 2 years protection",
                    "Hydrophobic properties",
                    "UV and chemical resistance",
                    "Basic warranty included"
                  ],
                  ctaText: "Book This Package"
                },
                {
                  name: "Multi-Layer Coating",
                  duration: "12-14 hours",
                  priceRange: { start: 1799, end: 2499 },
                  priceNote: "Includes paint correction. Pricing varies by vehicle size",
                  description: "Enhanced protection with multiple coating layers. Ideal for high-end vehicles requiring superior durability and gloss.",
                  features: [
                    "Complete paint correction included",
                    "Thorough decontamination",
                    "Multi-layer ceramic coating (2-3 layers)",
                    "Up to 5 years protection",
                    "Superior hydrophobic properties",
                    "Enhanced UV and chemical resistance",
                    "Extended warranty included"
                  ],
                  featured: true,
                  ctaText: "Book This Package"
                },
                {
                  name: "Premium Coating System",
                  duration: "14-18 hours",
                  priceRange: { start: 2499, end: 3499 },
                  priceNote: "Includes comprehensive paint correction. Pricing varies by vehicle size",
                  description: "Ultimate protection package with premium coating system. Maximum durability, gloss, and warranty coverage.",
                  features: [
                    "Comprehensive paint correction included",
                    "Thorough decontamination",
                    "Premium multi-layer coating system",
                    "Up to 10 years protection",
                    "Maximum hydrophobic properties",
                    "Ultimate UV and chemical resistance",
                    "Premium warranty coverage",
                    "Follow-up maintenance included"
                  ],
                  ctaText: "Book This Package"
                }
              ]}
            />
            <Testimonials
              title="What Our Customers Say"
              subtitle="Hear from customers who have experienced our ceramic coating services"
              badgeText="Customer Reviews"
            />
            <Partners />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(CeramicCoating);

