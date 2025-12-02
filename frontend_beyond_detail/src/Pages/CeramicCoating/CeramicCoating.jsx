import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import CeramicCoatingInfo from '../../components/CeramicCoatingInfo/CeramicCoatingInfo';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './CeramicCoating.scss';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const CeramicCoatingHero = lazy(() => import('../../components/CeramicCoatingHero/CeramicCoatingHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function CeramicCoating() {
  // ScrollToTop component handles scrolling to hero section

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Ceramic Coating Scarborough | Ceramic Pro Installation | Beyond Detail Toronto'
          description='Professional ceramic coating in Scarborough. Ceramic Pro certified installer. 2-5 year protection. ⭐ 68 Five-Star Reviews | Paint correction included | Starting at $350 | Call (647) 689-6109'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Ceramic Coating'
          keywords='ceramic coating near me, ceramic coating scarborough, ceramic pro scarborough, paint protection scarborough, ceramic coating toronto, ceramic coating markham, ceramic coating pickering, nano ceramic coating scarborough, ceramic coating GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='ceramic-coating__wrapper'>
            <CeramicCoatingHero scrollTarget="#pricing" />
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="ceramic-coating"
                title="Ceramic Coating Gallery"
                forceLandscape
              />
            </Suspense>
            
            {/* Near Me & Location-Specific Content */}
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
                Ceramic Coating Near Me - Serving Scarborough, Toronto, Markham & Pickering
              </h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
                <p>
                  Looking for <strong>ceramic coating near me</strong>? Beyond Detail is your local Ceramic Pro certified installer, 
                  serving customers throughout the Greater Toronto Area. Based in <strong>Scarborough at 170 Finchdene Square, Unit 11</strong>, 
                  we're conveniently located to serve Scarborough, Toronto, Markham, Pickering, and surrounding GTA communities.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Our ceramic coating services are available for customers in <Link to="/ceramic-coating-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>Scarborough</Link>, 
                  <Link to="/ceramic-coating-toronto" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>Toronto</Link>, 
                  <Link to="/ceramic-coating-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>Markham</Link>, 
                  <Link to="/ceramic-coating-pickering" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>Pickering</Link>, 
                  and throughout the GTA. Every ceramic coating package includes professional paint correction to ensure optimal results 
                  and long-lasting protection for your vehicle.
                </p>
                <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#b0b0b0' }}>
                  <strong>Why choose Beyond Detail for ceramic coating?</strong> We're Ceramic Pro certified, offer 2-5 year protection packages, 
                  include paint correction in every service, and provide lifetime warranty on all installations. 
                  ⭐ Trusted by 68+ five-star reviews from satisfied GTA customers.
                </p>
              </div>
            </section>

            {/* Internal Linking Section */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                Beyond Detail offers the best <strong><Link to="/ceramic-coating-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating in Scarborough</Link></strong>. 
                Our packages include professional <Link to="/paint-correction" style={{ color: '#f07900', textDecoration: 'none' }}>paint correction</Link> to ensure a flawless finish before coating. 
                Protect your vehicle's paint from Toronto's harsh weather with our lifetime warranty packages. 
                We also offer <Link to="/auto-detail" style={{ color: '#f07900', textDecoration: 'none' }}>comprehensive auto detailing</Link> to keep your interior looking as good as your exterior.
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
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(CeramicCoating);
