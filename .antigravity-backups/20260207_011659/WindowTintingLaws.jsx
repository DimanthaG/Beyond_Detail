import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { Loading } from '../../components';
import { animationOne, transition } from '../../components/Transition';
import { Shield, AlertTriangle, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = lazy(() => import('../../components/Contact/Contact'));
const FAQSection = lazy(() => import('../../components/FAQSection/FAQSection'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));

const WindowTintingLaws = () => {
    const legalFAQs = [
        {
            question: "Can I tint my front windshield in Ontario?",
            answer: "No. In Ontario, you cannot tint the full front windshield. You are only allowed to have a glare strip on the top 75mm (approx 3 inches) of the windshield."
        },
        {
            question: "What is the darkest legal tint for front side windows?",
            answer: "The law requires front left and right windows to allow 70% of light in (30% tint darkness maximum). However, enforcement varies and aiming for clarity for the driver is key."
        },
        {
            question: "Can I tint my rear windows as dark as I want?",
            answer: "Yes. For passenger vehicles, there is no limit on the darkness for rear side windows and the rear windshield, provided you have functional side mirrors."
        }
    ];

    return (
        <>
            <SEO
                title="Ontario Window Tinting Laws | Legal Tint Limits | Beyond Detail"
                description="Understand Ontario window tinting laws (HTA). Front windows need 70% VLT. Rear windows any darkness. Stay legal with LLUMAR certified tinting in Scarborough."
                name="Beyond Detail Legal Tint"
                type="website"
                keywords="ontario window tint laws, is tint legal in ontario, legal tint limit scarborough, windshield tint laws ontario"
            />
            <Suspense fallback={<Loading />}>
                <motion.div
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={animationOne}
                    transition={{ ...transition, delay: 0 }}
                    className="tint-laws-page"
                >
                    {/* Hero Section */}
                    <div style={{ background: '#111', padding: '100px 20px 60px', textAlign: 'center', color: 'white' }}>
                        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                                Ontario Window Tinting <span style={{ color: '#f07900' }}>Laws Explained</span>
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6' }}>
                                Confused about what's legal? We break down the Highway Traffic Act regulations so you can ride with style and peace of mind.
                            </p>
                        {/* Legal Disclaimer */}
            <div style={{ background: "#1a1a1a", border: "1px solid #333", padding: "20px", borderRadius: "8px", margin: "20px auto", maxWidth: "1000px" }}>
              <p style={{ fontSize: "0.9rem", color: "#888", margin: 0 }}>
                <Info size={16} style={{ marginRight: "8px", verticalAlign: "text-bottom" }} />
                <strong>Disclaimer:</strong> This information is for reference only and does not constitute legal advice. 
                Laws may change. Always consult the <a href="https://www.ontario.ca/laws/statute/90h08" target="_blank" rel="noopener noreferrer" style={{ color: "#f07900" }}>Official Ontario Highway Traffic Act</a> 
                or contact the Ministry of Transportation for current regulations.
              </p>
            </div>
            
                    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>

                        {/* Legal Limits Card */}
                        <div style={{ background: '#1a1a1a', borderRadius: '15px', padding: '2rem', border: '1px solid #333', marginBottom: '3rem' }}>
                            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', marginBottom: '1.5rem' }}>
                                <Shield color="#f07900" /> Current Ontario Tint Limits (2025)
                            </h2>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                                <div style={{ background: '#222', padding: '1.5rem', borderRadius: '10px' }}>
                                    <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Front Windshield</h3>
                                    <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>NO TINT ALLOWED</p>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>Except for a top glare strip (max 75mm).</p>
                                </div>
                                <div style={{ background: '#222', padding: '1.5rem', borderRadius: '10px' }}>
                                    <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Front Side Windows</h3>
                                    <p style={{ color: '#f1c40f', fontWeight: 'bold' }}>70% VLT REQUIRED</p>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>Must allow 70% of light in. View of driver must be clear.</p>
                                </div>
                                <div style={{ background: '#222', padding: '1.5rem', borderRadius: '10px' }}>
                                    <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Rear Windows</h3>
                                    <p style={{ color: '#2ecc71', fontWeight: 'bold' }}>ANY DARKNESS</p>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>No limit (Limo tint ok) if you have side mirrors.</p>
                                </div>
                            </div>
                        </div>

                        {/* Why Stay Legal */}
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <h2 style={{ color: 'white', marginBottom: '1rem' }}>Risks of Illegal Tint</h2>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ color: '#ccc', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <AlertTriangle color="#e74c3c" size={20} />
                                        <span><strong>Fine:</strong> $110 - $500 ticket from police.</span>
                                    </li>
                                    <li style={{ color: '#ccc', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <AlertTriangle color="#e74c3c" size={20} />
                                        <span><strong>Removal Order:</strong> You may be forced to remove it on the spot.</span>
                                    </li>
                                    <li style={{ color: '#ccc', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <AlertTriangle color="#e74c3c" size={20} />
                                        <span><strong>Insurance:</strong> Potential denial of claims if visibility was a factor.</span>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ flex: '1', minWidth: '300px', background: '#222', padding: '2rem', borderRadius: '15px' }}>
                                <h2 style={{ color: 'white', marginBottom: '1rem' }}>Go with LLUMAR Legal</h2>
                                <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>
                                    Our <strong>LLumar Ceramic AIR series</strong> is clear but blocks heat. You can stay legal (pass 70% VLT) while still rejecting 99% UV rays and massive heat.
                                </p>
                                <Link to="/window-tinting-scarborough" style={{ color: '#f07900', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    View Legal Tint Options <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Medical Exemptions Info */}
                        <div style={{ background: '#1a1d21', padding: '2rem', borderRadius: '15px', borderLeft: '4px solid #f07900' }}>
                            <h3 style={{ fontSize: '1.4rem', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Info color="#f07900" /> Medical Exemptions
                            </h3>
                            <p style={{ color: '#ccc', marginTop: '1rem' }}>
                                Drivers with specific medical conditions (like Lupus or photosensitivity) may be eligible for darker tint exemptions. You must carry a signed certificate from a qualified physician. Always check with local authorities for the latest exemption rules.
                            </p>
                        </div>

                    </div>

                    <Suspense fallback={null}>
                        <FAQSection data={legalFAQs} title="Tint Law FAQs" />
                    </Suspense>

                    <Suspense fallback={null}>
                        <Contact />
                    </Suspense>
                </motion.div>
            </Suspense>
        </>
    );
};

export default WindowTintingLaws;
