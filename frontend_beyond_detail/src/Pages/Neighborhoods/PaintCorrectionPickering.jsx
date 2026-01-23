import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import PaintProtectionInfo from '../../components/PaintProtectionInfo/PaintProtectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { PAINT_CORRECTION_PACKAGES } from '../../constants/servicePackages';
import '../PaintCorrection/PaintCorrection.scss';

// Lazy load heavy components
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const PaintCorrectionHero = lazy(() => import('../../components/PaintCorrectionHero/PaintCorrectionHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));
const SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));

function PaintCorrectionPickering() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Paint Correction Pickering | Swirl Mark & Scratch Removal'
          description='Expert paint correction in Pickering. Remove swirl marks, scratches & oxidation. ⭐ 5-Star Rated | Multi-Stage Polishing | Lifetime Warranty | Call (647) 689-6109'
          name='Beyond Detail Pickering'
          type='website'
          serviceType='Paint Correction'
          keywords='paint correction pickering, scratch removal pickering, car polishing pickering, paint restoration pickering, swirl mark removal pickering'
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
              titleLine2="PICKERING &"
              titleLine3="DURHAM"
              subtitle="Restore your car's paint to perfection with <strong>paint correction in Pickering</strong>. We eliminate swirl marks, scratches, and dullness to bring back that showroom shine."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="paint-correction"
                title="Pickering Paint Correction Projects"
                forceLandscape
              />
            </Suspense>
            
            <PaintProtectionInfo />
            
            <PaintCorrectionInfo
              title="Professional Paint Restoration in Pickering"
              subtitle="Flawless Finish"
              description="Our paint correction process is designed to remove imperfections like swirl marks, scratches, and oxidation. Using advanced polishing techniques, we restore the clarity, depth, and gloss of your vehicle's paint, significantly increasing its aesthetic appeal and value."
              benefits={[
                {
                  title: "Defect Removal",
                  description: "Eliminates unsightly swirl marks, scratches, and oxidation."
                },
                {
                  title: "Gloss Enhancement",
                  description: "Restores deep, mirror-like reflections to your paint."
                },
                {
                  title: "Paint Clarity",
                  description: "Removes hazing to reveal the true color of your vehicle."
                },
                {
                  title: "Value Retention",
                  description: "Maintains and increases the resale value of your car."
                },
                {
                  title: "Protection Prep",
                  description: "The essential first step before applying ceramic coating or PPF."
                },
                {
                  title: "Expert Service",
                  description: "Performed by trained technicians with attention to detail."
                }
              ]}
              process={[
                {
                  title: "Inspection",
                  description: "Detailed assessment of paint condition under specialized lights."
                },
                {
                  title: "Decontamination",
                  description: "Clay bar and iron removal to cleanse the paint pores."
                },
                {
                  title: "Polishing",
                  description: "Machine polishing to level the clear coat and remove defects."
                },
                {
                  title: "Finishing",
                  description: "Refining the surface to a high-gloss, swirl-free finish."
                },
                {
                  title: "Sealing",
                  description: "Application of a durable sealant or coating for protection."
                }
              ]}
              features={[
                "Comprehensive paint inspection",
                "Full decontamination process",
                "Multi-stage polishing options",
                "High-gloss finish",
                "Paint sealant included",
                "All exterior surfaces treated",
                "Quality guarantee",
                "Mobile service available"
              ]}
            />
            
            <ServicePricing
              title="Pickering Paint Correction Packages"
              packages={PAINT_CORRECTION_PACKAGES}
            />
            
            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <Suspense fallback={null}>
              <TrustBadges />
            </Suspense>

            <Suspense fallback={null}>
              <SkillShowcase />
            </Suspense>


            
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(PaintCorrectionPickering);

