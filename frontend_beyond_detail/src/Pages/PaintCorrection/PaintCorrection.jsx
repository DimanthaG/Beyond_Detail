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
import { FAQSection, ErrorBoundary } from '../../components';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
// const SEO = lazy(() => import('../../components/SEO'));
// const PaintCorrectionHero = lazy(() => import('../../components/PaintCorrectionHero/PaintCorrectionHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function PaintCorrection() {
  // ScrollToTop component handles scrolling to hero section

  const paintCorrectionFAQs = [
    {
      question: "What is paint correction?",
      answer: "Paint correction is the process of permanently removing surface imperfections like swirl marks, scratches, oxidation, and etching from your vehicle's paint using machine polishers and specialized compounds. It restores the true gloss and depth of your paint."
    },
    {
      question: "Does car detailing remove scratches?",
      answer: "Yes, expert car detailing with paint correction removes most clear coat scratches, swirl marks, and etching. Using machine polishers, we level the clear coat to permanently eliminate defects. However, deep scratches that penetrate the base coat require touch-up paint or repainting."
    },
    {
      question: "Will paint correction remove all scratches?",
      answer: "Paint correction removes scratches that are in the clear coat layer. Deep scratches that have penetrated through the clear coat to the base coat or primer cannot be polished out and may require touch-up paint or repainting. We measure your paint depth to ensure safe correction."
    },
    {
      question: "How long does paint correction take?",
      answer: "A single-stage correction typically takes 4-6 hours. Two-stage correction takes 8-12 hours, and multi-stage correction can take 2+ days depending on the severity of defects and desired finish."
    },
    {
      question: "Do I need ceramic coating after paint correction?",
      answer: "While not mandatory, we highly recommend ceramic coating after paint correction. Since correction removes a tiny layer of clear coat to level defects, your paint needs strong protection. Ceramic coating locks in the flawless finish and protects against future marring."
    }
  ];

  return (
    <>
      {/* Outer Suspense removed for LCP */}
      <SEO
        title='Paint Correction Scarborough | Scratch Removal & Car Polishing'
        description='Expert paint correction in Scarborough. Permanently remove swirl marks, scratches, and oxidation. 1-Stage polish and multi-stage restoration available. Book a free paint inspection.'
        name='Beyond Detail Paint Correction'
        type='website'
        serviceType='Paint Correction'
        keywords='paint correction scarborough, car scratch removal, swirl mark removal, car polishing toronto, cut and polish car, buffing car scratches'
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
            titleLine1="Car Detailing &"
            titleLine2="Scratch Repair"
            titleLine3="TORONTO"
            subtitle="Expert <strong>paint correction</strong> and <strong>scratch repair</strong> to restore your vehicle's showroom shine. We permanently remove swirls, scratches, and oxidation."
          />
          <Suspense fallback={null}>
            <ServiceGallery
              serviceType="paint-correction"
              title="Paint Correction Gallery"
              forceLandscape
            />
          </Suspense>

          {/* Near Me & Location-Specific Content */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="seo-title">
              Paint Correction, Scratch Removal & Swirl Mark Repair
            </h2>
            <div>
              <p className="seo-text-lg">
                Searching for the <strong>best paint correction near me</strong>? Beyond Detail provides professional paint correction services
                in Scarborough with transparent <strong>paint correction costs</strong>. Located at <strong>170 Finchdene Square, Unit 11, Scarborough</strong>,
                we're your local experts for removing swirl marks and scratches at competitive prices.
              </p>
              <p className="seo-text-lg">
                Our paint correction services are available for customers in <Link to="/paint-correction-scarborough">Scarborough</Link>,{' '}
                <Link to="/paint-correction-markham">Markham</Link>,{' '}
                <Link to="/paint-correction-pickering">Pickering</Link>,{' '}
                <Link to="/paint-correction">Toronto</Link>,
                and all GTA areas. We offer 1-3 stage paint correction to restore your vehicle's paint to showroom condition,
                preparing it perfectly for <Link to="/ceramic-coatings">ceramic coating</Link> protection.
              </p>
              <p className="seo-text-md">
                <strong>Why choose Beyond Detail for paint correction?</strong> Expert technicians with years of experience,
                premium products and equipment, comprehensive paint assessment, and satisfaction guarantee.
                ⭐ Trusted by 70+ five-star reviews from satisfied customers across the GTA.
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
                title: "Step 1: Scientific Inspection",
                description: "We don't guess. We measure your paint thickness using a digital gauge to ensure enough clear coat exists for safe correction. We map out every defect under specialized 5000K inspection lights."
              },
              {
                title: "Step 2: Decontamination",
                description: "Before polishing, we strip all old wax, iron deposits, and embedded road tar using chemical and mechanical clay bar treatments to ensure a surgically clean surface."
              },
              {
                title: "Step 3: The Correction",
                description: "Using Rupes polishers and specific pad/compound combinations, we level the clear coat to permanently remove below-surface defects like swirls and scratches."
              },
              {
                title: "Step 4: Refinement (Jeweling)",
                description: "For Stage 2 and 3 packages, we follow heavy cutting with a fine polish to 'jewel' the paint, creating a deep, wet-looking gloss that maximizes clarity."
              },
              {
                title: "Step 5: Isopropyl Wipe & Protect",
                description: "We strip polishing oils to verify the results are permanent (not filled), then lock in the perfection with a silica sealant or Ceramic Coating."
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
                name: "Stage 1 Polish (Gloss Enhance)",
                priceRange: { start: 499 },
                priceNote: "Starting price. Est. 5-7 Hours",
                description: "A single-step machine polish to remove wash marring, light swirls, and oxidation. Significantly increases gloss and clarity. Includes 6-month sealant.",
                features: [
                  "Paint Thickness Measurement",
                  "Iron & Clay Decontamination",
                  "1-Step Machine Polish",
                  "Removes Light Swirls & Haze",
                  "Deep Gloss Enhancement",
                  "6-Month Silica Sealant"
                ],
                ctaText: "Book Stage 1"
              },
              {
                name: "Stage 2 Correction (Defect Removal)",
                priceRange: { start: 699 },
                priceNote: "Starting price. Est. 1-2 Days",
                description: "Our most popular package. Compound stage to remove deep swirls/scratches, followed by Polish stage for maximum clarity. Eliminates the majority of imperfections.",
                features: [
                  "Paint Thickness Measurement",
                  "Heavy Compound Stage",
                  "Fine Polish Refinement",
                  "Removes Deep Swirls & Scratches",
                  "Showroom Clarity",
                  "Ideal for Ceramic Coating Prep"
                ],
                featured: true,
                ctaText: "Book Stage 2"
              },
              {
                name: "Stage 3 Restoration (Showroom Finish)",
                priceRange: { start: 999 },
                priceNote: "Starting price. Est. 2-3 Days",
                description: "The pursuit of perfection. Wet sanding (if required), heavy compounding, and multiple refining stages for a practically flawless finish.",
                features: [
                  "Detailed Paint Mapping",
                  "Wet Sanding (Isolated Scratches)",
                  "Multi-Stage Compounding",
                  "Jeweling Polish Step",
                  "Maximized Defect Removal",
                  "Concours Level Finish"
                ],
                ctaText: "Book Stage 3"
              }
            ]}
          />
          <Suspense fallback={null}>
            <GoogleReviewsCarousel />
          </Suspense>
          {/* Localized Service Area Content */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="seo-title">
              Expert Paint Correction in Scarborough & Markham
            </h2>
            <div>
              <p className="seo-text-lg">
                Restore your vehicle's gloss and remove unsightly swirls with our <strong>paint correction services in Scarborough</strong>.
                Located at 170 Finchdene Square, we are the go-to studio for car enthusiasts in <strong>Scarborough, Markham, Pickering, and Toronto</strong> who demand perfection.
                Unlike quick "buff and polish" jobs, our multi-stage paint correction safely measures paint depth and permanently levels defects.
              </p>
              <p className="seo-text-lg">
                After correction, we highly recommend protecting your perfect finish with a <Link to="/ceramic-coatings">ceramic coating</Link> or{' '}
                <Link to="/tint">window tint</Link> for heat protection.
                Trust your vehicle to Beyond Detail—where we treat every car like our own.
              </p>
            </div>
          </section>

          <FAQSection data={paintCorrectionFAQs} title="Paint Correction FAQs" />

          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </div>
      </motion.div>
      {/* </Suspense> */}
    </>
  );
}

export default React.memo(PaintCorrection);

