import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import PaintProtectionInfo from '../../components/PaintProtectionInfo/PaintProtectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { PAINT_CORRECTION_PACKAGES } from '../../constants/servicePackages';
import '../PaintCorrection/PaintCorrection.scss';

// Lazy load heavy components
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const PaintCorrectionHero = lazy(() => import('../../components/PaintCorrectionHero/PaintCorrectionHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));
const SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));
const FAQSection = lazy(() => import('../../components/FAQSection/FAQSection'));


function PaintCorrectionScarborough() {
  const paintCorrectionFAQs = [
    {
      question: "How much does paint correction cost in Scarborough?",
      answer: "Our paint correction packages in Scarborough start at $250. The final cost depends on the condition of your paint and whether you need a 1, 2, or 3-stage correction to remove deep scratches and swirls."
    },
    {
      question: "Does paint correction remove deep scratches?",
      answer: "Paint correction permanently removes swirl marks and light to medium scratches. Deep scratches that have penetrated the clear coat may require wet sanding or touch-up paint."
    }
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Paint Correction Scarborough | Scratch Removal | Beyond Detail'
          description='Expert paint correction in Scarborough. Remove swirl marks, scratches & oxidation to restore showroom shine. Multi-stage polishing. Lifetime warranty. Book today!'
          name='Beyond Detail Scarborough'
          type='website'
          serviceType='Paint Correction'
          keywords='paint correction scarborough, car scratch removal scarborough, swirl removal scarborough, auto detailing scarborough, paint polishing'
          faq={paintCorrectionFAQs}
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='paint-correction__wrapper'>
            <PaintCorrectionHero
              scrollTarget="#pricing"
              titleLine1="Paint Correction Services in"
              titleLine2="SCARBOROUGH &"
              titleLine3="TORONTO"
              subtitle="Restore your vehicle's showroom shine with professional <strong>paint correction in Scarborough</strong>. We permanently remove swirl marks, scratches, and oxidation to reveal a flawless finish."
            />

            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="paint-correction"
                title="Scarborough Paint Correction Projects"
                forceLandscape
              />
            </Suspense>

            {/* Also Serving Section */}
            <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Proudly Serving Scarborough & GTA</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
                Beyond Detail is located in Scarborough at <strong style={{ color: '#f07900' }}>170 Finchdene Square</strong>. We provide expert paint restoration for:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                <span style={{ background: '#f07900', color: 'white', padding: '8px 16px', borderRadius: '50px', fontWeight: '600' }}>Scarborough</span>
                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Markham</span>
                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>North York</span>
                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Pickering</span>
              </div>
            </section>

            <PaintProtectionInfo />

            <PaintCorrectionInfo
              title="Professional Paint Correction Services"
              subtitle="Advanced Restoration"
              description="Paint correction is an intensive process designed to eliminate imperfections such as swirl marks, scratches, oxidation, and other surface defects. Our expert technicians use advanced techniques and premium products to restore your vehicle's paint to its original flawless condition."
              benefits={[
                {
                  title: "Eliminates Surface Imperfections",
                  description: "Remove swirl marks, light scratches, and oxidation that dull your vehicle's appearance and reduce its value."
                },
                {
                  title: "Restores Showroom Shine",
                  description: "Bring back the deep, glossy finish that your vehicle had when it first left the factory floor."
                },
                {
                  title: "Enhances Paint Depth & Clarity",
                  description: "Reveal the true color and depth of your paint by removing years of accumulated defects and contaminants."
                },
                {
                  title: "Increases Vehicle Value",
                  description: "A properly corrected paint finish significantly enhances your vehicle's resale value and aesthetic appeal."
                },
                {
                  title: "Prepares for Protection",
                  description: "Perfect foundation for ceramic coatings or other protective treatments, ensuring optimal adhesion and longevity."
                },
                {
                  title: "Professional Expertise",
                  description: "Trained technicians with extensive experience in automotive paint systems and correction techniques."
                }
              ]}
              process={[
                {
                  title: "Comprehensive Assessment",
                  description: "We begin with a thorough inspection using specialized lighting to identify all surface imperfections, including swirl marks, scratches, oxidation, and other defects."
                },
                {
                  title: "Decontamination & Preparation",
                  description: "The paint surface is thoroughly cleaned and decontaminated using clay bar treatment and iron fallout removers to eliminate embedded contaminants that could interfere with the correction process."
                },
                {
                  title: "Multi-Stage Polishing",
                  description: "Depending on the severity of imperfections, we perform 1, 2, or 3 polishing stages using specific compounds and pads to gradually level the clear coat and remove defects permanently."
                },
                {
                  title: "Final Refinement",
                  description: "A finishing polish removes any hazing or micro-scratches, leaving behind a flawless, mirror-like finish that enhances gloss and clarity."
                },
                {
                  title: "Protection Application",
                  description: "To preserve the corrected paint, we apply a high-quality sealant or wax, providing a protective barrier against future damage and environmental contaminants."
                }
              ]}
              features={[
                "Complete paint surface inspection and assessment",
                "Thorough decontamination (clay bar treatment)",
                "Multi-stage compound polishing",
                "Advanced finishing polish",
                "High-quality sealant or wax application",
                "All panels corrected and refined",
                "Interior protection during service",
                "Final quality inspection"
              ]}
            />

            <ServicePricing
              title="Scarborough Paint Correction Packages"
              packages={PAINT_CORRECTION_PACKAGES}
            />

            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <Suspense fallback={null}>
              <TrustBadges />
            </Suspense>

            <Suspense fallback={null}>
              <SkillShowcase />
            </Suspense>

            <Suspense fallback={null}>
              <FAQSection data={paintCorrectionFAQs} title="Paint Correction FAQs" />
            </Suspense>

            {/* Internal Linking Section - Bottom */}
            <div style={{ maxWidth: '1000px', margin: '4rem auto', padding: '2rem 20px', borderTop: '1px solid #333', textAlign: 'center' }}>
              <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1rem' }}>Enhance Your Results:</p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', fontSize: '1.1rem' }}>
                <Link to="/ceramic-coating-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>Add Ceramic Coating Protection</Link>
                <span style={{ color: '#444' }}>|</span>
                <Link to="/window-tinting-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>Window Tinting Scarborough</Link>
              </div>
            </div>

            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(PaintCorrectionScarborough);
