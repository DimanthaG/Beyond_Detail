import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './PaintRemoval.scss';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function PaintRemoval() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Paint Removal Toronto, Scarborough, Markham, Pickering | Overspray & Paint Defect Removal'
          description='Professional paint removal services in Toronto, Scarborough, Markham, and Pickering. Safely remove unwanted paint, overspray, and paint defects. Expert paint removal across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Paint Removal'
          keywords='paint removal Toronto, overspray removal Scarborough, paint defect removal Markham, vehicle paint stripping Pickering, automotive paint removal GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='paint-removal__wrapper'>
            <BackgroundPaths 
              title="Paint Removal"
              scrollTarget="#pricing"
              description="Safely remove unwanted paint, overspray, and contamination without damaging your original finish. Our specialized techniques and premium products effectively eliminate paint defects while preserving your vehicle's surfaces—whether on paint, glass, chrome, or trim."
            />
            <Suspense fallback={null}>
              <ServiceGallery serviceType="paint-removal" title="Paint Removal Gallery" />
            </Suspense>
            <ServiceInfoSection
              title="Expert Paint Removal Services"
              subtitle="Safe & Effective"
              description="Whether from overspray, accidental paint transfer, or other surface contamination, unwanted paint on your vehicle can be safely removed. Our specialized techniques and premium products effectively remove paint defects while protecting your vehicle's original finish underneath."
              benefits={[
                {
                  title: "Safe Removal Process",
                  description: "Our techniques safely remove unwanted paint without damaging the underlying surface, preserving your vehicle's original finish."
                },
                {
                  title: "Overspray Elimination",
                  description: "Remove paint overspray from bodywork, glass, and trim that may have occurred from nearby painting operations or environmental factors."
                },
                {
                  title: "Restore Original Appearance",
                  description: "Eliminate paint defects and contamination to restore your vehicle's surface to its original, pristine condition."
                },
                {
                  title: "Multi-Surface Treatment",
                  description: "Safe removal techniques work on paint, glass, chrome, and trim surfaces, ensuring comprehensive contamination removal."
                },
                {
                  title: "Professional Equipment",
                  description: "We use specialized tools and premium products designed specifically for safe, effective paint removal."
                },
                {
                  title: "Protection During Process",
                  description: "Careful masking and protection techniques ensure only the unwanted paint is removed, leaving surrounding areas untouched."
                }
              ]}
              process={[
                {
                  title: "Surface Evaluation",
                  description: "We assess the type and severity of paint contamination to determine the most effective and safest removal method for your specific situation."
                },
                {
                  title: "Protection & Masking",
                  description: "Surrounding areas are carefully masked and protected to ensure only the unwanted paint is removed, preserving all original finishes."
                },
                {
                  title: "Specialized Removal",
                  description: "Using premium solvents and specialized techniques, we gently dissolve and remove the unwanted paint without affecting underlying surfaces."
                },
                {
                  title: "Surface Refinement",
                  description: "Any remaining residue is carefully removed, and the surface is polished to restore its original finish and appearance."
                },
                {
                  title: "Final Inspection",
                  description: "A thorough inspection ensures all unwanted paint has been removed and the original surface is restored to perfect condition."
                }
              ]}
              features={[
                "Comprehensive surface evaluation",
                "Safe masking and protection",
                "Specialized paint removal products",
                "Multi-surface treatment capability",
                "Residue removal and polishing",
                "Original finish preservation",
                "Quality inspection",
                "Aftercare recommendations"
              ]}
            />
            <ServicePricing
              title="Paint Removal Packages"
              packages={[
                {
                  name: "Basic Paint Removal",
                  duration: "2-4 hours",
                  priceRange: { start: 149, end: 299 },
                  priceNote: "Pricing varies by surface area and contamination level",
                  description: "Effective removal of overspray and light paint contamination from vehicle surfaces. Safe removal preserving original finish.",
                  features: [
                    "Surface evaluation",
                    "Safe masking and protection",
                    "Specialized paint removal treatment",
                    "Multi-surface capability (paint, glass, trim)",
                    "Residue removal and polishing",
                    "Original finish preservation"
                  ],
                  ctaText: "Book This Service"
                },
                {
                  name: "Advanced Paint Removal",
                  duration: "4-6 hours",
                  priceRange: { start: 299, end: 499 },
                  priceNote: "Pricing varies by severity and surface area",
                  description: "Comprehensive removal of heavy overspray and paint contamination. Includes surface restoration and protection.",
                  features: [
                    "Comprehensive surface evaluation",
                    "Complete masking and protection",
                    "Advanced paint removal treatment",
                    "Complete multi-surface treatment",
                    "Surface restoration and polishing",
                    "Original finish preservation",
                    "Protection application"
                  ],
                  featured: true,
                  ctaText: "Book This Service"
                },
                {
                  name: "Complete Paint Removal & Restoration",
                  duration: "6-10 hours",
                  priceRange: { start: 499, end: 899 },
                  priceNote: "Pricing varies by vehicle size and contamination severity",
                  description: "Ultimate package for severe paint contamination. Complete removal, surface restoration, and protection application.",
                  features: [
                    "Complete vehicle surface evaluation",
                    "Comprehensive masking and protection",
                    "Premium paint removal treatment",
                    "Complete multi-surface restoration",
                    "Surface refinement and polishing",
                    "Original finish preservation",
                    "Premium protection application",
                    "Quality assurance inspection",
                    "Extended warranty on work"
                  ],
                  ctaText: "Book This Service"
                }
              ]}
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

export default React.memo(PaintRemoval);

