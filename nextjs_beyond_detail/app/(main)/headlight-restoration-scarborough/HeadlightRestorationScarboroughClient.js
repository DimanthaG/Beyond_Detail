'use client';

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sun, Shield, Settings, ArrowRight } from 'lucide-react';

const FAQSection = lazy(() => import('@/components/FAQSection/FAQSection'));
const TrustBadges = lazy(() => import('@/components/TrustBadges/TrustBadges'));
// TODO: Migrate Contact component to a shared component
// const Contact = lazy(() => import('@/components/Contact/Contact'));

const animationOne = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const transition = { duration: 0.4, ease: 'easeInOut' };

export default function HeadlightRestorationScarboroughClient() {
  const headlightFAQs = [
    {
      question: "Why do headlights turn yellow?",
      answer: "Factory headlight lenses come with a UV coating. Over time (usually 3-5 years), sunlight breaks this coating down, causing the plastic to oxidize and turn yellow or cloudy."
    },
    {
      question: "How long does restoration last?",
      answer: "We verify our restoration with a ceramic coating or PPF application to seal the lens. This prevents re-oxidation for years, unlike cheap kits that yellow again in months."
    },
    {
      question: "Does it improve visibility?",
      answer: "Absolutely. Restored headlights can improve light output by up to 50-80%, significantly increasing safety during night driving in Scarborough."
    }
  ];

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={{ ...transition, delay: 0 }}
      className="headlight-restoration-page"
    >
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(/images/services/paint-correction.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 20px 80px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>
            Headlight <span style={{ color: '#f07900' }}>Restoration</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
            Don&apos;t replace—restore. We bring your dull, yellowed headlights back to crystal clear condition for a fraction of the replacement cost.
          </p>
          <Link href="/booking" style={{
            background: '#f07900', color: 'white', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'
          }}>Restore My Lights</Link>
        </div>
      </div>

      {/* Process Steps */}
      <div style={{ background: '#111', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '3rem', fontSize: '2.5rem' }}>Our Restoration Process</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', background: '#1a1a1a', padding: '2rem', borderRadius: '15px', border: '1px solid #333' }}>
              <div style={{ background: '#222', padding: '1.5rem', borderRadius: '50%', color: '#f07900', fontWeight: 'bold', fontSize: '1.5rem' }}>1</div>
              <div>
                <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Multi-Stage Wet Sanding</h3>
                <p style={{ color: '#ccc' }}>We actively remove the layer of dead, oxidized plastic using progressively finer grades of sandpaper until the surface is smooth.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', background: '#1a1a1a', padding: '2rem', borderRadius: '15px', border: '1px solid #333' }}>
              <div style={{ background: '#222', padding: '1.5rem', borderRadius: '50%', color: '#f07900', fontWeight: 'bold', fontSize: '1.5rem' }}>2</div>
              <div>
                <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Compound & Polish</h3>
                <p style={{ color: '#ccc' }}>Using machine polishers and specialized compounds, we refine the sanding marks to bring back optical clarity and shine.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', background: '#1a1a1a', padding: '2rem', borderRadius: '15px', border: '1px solid #333' }}>
              <div style={{ background: '#222', padding: '1.5rem', borderRadius: '50%', color: '#f07900', fontWeight: 'bold', fontSize: '1.5rem' }}>3</div>
              <div>
                <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>UV Protection Sealant</h3>
                <p style={{ color: '#ccc' }}>Crucial Step: We apply a ceramic coating or dedicated UV sealant to prevent the headlights from fading again.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <TrustBadges />
      </Suspense>

      <Suspense fallback={null}>
        <FAQSection data={headlightFAQs} title="Headlight Restoration FAQs" />
      </Suspense>

      {/* TODO: Add Contact component once migrated to shared */}
    </motion.div>
  );
}
