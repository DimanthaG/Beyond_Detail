import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './PaintRemoval.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function PaintRemoval() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Paint Removal - Beyond Detail Toronto'
          description='Professional paint removal services in Toronto. Safely remove unwanted paint, overspray, and paint defects from your vehicle with our expert paint removal services.'
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
          <div className='paint-removal__wrapper'>
            <BackgroundPaths 
              title="Paint Removal"
              scrollTarget="#contact"
              description="Professional paint removal services in Toronto. Safely remove unwanted paint, overspray, and paint defects from your vehicle with our expert paint removal services."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(PaintRemoval);

