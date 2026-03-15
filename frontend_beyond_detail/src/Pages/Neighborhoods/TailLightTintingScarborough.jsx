import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { Loading } from '../../components';
import { animationOne, transition } from '../../components/Transition';
import { Eye, Shield, Sun, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = lazy(() => import('../../components/Contact/Contact'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const FAQSection = lazy(() => import('../../components/FAQSection/FAQSection'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));

const TailLightTintingScarborough = () => {
    const tailLightFAQs = [
        {
            question: "Is tail light tinting legal in Ontario?",
            answer: "Tail lights must remain visible from 150 meters away and reflect red when hit by light. We use specialized films that maintain visibility while giving you the smoked look. We ensure your car remains compliant."
        },
        {
            question: "Does the film peel off?",
            answer: "No. We use premium automotive-grade film designed for exterior lights. It withstands weather, car washes, and UV rays without peeling or fading."
        },
        {
            question: "Can I remove it later?",
            answer: "Yes, the film can be professionally removed without damaging your tail light lenses, returning them to their factory condition."
        }
    ];

    return (
        <>
            <SEO
                title="Tail Light Tinting Scarborough | Smoked Lights | Beyond Detail"
                description="Tail light tinting in Scarborough by Beyond Detail. Smoke & blackout films with legal compliance. Premium automotive-grade film. Call (647) 689-6109."
                name="Beyond Detail Tail Light Tinting"
                type="website"
                keywords="tail light tinting scarborough, smoked tail lights, headlight tinting, auto light tinting scarborough"
            />
            <Suspense fallback={<Loading />}>
                <motion.div
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={animationOne}
                    transition={{ ...transition, delay: 0 }}
                    className="tail-light-page"
                >
                    {/* Hero Section */}
                    <div style={{
                        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(/images/hero-home.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '120px 20px 80px',
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                                Tail Light <span style={{ color: '#f07900' }}>Tinting</span>
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Give your vehicle a sleek, aggressive look with our premium smoked films. Custom styling that stands out in Scarborough.
                            </p>
                            <Link to="/book" style={{
                                background: '#f07900', color: 'white', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'
                            }}>Get a Quote</Link>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div style={{ background: '#111', padding: '60px 20px' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '15px', border: '1px solid #333' }}>
                                <div style={{ color: '#f07900', marginBottom: '1rem' }}><Eye size={32} /></div>
                                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Sleek Aesthetics</h3>
                                <p style={{ color: '#ccc' }}>Achieve that "blackout" or "smoked" look that perfectly complements your paint job.</p>
                            </div>
                            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '15px', border: '1px solid #333' }}>
                                <div style={{ color: '#f07900', marginBottom: '1rem' }}><Shield size={32} /></div>
                                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Lens Protection</h3>
                                <p style={{ color: '#ccc' }}>The film acts as a barrier, protecting your expensive tail light housings from scratches, road debris, and UV hazing.</p>
                            </div>
                            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '15px', border: '1px solid #333' }}>
                                <div style={{ color: '#f07900', marginBottom: '1rem' }}><CheckCircle size={32} /></div>
                                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Reversible Customization</h3>
                                <p style={{ color: '#ccc' }}>Unlike paint sprays, our films can be removed if you sell the car or change your mind, leaving no residue.</p>
                            </div>
                        </div>
                    </div>

                    <Suspense fallback={null}>
                        <ServiceGallery serviceType="window-tint" title="Our Tinting Work" />
                    </Suspense>

                    <Suspense fallback={null}>
                        <TrustBadges />
                    </Suspense>

                    <Suspense fallback={null}>
                        <FAQSection data={tailLightFAQs} title="Tail Light Tinting FAQs" />
                    </Suspense>

                    <Suspense fallback={null}>
                        <Contact />
                    </Suspense>
                </motion.div>
            </Suspense>
        </>
    );
};

export default TailLightTintingScarborough;
