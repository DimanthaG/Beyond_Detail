import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, ErrorBoundary, FAQSection } from '../../components';
import CeramicCoatingInfo from '../../components/CeramicCoatingInfo/CeramicCoatingInfo';
import PaintCorrectionInfo from '../../components/PaintCorrectionInfo/PaintCorrectionInfo';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './CeramicCoating.scss';

import CeramicCoatingHero from '../../components/CeramicCoatingHero/CeramicCoatingHero';
import SEO from '../../components/SEO';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
// const SEO = lazy(() => import('../../components/SEO'));
// const CeramicCoatingHero = lazy(() => import('../../components/CeramicCoatingHero/CeramicCoatingHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function CeramicCoating() {
  // FAQ Data
  const ceramicCoatingFAQs = [
    {
      question: "How long does ceramic coating last?",
      answer: "Our ceramic coating packages provide protection ranging from 2 to 5+ years, depending on the specific package chosen (Bronze, Silver, Gold). With proper maintenance, these coatings can even outlast their warranty period."
    },
    {
      question: "Do I still need to wash my car after ceramic coating?",
      answer: "Yes, you still need to wash your car, but it becomes much easier! The hydrophobic properties mean dirt and grime slide off easily. You'll never need to wax your car again, but regular safe washes are required to maintain the coating's performance."
    },
    {
      question: "Is ceramic coating worth it for a new car?",
      answer: "Absolutely. Applying ceramic coating to a new car preserves the factory paint in pristine condition, protects it from UV damage and oxidation, and significantly increases the vehicle's resale value. It's the best time to apply protection."
    },
    {
      question: "What does ceramic coating protect against?",
      answer: "Ceramic coating protects against UV rays (oxidation), chemical stains (bird droppings, bug splatter), light scratches and swirl marks, road salt, and dirt buildup. It creates a sacrificial layer that takes the abuse instead of your clear coat."
    },
    {
      question: "How much does ceramic coating cost in Scarborough?",
      answer: "At Beyond Detail in Scarborough, our ceramic coating packages typically range from $599 for entry-level protection to $1,699 for lifetime warranty packages. Prices depend on the size of your vehicle and the level of paint correction needed."
    }
  ];

  return (
    <>
      {/* Suspense fallback={<Loading />}> REMOVED EXTERNAL SUSPENSE */}
      <SEO
        title='Ceramic Coating Scarborough | 9H Lifetime Warranty Authorized Installer'
        description='Authorized Ceramic Coating installer in Scarborough. 1, 3, 5-Year and Lifetime warranty packages available. Includes Paint Correction. Get a free quote today.'
        name='Beyond Detail Ceramic Coating'
        type='website'
        serviceType='Ceramic Coating'
        keywords='ceramic coating scarborough, 9h ceramic coating, ceramic pro installer, car paint protection toronto, best ceramic coating gta'
        faq={ceramicCoatingFAQs}
      />
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={{ ...transition, delay: 0 }}
      >
        <div className='ceramic-coating__wrapper'>
          <CeramicCoatingHero
            scrollTarget="#pricing"
            titleLine1="Professional Ceramic Coating &"
            titleLine2="Paint Protection in"
            titleLine3="Scarborough"
          />
          <ErrorBoundary fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Gallery unavailable (offline)</div>}>
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="ceramic-coating"
                title="Ceramic Coating Gallery"
                forceLandscape
              />
            </Suspense>
          </ErrorBoundary>

          {/* GEO Direct Answer Section - Optimized for ChatGPT/Perplexity Citations */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '2rem auto 0', backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px' }}>
            <h2 className="seo-title" style={{ color: '#f07900', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
              Is ceramic coating worth it for Toronto winters?
            </h2>
            <div>
              <p className="seo-text-lg" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#1a1a1a' }}>
                Yes. Ceramic coating creates a <strong>9H hardness barrier</strong> that protects against Toronto's <strong>road salt, freeze-thaw cycles, and Highway 401 salt spray</strong>.
                Unlike traditional wax which dissolves in winter conditions within 2-4 weeks, ceramic coating <strong>bonds to paint at the molecular level</strong>,
                preventing corrosion and salt etching that causes rust spots and paint oxidation. For Scarborough drivers facing constant exposure to <strong>construction dust from Highway 401 expansion and Markham Road repairs</strong>,
                ceramic coating's hydrophobic properties make salt removal 80% easier during weekly winter washes.
              </p>
              <p className="seo-text-lg" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#1a1a1a' }}>
                We use professional-grade <strong>9H nano-ceramic coatings with 2-5 year warranties</strong>, installed at our <strong>170 Finchdene Square</strong> facility.
                Starting at <strong>$599-$1,300</strong> depending on package, it extends paint life by 5+ years —
                critical for Tesla Model Y and Model 3 owners whose soft factory paint is especially vulnerable to salt damage.
                With proper maintenance, your ceramic-coated car will resist the <strong>-20°C to +35°C temperature swings</strong> that cause paint to crack and fade.
              </p>
            </div>
          </section>

          {/* Near Me & Location-Specific Content */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="seo-title">
              Permanent 9H Nano Coating Services in the GTA
            </h2>
            <div>
              <p className="seo-text-lg">
                Looking for <strong>ceramic coating near me</strong> with transparent pricing? Beyond Detail is your local Ceramic Pro certified installer,
                serving customers throughout the Greater Toronto Area. We offer competitive <strong>ceramic coating costs</strong> without compromising quality.
                Based in <strong>Scarborough at 170 Finchdene Square, Unit 11</strong>,
                we're conveniently located to serve Scarborough, Toronto, Markham, Pickering, and surrounding GTA communities.
              </p>
              <p className="seo-text-lg">
                Our ceramic coating services are available for customers in <Link to="/ceramic-coating-scarborough">Scarborough</Link>,{' '}
                <Link to="/ceramic-coating-toronto">Toronto</Link>,{' '}
                <Link to="/ceramic-coating-markham">Markham</Link>,{' '}
                <Link to="/ceramic-coating-pickering">Pickering</Link>,
                and throughout the GTA. Every ceramic coating package includes professional paint correction to ensure optimal results
                and long-lasting protection for your vehicle.
              </p>
              <p className="seo-text-md">
                <strong>Why choose Beyond Detail for ceramic coating?</strong> We're Ceramic Pro certified, offer 2-5 year protection packages,
                include paint correction in every service, and provide lifetime warranty on all installations.
                ⭐ Trusted by 70+ five-star reviews from satisfied GTA customers.
              </p>
            </div>
          </section>

          {/* Internal Linking Section */}
          <div className="seo-content-box" style={{ maxWidth: '1000px', margin: '3rem auto 0' }}>
            <p className="seo-text-lg">
              Beyond Detail offers the best <strong><Link to="/ceramic-coating-scarborough">ceramic coating in Toronto</Link></strong>.
              Our packages include professional <Link to="/paint-correction">paint correction</Link> to ensure a flawless finish before coating.
              Protect your vehicle's paint from **Toronto's harsh winter** weather and road salt with our lifetime warranty packages.
              Curious about the **cost**? We provide transparent pricing for all services.
              We also offer <Link to="/auto-detail">comprehensive auto detailing</Link> to keep your interior looking as good as your exterior.
            </p>
          </div>

          <PaintCorrectionInfo
            title="Professional Ceramic Coating Services"
            description="Our ceramic coating service includes comprehensive paint correction to ensure your coating bonds perfectly and performs at its best. Every package includes paint correction to remove imperfections before coating application."
            benefits={[
              {
                title: "Extreme Gloss & Hydrophobicity",
                description: "Experience the 'wet look' shine that lasts for years. Water beads up and rolls off, carrying dirt with it (Self-Cleaning Effect)."
              },
              {
                title: "No More Waxing",
                description: "Forget polishing every few months. Ceramic coating is a permanent bond that replaces the need for waxes or sealants forever."
              },
              {
                title: "UV & Chemical Resistance",
                description: "Protects against UV oxidation (fading paint) and chemical etching from bird droppings, bug splatter, and tree sap."
              },
              {
                title: "Winter Salt Protection",
                description: "Crucial for Scarborough winters. The coating prevents road salt and calcium chloride from bonding to and corroding your clear coat."
              },
              {
                title: "9H Hardness Protection",
                description: "Adds a sacrificial layer harder than your factory clear coat to resist wash marring and light swirl marks."
              },
              {
                title: "Higher Resale Value",
                description: "A ceramic coated car stays looking newer, longer. The Carfax-reported service records can increase resale value."
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
                name: "Bronze Package (1-Year)",
                priceRange: { start: 599 },
                priceNote: "Starting Price. Includes Stage 1 Paint Correction.",
                description: "Entry-level ceramic protection. Includes a Single-Stage Polish to remove light swirls and a 1-Year Ceramic Coating layer.",
                features: [
                  "Foam Bath & Decontamination",
                  "Stage 1 Machine Polish (Gloss)",
                  "1-Year Ceramic Coating",
                  "Windshield Coating",
                  "Wheel Face Coating"
                ],
                ctaText: "Book Bronze Pkg"
              },
              {
                name: "Silver Package (3-Year)",
                priceRange: { start: 899 },
                priceNote: "Starting Price. Includes Stage 2 Paint Correction.",
                description: "Our bestseller. Includes a comprehensive Two-Stage Correction to remove deeper defects, followed by a durable 3-Year Ceramic Coating.",
                features: [
                  "Foam Bath & Decontamination",
                  "Stage 2 Paint Correction (Defect Removal)",
                  "3-Year Ceramic Coating (9H)",
                  "Plastic Trim Coating",
                  "Windshield & Wheel Faces",
                  "Warranty Card Included"
                ],
                featured: true,
                ctaText: "Book Silver Pkg"
              },
              {
                name: "Gold Package (Lifetime)",
                priceRange: { start: 1200 },
                priceNote: "Starting Price. Includes Stage 3 Paint Correction.",
                description: "Ultimate perfection & protection. Includes Three-Stage Restoration for a flawless finish, capped with multiple layers of Lifetime Ceramic.",
                features: [
                  "Stage 3 Paint Correction (Restoration)",
                  "Lifetime Ceramic Coating (Multiple Layers)",
                  "Wheels off Coating (Barrels + Calipers)",
                  "All Glass & Trim Coated",
                  "Lifetime Warranty Registration",
                  "Annual Inspection Included"
                ],
                ctaText: "Book Gold Pkg"
              }
            ]}
          />
          <Suspense fallback={null}>
            <GoogleReviewsCarousel />
          </Suspense>
          <CeramicCoatingInfo />
          <FAQSection data={ceramicCoatingFAQs} title="Ceramic Coating FAQs" />

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

export default React.memo(CeramicCoating);
