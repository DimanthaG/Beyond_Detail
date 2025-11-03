import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './OdourRemoval.scss';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function OdourRemoval() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Odour Removal Toronto, Scarborough, Markham, Pickering | Vehicle Odor Elimination'
          description='Professional odour removal services in Toronto, Scarborough, Markham, and Pickering. Eliminate stubborn odors, smoke smell, and pet odors from your vehicle. Advanced odor removal across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Odour Removal'
          keywords='odour removal Toronto, vehicle odor elimination Scarborough, car smell removal Markham, smoke odor removal Pickering, interior odor treatment GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='odour-removal__wrapper'>
            <BackgroundPaths 
              title="Odour Removal"
              scrollTarget="#pricing"
              description="Eliminate persistent odors permanently, not temporarily. Our advanced treatments penetrate deep into materials to neutralize odors at their source—whether from smoke, pets, mold, or biological contaminants. Professional-grade solutions that deliver lasting results."
            />
            <ServiceInfoSection
              title="Professional Odour Removal Services"
              subtitle="Complete Odor Elimination"
              description="Unpleasant odors in your vehicle can be persistent and frustrating. Our advanced odour removal treatments use professional-grade technology and products to neutralize and eliminate odors at their source, rather than simply masking them. We effectively treat everything from smoke and pet odors to mold and biological contaminants."
              benefits={[
                {
                  title: "Complete Odor Neutralization",
                  description: "Our treatments neutralize odors at the molecular level, eliminating them permanently rather than temporarily covering them up."
                },
                {
                  title: "Mold & Mildew Treatment",
                  description: "Advanced treatments effectively eliminate mold, mildew, fungus, and algae odors that can be harmful to health and difficult to remove."
                },
                {
                  title: "Smoke Odor Elimination",
                  description: "Specialized treatments remove embedded smoke odors from cigarettes, fires, or other sources that penetrate deeply into interior materials."
                },
                {
                  title: "Pet & Biological Odor Removal",
                  description: "Effectively eliminate pet odors, urine, vomit, and other biological odors that can persist despite regular cleaning."
                },
                {
                  title: "Food & Garbage Odor Elimination",
                  description: "Remove persistent food odors and garbage smells that have absorbed into vehicle interiors and ventilation systems."
                },
                {
                  title: "Sanitization Benefits",
                  description: "Our treatments not only eliminate odors but also sanitize surfaces, reducing bacteria, germs, and allergens for a healthier interior environment."
                }
              ]}
              process={[
                {
                  title: "Source Identification",
                  description: "We identify the source and type of odor to determine the most effective treatment method. This may involve inspection of interior materials, HVAC systems, and hidden areas."
                },
                {
                  title: "Interior Preparation",
                  description: "Before treatment, we recommend a thorough interior detail to remove visible contamination and prepare surfaces for optimal odor treatment effectiveness."
                },
                {
                  title: "Specialized Treatment Application",
                  description: "Professional-grade odor-neutralizing treatments are applied using appropriate methods for the specific odor type. This may include fogging, direct application, or HVAC system treatment."
                },
                {
                  title: "Penetration & Neutralization",
                  description: "The treatment penetrates deep into materials where odors are embedded, breaking down odor molecules at the source to neutralize them permanently."
                },
                {
                  title: "Ventilation & Air Circulation",
                  description: "Proper ventilation ensures the treatment effectively reaches all areas, including air ducts and hidden spaces where odors can accumulate."
                },
                {
                  title: "Final Verification",
                  description: "We verify the effectiveness of the treatment and provide recommendations for maintaining a fresh interior environment."
                }
              ]}
              features={[
                "Comprehensive odor source identification",
                "Professional-grade odor neutralization treatment",
                "Deep penetration into interior materials",
                "HVAC system treatment and sanitization",
                "Mold and mildew odor elimination",
                "Smoke odor removal",
                "Pet and biological odor treatment",
                "Food and garbage odor elimination",
                "Complete interior sanitization",
                "Follow-up recommendations",
                "Treatment warranty",
                "Quality assurance inspection"
              ]}
            />
            <ServicePricing
              title="Odour Removal Packages"
              packages={[
                {
                  name: "Standard Odour Treatment",
                  duration: "2-3 hours",
                  priceRange: { start: 99, end: 149 },
                  priceNote: "Pricing varies by vehicle size and odor severity",
                  description: "Effective treatment for common odors like food, smoke, and general interior smells. Professional-grade odor neutralization.",
                  features: [
                    "Odor source identification",
                    "Standard odor neutralization treatment",
                    "Interior surface treatment",
                    "Basic ventilation system treatment",
                    "Odor elimination guarantee"
                  ],
                  ctaText: "Book This Service"
                },
                {
                  name: "Advanced Odour Treatment",
                  duration: "3-4 hours",
                  priceRange: { start: 149, end: 249 },
                  priceNote: "Pricing varies by vehicle size and odor type",
                  description: "Comprehensive treatment for stubborn odors including pet odors, smoke, and biological contaminants. Deep penetration treatment.",
                  features: [
                    "Comprehensive odor source identification",
                    "Advanced odor neutralization treatment",
                    "Deep penetration into materials",
                    "Complete HVAC system treatment",
                    "Mold and mildew odor elimination",
                    "Smoke odor removal",
                    "Extended treatment guarantee"
                  ],
                  featured: true,
                  ctaText: "Book This Service"
                },
                {
                  name: "Premium Odour Elimination",
                  duration: "4-6 hours",
                  priceRange: { start: 249, end: 349 },
                  priceNote: "Pricing varies by vehicle size and severity",
                  description: "Ultimate treatment for severe odors including pet urine, biological contaminants, and deeply embedded smells. Complete sanitization included.",
                  features: [
                    "Complete odor source identification",
                    "Premium multi-treatment application",
                    "Maximum penetration treatment",
                    "Complete HVAC system deep treatment",
                    "All odor types eliminated (pet, smoke, biological)",
                    "Complete interior sanitization",
                    "Extended warranty coverage",
                    "Follow-up treatment if needed"
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

export default React.memo(OdourRemoval);

