import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import HeadlightRestorationHero from '../../components/HeadlightRestorationHero/HeadlightRestorationHero';
import ServiceBenefits from '../../components/ServiceBenefits/ServiceBenefits';
import ServiceContactCTA from '../../components/ServiceContactCTA/ServiceContactCTA';
import './HeadlightRestoration.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function HeadlightRestoration() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Headlight Restoration Toronto, Scarborough, Markham, Pickering | Cloudy Headlight Repair'
          description='Professional headlight restoration services in Toronto, Scarborough, Markham, and Pickering. Restore cloudy and yellowed headlights to crystal clear condition. Expert restoration across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Headlight Restoration'
          keywords='headlight restoration Toronto, cloudy headlight repair Scarborough, yellowed headlights Markham, headlight polishing Pickering, headlight restoration GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='headlight-restoration__wrapper'>
            <HeadlightRestorationHero scrollTarget="#contact" />
            <ServiceBenefits
              title="EXPERT HEADLIGHT RESTORATION"
              subtitle="Crystal Clear Results"
              description="Over time, headlights become cloudy, yellowed, and hazy due to UV exposure and oxidation. Our professional restoration process removes years of damage, restoring clarity and improving both the appearance of your vehicle and your nighttime driving safety."
              benefits={[
                {
                  title: "Improved Nighttime Visibility",
                  description: "Restore maximum light output for safer nighttime driving by eliminating the cloudy barrier that reduces headlight effectiveness."
                },
                {
                  title: "Enhanced Vehicle Appearance",
                  description: "Crystal-clear headlights dramatically improve your vehicle's overall appearance, making it look newer and well-maintained."
                },
                {
                  title: "Cost-Effective Solution",
                  description: "Avoid expensive headlight replacement costs. Professional restoration can restore clarity for a fraction of the cost of new headlights."
                },
                {
                  title: "UV Protection Applied",
                  description: "Following restoration, we apply specialized UV-resistant coating to prevent future yellowing and oxidation."
                },
                {
                  title: "Long-Lasting Results",
                  description: "With proper care and the applied protection, restored headlights maintain their clarity for years to come."
                },
                {
                  title: "Professional Technique",
                  description: "Our multi-stage process uses professional-grade compounds and equipment to achieve factory-like clarity and finish."
                }
              ]}
              features={[
                "Complete headlight inspection",
                "Multi-stage sanding process",
                "Professional compound polishing",
                "Optical clarity restoration",
                "UV-resistant protection coating",
                "Both headlights restored",
                "Quality inspection",
                "Maintenance recommendations"
              ]}
            />
            <ServiceContactCTA 
              title="READY TO RESTORE YOUR HEADLIGHTS?"
              description="Contact us today for a personalized quote and restore your headlights to crystal-clear perfection."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(HeadlightRestoration);

