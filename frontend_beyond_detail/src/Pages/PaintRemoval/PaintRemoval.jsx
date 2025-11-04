import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import PaintRemovalHero from '../../components/PaintRemovalHero/PaintRemovalHero';
import ServiceBenefits from '../../components/ServiceBenefits/ServiceBenefits';
import ServiceContactCTA from '../../components/ServiceContactCTA/ServiceContactCTA';
import './PaintRemoval.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function PaintRemoval() {
  // ScrollToTop component handles scrolling to hero section

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Paint Removal Toronto, Scarborough, Markham, Pickering | Overspray & Paint Defect Removal'
          description='Professional paint removal services in Toronto, Scarborough, Markham, and Pickering. Safely remove unwanted paint, overspray, and paint defects. Expert paint removal across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Paint Removal'
          keywords='paint removal Toronto, overspray removal Scarborough, paint defect removal Markham, vehicle paint stripping Pickering, automotive paint removal GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='paint-removal__wrapper'>
            <PaintRemovalHero scrollTarget="#contact" />
            <ServiceBenefits
              title="EXPERT PAINT REMOVAL SERVICES"
              subtitle="Safe & Effective"
              description="Whether from overspray, accidental paint transfer, or other surface contamination, unwanted paint on your vehicle can be safely removed. Our specialized techniques and premium products effectively remove paint defects while protecting your vehicle's original finish underneath."
              benefits={[
                {
                  title: "Safe Removal Process",
                  description: "Our techniques safely remove unwanted paint without damaging the underlying surface, preserving your vehicle's original finish."
                },
                {
                  title: "Overspray Elimination",
                  description: "Remove paint overspray from bodywork, glass, and trim that may have occurred from nearby painting operations or environmental factors."
                },
                {
                  title: "Restore Original Appearance",
                  description: "Eliminate paint defects and contamination to restore your vehicle's surface to its original, pristine condition."
                },
                {
                  title: "Multi-Surface Treatment",
                  description: "Safe removal techniques work on paint, glass, chrome, and trim surfaces, ensuring comprehensive contamination removal."
                },
                {
                  title: "Professional Equipment",
                  description: "We use specialized tools and premium products designed specifically for safe, effective paint removal."
                },
                {
                  title: "Protection During Process",
                  description: "Careful masking and protection techniques ensure only the unwanted paint is removed, leaving surrounding areas untouched."
                }
              ]}
              features={[
                "Comprehensive surface evaluation",
                "Safe masking and protection",
                "Specialized paint removal products",
                "Multi-surface treatment capability",
                "Residue removal and polishing",
                "Original finish preservation",
                "Quality inspection",
                "Aftercare recommendations"
              ]}
            />
            <ServiceContactCTA 
              title="READY TO REMOVE UNWANTED PAINT?"
              description="Contact us today for a personalized quote and safely restore your vehicle's surfaces to pristine condition."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(PaintRemoval);

