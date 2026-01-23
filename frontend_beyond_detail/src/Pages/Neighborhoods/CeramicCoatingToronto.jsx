import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import '../CeramicCoating/CeramicCoating.scss';

import CeramicCoatingHero from '../../components/CeramicCoatingHero/CeramicCoatingHero';
import SEO from '../../components/SEO';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));
const SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));

function CeramicCoatingToronto() {

    const ceramicCoatingFAQs = [
        {
            question: "Is ceramic coating worth it for Toronto winters?",
            answer: "Absolutely. Toronto's winter roads are covered in salt and brine, which eat away at your car's clear coat. A ceramic coating creates a 9H hardness barrier that repels salt, dirt, and moisture, preventing rust and oxidation."
        },
        {
            question: "How much does ceramic coating cost in Toronto?",
            answer: "Ceramic coating prices in Toronto typically range from $600 to $1500+, depending on the package (2-year vs 5-year/Lifetime) and the size of your vehicle. Our packages at Beyond Detail are competitively priced and include paint correction."
        },
        {
            question: "Can I take my ceramic coated car through a car wash?",
            answer: "We recommend hand washing or using touchless car washes. Avoid automated brush washes, as they can induce swirl marks. Ceramic coatings make hand washing incredibly easy due to their hydrophobic properties."
        }
    ];

    return (
        <>
            <SEO
                title='Ceramic Coating Toronto | Best 9H Paint Protection GTA'
                description='Top-rated Ceramic Coating in Toronto. Protect your vehicle from winter salt & UV rays. 9H Nano Coating, Paint Correction included. Lifetime Warranty Available.'
                name='Beyond Detail Toronto'
                type='website'
                serviceType='Ceramic Coating'
                keywords='Ceramic Coating Toronto, Car Paint Protection Toronto, Best Ceramic Coating GTA, 9H Nano Coating Toronto, Auto Detailing Toronto'
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
                        titleLine3="TORONTO"
                    />

                    <Suspense fallback={null}>
                        <ServiceGallery
                            serviceType="ceramic-coating"
                            title="Toronto Ceramic Coating Projects"
                            forceLandscape
                        />
                    </Suspense>

                    <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 className="seo-title">
                            Why Toronto Drivers Need Ceramic Coating
                        </h2>
                        <div>
                            <p className="seo-text-lg">
                                Toronto's diverse weather conditions—from humid summers to salt-heavy winters—can wreak havoc on your vehicle's paint.
                                <strong>Ceramic Coating in Toronto</strong> is the ultimate solution for long-term protection. Unlike traditional wax that lasts a few weeks,
                                our 9H Nano-Ceramic coatings bond permanently to your paint, offering years of protection against UV rays, bird droppings, road salt, and oxidation.
                            </p>
                            <p className="seo-text-lg">
                                Located conveniently for minimal commute from downtown, North York, and Scarborough, Beyond Detail is Toronto’s trusted
                                expert for high-end paint protection. Every package includes professional <Link to="/paint-correction">paint correction</Link>
                                to ensure a flawless finish before sealing it in.
                            </p>
                        </div>
                    </section>

                    <ServicePricing
                        title="Toronto Ceramic Packages"
                        packages={[
                            {
                                name: "Bronze Package (2 Year)",
                                priceRange: { start: 599, end: 799 },
                                priceNote: "Includes Single Stage Polish",
                                description: "Great entry-level protection. 2-year warranty ceramic coating with single-stage paint enhancement to remove light swirls.",
                                features: ["Exterior Wash & Clay Bar", "1-Stage Machine Polish", "2-Year Ceramic Coating", "Windshield Coating", "Wheel Faces Coated"],
                                ctaText: "Book Bronze"
                            },
                            {
                                name: "Silver Package (5 Year)",
                                priceRange: { start: 899, end: 1199 },
                                priceNote: "Includes 2-Stage Correction",
                                description: "Our bestseller. 5-year warranty protection with a 2-stage polish to remove moderate swirls and maximize gloss.",
                                features: ["Deep Iron Decontamination", "2-Stage Correction", "5-Year Ceramic Coating", "Glass & Trim Coated", "Wheel Faces Coated", "CarFax Reporting"],
                                featured: true,
                                ctaText: "Book Silver"
                            },
                            {
                                name: "Gold Package (Lifetime)",
                                priceRange: { start: 1299, end: 1699 },
                                priceNote: "Ultimate Gloss & Protection",
                                description: "The best protection money can buy. Lifetime warranty coating with multi-stage correction for a mirror-like finish.",
                                features: ["Concours Preparation", "Multi-Stage Correction", "Lifetime Ceramic Coating", "All Glass & Trim", "Wheels Off Coating (Faces & Barrels)", "Interior Leather Coat"],
                                ctaText: "Book Gold"
                            }
                        ]}
                    />

                    <Suspense fallback={null}>
                        <GoogleReviewsCarousel />
            <Suspense fallback={null}>
              <TrustBadges />
            </Suspense>

            <Suspense fallback={null}>
              <SkillShowcase />
            </Suspense>


                        <Contact />
                    </Suspense>
                </div>
            </motion.div>
        </>
    );
}

export default React.memo(CeramicCoatingToronto);
