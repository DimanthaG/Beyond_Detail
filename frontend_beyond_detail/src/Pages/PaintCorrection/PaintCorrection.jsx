import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import PaintProtectionInfo from '../../components/PaintProtectionInfo/PaintProtectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './PaintCorrection.scss';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const PaintCorrectionHero = lazy(() => import('../../components/PaintCorrectionHero/PaintCorrectionHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function PaintCorrection() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Paint Correction Toronto, Scarborough, Markham, Pickering | Swirl Mark Removal'
          description='Professional paint correction services in Toronto, Scarborough, Markham, and Pickering. Expert swirl mark removal, scratch repair, and paint restoration. Single, two, and three-stage correction available across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Paint Correction'
          keywords='paint correction Toronto, swirl mark removal Scarborough, paint restoration Markham, scratch repair Pickering, paint polishing GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='paint-correction__wrapper'>
            <PaintCorrectionHero scrollTarget="#pricing" />
            <Suspense fallback={null}>
              <ServiceGallery serviceType="paint-correction" title="Paint Correction Gallery" />
            </Suspense>
            <PaintProtectionInfo />
            <PaintCorrectionInfo
              title="Professional Paint Correction Services"
              subtitle="Advanced Restoration"
              description="Paint correction is an intensive process designed to eliminate imperfections such as swirl marks, scratches, oxidation, and other surface defects. Our expert technicians use advanced techniques and premium products to restore your vehicle's paint to its original flawless condition."
              benefits={[
                {
                  title: "Eliminates Surface Imperfections",
                  description: "Remove swirl marks, light scratches, and oxidation that dull your vehicle's appearance and reduce its value."
                },
                {
                  title: "Restores Showroom Shine",
                  description: "Bring back the deep, glossy finish that your vehicle had when it first left the factory floor."
                },
                {
                  title: "Enhances Paint Depth & Clarity",
                  description: "Reveal the true color and depth of your paint by removing years of accumulated defects and contaminants."
                },
                {
                  title: "Increases Vehicle Value",
                  description: "A properly corrected paint finish significantly enhances your vehicle's resale value and aesthetic appeal."
                },
                {
                  title: "Prepares for Protection",
                  description: "Perfect foundation for ceramic coatings or other protective treatments, ensuring optimal adhesion and longevity."
                },
                {
                  title: "Professional Expertise",
                  description: "Trained technicians with extensive experience in automotive paint systems and correction techniques."
                }
              ]}
              process={[
                {
                  title: "Comprehensive Assessment",
                  description: "We begin with a thorough inspection using specialized lighting to identify all surface imperfections, including swirl marks, scratches, oxidation, and other defects."
                },
                {
                  title: "Decontamination & Preparation",
                  description: "The paint surface is thoroughly cleaned and decontaminated using clay bar treatments and iron fallout removers to eliminate embedded contaminants that could interfere with the correction process."
                },
                {
                  title: "Multi-Stage Polishing",
                  description: "Depending on the severity of imperfections, we perform one or more polishing stages using professional-grade compounds and pads to gradually refine the paint surface."
                },
                {
                  title: "Final Refinement",
                  description: "A finishing polish removes any hazing or micro-scratches, leaving behind a flawless, mirror-like finish that enhances gloss and clarity."
                },
                {
                  title: "Protection Application",
                  description: "To preserve the corrected paint, we apply a high-quality sealant or wax, providing a protective barrier against future damage and environmental contaminants."
                }
              ]}
              features={[
                "Complete paint surface inspection and assessment",
                "Thorough decontamination (clay bar treatment)",
                "Multi-stage compound polishing",
                "Advanced finishing polish",
                "High-quality sealant or wax application",
                "All panels corrected and refined",
                "Interior protection during service",
                "Final quality inspection"
              ]}
            />
            <ServicePricing
              title="Paint Correction Packages"
              packages={[
                {
                  name: "Single Stage Correction",
                  priceRange: { start: 250, end: 350 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Perfect for vehicles with light swirl marks and minor defects. Includes one-stage polishing to restore paint clarity and gloss.",
                  features: [
                    "Complete paint surface inspection",
                    "Thorough decontamination (clay bar)",
                    "Single-stage compound polishing",
                    "Finishing polish application",
                    "High-quality sealant protection",
                    "All exterior panels treated"
                  ],
                  ctaText: "Book This Package"
                },
                {
                  name: "Two Stage Correction",
                  priceRange: { start: 500, end: 700 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Ideal for moderate swirl marks, light scratches, and oxidation. Two-stage polishing ensures deeper defect removal.",
                  features: [
                    "Complete paint surface inspection",
                    "Thorough decontamination (clay bar)",
                    "Two-stage compound polishing",
                    "Advanced finishing polish",
                    "Premium sealant protection",
                    "All exterior panels treated",
                    "Enhanced gloss and depth"
                  ],
                  featured: true,
                  ctaText: "Book This Package"
                },
                {
                  name: "Three Stage Correction",
                  priceRange: { start: 800, end: 1200 },
                  priceNote: "Pricing varies by vehicle size and condition",
                  description: "Comprehensive correction for severe defects, deep scratches, and heavy oxidation. Three or more polishing stages achieve showroom-perfect results.",
                  features: [
                    "Complete paint surface inspection",
                    "Thorough decontamination (clay bar)",
                    "Multi-stage compound polishing (3+ stages)",
                    "Advanced finishing polish",
                    "Premium sealant or wax protection",
                    "All exterior panels treated",
                    "Maximum gloss and depth restoration",
                    "Minor scratch repair (when applicable)"
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

export default React.memo(PaintCorrection);

