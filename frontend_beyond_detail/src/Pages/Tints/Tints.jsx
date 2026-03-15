import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, ErrorBoundary, FAQSection, TrustBadges, SkillShowcase } from '../../components';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { WINDOW_TINT_PACKAGES } from '../../constants/servicePackages';
import './Tints.scss';

// Lazy load heavy components to improve initial bundle size
import TintsHero from '../../components/TintsHero/TintsHero';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const TintsPercentageTabs = lazy(() => import('../../components/TintsPercentageTabs/TintsPercentageTabs'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function Tints() {
  // FAQ Data
  const tintsFAQs = [
    {
      question: "How much does window tinting cost in Scarborough?",
      answer: "Window tinting in Scarborough typically ranges from $200-$600 depending on your vehicle type and film selection. At Beyond Detail, we offer premium LLUMAR tinting starting at $250 for sedans, with lifetime warranty included. Prices vary based on vehicle size (sedan, SUV, truck) and film type (ATC, CTX, or IRX series)."
    },
    {
      question: "Is window tinting legal in Ontario?",
      answer: "Yes, window tinting is legal in Ontario with specific regulations. Front side windows must allow at least 70% light transmission (VLT). Rear side windows and back windshield can be any darkness. Windshield can only have tint on the top 127mm (5 inches). We ensure all installations comply with Ontario regulations."
    },
    {
      question: "Are ceramic tints legal in Ontario?",
      answer: "Yes, ceramic tints like LLumar IRX are fully legal in Ontario as long as they meet VLT (Visible Light Transmission) requirements. Since ceramic films are available in clear or light shades (like 70% or 80%), you can get maximum heat rejection legally on front windows without breaking the law."
    },
    {
      question: "How long does window tint installation take?",
      answer: "Professional window tint installation typically takes 2-4 hours depending on your vehicle type. Sedans usually take 2-3 hours, while larger SUVs or trucks may take 3-4 hours. We use computer-cut LLUMAR films for precise fit and faster installation. Same-day service available in Scarborough."
    },
    {
      question: "What is the best window tint for Scarborough summers?",
      answer: "For maximum heat rejection during Scarborough summers, we recommend **LLumar IRX Series Ceramic Tint**. It blocks up to **97% of infrared heat** and 99% of UV rays, keeping your car significantly cooler than standard dyed films. It's the ultimate choice for comfort in the GTA."
    },
    {
      question: "Does window tint come with a warranty?",
      answer: "Yes! All our LLUMAR window tint installations include a lifetime warranty covering fading, bubbling, peeling, and cracking. This manufacturer-backed warranty is transferable if you sell your vehicle, adding to its resale value. We also provide a satisfaction guarantee on all installations."
    },
    {
      question: "Can I wash my car after window tinting?",
      answer: "Wait 3-5 days before washing your car after window tint installation. This allows the tint to fully cure and adhere to the glass. Avoid rolling down windows for 3-5 days as well. After the curing period, you can wash normally using soft cloths and ammonia-free cleaners. We provide detailed aftercare instructions."
    }
  ];

  return (
    <>
      <SEO
        title='Window Tinting Scarborough | Llumar & Huper Optik | Beyond Detail'
        description='Legal window tinting in Scarborough. Llumar & Huper Optik films. Heat rejection, UV protection. From $199. Call Beyond Detail — (647) 689-6109.'
        name='Beyond Detail Scarborough'
        type='website'
        serviceType='Window Tinting'
        keywords='Llumar Window Tinting Scarborough, Window Tinting Scarborough, Ceramic Window Tint Scarborough, Llumar Authorized Dealer, Heat Rejection Film Scarborough, IRX Window Tint'
        faq={tintsFAQs}
      />
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={{ ...transition, delay: 0 }}
      >
        <div className='tints__wrapper'>
          <Breadcrumb />
          <TintsHero
            scrollTarget="#pricing"
            titleLine1="Llumar Window Tinting"
            titleLine2="Scarborough"
            titleLine3="Starting at $250"
          />

          <ErrorBoundary fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Gallery unavailable (offline)</div>}>
            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="window-tint"
                title="Window Tint Gallery"
              />
            </Suspense>
          </ErrorBoundary>

          {/* Premium Overview Section */}
          <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
            <h2 className="seo-title" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
              Advanced LLumar Ceramic Content
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ color: '#f07900', fontSize: '1.5rem', marginBottom: '1rem' }}>Why Choose Ceramic Tint?</h3>
                <p className="seo-text-lg">
                  Standard carbon tints only provide privacy. <strong>Ceramic tint</strong> blocks <strong>heat</strong>.
                  Our LLumar IRX films use nano-ceramic technology to reject up to <strong>97% of infrared heat</strong>, keeping your cabin significantly cooler in Scarborough summers.
                  It also blocks 99% of harmful UV rays, protecting your skin and preventing your dashboard from cracking.
                </p>
              </div>
              <div>
                <h3 style={{ color: '#f07900', fontSize: '1.5rem', marginBottom: '1rem' }}>Lifetime Warranty</h3>
                <p className="seo-text-lg">
                  We are an authorized LLumar dealer. Every installation comes with a <strong>manufacturer-backed lifetime warranty</strong> against bubbling, peeling, fading, or turning purple.
                  Located at <strong>170 Finchdene Square</strong>, we provide same-day service for clients across Toronto, Markham, and Pickering.
                </p>
              </div>
            </div>
          </section>

          {/* Window Tinting Legal Limits Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '900px', margin: '4rem auto', padding: '0 1.5rem' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Window Tinting in Scarborough — Legal Limits
            </h2>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              Ontario's Highway Traffic Act sets clear rules for window tint. Your front side windows (driver and passenger) must allow at least <strong style={{ color: '#fff' }}>70% visible light transmission (VLT)</strong> through the glass. That means the darkest legal film you can run on the front sides is roughly a 70% or "clear" ceramic film. There are no VLT restrictions on rear side windows or the back windshield — you can go as dark as 5% limo tint on those if you want.
            </p>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              The front windshield is a different story. Ontario only permits a visor strip along the top — no full-windshield tint. Aftermarket tint below that strip line is a ticket.
            </p>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              What happens if you get pulled over with illegal tint? Officers can use a VLT meter on the spot. If your front windows fail, you are looking at a fine under the HTA and a requirement to remove the film. Some inspection stations will also flag illegal tint during a safety certification, which means you cannot transfer ownership until it is fixed.
            </p>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8 }}>
              At Beyond Detail, we only install tint configurations that pass Ontario regulations. Every vehicle leaves our shop <strong style={{ color: '#f07900' }}>inspection-ready</strong>. We will walk you through the legal limits before we start, recommend the right VLT for each window, and make sure you are never in a position to get a ticket. If you want maximum heat rejection on your front windows without breaking the law, a clear ceramic film like Llumar IRX at 70% VLT is the answer — it blocks infrared heat without darkening the glass.
            </p>
          </motion.section>

          {/* Film Brand Comparison Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '900px', margin: '4rem auto', padding: '0 1.5rem' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Llumar vs Huper Optik vs 3M — Film Comparison
            </h2>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              We carry three professional-grade film brands at our Scarborough shop. Each one has its strengths, and the right choice depends on your priorities and budget.
            </p>

            <h3 style={{ color: '#f07900', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Llumar</h3>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Llumar is our most popular brand and the one we install most often. Their product line covers everything from entry-level dyed films (ATC series) to mid-range carbon (CTX) to high-performance ceramic (IRX). The IRX series rejects up to 97% of infrared heat, which is among the best in the industry. Every Llumar film comes with a <strong style={{ color: '#fff' }}>manufacturer-backed lifetime warranty</strong> covering bubbling, peeling, fading, and discolouration. For most clients, Llumar is the right call — solid performance, proven track record, and the warranty is straightforward to claim through authorized dealers like us.
            </p>

            <h3 style={{ color: '#f07900', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Huper Optik</h3>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Huper Optik is a ceramic-only brand. They do not make dyed or metallic films — everything in their lineup uses nano-ceramic particle technology. This means superior heat rejection across their entire range, not just the top-tier product. Huper Optik films also tend to have a more neutral colour tone compared to some competitors. If heat rejection is your primary concern and you want a film that will not interfere with GPS, Bluetooth, or satellite radio signals, Huper Optik is the specialist choice.
            </p>

            <h3 style={{ color: '#f07900', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>3M</h3>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              3M is a name most people recognize. Their Crystalline series is a strong ceramic film that offers high heat rejection in a virtually clear film — useful for drivers who want thermal comfort without any visible tint. Their Color Stable line is a good mid-range carbon option that holds its colour over time without turning purple. 3M films carry a solid warranty and consistent quality. They are a safe choice if brand recognition and resale confidence matter to you.
            </p>

            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <strong style={{ color: '#fff' }}>Our recommendation:</strong> For most Scarborough drivers, Llumar IRX gives you the best balance of heat rejection, clarity, and warranty coverage. If you are specifically after the highest heat performance and do not mind paying a premium, Huper Optik is the specialist pick. 3M is solid across the board. We can help you decide during a free consultation — just bring your vehicle by and we will show you samples on your glass.
            </p>
          </motion.section>

          {/* Benefits of Ceramic Window Tint Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '900px', margin: '4rem auto', padding: '0 1.5rem' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Benefits of Ceramic Window Tint
            </h2>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              Ceramic window tint is a different category from traditional dyed or metallic films. The nano-ceramic particles embedded in the film reject <strong style={{ color: '#fff' }}>up to 60% of total solar energy</strong> and block <strong style={{ color: '#fff' }}>99% of UV radiation</strong>. That UV protection is not just about comfort — it prevents your dashboard from cracking, keeps leather and fabric upholstery from fading, and reduces your skin's exposure to harmful rays during your daily commute.
            </p>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              Heat rejection is where ceramic film earns its price. On a 35-degree Scarborough summer day, a ceramic-tinted car will be noticeably cooler inside than the same car with standard dyed film. That means your air conditioning works less to cool the cabin, which translates to real fuel savings over the course of a season.
            </p>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Glare reduction is the other major benefit. Ceramic film cuts harsh sunlight without making the glass too dark to see through at night. Unlike metallic films, ceramic will not interfere with your phone signal, GPS, or toll transponder. It is the film that gives you everything without any trade-offs.
            </p>
          </motion.section>

          {/* Our Tinting Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '900px', margin: '4rem auto', padding: '0 1.5rem' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Our Tinting Process
            </h2>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              Every window tint job at Beyond Detail starts with <strong style={{ color: '#fff' }}>computer-cut film</strong>. We use a plotter system that cuts each piece to the exact dimensions of your vehicle's windows — no hand-cutting on your glass, no risk of blade marks on your trim or defrost lines. The patterns are pulled from a database of thousands of makes and models, so the fit is precise every time.
            </p>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              Before any film goes on, we thoroughly clean and prep each window. Our installation area is a controlled, <strong style={{ color: '#fff' }}>dust-minimized environment</strong> — contamination is the number one cause of bubbles and imperfections in tint work, and we take steps to eliminate it. The film is applied wet, then squeegeed to remove water and air, and heat-formed to match the curvature of the glass.
            </p>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8 }}>
              After installation, the film needs <strong style={{ color: '#f07900' }}>24 to 48 hours to fully cure</strong>. During this time, you may notice small water pockets or a slightly hazy appearance — this is completely normal and will clear as the adhesive dries. We ask that you keep your windows up for 3 to 5 days post-installation. The end result is a clean, bubble-free finish with no gaps or peeling edges.
            </p>
          </motion.section>

          {/* Window Tinting FAQ Content Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '900px', margin: '4rem auto', padding: '0 1.5rem' }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Common Window Tinting Questions
            </h2>

            <h3 style={{ color: '#f07900', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>How long does window tint last?</h3>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              With quality ceramic or carbon film and professional installation, window tint lasts the lifetime of the vehicle. Cheap dyed films from bargain shops can fade or turn purple within 2-3 years. The films we use at Beyond Detail — Llumar, Huper Optik, and 3M — all carry lifetime warranties because they are engineered to maintain their colour and performance for decades.
            </p>

            <h3 style={{ color: '#f07900', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>Can I wash my car after tinting?</h3>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Wait at least 3 to 5 days before washing your vehicle after tint installation. The adhesive needs time to fully bond to the glass, and water exposure can interfere with the curing process. After the cure period, wash normally — just avoid ammonia-based glass cleaners on the interior side, as ammonia can degrade tint film over time. Use a microfibre cloth and a tint-safe cleaner.
            </p>

            <h3 style={{ color: '#f07900', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>Does tint go on the inside or outside of the window?</h3>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Window tint film is always applied to the <strong style={{ color: '#fff' }}>interior side</strong> of the glass. This protects the film from road debris, weather, and car wash brushes. Applying it on the inside also gives a cleaner appearance and extends the film's lifespan significantly.
            </p>

            <h3 style={{ color: '#f07900', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>Will my tint bubble?</h3>
            <p style={{ color: '#a3a3a3', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Not with professional installation. Bubbling happens for two reasons: poor preparation (dust trapped under the film) or low-quality adhesive. We use computer-cut film in a controlled environment, and the adhesive systems on Llumar, Huper Optik, and 3M films are designed to bond permanently without separating. If you see small water pockets in the first few days after installation, that is normal — they disappear as the film cures. Persistent bubbles months or years later are a sign of a bad installation or cheap film, neither of which you will get at our shop.
            </p>
          </motion.section>

          <ServicePricing
            title="Window Tint Packages"
            packages={WINDOW_TINT_PACKAGES}
          />

          {/* Consolidated Technical Info */}
          <Suspense fallback={<Loading />}>
            <section style={{ margin: '4rem 0' }}>
              <TintsPercentageTabs />
            </section>

            <TrustBadges />
            <SkillShowcase />
            <FAQSection data={tintsFAQs} title="Window Tinting FAQs" />
            <Contact />
          </Suspense>
        </div>
      </motion.div>
    </>
  );
}

export default React.memo(Tints);
