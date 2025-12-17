import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import PaintProtectionInfo from '../../components/PaintProtectionInfo/PaintProtectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './PaintCorrection.scss';

import PaintCorrectionHero from '../../components/PaintCorrectionHero/PaintCorrectionHero';
import SEO from '../../components/SEO';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
// const SEO = lazy(() => import('../../components/SEO'));
// const PaintCorrectionHero = lazy(() => import('../../components/PaintCorrectionHero/PaintCorrectionHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function PaintCorrection() {
  // ScrollToTop component handles scrolling to hero section

  return (
    <>
      {/* Outer Suspense removed for LCP */}
      <SEO
        title='Paint Correction Scarborough | Remove Swirl Marks & Scratches | Beyond Detail'
        description='Professional paint correction in Scarborough. Remove swirl marks, scratches & oxidation. ⭐ 68 Five-Star Reviews | 1-3 Stage Correction | Starting at $250 | Lifetime Warranty | Call (647) 689-6109'
        name='Beyond Detail Toronto'
        type='website'
        serviceType='Paint Correction'
        keywords='paint correction near me, paint correction scarborough, swirl mark removal scarborough, scratch removal scarborough, paint polishing toronto, auto detailing scarborough, paint restoration scarborough, paint correction markham, paint correction pickering'
      />
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={{ ...transition, delay: 0 }}
      >
        <div className='paint-correction__wrapper'>
          <PaintCorrectionHero scrollTarget="#pricing" />
          <Suspense fallback={null}>
            <ServiceGallery
              serviceType="paint-correction"
              title="Paint Correction Gallery"
              forceLandscape
            />
          </Suspense>

          {/* Near Me & Location-Specific Content */}
          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
              Paint Correction Near Me - Professional Service in Scarborough & GTA
            </h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
              <p>
                Searching for <strong>paint correction near me</strong>? Beyond Detail provides professional paint correction services
                in Scarborough and throughout the Greater Toronto Area. Located at <strong>170 Finchdene Square, Unit 11, Scarborough</strong>,
                we're your local experts for removing swirl marks, scratches, and paint defects.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Our paint correction services are available for customers in <Link to="/paint-correction-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>Scarborough</Link>,
                <Link to="/paint-correction-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>Markham</Link>,
                <Link to="/paint-correction-pickering" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>Pickering</Link>,
                <Link to="/paint-correction" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>Toronto</Link>,
                and all GTA areas. We offer 1-3 stage paint correction to restore your vehicle's paint to showroom condition,
                preparing it perfectly for <Link to="/ceramic-coatings" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating</Link> protection.
              </p>
              <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#b0b0b0' }}>
                <strong>Why choose Beyond Detail for paint correction?</strong> Expert technicians with years of experience,
                premium products and equipment, comprehensive paint assessment, and satisfaction guarantee.
                ⭐ Trusted by 68+ five-star reviews from satisfied customers across the GTA.
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
            title="Paint Correction Packages"
            packages={[
              {
                name: "Single Stage Correction",
                priceRange: { start: 250, end: 350 },
                priceNote: "Pricing varies by vehicle size",
                description: "Perfect for vehicles with light swirl marks and minor defects. Includes one-stage polishing to restore paint clarity and gloss.",
                features: [
                  "Complete paint surface inspection",
                  "Thorough decontamination (clay bar)",
                  "Single-stage compound polishing",
                  "Finishing polish application",
                  "High-quality sealant protection",
                  "All exterior panels treated"
                ],
                ctaText: "Book This Package"
              },
              {
                name: "Two Stage Correction",
                priceRange: { start: 500, end: 700 },
                priceNote: "Pricing varies by vehicle size",
                description: "Ideal for moderate swirl marks, light scratches, and oxidation. Two-stage polishing ensures deeper defect removal.",
                features: [
                  "Complete paint surface inspection",
                  "Thorough decontamination (clay bar)",
                  "Two-stage compound polishing",
                  "Advanced finishing polish",
                  "Premium sealant protection",
                  "All exterior panels treated",
                  "Enhanced gloss and depth"
                ],
                featured: true,
                ctaText: "Book This Package"
              },
              {
                name: "Three Stage Correction",
                priceRange: { start: 800, end: 1200 },
                priceNote: "Pricing varies by vehicle size and condition",
                description: "Comprehensive correction for severe defects, deep scratches, and heavy oxidation. Three or more polishing stages achieve showroom-perfect results.",
                features: [
                  "Complete paint surface inspection",
                  "Thorough decontamination (clay bar)",
                  "Multi-stage compound polishing (3+ stages)",
                  "Advanced finishing polish",
                  "Premium sealant or wax protection",
                  "All exterior panels treated",
                  "Maximum gloss and depth restoration",
                  "Minor scratch repair (when applicable)"
                ],
                ctaText: "Book This Package"
              }
            ]}
          />
          <Suspense fallback={null}>
            <GoogleReviewsCarousel />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        </div>
      </motion.div>
      {/* </Suspense> */}
    </>
  );
}

export default React.memo(PaintCorrection);

