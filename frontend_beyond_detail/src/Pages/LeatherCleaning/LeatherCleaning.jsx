import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './LeatherCleaning.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function LeatherCleaning() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Leather Cleaning - Beyond Detail Toronto'
          description="Professional leather cleaning and conditioning services in Toronto. Restore and protect your vehicle's leather upholstery with our expert leather care services."
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
          <div className='leather-cleaning__wrapper'>
            <BackgroundPaths 
              title="Leather Cleaning"
              scrollTarget="#contact"
              description="Professional leather cleaning and conditioning services in Toronto. Restore and protect your vehicle's leather upholstery with our expert leather care services."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(LeatherCleaning);

