'use client';

import React, { Suspense, lazy } from 'react';
import FAQSection from '@/components/FAQSection/FAQSection';
import TrustBadges from '@/components/TrustBadges/TrustBadges';
import SkillShowcase from '@/components/SkillShowcase/SkillShowcase';
import LeatherCleaningHero from '@/components/LeatherCleaningHero/LeatherCleaningHero';
import ServiceBenefits from '@/components/ServiceBenefits/ServiceBenefits';
import ServiceContactCTA from '@/components/ServiceContactCTA/ServiceContactCTA';
import './LeatherCleaning.scss';

const GoogleReviewsCarousel = lazy(() => import('@/components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

export default function LeatherCleaningClient() {
  const leatherCleaningFAQs = [
    {
      question: "How often should I condition my leather seats?",
      answer: "We recommend cleaning and conditioning leather seats every 3-6 months. This prevents natural oils from evaporating, which causes the leather to dry out, stiffen, and eventually crack."
    },
    {
      question: "Can proper cleaning fix cracked leather?",
      answer: "Cleaning and conditioning can soften the leather and prevent further damage, but it cannot 'heal' cracks that have already formed. Cracked leather typically requires specialized restoration or repair, which is a different process than maintenance cleaning."
    },
    {
      question: "Does leather cleaning remove jean dye transfer?",
      answer: "Yes, our leather cleaning process is very effective at removing dye transfer from jeans, especially on light-colored leather. The sooner it is treated, the better the results."
    },
    {
      question: "Is your leather cleaner safe for Nappa or ventilated seats?",
      answer: "Absolutely. We use pH-neutral, water-based cleaners and conditioners that are safe for all automotive leathers, including delicate Nappa leather and perforated/ventilated seats. We ensure no product clogs the perforation holes."
    }
  ];

  return (
    <div className='leather-cleaning__wrapper'>
      <LeatherCleaningHero scrollTarget="#contact" />

      {/* Premium Overview */}
      <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="seo-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Luxury Leather Care</h2>
          <p className="seo-text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Leather requires specialized care to maintain its supple feel and prevent cracking. Our professional cleaning and conditioning
            services use <strong>pH-neutral products</strong> safe for all automotive leather types.
          </p>
        </div>
      </section>

      <ServiceBenefits
        title="EXPERT LEATHER CARE SERVICES"
        subtitle="Restoration & Protection"
        description="Leather upholstery requires specialized care to maintain its luxury appearance and longevity. Our professional leather cleaning and conditioning services use premium products and techniques to clean, restore, and protect your vehicle's leather surfaces. We also offer advanced protective coatings that create a durable barrier against stains, spills, and wear."
        benefits={[
          {
            title: "Restored Suppleness",
            description: "Professional conditioning restores lost moisture and oils, bringing back the soft, supple feel of your leather that makes it comfortable and luxurious."
          },
          {
            title: "Stain & Spill Protection",
            description: "Advanced protective coatings create a barrier that prevents liquids and stains from penetrating leather, making spills easy to clean and preventing permanent damage."
          },
          {
            title: "Prevents Cracking & Fading",
            description: "Proper conditioning prevents leather from drying out and cracking, while UV protection prevents fading from sun exposure, extending the life of your leather."
          },
          {
            title: "Enhanced Appearance",
            description: "Thorough cleaning removes dirt, oils, and discoloration, revealing the true color and grain of your leather and restoring its original beauty."
          },
          {
            title: "Abrasion Resistance",
            description: "Protective coatings reduce wear on high-contact areas like side bolsters and armrests, maintaining the leather's appearance over time."
          },
          {
            title: "Long-Term Value",
            description: "Well-maintained leather significantly increases your vehicle's resale value and ensures your investment in luxury upholstery is protected."
          }
        ]}
        features={[
          "Complete leather surface inspection",
          "Professional deep cleaning treatment",
          "Stain removal and treatment",
          "Premium leather conditioning",
          "UV protection application",
          "Protective coating option available",
          "Abrasion-resistant treatment for high-wear areas",
          "All leather surfaces treated (seats, door panels, console)",
          "Color restoration and enhancement",
          "Crack prevention and repair",
          "Quality inspection",
          "Maintenance recommendations"
        ]}
      />

      <ServiceContactCTA
        title="READY TO RESTORE YOUR LEATHER?"
        description="Contact us today for a personalized quote and restore your leather to luxurious condition."
      />

      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>

      <TrustBadges />
      <SkillShowcase />
      <FAQSection data={leatherCleaningFAQs} title="Leather Cleaning FAQs" />
    </div>
  );
}
