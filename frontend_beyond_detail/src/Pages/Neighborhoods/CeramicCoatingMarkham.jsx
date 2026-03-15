import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import CeramicCoatingInfo from '../../components/CeramicCoatingInfo/CeramicCoatingInfo';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { CERAMIC_COATING_PACKAGES } from '../../constants/servicePackages';
import '../CeramicCoating/CeramicCoating.scss';

// Lazy load heavy components
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const CeramicCoatingHero = lazy(() => import('../../components/CeramicCoatingHero/CeramicCoatingHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));
const SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));

function CeramicCoatingMarkham() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title="Ceramic Coating Markham | Paint Protection & Correction Services"
          description="Ceramic coating in Markham by Beyond Detail. Serving Unionville, Cornell & Markville. Paint correction & nano-ceramic protection. Call (647) 689-6109."
          name="Beyond Detail Markham"
          type="website"
          keywords="ceramic coating markham, detailing markham, paint protection markham, ceramic pro markham, car coating markham, paint correction markham, ceramic coating unionville, ceramic coating box grove"
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
              titleLine2="MARKHAM &"
              titleLine3="YORK REGION"
              subtitle="Protect your vehicle with the best <strong>ceramic coating in Markham</strong>. Beyond Detail offers certified installation of premium ceramic coatings that provide years of protection against UV rays, salt, and scratches. Mobile service available."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="ceramic-coating"
                title="Markham Ceramic Coating Projects"
                forceLandscape
              />
            </Suspense>
            
            {/* Markham Location-Specific Content */}
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
                Ceramic Coating in Markham - Professional Paint Protection for York Region
              </h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
                <p>
                  Beyond Detail provides professional <strong>ceramic coating services in Markham</strong>, serving customers throughout 
                  York Region including Unionville, Box Grove, Markham Village, Cornell, and all Markham neighborhoods. 
                  Our Ceramic Pro certified installation protects your vehicle from Markham's harsh winters, road salt, and UV damage.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Every ceramic coating package includes comprehensive <Link to="/paint-correction-markham" style={{ color: '#f07900', textDecoration: 'none' }}>paint correction</Link> 
                  to ensure optimal results. We also offer complete <Link to="/car-detailing-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>auto detailing in Markham</Link> 
                  and <Link to="/window-tinting-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>window tinting services</Link>. 
                  ⭐ Trusted by Markham customers with 70+ five-star reviews | Lifetime Warranties | Professional In-Shop Service.
                </p>
              </div>
            </section>

            {/* Internal Linking Section */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                Beyond Detail serves the entire Markham area with <strong><Link to="/ceramic-coatings" style={{ color: '#f07900', textDecoration: 'none' }}>professional ceramic coating services</Link></strong>. 
                We include meticulous <Link to="/paint-correction-markham" style={{ color: '#f07900', textDecoration: 'none' }}>paint correction</Link> with every package to ensure a flawless finish. 
                Protect your car from York Region winters with our <Link to="/car-detailing-markham" style={{ color: '#f07900', textDecoration: 'none' }}>detailing solutions in Markham</Link>.
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
              title="Ceramic Coating Packages"
              packages={CERAMIC_COATING_PACKAGES}
            />

            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            
            <CeramicCoatingInfo />
            <Suspense fallback={null}>
              <TrustBadges />
            </Suspense>

            <Suspense fallback={null}>
              <SkillShowcase />
            </Suspense>


            
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(CeramicCoatingMarkham);
