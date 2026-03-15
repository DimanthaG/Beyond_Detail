import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, ErrorBoundary, FAQSection, TrustBadges, SkillShowcase } from '../../components';
import { CERAMIC_COATING_PACKAGES } from '../../constants/servicePackages';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import CeramicCoatingInfo from '../../components/CeramicCoatingInfo/CeramicCoatingInfo';
import './CeramicCoating.scss';

import CeramicCoatingHero from '../../components/CeramicCoatingHero/CeramicCoatingHero';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function CeramicCoating() {
  const ceramicCoatingFAQs = [
    {
      question: "What is a ceramic coating?",
      answer: "A ceramic coating is a liquid polymer that chemically bonds to your vehicle's paint, creating a permanent layer of protection. It is significantly harder and more durable than wax or sealant, offering years of protection against UV rays, bird droppings, road salts, and chemical stains."
    },
    {
      question: "How long does ceramic coating last?",
      answer: "Our professional ceramic coatings last between 3 to 7 years depending on the package chosen and how the vehicle is maintained. Unlike wax which lasts weeks, ceramic coating provides long-term peace of mind."
    },
    {
      question: "Is ceramic coating scratch proof?",
      answer: "Ceramic coating is scratch-resistant, not scratch-proof. It protects against light wash marring and fine swirls, but it will not prevent deep key scratches or rock chips. For rock chip protection, we recommend Paint Protection Film (PPF)."
    },
    {
      question: "Do I still need to wash my car?",
      answer: "Yes, you still need to wash your car, but it will be much easier! The hydrophobic properties mean dirt and grime don't stick as easily, so your car stays cleaner longer and washes clean with minimal effort."
    },
    {
      question: "Can I take my ceramic coated car to an automatic car wash?",
      answer: "We strongly advise AGAINST soft-cloth automatic car washes (the ones with brushes) as they can still mar the finish. Touchless washes are generally safe, but hand washing is always the best method to maintain the coating's longevity."
    }
  ];

  return (
    <>
      <SEO
        title='Ceramic Coating Scarborough | IGL Certified | From $599'
        description='IGL Kenzo certified ceramic coating in Scarborough. 2-9 year protection from $599. Free consultation. Call Beyond Detail — (647) 689-6109.'
        name='Beyond Detail Ceramic Coating'
        type='website'
        serviceType='Ceramic Coating'
        keywords='ceramic coating scarborough, car paint protection, hydrophobic coating, paint protection toronto, ceramic pro alternative'
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
          <Breadcrumb />
          <CeramicCoatingHero
            scrollTarget="#pricing"
            titleLine1="Ceramic"
            titleLine2="Coating"
            titleLine3="Protection"
            subtitle="The ultimate shield for your vehicle. <strong>Unmatched gloss</strong> and <strong>years of protection</strong>."
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

          {/* Premium Overview */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="seo-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ultimate Paint Protection</h2>
              <p className="seo-text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
                Living in Scarborough means dealing with road salt, UV rays, and bird droppings.
                A <strong>Professional Ceramic Coating</strong> hardens your clear coat, making it resistant to chemical etching and oxidation.
                Plus, the hydrophobic finish means your car stays cleaner, longer.
              </p>
            </div>
          </section>

          {/* What Is Ceramic Coating */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '0 1.5rem' }}
          >
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>What Is Ceramic Coating?</h2>
            <div style={{ color: '#e0e0e0', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                Ceramic coating is a liquid polymer made primarily from SiO2 (silicon dioxide) — the same compound found in quartz and glass. When applied to your vehicle's clear coat, it chemically bonds at the molecular level, creating a semi-permanent layer of protection that cannot be washed off like wax.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Think of it this way: wax sits on top of your paint. A sealant sits on top and lasts a bit longer. Ceramic coating actually bonds into the pores of the clear coat, becoming part of the surface itself. That is why it lasts years instead of weeks.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                At Beyond Detail, we use <strong>IGL Coatings</strong> — specifically the <strong>IGL Kenzo</strong> line for our top-tier packages and <strong>IGL Quartz+</strong> for our entry-level protection. IGL is a professional-only brand, meaning you cannot buy it off the shelf. Their formulations are designed for controlled application by trained installers.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                The result is a surface that repels water, resists chemical staining from bird droppings and bug splatter, blocks UV oxidation, and makes washing dramatically easier. Your paint holds its depth and gloss for years — not because of a temporary product sitting on top, but because the coating has become part of the surface.
              </p>
            </div>
          </motion.section>

          {/* Why Ceramic Coat in Scarborough */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '2.5rem 2rem', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}
          >
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>Why Ceramic Coat Your Car in Scarborough?</h2>
            <div style={{ color: '#e0e0e0', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                Scarborough is rough on paint. There is no way around it. Winter brings months of road salt and calcium chloride that eat into your clear coat. Summer brings UV exposure that fades and oxidizes unprotected surfaces. And if you commute on the 401 or DVP, your paint is catching rocks, brake dust, and highway debris every single day.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Then there are the neighbourhood hazards — tree sap dripping onto your car in spring and summer, construction dust from the constant development across the GTA, bird droppings that etch into paint within hours on a hot day.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                A ceramic coating does not make your car invincible, but it gives the paint a fighting chance. Salt washes off instead of clinging. UV rays get blocked before they reach the clear coat. Bird droppings sit on the hydrophobic surface instead of bonding to it. For a vehicle that lives in Scarborough year-round, ceramic coating is not a luxury — it is practical protection.
              </p>
            </div>
          </motion.section>

          {/* Our Ceramic Coating Process */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '0 1.5rem' }}
          >
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>Our Ceramic Coating Process</h2>
            <p style={{ color: '#e0e0e0', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              We do not cut corners. Every ceramic coating installation at our Finchdene Square studio follows the same process, whether it is a daily driver or a weekend car. Here is exactly what happens to your vehicle:
            </p>
            <div style={{ color: '#e0e0e0', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f07900', fontWeight: 'bold', fontSize: '1.3rem', minWidth: '28px' }}>1.</span>
                <div><strong style={{ color: '#fff' }}>Paint Assessment and Measurement</strong> — We measure paint thickness with a gauge and inspect under LED lighting to identify scratches, swirl marks, oxidation, and any previous bodywork. This determines how much correction is needed.</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f07900', fontWeight: 'bold', fontSize: '1.3rem', minWidth: '28px' }}>2.</span>
                <div><strong style={{ color: '#fff' }}>Multi-Stage Decontamination</strong> — Iron remover to dissolve embedded brake dust. Clay bar treatment to pull out bonded contaminants. Tar remover for any adhesive residue. The paint needs to be completely clean before we touch a polishing pad to it.</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f07900', fontWeight: 'bold', fontSize: '1.3rem', minWidth: '28px' }}>3.</span>
                <div><strong style={{ color: '#fff' }}>Paint Correction</strong> — Machine polishing to remove swirl marks, scratches, and oxidation. We use dual-action and rotary polishers depending on the defect. The goal is to get the paint as close to perfect as possible before the coating locks it in.</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f07900', fontWeight: 'bold', fontSize: '1.3rem', minWidth: '28px' }}>4.</span>
                <div><strong style={{ color: '#fff' }}>IPA Wipe-Down</strong> — Isopropyl alcohol wipe to strip all polishing oils and residue. This ensures the ceramic coating bonds directly to the clear coat with nothing in between.</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f07900', fontWeight: 'bold', fontSize: '1.3rem', minWidth: '28px' }}>5.</span>
                <div><strong style={{ color: '#fff' }}>Ceramic Coating Application</strong> — Applied panel by panel in our temperature-controlled studio. Each panel is coated, levelled, and allowed to flash before moving to the next. Rushing this step causes high spots and uneven coverage.</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f07900', fontWeight: 'bold', fontSize: '1.3rem', minWidth: '28px' }}>6.</span>
                <div><strong style={{ color: '#fff' }}>24-Hour Cure</strong> — Your vehicle stays in our controlled environment for a minimum of 24 hours. The coating needs time to fully cure without exposure to moisture, dust, or temperature swings.</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f07900', fontWeight: 'bold', fontSize: '1.3rem', minWidth: '28px' }}>7.</span>
                <div><strong style={{ color: '#fff' }}>Quality Inspection</strong> — Final inspection under LED and halogen lighting. We check every panel for high spots, missed areas, and coating uniformity before the vehicle leaves.</div>
              </div>
            </div>
          </motion.section>

          {/* Ceramic Coating vs Wax vs PPF */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '2.5rem 2rem', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}
          >
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>Ceramic Coating vs Wax vs PPF</h2>
            <div style={{ color: '#e0e0e0', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                People often ask which is "better" — but it depends entirely on what you are trying to protect against and what you are willing to spend.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#fff' }}>Carnauba wax</strong> gives a warm, deep shine that many car enthusiasts love. But it breaks down within weeks, especially in Canadian weather. You are reapplying constantly. Synthetic sealants last a few months, but they are still a temporary surface layer.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#fff' }}>Ceramic coating</strong> lasts years because it chemically bonds. It protects against UV, chemical staining, and light scratches. It makes maintenance easier. But it does not stop a rock from chipping your paint.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                That is where <strong style={{ color: '#fff' }}>Paint Protection Film (PPF)</strong> comes in. PPF is a physical film — typically 8 mil thick — that absorbs impacts. Rock chips, door dings, key scratches. If you drive Highway 401 daily or park in public lots, PPF on the front end is worth serious consideration. Many of our clients combine PPF on high-impact zones with ceramic coating on the rest of the vehicle. That gives you both physical and chemical protection.
              </p>
              <p>
                We are happy to walk you through which option makes sense for your vehicle, your budget, and how you drive.
              </p>
            </div>
          </motion.section>

          {/* How Long Does Ceramic Coating Last */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '0 1.5rem' }}
          >
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>How Long Does Ceramic Coating Last?</h2>
            <div style={{ color: '#e0e0e0', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                The honest answer: it depends. Product quality, application technique, and how you maintain the vehicle all factor in. Anyone guaranteeing "lifetime protection" is not being straight with you.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Here is what we offer and what you can realistically expect:
              </p>
              <div style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid #f07900' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#fff' }}>Entry Level (IGL Quartz+)</strong> — 2 years of protection. A solid option for vehicles you plan to trade in or lease returns. Gets you the hydrophobic properties and UV resistance at a lower investment.</p>
              </div>
              <div style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid #f07900' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#fff' }}>Pro Level (IGL Kenzo)</strong> — 5 years of protection. Our most popular package. Thicker application, deeper gloss, stronger chemical resistance. This is where most daily drivers land.</p>
              </div>
              <div style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid #f07900' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong style={{ color: '#fff' }}>Ultimate (IGL Kenzo Multi-Layer)</strong> — Up to 9 years of protection. Multiple layers of IGL Kenzo with an additional top coat. Reserved for clients who plan to keep their vehicles long-term and want maximum durability.</p>
              </div>
              <p>
                These numbers assume you follow proper maintenance. Skip washes for months, run it through brush washes, and even the best coating degrades faster. Maintain it properly, and it often outlasts the quoted lifespan.
              </p>
            </div>
          </motion.section>

          {/* Ceramic Coating Maintenance Tips */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '2.5rem 2rem', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}
          >
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>Ceramic Coating Maintenance Tips</h2>
            <div style={{ color: '#e0e0e0', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                A ceramic coating is not "set and forget." It is low maintenance, not no maintenance. Here is how to keep it performing:
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#fff' }}>Wash with pH-neutral soap only.</strong> Harsh detergents and dish soap strip the hydrophobic top layer over time. Use a dedicated car wash soap — we recommend IGL's maintenance line and can point you to the right products.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#fff' }}>Avoid automatic car washes.</strong> The spinning brushes in soft-cloth washes will put swirl marks into any surface, coated or not. Touchless washes are acceptable in a pinch, but hand washing with the two-bucket method is always the safest option.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#fff' }}>Apply a maintenance spray every 3-6 months.</strong> This refreshes the hydrophobic layer and extends the coating's effective life. Think of it like conditioning leather — the base is durable, but periodic care keeps it performing at its peak.
              </p>
              <p>
                <strong style={{ color: '#fff' }}>Be mindful of where you park.</strong> Tree sap and bird droppings should be removed as soon as possible. Even with a coating, acidic contaminants can etch if left baking in the sun for days. If you park under trees regularly, consider a quick rinse once a week.
              </p>
            </div>
          </motion.section>

          <CeramicCoatingInfo />

          <div id="pricing">
            <ServicePricing
              title="Ceramic Coating Packages"
              packages={CERAMIC_COATING_PACKAGES}
            />
          </div>

          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', borderRadius: '12px', marginBottom: '3rem', border: '1px solid var(--glass-border)' }}>
            <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
              Why Choose Beyond Detail?
            </h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
              <p>
                We don't just "apply a wax". We perform a full <Link to="/paint-correction" style={{ color: '#f07900' }}>Paint Correction</Link> before every ceramic coating installation
                to ensure we are locking in perfect paint, not scratches.
                Our studio at <strong>170 Finchdene Square</strong> is temperature-controlled to ensure proper curing of professional-grade coatings.
              </p>
            </div>
          </section>

          <Suspense fallback={null}>
            <GoogleReviewsCarousel />
          </Suspense>

          <TrustBadges />
          <SkillShowcase />

          <FAQSection data={ceramicCoatingFAQs} title="Ceramic Coating FAQs" />
          <Contact />
        </div>
      </motion.div>
    </>
  );
}

export default React.memo(CeramicCoating);
