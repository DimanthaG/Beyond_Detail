import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './InteriorDetailing.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function InteriorDetailing() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Interior Detailing - Beyond Detail Toronto'
          description="Professional interior detailing services in Toronto. Deep clean and protect your vehicle's interior with our comprehensive interior detailing services."
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
          <div className='interior-detailing__wrapper'>
            <BackgroundPaths 
              title="Interior Detailing"
              scrollTarget="#contact"
              description="Professional interior detailing services in Toronto. Deep clean and protect your vehicle's interior with our comprehensive interior detailing services."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(InteriorDetailing);

