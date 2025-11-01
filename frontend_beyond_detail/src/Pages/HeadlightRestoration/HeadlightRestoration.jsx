import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './HeadlightRestoration.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
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
          title='Headlight Restoration - Beyond Detail Toronto'
          description='Professional headlight restoration services in Toronto. Restore cloudy and yellowed headlights to crystal clear condition with our expert headlight restoration services.'
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
          <div className='headlight-restoration__wrapper'>
            <BackgroundPaths 
              title="Headlight Restoration"
              scrollTarget="#contact"
              description="Professional headlight restoration services in Toronto. Restore cloudy and yellowed headlights to crystal clear condition with our expert headlight restoration services."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(HeadlightRestoration);

