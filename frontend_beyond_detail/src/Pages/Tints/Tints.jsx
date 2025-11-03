import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './Tints.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const TintsHero = lazy(() => import('../../components/TintsHero/TintsHero'));
const Partners = lazy(() => import('../../components/Partners/Partners'));
const TintsFeatures = lazy(() => import('../../components/TintsFeatures/TintsFeatures'));
const TintBenefitsInfo = lazy(() => import('../../components/TintBenefitsInfo/TintBenefitsInfo'));
const TintSpecsChart = lazy(() => import('../../components/TintSpecsChart/TintSpecsChart'));
const TintsPercentageTabs = lazy(() => import('../../components/TintsPercentageTabs/TintsPercentageTabs'));
const TintsPercentage = lazy(() => import('../../components/TintsPercentage/TintsPercentage'));
const TintsPricing = lazy(() => import('../../components/TintsPricing/TintsPricing'));
const TintLawsChart = lazy(() => import('../../components/TintsLaws/TintLawsChart'));
const TintLawsExplanation = lazy(() => import('../../components/TintsLaws/TintLawsExplanation'));
const TintLawsSources = lazy(() => import('../../components/TintsLaws/TintLawsSources'));
const RecentWork = lazy(() => import('../../components/RecentWork/RecentWork'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
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
          title='Window Tinting Toronto, Scarborough, Markham, Pickering | LLUMAR Premium Films'
          description='Professional window tinting services in Toronto, Scarborough, Markham, and Pickering. Premium LLUMAR ATC, CTX, and IRX films. Expert installation with lifetime warranty. Serving all GTA areas.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Window Tinting'
          keywords='window tinting Toronto, car tint Scarborough, LLUMAR tint Markham, window film Pickering, automotive tinting GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='tints__wrapper'>
                  <TintsHero scrollTarget="#pricing" />
            <Suspense fallback={null}>
              <Partners />
            </Suspense>
            <Suspense fallback={null}>
              <ServiceGallery serviceType="window-tint" title="Window Tint Gallery" />
            </Suspense>
            <TintsFeatures />
            <TintBenefitsInfo />
            <TintLawsExplanation />
            <TintSpecsChart />
            <TintsPricing />
            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <TintsPercentageTabs />
            <TintLawsChart />
            <TintsPercentage />
            <TintLawsSources />
            <Suspense fallback={null}>
              <RecentWork serviceType="tint" title="WINDOW TINT" limit={6} />
            </Suspense>
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(Tints);
