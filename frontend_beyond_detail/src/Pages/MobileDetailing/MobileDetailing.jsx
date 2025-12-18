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
                    keywords='mobile car detailing toronto, mobile auto detailing scarborough, mobile car wash gta, mobile interior detailing, mobile car detailing near me'
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
                            backgroundImage: 'url("https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
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
                                    Mobile Car Detailing Toronto
                                </h1>
                                <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                                    Professional Detailing Services at Your Home or Office
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

                        <ServiceInfoSection
                            title="Why Choose Mobile Detailing?"
                            subtitle="Convenience Without Compromise"
                            description="Our mobile auto detailing service brings the professional car care experience directly to your driveway or workplace. Save time and hassle by letting us come to you, equipped with everything needed to restore your vehicle to showroom condition."
                            benefits={[
                                {
                                    title: "We Come To You",
                                    description: "No need to drive to a shop or wait in a lounge. We service your vehicle at your home or office while you work or relax."
                                },
                                {
                                    title: "Fully Equipped",
                                    description: "Our mobile units carry their own water, electricity, and professional tools, ensuring a complete detailing service anywhere."
                                },
                                {
                                    title: "Save Time",
                                    description: "Maximize your productivity by eliminating travel time and waiting time. Perfect for busy professionals and families."
                                },
                                {
                                    title: "Contactless Service",
                                    description: "We offer contactless payment and key handover options for your safety and convenience."
                                }
                            ]}
                            process={[
                                {
                                    title: "Book Your Appointment",
                                    description: "Choose your package and preferred time. We'll confirm the details and location."
                                },
                                {
                                    title: "We Arrive On Site",
                                    description: "Our professional detailer arrives at your specified location fully equipped."
                                },
                                {
                                    title: "Vehicle Assessment",
                                    description: "We inspect your vehicle and confirm the services to be performed."
                                },
                                {
                                    title: "Professional Detailing",
                                    description: "We perform the detailing service with meticulous care and attention to detail."
                                },
                                {
                                    title: "Final Walkthrough",
                                    description: "We review the results with you to ensure your complete satisfaction."
                                }
                            ]}
                            features={[
                                "Mobile Interior Deep Cleaning",
                                "Mobile Exterior Wash & Wax",
                                "Mobile Engine Bay Cleaning",
                                "Mobile Headlight Restoration",
                                "Odor Removal at Your Location",
                                "Fabric Extraction & Shampoo",
                                "Leather Cleaning & Conditioning",
                                "Pet Hair Removal",
                                "Fully Self-Contained Units",
                                "Servicing Entire GTA"
                            ]}
                        />

                        <ServicePricing
                            title="Mobile Detailing Packages"
                            packages={[
                                {
                                    name: "Mobile Bronze",
                                    priceRange: { start: 150 },
                                    priceNote: "Starting price. Size dependent.",
                                    description: "Essential maintenance detail to keep your daily driver clean and protected.",
                                    features: [
                                        "Exterior Hand Wash",
                                        "Wheel & Tire Cleaning",
                                        "Interior Vacuum",
                                        "Wipe Down of Surfaces",
                                        "Windows Cleaned",
                                        "Tire Shine"
                                    ],
                                    ctaText: "Book Bronze Pkg"
                                },
                                {
                                    name: "Mobile Silver (Best Value)",
                                    priceRange: { start: 220 },
                                    priceNote: "Starting price. Size dependent.",
                                    description: "Comprehensive clean for interior and exterior. Our most popular mobile package.",
                                    features: [
                                        "Everything in Bronze",
                                        "Clay Bar Decontamination",
                                        "6-Month Spray Sealant",
                                        "Interior Steam Cleaning",
                                        "Leather Conditioner",
                                        "Floor Mat Shampoo"
                                    ],
                                    featured: true,
                                    ctaText: "Book Silver Pkg"
                                },
                                {
                                    name: "Mobile Gold",
                                    priceRange: { start: 300 },
                                    priceNote: "Starting price. Size dependent.",
                                    description: "The ultimate transformation. Deep cleaning and long-term protection.",
                                    features: [
                                        "Everything in Silver",
                                        "Full Carpet & Seat Shampoo",
                                        "Deep Stain Removal",
                                        "Ozone Odor Treatment",
                                        "1-Year Ceramic Sealant",
                                        "Engine Bay Detail"
                                    ],
                                    ctaText: "Book Gold Pkg"
                                }
                            ]}
                        />

                        <Suspense fallback={null}>
                            <GoogleReviewsCarousel />
                        </Suspense>

                        <FAQSection data={mobileFAQs} title="Mobile Detailing FAQs" />

                        <Contact />
                    </div>
                </motion.div>
            </Suspense>
        </>
    );
}

export default React.memo(MobileDetailing);
