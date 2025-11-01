import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './OdourRemoval.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
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
          title='Odour Removal - Beyond Detail Toronto'
          description='Professional odour removal services in Toronto. Eliminate stubborn odors from your vehicle with our advanced odour removal and interior sanitization services.'
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
          <div className='odour-removal__wrapper'>
            <BackgroundPaths 
              title="Odour Removal"
              scrollTarget="#contact"
              description="Professional odour removal services in Toronto. Eliminate stubborn odors from your vehicle with our advanced odour removal and interior sanitization services."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(OdourRemoval);

