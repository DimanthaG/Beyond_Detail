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

function WindowTintingMarkham() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Window Tinting Markham | Premium Car Tinting | Beyond Detail'
          description='Window tinting in Markham by Beyond Detail. LLUMAR certified installer serving Unionville & Cornell. Ceramic & carbon films. Book at (647) 689-6109.'
          name='Beyond Detail Markham'
          type='website'
          serviceType='Window Tinting'
          keywords='window tinting markham, detailing markham, car tint markham, auto tinting markham, ceramic tint markham, window tint shop markham, window tinting unionville, window tinting box grove'
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
              titleLine1="Premium Window Tinting in"
              titleLine2="MARKHAM &"
              titleLine3="UNIONVILLE"
              subtitle="Enhance your vehicle with professional <strong>window tinting in Markham</strong>. We use high-performance LLUMAR films to block heat, protect your interior, and add privacy. Mobile service available throughout Markham."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="window-tint"
                title="Markham Window Tint Projects"
              />
            </Suspense>

            {/* Markham Location-Specific Content */}
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
                Window Tinting in Markham - Premium LLUMAR Installation for York Region
              </h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
                <p>
                  Beyond Detail provides professional <strong>window tinting services in Markham</strong>, serving customers throughout 
                  York Region including Unionville, Box Grove, Markham Village, Cornell, and all Markham neighborhoods. 
                  Our expert technicians use premium LLUMAR films to provide maximum heat rejection, UV protection, and privacy.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Combine your window tint with our <Link to="/ceramic-coating-markham" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating services in Markham</Link> 
                  for complete vehicle protection. We also offer <Link to="/car-detailing-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>auto detailing</Link> 
                  and <Link to="/paint-correction-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>paint correction</Link>. 
                  ⭐ Trusted by Markham customers | Lifetime Warranties | Professional Installation | Call (647) 689-6109.
                </p>
              </div>
            </section>

            {/* Internal Linking Section */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                Beyond Detail is the trusted choice for <strong><Link to="/window-tinting-markham" style={{ color: '#f07900', textDecoration: 'none' }}>window tinting in Markham</Link></strong>. 
                Whether you're in Unionville, Milliken, or Box Grove, visit our convenient Scarborough location. Consider adding <Link to="/ceramic-coating-markham" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating</Link> for complete protection.
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

export default React.memo(WindowTintingMarkham);

