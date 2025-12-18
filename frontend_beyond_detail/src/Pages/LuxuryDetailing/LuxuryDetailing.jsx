import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, FAQSection } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './LuxuryDetailing.scss';

// Reuse components
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function LuxuryDetailing() {
    const luxuryFAQs = [
        {
            question: "Do you have insurance for high-value vehicles?",
            answer: "Yes, we carry comprehensive garage keepers insurance specifically designed for high-value and exotic vehicles. Your investment is fully protected while in our care."
        },
        {
            question: "Do you have experience with matte or satin paints?",
            answer: "Absolutely. We are certified in caring for matte and satin finishes (frozen paint), using specific products that clean and protect without adding unwanted gloss or damaging the delicate finish."
        },
        {
            question: "Can you pick up and deliver my vehicle?",
            answer: "Yes, we offer a white-glove concierge pickup and delivery service (enclosed transport available upon request) for our luxury detailing clients in Toronto."
        },
        {
            question: "How long does a luxury detail take?",
            answer: "Luxury detailing focuses on perfection, not speed. A comprehensive treatment, including paint correction and ceramic coating, typically takes 2-4 days to ensure every inch of the vehicle works is flawless."
        }
    ];

    return (
        <>
            <Suspense fallback={<Loading />}>
                <SEO
                    title='Luxury Car Detailing Toronto | Exotics & Supercars | Beyond Detail'
                    description='Premier luxury car detailing in Toronto. Specialized care for exotics, supercars, and classic vehicles. Paint correction, ceramic coating, and bespoke detailing services. Call (647) 689-6109'
                    name='Beyond Detail Luxury'
                    type='website'
                    serviceType='Luxury Car Detailing'
                    keywords='luxury car detailing toronto, exotic car detailing toronto, supercar detailing, paint correction exotics, high end car detailing, matte paint care'
                    faq={luxuryFAQs}
                />
                <motion.div
                    initial='out'
                    animate='in'
                    exit='out'
                    variants={animationOne}
                    transition={{ ...transition, delay: 0 }}
                >
                    <div className='luxury-detailing__wrapper'>
                        {/* Temporary Hero */}
                        <div className="luxury-hero" style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '65vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                            color: 'white',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                background: 'rgba(0,0,0,0.7)'
                            }}></div>
                            <div style={{ position: 'relative', zIndex: 2, padding: '0 20px' }}>
                                <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', letterSpacing: '2px' }}>
                                    LUXURY & EXOTIC DETAILING
                                </h1>
                                <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontStyle: 'italic', color: '#ccc' }}>
                                    Uncompromising Standards for the World's Finest Vehicles
                                </p>
                                <div style={{ marginTop: '2.5rem' }}>
                                    <a href="#contact" style={{
                                        padding: '15px 40px',
                                        border: '2px solid #f07900',
                                        color: '#f07900',
                                        textDecoration: 'none',
                                        borderRadius: '0px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease'
                                    }}>Inquire Now</a>
                                </div>
                            </div>
                        </div>

                        <ServiceInfoSection
                            title="Bespoke Automotive Care"
                            subtitle="For The Discerning Collector"
                            description="Standard detailing is not enough for high-performance and luxury vehicles. Our luxury division specializes in the intricate care required for Ferraris, Lamborghinis, Porsches, and other exotic marques. From correcting soft paintworks to handling carbon fiber trim, we understand the nuances of your vehicle."
                            benefits={[
                                {
                                    title: "Certified Expertise",
                                    description: "Our technicians are certified in handling sensitive materials, including Alcantara, carbon ceramic brakes, and matte finishes."
                                },
                                {
                                    title: "Corrective Perfection",
                                    description: "We don't just clean; we correct. Our multi-stage paint correction removes micro-marring to achieve a finish better than factory delivery."
                                },
                                {
                                    title: "Concierge Service",
                                    description: "Enjoy our door-to-door enclosed transport service or private appointment scheduling for maximum discretion and convenience."
                                },
                                {
                                    title: "Fully Insured",
                                    description: "Rest easy knowing your vehicle is covered by our comprehensive insurance policy designed for high-value assets."
                                }
                            ]}
                            process={[
                                {
                                    title: "Consultation & Inspection",
                                    description: "We begin with a detailed inspection under specialized lighting to identify every defect and discuss your goals."
                                },
                                {
                                    title: "Bespoke Treatment Plan",
                                    description: "We create a custom service package tailored specifically to your vehicle's paint system and condition."
                                },
                                {
                                    title: "Meticulous Execution",
                                    description: "Using the finest tools and products, we spend days, not hours, perfecting your vehicle."
                                },
                                {
                                    title: "Final Curation",
                                    description: "Every surface is inspected, and the vehicle is prepared for a showroom-quality delivery."
                                }
                            ]}
                            features={[
                                "Concours-Level Preparation",
                                "Wet Sanding & Texture Leveling",
                                "Swissvax & Modesta Treatments",
                                "Undercarriage Detailing",
                                "Engine Bay Steam Cleaning",
                                "Leather Restoration",
                                "Carbon Fiber Polishing",
                                "Paint Protection Film (PPF) Prep",
                                "Ceramic Coating Application",
                                "Interior Alcantara Care"
                            ]}
                        />

                        <ServicePricing
                            title="Luxury & Correction Packages"
                            packages={[
                                {
                                    name: "Enhancement Detail",
                                    priceRange: { start: 450 },
                                    priceNote: "Starting price. Assessment required.",
                                    description: "A single-stage machine polish to significantly increase gloss and remove light swirls. Perfect for new vehicles.",
                                    features: [
                                        "Gentle Hand Wash",
                                        "Chemical & Mechanical Decontamination",
                                        "1-Stage Machine Polish",
                                        "Ceramic Sealant Application",
                                        "Interior Detail",
                                        "Leather Conditioning"
                                    ],
                                    ctaText: "Inquire"
                                },
                                {
                                    name: "Correction Detail",
                                    priceRange: { start: 850 },
                                    priceNote: "Starting price. Assessment required.",
                                    description: "Multi-stage correction to remove 85-95% of defects. The choice for restoring depth and clarity to used vehicles.",
                                    features: [
                                        "Everything in Enhancement",
                                        "2-Stage Paint Correction",
                                        "Swirl & Scratch Removal",
                                        "Wheel Off Detail (Faces & Barrels)",
                                        "Engine Bay Detail",
                                        "5-Year Ceramic Coating Option"
                                    ],
                                    featured: true,
                                    ctaText: "Inquire"
                                },
                                {
                                    name: "Signature Concours",
                                    priceRange: { start: 1500 },
                                    priceNote: "Consultation only.",
                                    description: "Our flagship service. Chasing absolute perfection with wet sanding to remove orange peel and achieve a mirror finish.",
                                    features: [
                                        "Full Concours Preparation",
                                        "Wet Sanding / Texture Leveling",
                                        "Multi-Stage Correction",
                                        "Wheels Off & Calipers Coated",
                                        "Flagship Ceramic Coating (Lifetime)",
                                        "Interior & Leather Ceramic Coating"
                                    ],
                                    ctaText: "Consultation"
                                }
                            ]}
                        />

                        <Suspense fallback={null}>
                            <GoogleReviewsCarousel />
                        </Suspense>

                        <FAQSection data={luxuryFAQs} title="Luxury Detailing FAQs" />

                        <Contact />
                    </div>
                </motion.div>
            </Suspense>
        </>
    );
}

export default React.memo(LuxuryDetailing);
