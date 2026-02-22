import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { Loading } from '../../components';
import { animationOne, transition } from '../../components/Transition';
import { Shield, Check, ArrowRight, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { AUTO_DETAIL_PACKAGES } from '../../constants/servicePackages';

const Contact = lazy(() => import('../../components/Contact/Contact'));
const FAQSection = lazy(() => import('../../components/FAQSection/FAQSection'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));

const Pricing = () => {
    const pricingFAQs = [
        {
            question: "How long does ceramic coating last?",
            answer: "Our professional ceramic coating lasts 2-5 years depending on the package you choose and how well you maintain your vehicle. We offer packages ranging from 2-year entry-level protection to 5-year premium coverage with regular maintenance included."
        },
        {
            question: "What is paint correction and do I need it?",
            answer: "Paint correction removes swirl marks, scratches, and oxidation from your car's clear coat, restoring the original gloss and shine. If your vehicle has visible scratches, water spots, or a dull finish, paint correction will significantly improve the appearance before applying ceramic coating."
        },
        {
            question: "How long does ceramic coating installation take?",
            answer: "Full ceramic coating installation takes 1-3 business days depending on your vehicle size and service package. This includes paint preparation, paint correction (if needed), coating application, and proper curing time to ensure maximum durability."
        },
        {
            question: "What are Ontario's window tinting laws?",
            answer: "In Ontario, front side windows must allow at least 70% of light through. Rear side windows and back windows can be any darkness. We ensure all our window tinting installations comply with Ontario Highway Traffic Act regulations."
        },
        {
            question: "Can ceramic coating remove scratches?",
            answer: "No, ceramic coating does not remove existing scratches. It protects against future damage. We recommend paint correction before ceramic coating to remove existing swirl marks and scratches, then the coating seals and protects the corrected finish."
        },
        {
            question: "How much does ceramic coating cost in Scarborough?",
            answer: "Ceramic coating packages range from $800 to $2,500+ depending on vehicle size, paint condition, and protection level. We offer free quotes based on your specific vehicle and needs. Contact us for exact pricing."
        },
        {
            question: "Do you offer mobile ceramic coating service?",
            answer: "No, ceramic coating requires a controlled environment free from dust, debris, and weather elements. All our ceramic coating and paint correction services are done at our professional facility in Scarborough to ensure the highest quality results."
        },
        {
            question: "How do I maintain ceramic coating?",
            answer: "Avoid automatic car washes with brushes. Use pH-neutral soap and microfiber wash mitts. We provide a complimentary maintenance kit with every ceramic coating package and offer maintenance washes to keep your coating performing at its best."
        }
    ];

    return (
        <>
            <SEO
                title="Car Detailing Pricing Scarborough 2025 | Window Tint & Ceramic Coating Costs"
                description="Transparent pricing for window tinting, ceramic coating & paint correction in Scarborough. Request your custom quote online. Serving Toronto & GTA."
                name="Beyond Detail Pricing"
                type="website"
                keywords="car detailing pricing, window tinting prices scarborough, ceramic coating cost, auto detailing quote"
            />
            <Suspense fallback={<Loading />}>
                <motion.div
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={animationOne}
                    transition={{ ...transition, delay: 0 }}
                    className="pricing-page"
                >
                    {/* Hero Section */}
                    <div className="pricing-hero" style={{
                        background: 'linear-gradient(to bottom, #000000, #111111)',
                        padding: '120px 20px 60px',
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}
                            >
                                Transparent Pricing <span style={{ color: '#f07900' }}>For Premium Care</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px', margin: '0 auto 2rem' }}
                            >
                                We believe in fair, transparent quotes based on your vehicle's specific needs. No hidden fees, just world-class results.
                            </motion.p>
                            <motion.a
                                href="#custom-quote"
                                className="cta-button"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    background: '#f07900',
                                    color: 'white',
                                    padding: '15px 30px',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem'
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Request Your Custom Quote <ArrowRight size={20} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Pricing Tiers Section */}
                    <div style={{ padding: '60px 20px', background: '#111' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                                {/* Window Tinting Card */}
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '15px', border: '1px solid #333' }}
                                >
                                    <div style={{ color: '#f07900', marginBottom: '1rem' }}><Shield size={40} /></div>
                                    <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Window Tinting</h3>
                                    <p style={{ color: '#888', marginBottom: '1.5rem' }}>LLumar Premium Film</p>
                                    <ul style={{ listStyle: 'none', padding: 0, color: '#ddd', marginBottom: '2rem' }}>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> Lifetime Warranty</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> 99% UV Rejection</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> Heat Rejecting Ceramic</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> Precision Computer Cut</li>
                                    </ul>
                                    <Link to="/book" className="pricing-card-btn" style={{
                                        display: 'block', textAlign: 'center', background: 'transparent', border: '2px solid #f07900', color: 'white', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'
                                    }}>Starting from $XX - Request Quote</Link>
                                </motion.div>

                                {/* Ceramic Coating Card */}
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    style={{ background: '#222', padding: '2rem', borderRadius: '15px', border: '2px solid #f07900', position: 'relative' }}
                                >
                                    <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#f07900', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>MOST POPULAR</div>
                                    <div style={{ color: '#f07900', marginBottom: '1rem' }}><Star size={40} /></div>
                                    <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Ceramic Coating</h3>
                                    <p style={{ color: '#888', marginBottom: '1.5rem' }}>Paint Protection</p>
                                    <ul style={{ listStyle: 'none', padding: 0, color: '#ddd', marginBottom: '2rem' }}>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> 5+ Year Protection</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> Free Consultation</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> Paint Correction Included</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> Carfax Validated</li>
                                    </ul>
                                    <Link to="/book" style={{
                                        display: 'block', textAlign: 'center', background: '#f07900', border: '2px solid #f07900', color: 'white', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'
                                    }}>Get Package Pricing</Link>
                                </motion.div>

                                {/* Paint Correction Card */}
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '15px', border: '1px solid #333' }}
                                >
                                    <div style={{ color: '#f07900', marginBottom: '1rem' }}><Zap size={40} /></div>
                                    <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Paint Correction</h3>
                                    <p style={{ color: '#888', marginBottom: '1.5rem' }}>Showroom Finish</p>
                                    <ul style={{ listStyle: 'none', padding: 0, color: '#ddd', marginBottom: '2rem' }}>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> Stage 1: Polish</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> Stage 2: Cut & Polish</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> Stage 3: Restoration</li>
                                        <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={20} color="#f07900" /> Scratch Removal</li>
                                    </ul>
                                    <Link to="/book" style={{
                                        display: 'block', textAlign: 'center', background: 'transparent', border: '2px solid #f07900', color: 'white', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'
                                    }}>Request Custom Quote</Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Auto Detailing Packages */}
                    <ServicePricing
                        title="Auto Detailing Packages"
                        packages={AUTO_DETAIL_PACKAGES}
                    />

                    {/* Bundle Deals Banner */}
                    <div style={{ background: '#f07900', padding: '40px 20px', textAlign: 'center', color: 'white' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Combine & Save!</h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                            Book multiple services like Window Tinting + Ceramic Coating and receive a comprehensive discount on your total package.
                        </p>
                        <Link to="/book" style={{
                            background: 'white', color: '#f07900', padding: '12px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'
                        }}>Get Bundle Quote</Link>
                    </div>

                    <Suspense fallback={null}>
                        <TrustBadges />
                    </Suspense>

                    <Suspense fallback={null}>
                        <FAQSection data={pricingFAQs} title="Pricing FAQs" />
                    </Suspense>

                    <div id="custom-quote">
                        <Suspense fallback={null}>
                            <Contact />
                        </Suspense>
                    </div>
                </motion.div>
            </Suspense>

            {/* Pricing FAQ Schema for Voice Search */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How long does ceramic coating last?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Our professional ceramic coating lasts 2-5 years depending on the package you choose and how well you maintain your vehicle. We offer packages ranging from 2-year entry-level protection to 5-year premium coverage with regular maintenance included."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What is paint correction and do I need it?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Paint correction removes swirl marks, scratches, and oxidation from your car's clear coat, restoring the original gloss and shine. If your vehicle has visible scratches, water spots, or a dull finish, paint correction will significantly improve the appearance before applying ceramic coating."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does ceramic coating installation take?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Full ceramic coating installation takes 1-3 business days depending on your vehicle size and service package. This includes paint preparation, paint correction (if needed), coating application, and proper curing time to ensure maximum durability."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What are Ontario's window tinting laws?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "In Ontario, front side windows must allow at least 70% of light through. Rear side windows and back windows can be any darkness. We ensure all our window tinting installations comply with Ontario Highway Traffic Act regulations."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can ceramic coating remove scratches?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No, ceramic coating does not remove existing scratches. It protects against future damage. We recommend paint correction before ceramic coating to remove existing swirl marks and scratches, then the coating seals and protects the corrected finish."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does ceramic coating cost in Scarborough?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Ceramic coating packages range from $800 to $2,500+ depending on vehicle size, paint condition, and protection level. We offer free quotes based on your specific vehicle and needs. Contact us for exact pricing."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you offer mobile ceramic coating service?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No, ceramic coating requires a controlled environment free from dust, debris, and weather elements. All our ceramic coating and paint correction services are done at our professional facility in Scarborough to ensure the highest quality results."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How do I maintain ceramic coating?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Avoid automatic car washes with brushes. Use pH-neutral soap and microfiber wash mitts. We provide a complimentary maintenance kit with every ceramic coating package and offer maintenance washes to keep your coating performing at its best."
                            }
                        }
                    ]
                })
            }} />
        </>
    );
};

export default Pricing;
