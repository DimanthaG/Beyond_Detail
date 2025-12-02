import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import '../../Pages/Services/Services.scss';

const SEO = lazy(() => import('../../components/SEO'));
const AutoDetailHero = lazy(() => import('../../components/AutoDetailHero/AutoDetailHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function CarDetailingAjax() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <SEO
                    title="Car Detailing Ajax | Professional Auto Detailing & Tinting"
                    description="Expert car detailing in Ajax & Durham Region. ⭐ Mobile Service, Window Tinting, Ceramic Coating. Lifetime Warranty. Call (647) 689-6109 for a Quote."
                    name="Beyond Detail Ajax"
                    type="website"
                    keywords="car detailing ajax, auto detailing ajax, window tinting ajax, ceramic coating ajax, car wash ajax"
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
                            titleLine1="Professional Car Detailing in"
                            titleLine2="AJAX &"
                            titleLine3="DURHAM"
                            subtitle="<strong>Ajax</strong> drivers trust Beyond Detail for comprehensive vehicle care. We specialize in restoring and protecting vehicles against the harsh Canadian elements. Our dedicated shop brings professional quality to your vehicle, just a short drive from Ajax."
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
                                        From the waterfront to Taunton Road, we bring premium detailing services to all of Ajax.
                                    </p>
                                </motion.div>

                                <div className="package-info__grid">
                                    <motion.article
                                        className="package-info__card"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="package-info__card-header">
                                            <h3 className="package-info__card-title">Express Detail</h3>
                                            <p className="package-info__card-subtitle">Maintenance Clean</p>
                                        </div>
                                        <div className="package-info__card-content">
                                            <p className="package-info__card-description">
                                                A great option for regular upkeep. Includes a careful hand wash, wheel cleaning, and a complete interior vacuum and wipe down. Keep your daily driver looking fresh.
                                            </p>
                                        </div>
                                    </motion.article>

                                    <motion.article
                                        className="package-info__card package-info__card--featured"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="package-info__badge">Most Popular</div>
                                        <div className="package-info__card-header">
                                            <h3 className="package-info__card-title">Signature Detail</h3>
                                            <p className="package-info__card-subtitle">Deep Interior Clean</p>
                                        </div>
                                        <div className="package-info__card-content">
                                            <p className="package-info__card-description">
                                                Our most requested service in Ajax. Features steam cleaning for sanitization, salt stain removal, and leather conditioning. Includes exterior wash and wax.
                                            </p>
                                        </div>
                                    </motion.article>

                                    <motion.article
                                        className="package-info__card"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="package-info__card-header">
                                            <h3 className="package-info__card-title">Premium Detail</h3>
                                            <p className="package-info__card-subtitle">Full Restoration</p>
                                        </div>
                                        <div className="package-info__card-content">
                                            <p className="package-info__card-description">
                                                The complete package. Shampooing of seats and carpets, clay bar paint decontamination, and engine bay cleaning. Restores your vehicle to showroom condition.
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
                            packages={[
                                {
                                    name: "Express Detail",
                                    priceRange: { start: 100 },
                                    description: "Quick & affordable maintenance clean.",
                                    features: ["Hand Wash", "Interior Vacuum", "Window Cleaning", "Tire Shine"],
                                    ctaText: "Book Now"
                                },
                                {
                                    name: "Signature Detail",
                                    priceRange: { start: 150 },
                                    featured: true,
                                    description: "Deep clean with salt removal & steam.",
                                    features: ["Steam Cleaning", "Salt Removal", "Interior Sanitization", "Exterior Wax"],
                                    ctaText: "Book Now"
                                },
                                {
                                    name: "Premium Detail",
                                    priceRange: { start: 200 },
                                    description: "Complete interior & exterior restoration.",
                                    features: ["Shampoo Extraction", "Clay Bar", "Engine Detail", "Paint Sealant"],
                                    ctaText: "Book Now"
                                }
                            ]}
                        />

                        <section className="detail-options">
                            <div className="detail-options__container">
                                <div className="detail-options__header">
                                    <h2 className="detail-options__title">Targeted Services</h2>
                                    <p className="detail-options__subtitle">Focus on just the interior or exterior of your vehicle.</p>
                                </div>
                                <div className="detail-options__grid">
                                    <div className="detail-options__card">
                                        <h3 className="detail-options__card-title">Interior Only</h3>
                                        <div className="detail-options__price-section">
                                            <span className="detail-options__price">$60+</span>
                                        </div>
                                        <ul className="detail-options__features-list">
                                            <li className="detail-options__feature-item"><CheckCircle size={16} /> Full Vacuum</li>
                                            <li className="detail-options__feature-item"><CheckCircle size={16} /> Steam Clean</li>
                                            <li className="detail-options__feature-item"><CheckCircle size={16} /> Surface Wipe</li>
                                        </ul>
                                        <button className="detail-options__cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Book Interior</button>
                                    </div>
                                    <div className="detail-options__card">
                                        <h3 className="detail-options__card-title">Exterior Only</h3>
                                        <div className="detail-options__price-section">
                                            <span className="detail-options__price">$50+</span>
                                        </div>
                                        <ul className="detail-options__features-list">
                                            <li className="detail-options__feature-item"><CheckCircle size={16} /> Hand Wash</li>
                                            <li className="detail-options__feature-item"><CheckCircle size={16} /> Wheel Clean</li>
                                            <li className="detail-options__feature-item"><CheckCircle size={16} /> Tire Shine</li>
                                        </ul>
                                        <button className="detail-options__cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Book Exterior</button>
                                    </div>
                                </div>
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
