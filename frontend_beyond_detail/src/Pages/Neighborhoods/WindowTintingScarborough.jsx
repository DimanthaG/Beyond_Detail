import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import '../Tints/Tints.scss';

const SEO = lazy(() => import('../../components/SEO'));
const TintsHero = lazy(() => import('../../components/TintsHero/TintsHero'));
const TintsFeatures = lazy(() => import('../../components/TintsFeatures/TintsFeatures'));
const TintBenefitsInfo = lazy(() => import('../../components/TintBenefitsInfo/TintBenefitsInfo'));
const TintSpecsChart = lazy(() => import('../../components/TintSpecsChart/TintSpecsChart'));
const TintsPercentageTabs = lazy(() => import('../../components/TintsPercentageTabs/TintsPercentageTabs'));
const TintsPercentage = lazy(() => import('../../components/TintsPercentage/TintsPercentage'));
const TintLawsChart = lazy(() => import('../../components/TintsLaws/TintLawsChart'));
const TintLawsExplanation = lazy(() => import('../../components/TintsLaws/TintLawsExplanation'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function WindowTintingScarborough() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Window Tinting Scarborough | Best Car Window Tint | Beyond Detail'
          description='Professional window tinting in Scarborough. ⭐ Top-Rated Car Window Tinting | LLUMAR Films | Heat Rejection & Privacy | Starting at $250 | Call (647) 689-6109'
          name='Beyond Detail Scarborough'
          type='website'
          serviceType='Window Tinting'
          keywords='window tinting scarborough, window tint scarborough, tint scarborough, auto tint scarborough, car window tinting scarborough, ceramic tint scarborough'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='tints__wrapper'>
            <TintsHero 
              scrollTarget="#pricing"
              titleLine1="Professional Window Tinting in"
              titleLine2="SCARBOROUGH &"
              titleLine3="GTA"
              subtitle="Looking for the best <strong>window tinting in Scarborough</strong>? We are authorized LLUMAR installers offering premium ceramic and carbon films. Whether you need <strong>auto tint</strong> for heat rejection or privacy, we have the perfect solution."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="window-tint"
                title="Scarborough Window Tint Gallery"
              />
            </Suspense>

            {/* Internal Linking Section */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                Beyond Detail is your local expert for <strong><Link to="/tint" style={{ color: '#f07900', textDecoration: 'none' }}>window tinting in Scarborough</Link></strong>. 
                Located at 170 Finchdene Square, we provide precise computer-cut <strong>car window tinting</strong>. Combine your tint with <Link to="/ceramic-coating-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating</Link> or full <Link to="/auto-detail" style={{ color: '#f07900', textDecoration: 'none' }}>auto detailing</Link> for a complete transformation.
              </p>
            </div>

            <TintsFeatures />
            <TintBenefitsInfo />
            <TintLawsExplanation />
            <TintSpecsChart />
            <TintsPercentageTabs />
            <TintLawsChart />
            <TintsPercentage />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(WindowTintingScarborough);
