import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './ExteriorDetailing.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function ExteriorDetailing() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Exterior Detailing - Beyond Detail Toronto'
          description="Professional exterior detailing services in Toronto. Restore and protect your vehicle's exterior with our premium exterior detailing and paint protection services."
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
          <div className='exterior-detailing__wrapper'>
            <BackgroundPaths 
              title="Exterior Detailing"
              scrollTarget="#contact"
              description="Professional exterior detailing services in Toronto. Restore and protect your vehicle's exterior with our premium exterior detailing and paint protection services."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(ExteriorDetailing);

