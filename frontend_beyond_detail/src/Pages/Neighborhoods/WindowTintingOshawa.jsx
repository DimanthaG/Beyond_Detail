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

function WindowTintingOshawa() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Window Tinting Oshawa | Best Car Tint | Beyond Detail'
          description='Professional window tinting in Oshawa. ⭐ LLUMAR Certified Installer | Ceramic & Carbon Films | Lifetime Warranty | Mobile Service | Call (647) 689-6109'
          name='Beyond Detail Oshawa'
          type='website'
          serviceType='Window Tinting'
          keywords='window tinting oshawa, car tint oshawa, auto tinting oshawa, ceramic tint oshawa, best window tint oshawa'
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
              titleLine2="OSHAWA &"
              titleLine3="DURHAM"
              subtitle="Experience superior heat rejection and privacy with <strong>window tinting in Oshawa</strong>. We use premium LLUMAR films backed by a lifetime warranty."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="window-tint"
                title="Oshawa Window Tint Projects"
              />
            </Suspense>

            {/* Internal Linking Section */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                Beyond Detail is Oshawa's top choice for <strong><Link to="/tint" style={{ color: '#f07900', textDecoration: 'none' }}>window tinting services</Link></strong>. 
                Whether you're near the Oshawa Centre or Lakeview Park, we provide expert installation. Enhance your protection with <Link to="/ceramic-coating-oshawa" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating</Link>.
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

export default React.memo(WindowTintingOshawa);

