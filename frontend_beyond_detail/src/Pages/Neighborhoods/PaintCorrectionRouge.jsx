import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import PaintProtectionInfo from '../../components/PaintProtectionInfo/PaintProtectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import '../PaintCorrection/PaintCorrection.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const PaintCorrectionHero = lazy(() => import('../../components/PaintCorrectionHero/PaintCorrectionHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function PaintCorrectionRouge() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Paint Correction Rouge | Swirl Mark Removal Scarborough'
          description='Expert paint correction in Rouge. Remove swirl marks & scratches. ⭐ 5-Star Rated | Multi-Stage Polishing | Call (647) 689-6109'
          name='Beyond Detail Rouge'
          type='website'
          serviceType='Paint Correction'
          keywords='paint correction rouge, scratch removal rouge, car polishing rouge, paint restoration rouge'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='paint-correction__wrapper'>
            <PaintCorrectionHero 
              scrollTarget="#pricing"
              titleLine1="Paint Correction Services in"
              titleLine2="ROUGE &"
              titleLine3="SCARBOROUGH"
              subtitle="Restore your car's paint to perfection with <strong>paint correction in Rouge</strong>. We eliminate swirl marks and scratches to bring back that showroom shine."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="paint-correction"
                title="Rouge Paint Correction Projects"
                forceLandscape
              />
            </Suspense>
            
            <PaintProtectionInfo />
            
            <PaintCorrectionInfo
              title="Professional Paint Restoration in Rouge"
              subtitle="Flawless Finish"
              description="Our paint correction process removes imperfections like swirl marks and scratches, restoring your vehicle's paint clarity and gloss."
              benefits={[
                { title: "Defect Removal", description: "Eliminates swirl marks and scratches." },
                { title: "Gloss Enhancement", description: "Restores deep reflections." },
                { title: "Paint Clarity", description: "Removes hazing." },
                { title: "Value Retention", description: "Increases resale value." },
                { title: "Protection Prep", description: "Essential before coating." },
                { title: "Expert Service", description: "Trained technicians." }
              ]}
              process={[
                { title: "Inspection", description: "Detailed assessment." },
                { title: "Decontamination", description: "Clay bar and iron removal." },
                { title: "Polishing", description: "Machine polishing." },
                { title: "Finishing", description: "Refining the surface." },
                { title: "Sealing", description: "Application of protection." }
              ]}
              features={[
                "Paint inspection", "Decontamination", "Multi-stage polishing", "High-gloss finish", "Sealant included", "Quality guarantee", "Mobile service available"
              ]}
            />
            
            <ServicePricing
              title="Rouge Paint Correction Packages"
              packages={[
                {
                  name: "Single Stage Correction",
                  priceRange: { start: 250, end: 350 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Includes one-stage polishing to restore clarity.",
                  features: ["Paint inspection", "Decontamination", "Single-stage polishing", "Finishing polish", "Sealant protection", "All exterior panels"],
                  ctaText: "Book This Package"
                },
                {
                  name: "Two Stage Correction",
                  priceRange: { start: 500, end: 700 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Two-stage polishing ensures deeper defect removal.",
                  features: ["Paint inspection", "Decontamination", "Two-stage polishing", "Advanced finishing", "Premium sealant", "All exterior panels", "Enhanced depth"],
                  featured: true,
                  ctaText: "Book This Package"
                },
                {
                  name: "Three Stage Correction",
                  priceRange: { start: 800, end: 1200 },
                  priceNote: "Pricing varies by vehicle size",
                  description: "Comprehensive correction for severe defects.",
                  features: ["Paint inspection", "Decontamination", "Multi-stage polishing", "Advanced finishing", "Premium protection", "All exterior panels", "Maximum gloss"],
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

export default React.memo(PaintCorrectionRouge);

