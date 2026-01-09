import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, FAQSection } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './MobileDetailing.scss';

// Reuse components
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

import carImage from '../../assets/bd/bd-32.webp';

function MobileDetailing() {
    const mobileFAQs = [
        {
            question: "Do I need to provide water or power for mobile detailing?",
            answer: "We are fully equipped with our own water and power supply. However, if access to a power outlet is available, it can sometimes be helpful. Generally, we just need the keys and enough space to work around the vehicle."
        },
        {
            question: "What areas of Toronto do you service?",
            answer: "We service the entire Greater Toronto Area, including Scarborough, North York, Markham, Pickering, Ajax, Whitby, and downtown Toronto. Travel fees may apply for areas outside our core 30km radius."
        },
        {
            question: "Can you detail my car at my office?",
            answer: "Yes! Office parking lots are a popular location for our mobile service. We just need approval from the building management and enough clearance if it's an underground garage."
        },
        {
            question: "Is mobile detailing as good as shop detailing?",
            answer: "Absolutely. We bring professional-grade equipment, lighting, and products to your location. The quality of our mobile service matches what we provide in our studio for standard detailing packages."
        }
    ];

    return (
        <>
            <Suspense fallback={<Loading />}>
                <SEO
                    title='Mobile Car Detailing Toronto | We Come To You | Beyond Detail'
                    description='Premium mobile car detailing in Toronto, Scarborough & GTA. We come to your home or office. specialized in interior deep cleaning, exterior wash & wax. ⭐ 68+ 5-Star Reviews. Call (647) 689-6109'
                    name='Beyond Detail Mobile'
                    type='website'
                    serviceType='Mobile Car Detailing'
                    keywords='mobile car detailing toronto, mobile auto detailing scarborough, mobile car wash scarborough, mobile car wash gta, mobile interior detailing, mobile car detailing near me, mobile detailing prices'
                    faq={mobileFAQs}
                />
                <motion.div
                    initial='out'
                    animate='in'
                    exit='out'
                    variants={animationOne}
                    transition={{ ...transition, delay: 0 }}
                >
                    <div className='mobile-detailing__wrapper'>
                        {/* Temporary Hero Section using inline styles until a dedicated component is built */}
                        <div className="mobile-hero" style={{
                            backgroundImage: `url(${carImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '60vh',
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
                                background: 'rgba(0,0,0,0.6)'
                            }}></div>
                            <div style={{ position: 'relative', zIndex: 2, padding: '0 20px' }}>
                                <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                    Car Detailing Scarborough: Mobile & In-Shop
                                </h1>
                                <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                                    Professional Detailing Services at Your Home or Our Shop | Competitive Prices
                                </p>
                                <div style={{ marginTop: '2rem' }}>
                                    <a href="#contact" style={{
                                        padding: '12px 30px',
                                        backgroundColor: '#f07900',
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderRadius: '5px',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem'
                                    }}>Book Now</a>
                                </div>
                            </div>
                        </div>

                        <Suspense fallback={null}>
                            <GoogleReviewsCarousel />
                        </Suspense>

                        <ServiceInfoSection
                            title="Mobile Service vs In-Shop: Which is Right for You?"
                            subtitle="We Bring the Shop to You, or You Visit Us"
                            description="Deciding between mobile detailing and visiting our shop? Mobile is perfect for convenience and standard maintenance, while our shop at 170 Finchdene Square offers a controlled environment for advanced paint correction and ceramic coatings."
                            benefits={[
                                {
                                    title: "Mobile: What We Bring",
                                    description: "We arrive fully equipped with our own water, electricity, professional lighting, and premium chemicals. We just need your vehicle key."
                                },
                                {
                                    title: "Mobile: What We Need",
                                    description: "A safe place to park (driveway or authorized office lot) and enough space to open vehicle doors. Access to a power outlet is helpful but not mandatory."
                                },
                                {
                                    title: "In-Shop: Controlled Environment",
                                    description: "Our shop offers climate control and specialized lighting essential for high-end Paint Correction and Ceramic Coating curing, regardless of weather."
                                },
                                {
                                    title: "Ideal Use Cases",
                                    description: "Choose MOBILE for: Maintenance washes, Interior details, Lease returns. Choose SHOP for: Ceramic Coatings, Paint Correction, Window Tinting."
                                }
                            ]}
                            process={[
                                {
                                    title: "1. Choose Your Service Mode",
                                    description: "Select 'Mobile' for us to come to you, or 'In-Shop' to drop off your vehicle at our Scarborough studio."
                                },
                                {
                                    title: "2. We Pre-Check Logistics",
                                    description: "For mobile, we confirm parking/access. For shop, we schedule your drop-off and pickup times."
                                },
                                {
                                    title: "3. Professional Execution",
                                    description: "Whether in your driveway or our bay, you get the same IDA-certified technicians and premium products."
                                },
                                {
                                    title: "4. Final Inspection",
                                    description: "We walk you through the results to ensure 100% satisfaction before handing back the keys."
                                }
                            ]}
                            features={[
                                "Mobile: We Bring Water & Power",
                                "Mobile: Contactless Service",
                                "Shop: Climate Controlled",
                                "Shop: Best for Ceramic Coatings",
                                "Shop: Window Tinting Available",
                                "Both: IDA Certified Detailers",
                                "Both: Premium Products",
                                "Both: Satisfaction Guarantee"
                            ]}
                        />

                        <Contact />
                    </div>
                </motion.div>
            </Suspense>
        </>
    );
}

export default React.memo(MobileDetailing);
