import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './Tints.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const TintsInfoSection = lazy(() => import('../../components/TintsInfoSection/TintsInfoSection'));
const TintsMaterials = lazy(() => import('../../components/TintsMaterials/TintsMaterials'));
const TintsPercentageTabs = lazy(() => import('../../components/TintsPercentageTabs/TintsPercentageTabs'));
const TintsPercentage = lazy(() => import('../../components/TintsPercentage/TintsPercentage'));
const TintsPackages = lazy(() => import('../../components/TintsPackages/TintsPackages'));
const TintLaws = lazy(() => import('../../components/TintsLaws/TintLaws'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function Tints() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Tint - Beyond Detail Toronto'
          description='Premium car detailing services in Toronto (Scarborough area). Services include window tints, car wash, restoration, paint correction, paint protection, and much more.'
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
          <div className='tints__wrapper'>
            <TintsInfoSection />
            <TintsMaterials />
            <TintsPercentageTabs />
            <TintsPercentage />
            <TintsPackages />
            <TintLaws />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(Tints);
