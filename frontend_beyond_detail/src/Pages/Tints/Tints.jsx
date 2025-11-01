import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './Tints.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const BrandsGrid = lazy(() => import('../../components/BrandsGrid/BrandsGrid'));
const TintsFeatures = lazy(() => import('../../components/TintsFeatures/TintsFeatures'));
const TintsPercentageTabs = lazy(() => import('../../components/TintsPercentageTabs/TintsPercentageTabs'));
const TintsPercentage = lazy(() => import('../../components/TintsPercentage/TintsPercentage'));
const TintsPricing = lazy(() => import('../../components/TintsPricing/TintsPricing'));
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
          description='Premium car detailing services in Toronto (Scarborough area). Services include window tint, car wash, restoration, paint correction, paint protection, and much more.'
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
            <BackgroundPaths 
              title="Window Tint"
              scrollTarget="#tintsMaterials"
              description="Professional automotive window tint services in Toronto. We provide premium quality tint with expert installation, exceptional customer service, and a commitment to excellence that goes beyond detail."
            />
            <BrandsGrid />
            <TintsFeatures />
            <TintsPricing />
            <TintsPercentageTabs />
            <TintsPercentage />
            <TintLaws />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(Tints);
