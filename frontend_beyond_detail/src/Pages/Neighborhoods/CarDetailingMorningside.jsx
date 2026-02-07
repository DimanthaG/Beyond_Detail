import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { AUTO_DETAIL_PACKAGES } from '../../constants/servicePackages';
import '../../Pages/Services/Services.scss';

import SEO from '../../components/SEO';
const AutoDetailHero = lazy(() => import('../../components/AutoDetailHero/AutoDetailHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));
const SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));

function CarDetailingMorningside() {
    // Voice Search Optimized FAQ Schema
    const morningsideFAQ = [
        {
            question: "Do you provide mobile detailing in Morningside?",
            answer: "Yes! We offer both mobile detailing services directly to your home in Morningside and the surrounding areas, as well as premium in-shop services at our nearby location."
        }
    ];

    return (
        <>
            <SEO
                title="Car Detailing Morningside | 10-Year Warranty | Beyond Detail"
                description="Professional car detailing in Morningside. 10-Year Warranty, 3D Design Included, Same-Day Service. Serving U of T Scarborough & Military Trail areas."
                name="Beyond Detail Morningside"
                type="website"
                keywords="car detailing morningside, auto detailing morningside, window tinting morningside, ceramic coating morningside, car wash morningside"
                faq={morningsideFAQ}
            />
            <Suspense fallback={<Loading />}>
                <motion.div
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={animationOne}
                    transition={{ ...transition, delay: 0 }}
                >
                    <div className="auto-detail__wrapper">
                        <AutoDetailHero
                            scrollTarget="#pricing"
                            titleLine1="Professional Car Detailing"
                            titleLine2="in MORNINGSIDE"
                            titleLine3=""
                            subtitle="<strong>10-Year Warranty</strong> | <strong>3D Design Included</strong> | <strong>Same-Day Service</strong>.<br/><br/>Whether you're near <strong>Morningside Park</strong>, the <strong>University of Toronto Scarborough campus</strong>, or along <strong>Military Trail</strong>, we bring expert detailing to your doorstep."
                        />

                        <Suspense fallback={null}>
                            <ServiceGallery
                                serviceType="auto-detail"
                                title="Recent Projects in Morningside"
                                forceLandscape
                            />
                        </Suspense>

                        <section className="package-info">
                            <div className="package-info__container">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                                    variants={{
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                        hidden: { opacity: 0, y: 20 }
                                    }}
                                    className="package-info__header"
                                >
                                    <h2 className="package-info__title">Morningside Detailing Packages</h2>
                                    <p className="package-info__subtitle">
                                        Comprehensive detailing solutions for every vehicle in the Morningside community.
                                    </p>
                                </motion.div>

                                <div className="package-info__grid">
                                    <motion.article
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                                        variants={{
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.2,
                                                    duration: 0.3,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                },
                                            },
                                            hidden: {
                                                y: 10,
                                                opacity: 0,
                                            },
                                        }}
                                        className="package-info__card"
                                    >
                                        <div className="package-info__card-header">
                                            <h3 className="package-info__card-title">Express Detail</h3>
                                            <p className="package-info__card-subtitle">Quick & Affordable Car Cleaning</p>
                                        </div>
                                        <div className="package-info__card-content">
                                            <p className="package-info__card-description">
                                                Our Express Detail Package is designed for Morningside drivers who need a quick refresh. Includes thorough vacuuming, wipe-down, window cleaning, and a meticulous exterior hand wash. Perfect for maintenance between full details.
                                            </p>
                                        </div>
                                    </motion.article>

                                    <motion.article
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                                        variants={{
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.3,
                                                    duration: 0.3,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                },
                                            },
                                            hidden: {
                                                y: 10,
                                                opacity: 0,
                                            },
                                        }}
                                        className="package-info__card package-info__card--featured"
                                    >
                                        <div className="package-info__badge">Most Popular</div>
                                        <div className="package-info__card-header">
                                            <h3 className="package-info__card-title">Signature Detail</h3>
                                            <p className="package-info__card-subtitle">Deep Interior Cleaning & Sanitizing Service</p>
                                        </div>
                                        <div className="package-info__card-content">
                                            <p className="package-info__card-description">
                                                The Signature Detail is our most requested service in Morningside. We steam clean all surfaces, shampoo carpets and seats, and sanitize the entire cabin. Includes a premium exterior wash and tire shine. Best value for a like-new feel.
                                            </p>
                                        </div>
                                    </motion.article>

                                    <motion.article
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                                        variants={{
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.4,
                                                    duration: 0.3,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                },
                                            },
                                            hidden: {
                                                y: 10,
                                                opacity: 0,
                                            },
                                        }}
                                        className="package-info__card"
                                    >
                                        <div className="package-info__card-header">
                                            <h3 className="package-info__card-title">Premium Detail</h3>
                                            <p className="package-info__card-subtitle">Complete Full-Service Detailing Experience</p>
                                        </div>
                                        <div className="package-info__card-content">
                                            <p className="package-info__card-description">
                                                For the ultimate transformation, choose our Premium Detail. We combine deep extraction shampooing, steam cleaning, and extensive exterior detailing including clay bar treatment options. The choice for luxury vehicles and restoration needs in Morningside.
                                            </p>
                                        </div>
                                    </motion.article>
                                </div>
                            </div>
                        </section>

                        <Suspense fallback={null}>
                            <GoogleReviewsCarousel />
                        </Suspense>

                        <ServicePricing
                            title="Morningside Detailing Pricing"
                            packages={AUTO_DETAIL_PACKAGES}
                        />

                        <section className="detail-options">
                            <div className="detail-options__container">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                                    variants={{
                                        visible: {
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                delay: 0.1,
                                                duration: 0.3,
                                                ease: [0.25, 0.1, 0.25, 1],
                                            },
                                        },
                                        hidden: {
                                            y: 10,
                                            opacity: 0,
                                        },
                                    }}
                                    className="detail-options__header"
                                >
                                    <h2 className="detail-options__title">Individual Service Options</h2>
                                    <p className="detail-options__subtitle">
                                        Focused interior or exterior services for your specific needs.
                                    </p>
                                </motion.div>

                                <div className="detail-options__grid">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                                        variants={{
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.2,
                                                    duration: 0.3,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                },
                                            },
                                            hidden: {
                                                y: 10,
                                                opacity: 0,
                                            },
                                        }}
                                        className="detail-options__card"
                                    >
                                        <div className="detail-options__card-header">
                                            <h3 className="detail-options__card-title">Interior Only Detail</h3>
                                        </div>

                                        <div className="detail-options__price-section">
                                            <div className="detail-options__price-range">
                                                <span className="detail-options__price-label">Starting at</span>
                                                <div className="detail-options__price">
                                                    $60
                                                </div>
                                            </div>
                                            <p className="detail-options__price-note">Starting price. Larger vehicles may cost extra.</p>
                                        </div>

                                        <p className="detail-options__card-description">
                                            Deep clean for your car's interior. Vacuuming, steam cleaning, and sanitization.
                                        </p>

                                        <ul className="detail-options__features-list">
                                            <li className="detail-options__feature-item">
                                                <CheckCircle className="detail-options__feature-icon" />
                                                <span>Interior Vacuumed & Dusted</span>
                                            </li>
                                            <li className="detail-options__feature-item">
                                                <CheckCircle className="detail-options__feature-icon" />
                                                <span>Carpets & Seats Cleaned</span>
                                            </li>
                                            <li className="detail-options__feature-item">
                                                <CheckCircle className="detail-options__feature-icon" />
                                                <span>Interior Sanitized</span>
                                            </li>
                                        </ul>

                                        <motion.button
                                            className="detail-options__cta-button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                const contactSection = document.getElementById('contact');
                                                if (contactSection) {
                                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                        >
                                            Book Interior Only
                                        </motion.button>
                                    </motion.div>

                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                                        variants={{
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.3,
                                                    duration: 0.3,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                },
                                            },
                                            hidden: {
                                                y: 10,
                                                opacity: 0,
                                            },
                                        }}
                                        className="detail-options__card"
                                    >
                                        <div className="detail-options__card-header">
                                            <h3 className="detail-options__card-title">Exterior Only Detail</h3>
                                        </div>

                                        <div className="detail-options__price-section">
                                            <div className="detail-options__price-range">
                                                <span className="detail-options__price-label">Starting at</span>
                                                <div className="detail-options__price">
                                                    $50
                                                </div>
                                            </div>
                                            <p className="detail-options__price-note">Starting price. Larger vehicles may cost extra.</p>
                                        </div>

                                        <p className="detail-options__card-description">
                                            Hand wash and wax to make your car shine. Includes wheel cleaning and door jambs.
                                        </p>

                                        <ul className="detail-options__features-list">
                                            <li className="detail-options__feature-item">
                                                <CheckCircle className="detail-options__feature-icon" />
                                                <span>Exterior Hand Wash</span>
                                            </li>
                                            <li className="detail-options__feature-item">
                                                <CheckCircle className="detail-options__feature-icon" />
                                                <span>Wheels & Tires Cleaned</span>
                                            </li>
                                            <li className="detail-options__feature-item">
                                                <CheckCircle className="detail-options__feature-icon" />
                                                <span>Spray Wax Application</span>
                                            </li>
                                        </ul>

                                        <motion.button
                                            className="detail-options__cta-button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                const contactSection = document.getElementById('contact');
                                                if (contactSection) {
                                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                        >
                                            Book Exterior Only
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </div>
                        </section>
                        <Suspense fallback={null}>
                            <TrustBadges />
                        </Suspense>

                        <Suspense fallback={null}>
                            <SkillShowcase />
                        </Suspense>

                        {/* Also Serving Section */}
                        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '4rem' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Proudly Serving Morningside & GTA</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
                                Beyond Detail is located near <strong>Morningside</strong> at <strong style={{ color: '#f07900' }}>170 Finchdene Square</strong>.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                                <span style={{ background: '#f07900', color: 'white', padding: '8px 16px', borderRadius: '50px', fontWeight: '600' }}>Morningside</span>
                                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>West Hill</span>
                                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Highland Creek</span>
                                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Malvern</span>
                                <a href="/car-detailing-scarborough" style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px', color: 'inherit', textDecoration: 'none' }}>Scarborough</a>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', marginBottom: '4rem' }}>
                            <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>Common Questions in Morningside</h3>
                            <div style={{ background: '#111', padding: '2rem', borderRadius: '12px' }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>Do you provide mobile detailing in Morningside?</h4>
                                <p style={{ color: '#ccc', lineHeight: '1.6' }}>Yes! We offer both <strong>mobile detailing</strong> services directly to your home in Morningside and the surrounding areas, as well as premium in-shop services at our nearby location for extensive paint correction and ceramic coating work.</p>
                            </div>
                        </section>

                        <Suspense fallback={null}>
                            <Contact />
                        </Suspense>
                    </div>
                </motion.div>
            </Suspense>
        </>
    );
}

export default React.memo(CarDetailingMorningside);
