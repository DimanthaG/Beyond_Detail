import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { Loading } from '../../components';
import { animationOne, transition } from '../../components/Transition';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = lazy(() => import('../../components/Contact/Contact'));
const ServiceAreas = lazy(() => import('../ServiceAreas/ServiceAreas')); // Reusing existing if compatible or building fresh? Building fresh pillar page.

const AreasWeServe = () => {
    const neighborhoods = [
        { name: "Agincourt", path: "/car-detailing-agincourt" },
        { name: "Ajax", path: "/car-detailing-ajax" },
        { name: "Cliffside", path: "/car-detailing-cliffside" },
        { name: "Guildwood", path: "/car-detailing-guildwood" },
        { name: "Highland Creek", path: "/car-detailing-highland-creek" },
        { name: "Malvern", path: "/car-detailing-malvern" },
        { name: "Markham", path: "/car-detailing-markham" },
        { name: "Morningside", path: "/car-detailing-morningside" },
        { name: "North York", path: "/car-detailing-north-york" },
        { name: "Pickering", path: "/car-detailing-pickering" },
        { name: "Rouge", path: "/car-detailing-rouge" },
        { name: "Scarborough (HQ)", path: "/car-detailing-scarborough" },
        { name: "West Hill", path: "/car-detailing-west-hill" },
        { name: "Wexford", path: "/car-detailing-wexford" },
        { name: "Woburn", path: "/car-detailing-woburn" },
    ];

    return (
        <>
            <SEO
                title="Areas We Serve | Car Detailing Scarborough & GTA | Beyond Detail"
                description="Beyond Detail provides mobile and shop-based car detailing across Scarborough, Markham, Pickering, and North York. Find your neighborhood."
                name="Beyond Detail Service Areas"
                type="website"
                keywords="car detailing service area, detailing near me, scarborough detailing map, mobile detailing service area"
            />
            <Suspense fallback={<Loading />}>
                <motion.div
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={animationOne}
                    transition={{ ...transition, delay: 0 }}
                    className="areas-page"
                >
                    {/* Hero Section */}
                    <div style={{ background: '#111', padding: '100px 20px 60px', textAlign: 'center', color: 'white' }}>
                        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                                Areas We <span style={{ color: '#f07900' }}>Serve</span>
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6' }}>
                                From our headquarters in Scarborough to the surrounding GTA, we bring premium detailing and tinting services to you.
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>

                        {/* Map / Radius Info */}
                        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginBottom: '4rem', alignItems: 'center' }}>
                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#f07900' }}>Our Service Radius</h2>
                                <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                                    Our state-of-the-art studio is located at <strong>170 Finchdene Square, Scarborough</strong>. We also offer select mobile services within a 30km radius.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                        <MapPin color="#f07900" /> <strong>Scarborough</strong> (Home Base)
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                        <MapPin color="#888" /> <strong>Markham</strong> (15-20 mins)
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                        <MapPin color="#888" /> <strong>Pickering</strong> (15-20 mins)
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                        <MapPin color="#888" /> <strong>North York</strong> (20-25 mins)
                                    </li>
                                </ul>
                            </div>
                            <div style={{ flex: '1', minWidth: '300px', height: '400px', background: '#222', borderRadius: '20px', overflow: 'hidden' }}>
                                {/* Placeholder for Map - Google Maps Embed */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.0964722687556!2d-79.2486716844967!3d43.83328597911568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d6b637564619%3A0xb353592186982939!2sBeyond%20Detail%20Auto%20Detailing!5e0!3m2!1sen!2sca!4v1645564859123!5m2!1sen!2sca"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Beyond Detail Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Neighborhood Grid */}
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'white' }}>Service Neighborhoods</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                            {neighborhoods.map((area, index) => (
                                <Link
                                    key={index}
                                    to={area.path}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        background: '#1a1a1a',
                                        padding: '1.5rem',
                                        borderRadius: '10px',
                                        border: '1px solid #333',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.borderColor = '#f07900';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.borderColor = '#333';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <span style={{ fontWeight: '500' }}>{area.name}</span>
                                    <ArrowRight size={18} color="#f07900" />
                                </Link>
                            ))}
                        </div>

                    </div>

                    <Suspense fallback={null}>
                        <Contact />
                    </Suspense>
                </motion.div>
            </Suspense>
        </>
    );
};

export default AreasWeServe;
