import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import OdourRemovalHero from '../../components/OdourRemovalHero/OdourRemovalHero';
import ServiceBenefits from '../../components/ServiceBenefits/ServiceBenefits';
import ServiceContactCTA from '../../components/ServiceContactCTA/ServiceContactCTA';
import './OdourRemoval.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function OdourRemoval() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Odour Removal Toronto, Scarborough, Markham, Pickering | Vehicle Odor Elimination'
          description='Professional odour removal services in Toronto, Scarborough, Markham, and Pickering. Eliminate stubborn odors, smoke smell, and pet odors from your vehicle. Advanced odor removal across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Odour Removal'
          keywords='odour removal Toronto, vehicle odor elimination Scarborough, car smell removal Markham, smoke odor removal Pickering, interior odor treatment GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='odour-removal__wrapper'>
            <OdourRemovalHero scrollTarget="#contact" />
            <ServiceBenefits
              title="PROFESSIONAL ODOUR REMOVAL SERVICES"
              subtitle="Complete Odor Elimination"
              description="Unpleasant odors in your vehicle can be persistent and frustrating. Our advanced odour removal treatments use professional-grade technology and products to neutralize and eliminate odors at their source, rather than simply masking them. We effectively treat everything from smoke and pet odors to mold and biological contaminants."
              benefits={[
                {
                  title: "Complete Odor Neutralization",
                  description: "Our treatments neutralize odors at the molecular level, eliminating them permanently rather than temporarily covering them up."
                },
                {
                  title: "Mold & Mildew Treatment",
                  description: "Advanced treatments effectively eliminate mold, mildew, fungus, and algae odors that can be harmful to health and difficult to remove."
                },
                {
                  title: "Smoke Odor Elimination",
                  description: "Specialized treatments remove embedded smoke odors from cigarettes, fires, or other sources that penetrate deeply into interior materials."
                },
                {
                  title: "Pet & Biological Odor Removal",
                  description: "Effectively eliminate pet odors, urine, vomit, and other biological odors that can persist despite regular cleaning."
                },
                {
                  title: "Food & Garbage Odor Elimination",
                  description: "Remove persistent food odors and garbage smells that have absorbed into vehicle interiors and ventilation systems."
                },
                {
                  title: "Sanitization Benefits",
                  description: "Our treatments not only eliminate odors but also sanitize surfaces, reducing bacteria, germs, and allergens for a healthier interior environment."
                }
              ]}
              features={[
                "Comprehensive odor source identification",
                "Professional-grade odor neutralization treatment",
                "Deep penetration into interior materials",
                "HVAC system treatment and sanitization",
                "Mold and mildew odor elimination",
                "Smoke odor removal",
                "Pet and biological odor treatment",
                "Food and garbage odor elimination",
                "Complete interior sanitization",
                "Follow-up recommendations",
                "Treatment warranty",
                "Quality assurance inspection"
              ]}
            />
            <ServiceContactCTA 
              title="READY TO ELIMINATE ODORS?"
              description="Contact us today for a personalized quote and permanently eliminate unpleasant odors from your vehicle."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(OdourRemoval);

