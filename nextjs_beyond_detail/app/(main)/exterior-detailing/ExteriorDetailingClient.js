'use client';

import React, { Suspense, lazy } from 'react';
import FAQSection from '@/components/FAQSection/FAQSection';
import SkillShowcase from '@/components/SkillShowcase/SkillShowcase';
import TrustBadges from '@/components/TrustBadges/TrustBadges';
import ServiceInfoSection from '@/components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '@/components/ServicePricing/ServicePricing';
import ExteriorDetailingHero from '@/components/ExteriorDetailingHero/ExteriorDetailingHero';
import ServiceContactCTA from '@/components/ServiceContactCTA/ServiceContactCTA';
import './ExteriorDetailing.scss';

const GoogleReviewsCarousel = lazy(() => import('@/components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

export default function ExteriorDetailingClient() {
  const exteriorDetailingFAQs = [
    {
      question: "What does exterior detailing include?",
      answer: "Our exterior detailing service includes a thorough two-bucket hand wash, wheel and tire cleaning, clay bar decontamination to remove embedded grit, and application of a premium sealant for protection. Premium packages also include paint correction and ceramic coating options."
    },
    {
      question: "Will exterior detailing remove scratches?",
      answer: "Standard exterior detailing focuses on deep cleaning and protection. To remove scratches, swirl marks, and oxidation, you would need our 'Paint Correction' service, which can be added to any detailing package or booked as a standalone service."
    },
    {
      question: "How often should I detail my car's exterior?",
      answer: "We recommend a comprehensive exterior detail every 4-6 months to maintain your paint's condition and protection. However, regular maintenance washes should be done every 2 weeks to prevent dirt buildup and salt damage."
    },
    {
      question: "What is the difference between wax and sealant?",
      answer: "Waxes are typically natural products that offer a deep warm shine but last only 4-8 weeks. Sealants are synthetic, offering 4-6 months of durable protection against UV rays, road salts, and environmental contaminants. We use premium sealants for longer-lasting results."
    }
  ];

  return (
    <div className='exterior-detailing__wrapper'>
      <ExteriorDetailingHero scrollTarget="#pricing" />

      {/* Premium Overview */}
      <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="seo-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Professional Exterior Care</h2>
          <p className="seo-text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Our exterior detailing goes beyond a basic wash. We use <strong>safe hand-wash techniques</strong>, clay bar decontamination,
            and premium sealants to protect your paint from the elements.
          </p>
        </div>
      </section>

      <ServiceInfoSection
        title="Exterior Detailing Services"
        subtitle="Safe Wash & Paint Decontamination"
        description="Our exterior detailing goes far beyond a tunnel car wash. We use safe, manual techniques to remove bonded contaminants that regular washing misses, restoring smoothness and gloss to your paint without adding scratches."
        benefits={[
          {
            title: "Safe Hand Wash Process",
            description: "We strictly use the 'Two-Bucket Method' with grit guards and premium microfiber mitts to capture dirt safely and prevent swirl marks on your paint."
          },
          {
            title: "Chemical Decontamination",
            description: "We use specialized Iron Removers to dissolve purple-bleeding brake dust particles and industrial fallout embedded in your clear coat."
          },
          {
            title: "Clay Bar Treatment",
            description: "Mechanical decontamination using a clay bar pulls out stubborn bonded contaminants (tar, tree sap, overspray) to leave your paint glass-smooth."
          },
          {
            title: "Wheel, Rim & Caliper Detailing",
            description: "We reach deep into the wheel barrels and cleaning brake calipers to remove baked-on brake dust, not just cleaning the face of the rim."
          },
          {
            title: "Trim Restoration",
            description: "We clean and dress exterior plastics and rubber seals to prevent fading/whitening, restoring a rich satin black appearance."
          },
          {
            title: "Hydrophobic Paint Protection",
            description: "Every detail concludes with a silica spray sealant or high-grade carnauba wax to repel water, dirt, and UV rays for months."
          }
        ]}
        process={[
          {
            title: "Premium Hand Wash",
            description: "We begin with a premium two-bucket hand wash using high-quality products, carefully cleaning every exterior surface including paint, wheels, tires, door jams, and trunk jams."
          },
          {
            title: "Decontamination Treatment",
            description: "Clay bar treatment removes embedded contaminants, road film, and industrial fallout that normal washing cannot eliminate from the paint surface."
          },
          {
            title: "Tire & Wheel Care",
            description: "Wheels and tires are thoroughly cleaned, conditioned, and protected to maintain their appearance and prevent deterioration from brake dust and road debris."
          },
          {
            title: "Trim & Glass Cleaning",
            description: "All exterior trim pieces receive attention, and all glass surfaces are cleaned to crystal-clear perfection for optimal visibility."
          },
          {
            title: "Protection Application",
            description: "High-quality sealants are applied to protect your vehicle's finish and provide long-lasting shine and protection against the elements."
          },
          {
            title: "Final Inspection",
            description: "A comprehensive quality check ensures every detail has been addressed and your vehicle meets our high standards."
          }
        ]}
        features={[
          "Exterior Hand Wash",
          "Tire and Rims Cleaned",
          "Door Jams Cleaned",
          "Trunk Jams Cleaned",
          "Exterior Windows Cleaned",
          "All Mirrors Cleaned",
          "Clay Bar Decontamination (Signature & Premium)",
          "Premium Sealant Application (Signature & Premium)",
          "Paint Correction Available (Premium)",
          "Ceramic Coating Available (Premium)"
        ]}
      />

      <div id="pricing">
        <ServicePricing
          title="Exterior Detailing Packages"
          packages={[
            {
              name: "Express Exterior Wash",
              priceRange: { start: 60 },
              priceNote: "Starting price.",
              description: "A specialized safe hand-wash. Includes deep wheel cleaning, door jambs, and spray wax. No clay bar or heavy decon.",
              features: [
                "Safe Two-Bucket Hand Wash",
                "Deep Wheel Face Cleaning",
                "Spray Wax Application",
                "Tire Dressing",
                "Windows Cleaned"
              ],
              ctaText: "Book Express Wash"
            },
            {
              name: "Full Exterior Detail (Deep Clean)",
              priceRange: { start: 160 },
              priceNote: "Starting price.",
              description: "The complete reset. Includes Iron Removal, Clay Bar Treatment, and 6-month Sealant to make your paint smooth and protected.",
              features: [
                "Safe Hand Wash",
                "Deep Wheel Barrel & Caliper Cleaning",
                "Iron Decontamination (Chemical)",
                "Clay Bar Treatment (Mechanical)",
                "Exterior Trim Dressing",
                "Premium Silica Sealant (6-Month Protection)"
              ],
              featured: true,
              ctaText: "Book Full Detail"
            },
            {
              name: "Premium Exterior Service",
              priceRange: { start: 0, end: 0 },
              priceNote: "Paint Correction & Ceramic Coating Services",
              description: "For comprehensive paint correction and long-lasting ceramic coating protection, please see our Paint Correction and Ceramic Coating pages for detailed packages and pricing.",
              features: [
                "Professional Paint Correction",
                "Ceramic Coating Application",
                "Complete Exterior Restoration",
                "Long-Lasting Protection"
              ],
              ctaText: "View Paint Correction",
              links: [
                { text: "View Paint Correction", href: "/paint-correction" },
                { text: "View Ceramic Coating", href: "/ceramic-coating" }
              ]
            }
          ]}
        />
      </div>

      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>

      <TrustBadges />
      <SkillShowcase />
      <FAQSection data={exteriorDetailingFAQs} title="Exterior Detailing FAQs" />

      <ServiceContactCTA
        title="READY TO RESTORE YOUR EXTERIOR?"
        description="Contact us today for a personalized exterior detailing quote."
      />
    </div>
  );
}
