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

function PaintCorrectionMarkham() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Paint Correction Markham | Swirl Mark & Scratch Removal'
          description='Expert paint correction in Markham. Remove swirl marks, scratches & oxidation. ⭐ 5-Star Rated | Multi-Stage Polishing | Lifetime Warranty | Call (647) 689-6109'
          name='Beyond Detail Markham'
          type='website'
          serviceType='Paint Correction'
          keywords='paint correction markham, detailing markham, scratch removal markham, car polishing markham, paint restoration markham, swirl mark removal markham, paint correction unionville, paint correction box grove'
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
              titleLine2="MARKHAM &"
              titleLine3="YORK REGION"
              subtitle="Restore your car's paint to perfection with <strong>paint correction in Markham</strong>. We eliminate swirl marks, scratches, and dullness to bring back that showroom shine."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="paint-correction"
                title="Markham Paint Correction Projects"
                forceLandscape
              />
            </Suspense>

            {/* Markham Location-Specific Content */}
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
                Paint Correction in Markham - Expert Swirl Mark & Scratch Removal
              </h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
                <p>
                  Beyond Detail provides professional <strong>paint correction services in Markham</strong>, serving customers throughout 
                  York Region. Our expert technicians specialize in removing swirl marks, scratches, and paint defects to restore your 
                  vehicle's showroom finish. Located in Scarborough, we're conveniently accessible for Markham residents.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Our paint correction services are perfect preparation for <Link to="/ceramic-coating-markham" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating in Markham</Link>. 
                  We also offer complete <Link to="/car-detailing-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>auto detailing services</Link> 
                  and <Link to="/window-tinting-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>window tinting</Link>. 
                  ⭐ Trusted by Markham customers | Multi-Stage Correction Available | Lifetime Warranties | Call (647) 689-6109.
                </p>
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
                  description: "The paint surface is thoroughly cleaned and decontaminated using clay bar treatments and iron fallout removers to eliminate embedded contaminants that could interfere with the correction process."
                },
                {
                  title: "Multi-Stage Polishing",
                  description: "Depending on the severity of imperfections, we perform one or more polishing stages using professional-grade compounds and pads to gradually refine the paint surface."
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
              title="Markham Paint Correction Packages"
              packages={PAINT_CORRECTION_PACKAGES}
            />
            
            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(PaintCorrectionMarkham);
