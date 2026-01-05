import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import PaintProtectionInfo from '../../components/PaintProtectionInfo/PaintProtectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { PAINT_CORRECTION_PACKAGES } from '../../constants/servicePackages';
import '../PaintCorrection/PaintCorrection.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const PaintCorrectionHero = lazy(() => import('../../components/PaintCorrectionHero/PaintCorrectionHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function PaintCorrectionGuildwood() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Paint Correction Guildwood | Swirl Mark Removal Scarborough'
          description='Expert paint correction in Guildwood. Remove swirl marks & scratches. ⭐ 5-Star Rated | Multi-Stage Polishing | Call (647) 689-6109'
          name='Beyond Detail Guildwood'
          type='website'
          serviceType='Paint Correction'
          keywords='paint correction guildwood, scratch removal guildwood, car polishing guildwood, paint restoration guildwood'
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
              titleLine2="GUILDWOOD &"
              titleLine3="SCARBOROUGH"
              subtitle="Restore your car's paint to perfection with <strong>paint correction in Guildwood</strong>. We eliminate swirl marks and scratches to bring back that showroom shine."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="paint-correction"
                title="Guildwood Paint Correction Projects"
                forceLandscape
              />
            </Suspense>
            
            <PaintProtectionInfo />
            
            <PaintCorrectionInfo
              title="Professional Paint Restoration in Guildwood"
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
              title="Guildwood Paint Correction Packages"
              packages={PAINT_CORRECTION_PACKAGES}
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

export default React.memo(PaintCorrectionGuildwood);

