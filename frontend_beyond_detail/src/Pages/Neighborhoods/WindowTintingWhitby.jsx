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
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));
const SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));

function WindowTintingWhitby() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Window Tinting Whitby | Premium Auto Tint | Beyond Detail'
          description='Window tinting in Whitby by Beyond Detail. LLUMAR films serving Brooklin & downtown Whitby. UV protection & privacy. Book at (647) 689-6109.'
          name='Beyond Detail Whitby'
          type='website'
          serviceType='Window Tinting'
          keywords='window tinting whitby, car tint whitby, auto tinting whitby, ceramic tint whitby, tint shop whitby'
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
              titleLine1="Expert Window Tinting in"
              titleLine2="WHITBY &"
              titleLine3="DURHAM"
              subtitle="Upgrade your ride with professional <strong>window tinting in Whitby</strong>. Our LLUMAR films offer maximum heat rejection and style, installed by certified technicians."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="window-tint"
                title="Whitby Window Tint Projects"
              />
            </Suspense>

            {/* Internal Linking Section */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                Beyond Detail serves Whitby with premium <strong><Link to="/tint" style={{ color: '#f07900', textDecoration: 'none' }}>window tinting</Link></strong>. 
                From Brooklin to the waterfront, we ensure perfect installation every time. Consider <Link to="/ceramic-coating-whitby" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating</Link> for the ultimate vehicle upgrade.
              </p>
            </div>

            <TintsFeatures />
            <TintBenefitsInfo />
            <TintLawsExplanation />
            <TintSpecsChart />
            <TintsPercentageTabs />
            <TintLawsChart />
            <TintsPercentage />
            <Suspense fallback={null}>
              <TrustBadges />
            </Suspense>

            <Suspense fallback={null}>
              <SkillShowcase />
            </Suspense>


            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(WindowTintingWhitby);

