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

function CarDetailingMarkhamRoad() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <SEO
                    title="Car Detailing Markham Road | Scarborough Auto Detailing Near Me"
                    description="Expert car detailing near Markham Road & Finch. ⭐ 5-Star Rated Studio at 170 Finchdene Sq. Interior Deep Clean, Ceramic Coating & Paint Correction. Book Online."
                    name="Beyond Detail Markham Road"
                    type="website"
                    keywords="car detailing markham road, auto detailing near markham road, car wash markham road, detailing finch and markham, ceramic coating markham road"
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
                            titleLine1="Professional Car Detailing Near"
                            titleLine2="MARKHAM ROAD &"
                            titleLine3="FINCH"
                            subtitle="Located just minutes from <strong>Markham Road</strong>, Beyond Detail serves the local community with premium auto detailing. Visit our studio at <strong>170 Finchdene Square</strong> for showroom-quality results."
                        />

                        <Suspense fallback={null}>
                            <ServiceGallery
                                serviceType="auto-detail"
                                title="Markham Road Car Detailing Pros"
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
                                    <h2 className="package-info__title">Detailing Services Near Markham Road</h2>
                                    <p className="package-info__subtitle">
                                        Convenient drop-off for residents of Malvern, Agincourt, and Markham Road areas.
                                    </p>
                                </motion.div>

                                {/* Reusing the standard packages grid structure for consistency */}
                                <div className="package-info__grid">
                                    <motion.article
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                                        variants={{
                                            visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
                                            hidden: { y: 10, opacity: 0 }
                                        }}
                                        className="package-info__card"
                                    >
                                        <div className="package-info__card-header">
                                            <h3 className="package-info__card-title">Express Detail</h3>
                                            <p className="package-info__card-subtitle">Quick & Affordable Car Cleaning</p>
                                        </div>
                                        <div className="package-info__card-content">
                                            <p className="package-info__card-description">
                                                Perfect for busy Markham Road commuters! Our Express Detail gets you in and out quickly with a thorough interior vacuum, wipe down, and exterior hand wash. Ideal for maintaining your vehicle's shine between deep cleans.
                                            </p>
                                        </div>
                                    </motion.article>

                                    <motion.article
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                                        variants={{
                                            visible: { y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
                                            hidden: { y: 10, opacity: 0 }
                                        }}
                                        className="package-info__card package-info__card--featured"
                                    >
                                        <div className="package-info__badge">Most Popular</div>
                                        <div className="package-info__card-header">
                                            <h3 className="package-info__card-title">Signature Detail</h3>
                                            <p className="package-info__card-subtitle">Deep Interior Cleaning</p>
                                        </div>
                                        <div className="package-info__card-content">
                                            <p className="package-info__card-description">
                                                Our best-selling package for Scarborough locals. Includes deep steam cleaning, full interior sanitization, and a meticulous hand wash. We remove the salt, dirt, and grime picked up from city driving.
                                            </p>
                                        </div>
                                    </motion.article>

                                    <motion.article
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                                        variants={{
                                            visible: { y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
                                            hidden: { y: 10, opacity: 0 }
                                        }}
                                        className="package-info__card"
                                    >
                                        <div className="package-info__card-header">
                                            <h3 className="package-info__card-title">Premium Detail</h3>
                                            <p className="package-info__card-subtitle">Showroom Level Restoration</p>
                                        </div>
                                        <div className="package-info__card-content">
                                            <p className="package-info__card-description">
                                                The ultimate treat for your car. Includes shampoo extraction for carpets and seats, engine bay cleaning, and premium wax application. If you live near Markham Rd & Finch, this is the service that makes your car feel brand new again.
                                            </p>
                                        </div>
                                    </motion.article>
                                </div>
                            </div>
                        </section>

                        <section className="seo-content-box" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 4rem' }}>
                            <h2 className="seo-title">
                                Why Choose Beyond Detail on Markham Road?
                            </h2>
                            <div>
                                <p className="seo-text-lg">
                                    If you're searching for **"car detailing Markham Road"** or **"auto detailing near me"**, you've found the best local studio.
                                    Beyond Detail is conveniently located just east of Markham Road at **170 Finchdene Square**. We specialize in high-end
                                    <a href="/ceramic-coating-scarborough">ceramic coating</a>, <a href="/paint-correction">paint correction</a>, and
                                    <a href="/tint">window tinting</a> for all vehicle types.
                                </p>
                                <p className="seo-text-lg" style={{ marginTop: '1rem' }}>
                                    Avoid the automated car washes on Markham Road that scratch your paint. Trust our certified professionals for a safe,
                                    swirl-free hand wash and proper paint protection. We use industry-leading products and techniques to ensure your vehicle
                                    stays protected against Toronto's harsh weather.
                                </p>
                            </div>
                        </section>

                        <Suspense fallback={null}>
                            <GoogleReviewsCarousel />
                        </Suspense>

                        <ServicePricing
                            title="Markham Road Detailing Prices"
                            packages={AUTO_DETAIL_PACKAGES}
                        />

                        <Suspense fallback={null}>
                            <Contact />
                        </Suspense>
                    </div>
                </motion.div>
            </Suspense>
        </>
    );
}

export default React.memo(CarDetailingMarkhamRoad);
