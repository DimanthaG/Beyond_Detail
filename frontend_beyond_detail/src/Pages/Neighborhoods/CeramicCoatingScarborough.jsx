import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { CERAMIC_COATING_PACKAGES } from '../../constants/servicePackages';
import '../../Pages/CeramicCoating/CeramicCoating.scss';

// Lazy load heavy components
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const CeramicCoatingHero = lazy(() => import('../../components/CeramicCoatingHero/CeramicCoatingHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));
const SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));
const FAQSection = lazy(() => import('../../components/FAQSection/FAQSection'));
const CeramicCoatingInfo = lazy(() => import('../../components/CeramicCoatingInfo/CeramicCoatingInfo'));


function CeramicCoatingScarborough() {
  const ceramicCoatingFAQs = [
    {
      question: "How long does ceramic coating last?",
      answer: "Our professional ceramic coating lasts up to 10 years with proper maintenance, backed by our comprehensive warranty."
    },
    {
      question: "How much does ceramic coating cost in Scarborough?",
      answer: "Ceramic coating at our Scarborough shop ranges from $500-$1,500 depending on package and vehicle size. Contact us for exact pricing."
    }
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title="Ceramic Coating Scarborough | 10-Year Warranty | Beyond Detail"
          description="Professional ceramic coating in Scarborough. Premium nano-ceramic protection with 10-year warranty, 3D design included. Serving Toronto & North York. Get quote today!"
          name="Beyond Detail Ceramic Coating"
          type="website"
          keywords="ceramic coating scarborough, ceramic coating near me, ceramic coating north york, paint protection scarborough, best ceramic coating scarborough"
          serviceType="Ceramic Coating"
          faq={ceramicCoatingFAQs}
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
              titleLine1="Ceramic Coating"
              titleLine2="That Lasts"
              titleLine3="10 Years"
              subtitle="Professional-grade nano-ceramic protection for your vehicle in Scarborough. Includes free 3D design consultation."
            />

            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="ceramic-coating"
                title="Ceramic Coating Gallery"
                forceLandscape
              />
            </Suspense>

            {/* How It Works Section */}
            <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 20px' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#f07900' }}>How It Works</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '15px' }}>
                    <span style={{ fontSize: '4rem', color: '#f07900', fontWeight: 'bold', display: 'block', marginBottom: '1rem' }}>1</span>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Quote</h3>
                    <p style={{ color: '#ccc' }}>Get a free 3D design consultation and quote for your vehicle.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '15px' }}>
                    <span style={{ fontSize: '4rem', color: '#f07900', fontWeight: 'bold', display: 'block', marginBottom: '1rem' }}>2</span>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Work</h3>
                    <p style={{ color: '#ccc' }}>Our certified installers apply the premium nano-ceramic protection.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '15px' }}>
                    <span style={{ fontSize: '4rem', color: '#f07900', fontWeight: 'bold', display: 'block', marginBottom: '1rem' }}>3</span>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Enjoy</h3>
                    <p style={{ color: '#ccc' }}>Drive with peace of mind knowing your paint is protected for 10 years.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Also Serving Section */}
            <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Proudly Serving Scarborough & GTA</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
                Beyond Detail is located in Scarborough at <strong style={{ color: '#f07900' }}>170 Finchdene Square</strong>. We proudly serve:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                <span style={{ background: '#f07900', color: 'white', padding: '8px 16px', borderRadius: '50px', fontWeight: '600' }}>Scarborough (Primary)</span>
                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Markham (15 min)</span>
                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>North York (20 min)</span>
                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Pickering (25 min)</span>
              </div>
            </section>


            <PaintCorrectionInfo
              title="Professional Ceramic Coating Services"
              description="Our ceramic coating service includes comprehensive paint correction to ensure your coating bonds perfectly and performs at its best. Every package includes paint correction to remove imperfections before coating application."
              benefits={[
                {
                  title: "Superior Protection",
                  description: "Shields against UV rays, oxidation, and chemical stains, keeping your paint pristine."
                },
                {
                  title: "Hydrophobic Finish",
                  description: "Water beads up and rolls off effortlessly, making your car stay cleaner for longer."
                },
                {
                  title: "Enhanced Gloss",
                  description: "Creates a deep, mirror-like shine that enhances your vehicle's appearance and lasts for years."
                },
                {
                  title: "Easy Maintenance",
                  description: "Wash less often and maintain that showroom look with minimal effort."
                },
                {
                  title: "10-Year Warranty",
                  description: "We stand behind our work with an industry-leading guarantee for long-term peace of mind."
                }
              ]}
              process={[
                {
                  title: "Comprehensive Paint Correction",
                  description: "Complete paint correction is performed to remove all imperfections. This is included in every ceramic coating package."
                },
                {
                  title: "Decontamination & Preparation",
                  description: "Thorough decontamination using clay bar treatment and iron fallout removers eliminates embedded contaminants."
                },
                {
                  title: "Professional Coating Application",
                  description: "Our certified technicians apply the ceramic coating in thin, even layers ensuring complete coverage."
                },
                {
                  title: "Quality Inspection",
                  description: "A comprehensive final inspection ensures the coating meets our rigorous quality standards."
                }
              ]}
              features={[
                "Complete paint correction included",
                "Thorough decontamination process",
                "Professional ceramic coating application",
                "Premium nano-ceramic coating products",
                "10-Year Warranty-backed protection",
                "3D Design Included",
              ]}
            />

            <ServicePricing
              title="Ceramic Coating Packages"
              packages={CERAMIC_COATING_PACKAGES}
            />

            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>

            <Suspense fallback={null}>
              <CeramicCoatingInfo />
            </Suspense>

            <Suspense fallback={null}>
              <TrustBadges />
            </Suspense>

            <Suspense fallback={null}>
              <SkillShowcase />
            </Suspense>

            <Suspense fallback={null}>
              <FAQSection data={ceramicCoatingFAQs} title="Ceramic Coating FAQs" />
            </Suspense>

            {/* Internal Linking Section - Bottom */}
            <div style={{ maxWidth: '1000px', margin: '4rem auto', padding: '2rem 20px', borderTop: '1px solid #333', textAlign: 'center' }}>
              <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1rem' }}>Related Services:</p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', fontSize: '1.1rem' }}>
                <Link to="/paint-correction-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>Paint Correction Scarborough</Link>
                <span style={{ color: '#444' }}>|</span>
                <Link to="/window-tinting-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>Window Tinting Scarborough</Link>
                <span style={{ color: '#444' }}>|</span>
                <Link to="/car-detailing-scarborough" style={{ color: '#f07900', textDecoration: 'none' }}>Car Detailing Scarborough</Link>
              </div>
            </div>

            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(CeramicCoatingScarborough);
