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

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const CeramicCoatingHero = lazy(() => import('../../components/CeramicCoatingHero/CeramicCoatingHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));
const SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));

function CeramicCoatingCliffside() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title="Ceramic Coating Cliffside | Paint Protection Scarborough"
          description="Ceramic coating in Cliffside by Beyond Detail. Hydrophobic paint protection near Kingston Road. Paint correction included. Call (647) 689-6109."
          name="Beyond Detail Cliffside"
          type="website"
          keywords="ceramic coating cliffside, paint protection cliffside, ceramic pro cliffside, car coating cliffside, paint correction cliffside"
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
              titleLine2="CLIFFSIDE &"
              titleLine3="SCARBOROUGH"
              subtitle="Protect your vehicle with the best <strong>ceramic coating in Cliffside</strong>. Beyond Detail offers certified installation of premium ceramic coatings for long-lasting protection."
            />
            
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="ceramic-coating"
                title="Cliffside Ceramic Coating Projects"
                forceLandscape
              />
            </Suspense>
            
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                Beyond Detail serves Cliffside with <strong><Link to="/ceramic-coatings" style={{ color: '#f07900', textDecoration: 'none' }}>professional ceramic coating services</Link></strong>. 
                Located nearby at 170 Finchdene Square, we provide meticulous <Link to="/paint-correction" style={{ color: '#f07900', textDecoration: 'none' }}>paint correction</Link> and protection.
              </p>
            </div>

            <PaintCorrectionInfo
              title="Professional Ceramic Coating Services"
              description="Our ceramic coating service includes comprehensive paint correction to ensure your coating bonds perfectly."
              benefits={[
                { title: "Permanent Protection", description: "Durable protective layer that lasts for years." },
                { title: "Ultra-Hard Surface", description: "Resistance to scratches and swirl marks." },
                { title: "Exceptional Gloss", description: "Deep, mirror-like finish." },
                { title: "UV Protection", description: "Blocks harmful UV rays." },
                { title: "Hydrophobic", description: "Water beads up and rolls off effortlessly." },
                { title: "Chemical Resistance", description: "Protects against environmental contaminants." }
              ]}
              process={[
                { title: "Paint Correction", description: "Removal of imperfections before coating." },
                { title: "Decontamination", description: "Thorough cleaning of the paint surface." },
                { title: "Coating Application", description: "Professional application of ceramic layers." },
                { title: "Curing", description: "Proper curing for maximum durability." },
                { title: "Inspection", description: "Final quality check." }
              ]}
              features={[
                "Paint correction included",
                "Thorough decontamination",
                "Professional application",
                "Premium products",
                "Warranty-backed protection",
                "Maintenance instructions",
                "Quality inspection",
                "Certified installers"
              ]}
            />

            <ServicePricing
              title="Cliffside Ceramic Coating Packages"
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

export default React.memo(CeramicCoatingCliffside);

