'use client';

import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQSection/FAQSection';
import SkillShowcase from '@/components/SkillShowcase/SkillShowcase';
import TrustBadges from '@/components/TrustBadges/TrustBadges';
import ServicePricing from '@/components/ServicePricing/ServicePricing';
import { AUTO_DETAIL_PACKAGES } from '@/constants/servicePackages';
import AutoDetailHero from '@/components/AutoDetailHero/AutoDetailHero';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ServiceContactCTA from '@/components/ServiceContactCTA/ServiceContactCTA';
import './Services.scss';

const ServiceGallery = lazy(() => import('@/components/ServiceGallery/ServiceGallery'));
const GoogleReviewsCarousel = lazy(() => import('@/components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

export default function AutoDetailClient() {
  const autoDetailFAQs = [
    {
      question: "How much does auto detailing cost in Scarborough?",
      answer: "Our auto detailing packages in Scarborough include both interior and exterior service. The Essential Detail starts at $199, our most popular Complete Detail starts at $279, and the Ultimate Detail starts at $349. Interior-only packages start at $149. Prices vary based on vehicle size and condition."
    },
    {
      question: "How long does a full auto detail take?",
      answer: "A full auto detail typically takes between 3 to 6 hours, depending on the condition of the vehicle and the specific package chosen. We focus on quality and ensure every inch of your vehicle is spotless."
    },
    {
      question: "Where are you located in Scarborough?",
      answer: "Beyond Detail is located at 170 Finchdene Square, Unit 11, Scarborough, ON M1X 1B3. We serve clients from across Toronto, Markham, Pickering, and Durham Region."
    },
    {
      question: "Do you offer mobile detailing?",
      answer: "We primarily operate from our professional shop to ensure the highest quality results using our specialized equipment and lighting. However, please contact us for specific mobile fleet service inquiries."
    }
  ];

  return (
    <div className='auto-detail__wrapper'>
      <Breadcrumb />
      <AutoDetailHero scrollTarget="#pricing" />

      <Suspense fallback={null}>
        <ServiceGallery
          serviceType="auto-detail"
          title="Auto Detailing Gallery"
          forceLandscape
        />
      </Suspense>

      {/* Premium Overview */}
      <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="seo-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Masterful Auto Detailing</h2>
          <p className="seo-text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Beyond Detail provides professional auto detailing services throughout the Greater Toronto Area.
            Whether you need a quick refresh or a deep restoration, our packages are designed to bring your vehicle back to showroom condition.
          </p>
        </div>
      </section>

      <div id="pricing">
        <ServicePricing
          title="Our Detailing Packages"
          packages={AUTO_DETAIL_PACKAGES}
        />
      </div>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', borderRadius: '12px', marginBottom: '3rem', border: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
          Full Service Auto Detailing in Scarborough & GTA
        </h2>
        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
          <p>
            Beyond Detail is your premier destination for <strong>auto detailing in Scarborough</strong>.
            Our professional detailing studio at <strong>170 Finchdene Square, Unit 11</strong> is fully equipped to handle everything from
            interior shampooing and steam cleaning to exterior paint correction. Whether you&apos;re coming from
            <strong> Markham, Pickering, Toronto</strong>, or right here in Scarborough, our detailers treat every vehicle with obsessive care.
          </p>
          <p style={{ marginTop: '1rem' }}>
            We specialize in removing salt stains, pet hair, and odors—common issues for GTA drivers.
            Our <Link href="/paint-correction" style={{ color: '#f07900', textDecoration: 'none' }}>paint correction</Link> and <Link href="/ceramic-coatings" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating</Link> services
            are designed to protect your vehicle against Toronto&apos;s harsh seasons.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          <Link href="/interior-detailing" className="btn-premium">Interior Only</Link>
          <Link href="/exterior-detailing" className="btn-premium">Exterior Only</Link>
        </div>
      </section>

      {/* What Goes Into a Professional Detail */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 3rem', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            padding: '3rem 2.5rem',
          }}
        >
          <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>
            What Goes Into a Professional Detail?
          </h2>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e0e0e0' }}>
            <p>
              A professional detail is not a car wash. A drive-through wash uses recycled water, harsh
              chemicals, and spinning brushes that grind dirt across your paint. Over time, that creates
              swirl marks and dull, hazy clearcoat. A detail does the opposite — it removes damage
              instead of causing it.
            </p>
            <p style={{ marginTop: '1rem' }}>
              We start every exterior detail with a two-bucket wash method — one bucket for clean soapy
              water, one for rinsing your mitt. This prevents cross-contamination. From there, we clay
              bar the paint to pull out embedded contaminants like iron particles, brake dust, and tree
              sap that washing alone cannot remove. The surface goes from rough to glass-smooth.
            </p>
            <p style={{ marginTop: '1rem' }}>
              On the interior side, we use hot water extraction to deep-clean fabric seats and carpets,
              pulling out dirt that has been ground in over months. Leather surfaces get cleaned and
              conditioned to prevent cracking. Vents, crevices, and door jambs are all addressed — the
              areas most shops skip. The difference between a car wash and a detail is the difference
              between wiping a counter and actually cleaning your kitchen.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Car Detailing in Scarborough — What to Expect */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 3rem', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            padding: '3rem 2.5rem',
          }}
        >
          <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>
            Car Detailing in Scarborough — What to Expect
          </h2>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e0e0e0' }}>
            <p>
              Our studio is at <strong>170 Finchdene Square, Unit 11</strong>, in the Finchdene industrial
              area of Scarborough. Easy to find, free parking right at the door. Most clients book online
              or call us at <strong>(647) 689-6109</strong> to set up a drop-off time.
            </p>
            <p style={{ marginTop: '1rem' }}>
              An Essential Detail takes about 2-3 hours. A Complete Detail runs 4-5 hours, and an Ultimate
              Detail can take a full day depending on vehicle condition. Same-day service is available for
              Essential and Complete packages when booked before noon. We will text you when your vehicle
              is ready for pick-up — no guessing, no waiting around.
            </p>
            <p style={{ marginTop: '1rem' }}>
              We serve drivers from across Scarborough, Markham, Pickering, Ajax, and the rest of the
              GTA. If you are coming from downtown Toronto, we are about 25 minutes east on the 401.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Interior vs Exterior Detailing */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 3rem', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            padding: '3rem 2.5rem',
          }}
        >
          <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>
            Interior vs Exterior Detailing
          </h2>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e0e0e0' }}>
            <p>
              Not every vehicle needs both interior and exterior work at the same time. We offer them
              separately so you only pay for what you actually need.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <strong style={{ color: '#fff' }}>Interior detailing</strong> covers vacuuming, steam cleaning, fabric or
              leather deep cleaning, dashboard and console wipe-down, and window cleaning from the inside.
              If you have kids who eat in the car, a dog that rides in the back, or you just spilled coffee
              on the passenger seat — interior-only is the move. We also treat odors at the source rather
              than masking them with air fresheners.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <strong style={{ color: '#fff' }}>Exterior detailing</strong> includes a full hand wash, clay bar
              decontamination, tire and wheel cleaning, trim restoration, and a protective sealant or wax.
              If your paint still looks good but the outside is covered in road grime, brake dust, or water
              spots, an exterior-only detail handles that.
            </p>
            <p style={{ marginTop: '1rem' }}>
              A <strong style={{ color: '#fff' }}>full detail</strong> — interior plus exterior — is what we
              recommend seasonally or before selling a vehicle. After a long winter of salt and slush, a
              spring full detail makes a noticeable difference in how the car looks and feels. Check out
              our <Link href="/interior-detailing" style={{ color: '#f07900', textDecoration: 'none' }}>interior
              detailing</Link> and <Link href="/exterior-detailing" style={{ color: '#f07900', textDecoration: 'none' }}>exterior
              detailing</Link> pages for package breakdowns.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How Often Should You Detail Your Car */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 3rem', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            padding: '3rem 2.5rem',
          }}
        >
          <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>
            How Often Should You Detail Your Car?
          </h2>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e0e0e0' }}>
            <p>
              Here is honest advice — you do not need a full detail every month. For most drivers, a
              hand wash every 2-4 weeks keeps the exterior in good shape between details. A full interior
              and exterior detail every 3-6 months is enough for the average daily driver. Interior deep
              cleaning twice a year handles the buildup that regular vacuuming misses.
            </p>
            <p style={{ marginTop: '1rem' }}>
              That said, Scarborough and the GTA throw a lot at your vehicle. Road salt in winter eats
              into paint and undercarriage. Construction dust in summer settles into every gap. If you
              park outside, tree sap, bird droppings, and UV exposure speed up paint degradation. Drivers
              in these conditions benefit from detailing on the higher end of that range — every 3 months
              rather than 6.
            </p>
            <p style={{ marginTop: '1rem' }}>
              If you want to reduce how often you need a detail, consider{' '}
              <Link href="/ceramic-coatings" style={{ color: '#f07900', textDecoration: 'none' }}>ceramic coating</Link>.
              A coated vehicle is easier to maintain and stays cleaner between washes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Detailing for Different Vehicle Types */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 3rem', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            padding: '3rem 2.5rem',
          }}
        >
          <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1.5rem' }}>
            Detailing for Different Vehicle Types
          </h2>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e0e0e0' }}>
            <p>
              Vehicle size affects both the time required and the price. A sedan is straightforward — less
              surface area, faster turnaround. SUVs and crossovers take longer due to additional cargo
              space, larger panels, and typically dirtier wheel wells. Full-size trucks and vans require
              the most time and are priced accordingly.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Beyond size, certain finishes need specialized care. <strong style={{ color: '#fff' }}>Leather interiors</strong> require
              pH-balanced cleaners and conditioners — using all-purpose cleaner on leather dries it out
              and leads to cracking. <strong style={{ color: '#fff' }}>Matte paint finishes</strong> cannot be
              polished or waxed with standard products; they need matte-specific sealants that preserve
              the flat look. <strong style={{ color: '#fff' }}>Vinyl-wrapped vehicles</strong> need gentle
              hand washing only — no clay bar, no machine polish on wrapped panels.
            </p>
            <p style={{ marginTop: '1rem' }}>
              When you book, let us know what you drive and any special finishes. We adjust our process
              and products to match. No guesswork, no one-size-fits-all approach.
            </p>
          </div>
        </motion.div>
      </section>

      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>

      <TrustBadges />
      <SkillShowcase />
      <FAQSection data={autoDetailFAQs} title="Auto Detailing FAQs" />

      <ServiceContactCTA
        title="READY TO DETAIL YOUR VEHICLE?"
        description="Contact us today for a personalized quote. Same-day service available."
      />
    </div>
  );
}
