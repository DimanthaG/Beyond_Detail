import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './PaintCorrection.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
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
          title='Paint Correction - Beyond Detail Toronto'
          description="Professional paint correction services in Toronto. Restore your vehicle's paint to showroom condition with our expert paint correction and detailing services."
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
          <div className='paint-correction__wrapper'>
            <BackgroundPaths 
              title="Paint Correction"
              scrollTarget="#contact"
              description="Professional paint correction services in Toronto. Restore your vehicle's paint to showroom condition with our expert paint correction and detailing services."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(PaintCorrection);

