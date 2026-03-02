import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import { AUTO_DETAIL_PACKAGES } from '../../constants/servicePackages';
import '../../Pages/Services/Services.scss';

const SEO = lazy(() => import('../../components/SEO'));
const AutoDetailHero = lazy(() => import('../../components/AutoDetailHero/AutoDetailHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));
const SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));

function CarDetailingAjax() {
    // Voice Search Optimized FAQ Schema
    const ajaxFAQ = [
        {
            question: "Do you offer mobile detailing in Ajax?",
            answer: "Yes! We provide mobile car detailing across Ajax and Durham Region, as well as premium in-shop services just a short drive away."
        }
    ];

    return (
        <>
            <Suspense fallback={<Loading />}>
                <SEO
                    title="Car Detailing Ajax | 5+ Year Protection | Beyond Detail"
                    description="Professional car detailing in Ajax. 5+ Year Protection, Free Consultation, Same-Day Service. Serving Durham Region & GTA. (647) 689-6109"
                    name="Beyond Detail Ajax"
                    type="website"
                    keywords="car detailing ajax, auto detailing ajax, window tinting ajax, ceramic coating ajax, car wash ajax"
                    faq={ajaxFAQ}
                />
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
                            titleLine2="in AJAX"
                            titleLine3=""
                            subtitle="<strong>5+ Year Protection</strong> | <strong>Free Consultation</strong> | <strong>Same-Day Service</strong>.<br/><br/>From the <strong>Waterfront</strong> to <strong>Taunton</strong>, we bring expert detailing services to all of Ajax."
                        />

                        <Suspense fallback={null}>
                            <ServiceGallery
                                serviceType="auto-detail"
                                title="Our Work in Ajax"
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
                                    <h2 className="package-info__title">Ajax Detailing Packages</h2>
                                    <p className="package-info__subtitle">
                                        Premium auto care for Ajax residents. From maintenance washes to full paint correction.
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
                                                Fast and effective cleaning for Ajax drivers. Includes interior vacuum, wipe-down, and exterior hand wash. Perfect for regular maintenance.
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
                                                Our most requested service in Ajax. Steam cleaning, shampooing, and full sanitization for a fresh, like-new interior.
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
                                                The ultimate treatment. Deep extraction, steam cleaning, and extensive exterior detailing. The best choice for luxury vehicles in Ajax.
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
                            title="Ajax Detailing Pricing"
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
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Proudly Serving Ajax & Durham Region</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
                                Beyond Detail provides premium mobile detailing services throughout <strong>Ajax</strong>.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                                <span style={{ background: '#f07900', color: 'white', padding: '8px 16px', borderRadius: '50px', fontWeight: '600' }}>Ajax</span>
                                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Pickering</span>
                                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Whitby</span>
                                <span style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px' }}>Oshawa</span>
                                <Link to="/car-detailing-scarborough" style={{ border: '1px solid #555', padding: '8px 16px', borderRadius: '50px', color: 'inherit', textDecoration: 'none' }}>Scarborough</Link>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', marginBottom: '4rem' }}>
                            <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>Common Questions in Ajax</h3>
                            <div style={{ background: '#111', padding: '2rem', borderRadius: '12px' }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>Do you provide mobile detailing in Ajax?</h4>
                                <p style={{ color: '#ccc', lineHeight: '1.6' }}>Yes! We offer both <strong>mobile detailing</strong> services directly to your home in Ajax (Waterfront area, Taunton, etc.) and premium in-shop services just a short drive away.</p>
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

export default React.memo(CarDetailingAjax);
