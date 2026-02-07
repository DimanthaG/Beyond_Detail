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
const FAQSection = lazy(() => import('../../components/FAQSection/FAQSection'));

function WindowTintingScarborough() {
  const windowTintingFAQs = [
    {
      question: "Is window tinting legal in Ontario?",
      answer: "Yes. For passenger vehicles, front driver and passenger side windows are limited to no darker than 30% darkness (meaning 70% of light must pass through). Rear windows and the rear windshield can be as dark as you like."
    },
    {
      question: "How long does window tinting last?",
      answer: "Our LLUMAR window tints are designed to last a lifetime. They are backed by a manufacturers lifetime warranty against peeling, bubbling, and color change (purpling)."
    },
    {
      question: "How long does the installation take?",
      answer: "Most full vehicle window tint installations in our Scarborough shop take between 2 to 4 hours to complete, depending on the vehicle size and number of windows."
    }
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Window Tinting Scarborough | LLUMAR Certified | Beyond Detail'
          description='Best window tinting in Scarborough. Official LLUMAR SelectPro dealer. Lifetime warranty on all installs. Heat rejection & privacy films. Book now!'
          name='Beyond Detail Scarborough'
          type='website'
          serviceType='Window Tinting'
          keywords='window tinting scarborough, llumar tint scarborough, ceramic tint scarborough, car window tinting, heat rejection tint'
          faq={windowTintingFAQs}
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
              titleLine1="LLUMAR Window Tinting"
              titleLine2="in Scarborough"
              titleLine3=""
              subtitle="Professional <strong>LLUMAR window film</strong> installation in Scarborough. <br/><span style='color:#f07900'>✓ Lifetime Warranty</span> &nbsp; <span style='color:#f07900'>✓ 99% UV Block</span> &nbsp; <span style='color:#f07900'>✓ Heat Reduction</span>"
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
                Beyond Detail is your Authorized LLUMAR SelectPro dealer for <strong><Link to="/window-tinting-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>window tinting in Scarborough</Link></strong>.
                Our premium films reject heat and protect your interior. We also offer <Link to="/ceramic-coating-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating</Link> and <Link to="/paint-correction-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>paint correction</Link> services.
              </p>
            </div>

            {/* Also Serving Section */}
            <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Proudly Serving Scarborough & GTA</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
                Beyond Detail is located in Scarborough at <strong style={{ color: '#f07900' }}>170 Finchdene Square</strong>. We provide expert window tinting for:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                <span style={{ background: '#f07900', color: 'white', padding: '8px 16px', borderRadius: '50px', fontWeight: '600' }}>Scarborough</span>
                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Markham</span>
                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>North York</span>
                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Pickering</span>
              </div>
            </section>

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

            <Suspense fallback={null}>
              <FAQSection data={windowTintingFAQs} title="Window Tinting FAQs" />
            </Suspense>

            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(WindowTintingScarborough);
