import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
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

function CarDetailingWoburn() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <SEO
                    title="Car Detailing Woburn | Auto Detailing & Ceramic Coating | Beyond Detail"
                    description="Professional car detailing in Woburn, Scarborough. ⭐ Top-Rated Auto Detailing | Mobile & In-Shop Service | Paint Correction & Ceramic Coating | Call (647) 689-6109"
                    name="Beyond Detail Woburn"
                    type="website"
                    keywords="car detailing woburn, auto detailing woburn, window tinting woburn, ceramic coating woburn, car wash woburn"
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
                            titleLine1="Expert Car Detailing in"
                            titleLine2="WOBURN &"
                            titleLine3="SCARBOROUGH"
                            subtitle="<strong>Woburn's</strong> trusted choice for premium auto care. From Ellesmere to Lawrence, we bring showroom shine to your doorstep with expert detailing and paint protection."
                        />

                        <Suspense fallback={null}>
                            <ServiceGallery
                                serviceType="auto-detail"
                                title="Recent Projects in Woburn"
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
                                    <h2 className="package-info__title">Woburn Detailing Packages</h2>
                                    <p className="package-info__subtitle">
                                        Comprehensive detailing solutions for every vehicle in the Woburn community.
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
                                                Our Express Detail Package is designed for Woburn drivers who need a quick refresh. Includes thorough vacuuming, wipe-down, window cleaning, and a meticulous exterior hand wash. Perfect for maintenance between full details.
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
                                                The Signature Detail is our most requested service in Woburn. We steam clean all surfaces, shampoo carpets and seats, and sanitize the entire cabin. Includes a premium exterior wash and tire shine. Best value for a like-new feel.
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
                                                For the ultimate transformation, choose our Premium Detail. We combine deep extraction shampooing, steam cleaning, and extensive exterior detailing including clay bar treatment options. The choice for luxury vehicles and restoration needs in Woburn.
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
                            title="Woburn Detailing Pricing"
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

                        <Suspense fallback={null}>
                            <Contact />
                        </Suspense>
                    </div>
                </motion.div>
            </Suspense>
        </>
    );
}

export default React.memo(CarDetailingWoburn);
