import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './CeramicCoating.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function CeramicCoating() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Ceramic Coating - Beyond Detail Toronto'
          description='Premium ceramic coating services in Toronto. Protect your vehicle with professional-grade ceramic coatings that provide long-lasting protection and shine.'
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
          <div className='ceramic-coating__wrapper'>
            <BackgroundPaths 
              title="Ceramic Coating"
              scrollTarget="#contact"
              description="Premium ceramic coating services in Toronto. Protect your vehicle with professional-grade ceramic coatings that provide long-lasting protection and shine."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(CeramicCoating);

