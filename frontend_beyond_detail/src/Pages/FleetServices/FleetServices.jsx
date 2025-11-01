import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './FleetServices.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function FleetServices() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Fleet Services - Beyond Detail Toronto'
          description='Professional fleet detailing services in Toronto. Keep your commercial vehicle fleet looking professional with our comprehensive fleet maintenance and detailing services.'
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
          <div className='fleet-services__wrapper'>
            <BackgroundPaths 
              title="Fleet Services"
              scrollTarget="#contact"
              description="Professional fleet detailing services in Toronto. Keep your commercial vehicle fleet looking professional with our comprehensive fleet maintenance and detailing services."
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(FleetServices);

