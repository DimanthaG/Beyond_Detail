import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import CeramicCoatingInfo from '../../components/CeramicCoatingInfo/CeramicCoatingInfo';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import '../CeramicCoating/CeramicCoating.scss';

// Lazy load heavy components
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const CeramicCoatingHero = lazy(() => import('../../components/CeramicCoatingHero/CeramicCoatingHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function CeramicCoatingAjax() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title="Ceramic Coating Ajax | Paint Protection & Correction Services"
          description="Best Ceramic Coating in Ajax. ⭐ Ceramic Pro Certified | Lifetime Warranty Packages | Mobile Service Available | Call (647) 689-6109 for a Quote"
          name="Beyond Detail Ajax"
          type="website"
          keywords="ceramic coating ajax, paint protection ajax, ceramic pro ajax, car coating ajax, paint correction ajax, mobile ceramic coating ajax"
          serviceType="Ceramic Coating"
        />
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className="ceramic-coating__wrapper">
            <CeramicCoatingHero 
              scrollTarget="#pricing"
              titleLine1="Ceramic Coating in"
              titleLine2="AJAX &"
              titleLine3="DURHAM"
              subtitle="Protect your vehicle with the best <strong>ceramic coating in Ajax</strong>. Beyond Detail offers certified installation of premium ceramic coatings that provide years of protection against UV rays, salt, and scratches. Mobile service available."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="ceramic-coating"
                title="Ajax Ceramic Coating Projects"
                forceLandscape
              />
            </Suspense>
            
            {/* Internal Linking Section */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                Beyond Detail serves the entire Ajax area with <strong><Link to="/ceramic-coatings" style={{ color: '#f07900', textDecoration: 'none' }}>professional ceramic coating services</Link></strong>. 
                We include meticulous <Link to="/paint-correction" style={{ color: '#f07900', textDecoration: 'none' }}>paint correction</Link> with every package to ensure a flawless finish. 
                Protect your car from Durham Region winters with our <Link to="/auto-detail" style={{ color: '#f07900', textDecoration: 'none' }}>detailing solutions</Link>.
              </p>
            </div>

            <PaintCorrectionInfo
              title="Professional Ceramic Coating Services"
              description="Our ceramic coating service includes comprehensive paint correction to ensure your coating bonds perfectly and performs at its best. Every package includes paint correction to remove imperfections before coating application."
              benefits={[
                {
                  title: "Permanent Protection",
                  description: "Ceramic coatings form a permanent molecular bond with your paint, creating a durable protective layer that lasts for years, not months."
                },
                {
                  title: "Ultra-Hard Surface",
                  description: "Achieves 9H hardness rating—harder than your clear coat—providing exceptional resistance to scratches, swirl marks, and minor abrasions."
                },
                {
                  title: "Exceptional Gloss & Depth",
                  description: "Creates a deep, mirror-like finish that enhances your vehicle's color and creates a showroom-quality appearance that lasts."
                },
                {
                  title: "Superior Heat & UV Protection",
                  description: "Blocks infrared heat and up to 99% of harmful UV rays, protecting your paint from fading, oxidation, and premature aging."
                },
                {
                  title: "Hydrophobic & Self-Cleaning",
                  description: "Water and contaminants bead up and roll off effortlessly, making cleaning easier and reducing maintenance requirements."
                },
                {
                  title: "Chemical Resistance",
                  description: "Protects against harsh chemicals, bird droppings, tree sap, bug splatter, and other environmental contaminants that damage paint."
                }
              ]}
              process={[
                {
                  title: "Comprehensive Paint Correction",
                  description: "Complete paint correction is performed to remove all imperfections. This is included in every ceramic coating package because the coating will permanently lock in any defects if not removed first."
                },
                {
                  title: "Decontamination & Preparation",
                  description: "Thorough decontamination using clay bar treatment and iron fallout removers eliminates embedded contaminants. Pre-coating solutions ensure optimal bonding conditions."
                },
                {
                  title: "Professional Coating Application",
                  description: "Our certified technicians apply the ceramic coating in thin, even layers using specialized applicators, ensuring complete coverage without runs or high spots."
                },
                {
                  title: "Leveling & Finishing",
                  description: "Excess coating is carefully removed using premium microfiber towels to ensure even thickness and prevent uneven curing that could compromise performance."
                },
                {
                  title: "Quality Inspection",
                  description: "A comprehensive final inspection ensures the coating has been applied correctly and meets our rigorous quality standards before delivery."
                }
              ]}
              features={[
                "Complete paint correction included (single, two, or three-stage)",
                "Thorough decontamination process",
                "Professional ceramic coating application",
                "Premium nano-ceramic coating products",
                "Warranty-backed protection",
                "Detailed maintenance instructions",
                "Follow-up support and guidance",
                "Quality inspection and final check"
              ]}
            />

            <ServicePricing
              title="Ajax Ceramic Coating Packages"
              packages={[
                {
                  name: "Single Stage + Ceramic Coating",
                  priceRange: { start: 350, end: 450 },
                  priceNote: "Pricing varies by vehicle size. Includes Single Stage Paint Correction + Ceramic Coating (replaces standard sealant)",
                  description: "Perfect for vehicles with light swirl marks. Includes single-stage paint correction plus ceramic coating for superior protection. Ceramic coating replaces the standard sealant and provides better, longer-lasting protection.",
                  features: [
                    "Complete paint surface inspection",
                    "Thorough decontamination (clay bar)",
                    "Single-stage compound polishing",
                    "Finishing polish application",
                    "Professional ceramic coating application",
                    "All exterior panels treated",
                    "Superior protection vs. standard sealant"
                  ],
                  ctaText: "Book This Package"
                },
                {
                  name: "Two Stage + Ceramic Coating",
                  priceRange: { start: 600, end: 800 },
                  priceNote: "Pricing varies by vehicle size. Includes Two Stage Paint Correction + Ceramic Coating (replaces standard sealant)",
                  description: "Ideal for moderate swirl marks and light scratches. Includes two-stage paint correction plus ceramic coating. Ceramic coating provides better protection than the standard sealant included with paint correction packages.",
                  features: [
                    "Complete paint surface inspection",
                    "Thorough decontamination (clay bar)",
                    "Two-stage compound polishing",
                    "Advanced finishing polish",
                    "Professional ceramic coating application",
                    "All exterior panels treated",
                    "Enhanced gloss and depth",
                    "Superior protection vs. standard sealant"
                  ],
                  featured: true,
                  ctaText: "Book This Package"
                },
                {
                  name: "Three Stage + Ceramic Coating",
                  priceRange: { start: 900, end: 1300 },
                  priceNote: "Pricing varies by vehicle size and condition. Includes Three Stage Paint Correction + Ceramic Coating (replaces standard sealant)",
                  description: "Comprehensive correction for severe defects plus ceramic coating. Includes three-stage paint correction for maximum results, finished with ceramic coating that provides superior protection compared to standard sealant.",
                  features: [
                    "Complete paint surface inspection",
                    "Thorough decontamination (clay bar)",
                    "Multi-stage compound polishing (3+ stages)",
                    "Advanced finishing polish",
                    "Professional ceramic coating application",
                    "All exterior panels treated",
                    "Maximum gloss and depth restoration",
                    "Minor scratch repair (when applicable)",
                    "Superior protection vs. standard sealant"
                  ],
                  ctaText: "Book This Package"
                }
              ]}
            />

            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            
            <CeramicCoatingInfo />
            
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(CeramicCoatingAjax);

