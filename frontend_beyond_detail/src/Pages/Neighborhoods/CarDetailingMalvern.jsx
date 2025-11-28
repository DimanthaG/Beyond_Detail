import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import { Link } from 'react-router-dom';
import './NeighborhoodPage.scss';

const SEO = lazy(() => import('../../components/SEO'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

function CarDetailingMalvern() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <SEO
                    title="Car Detailing Malvern | Auto Detailing Services in Malvern, Scarborough"
                    description="Professional car detailing in Malvern, Scarborough. ⭐ 68 Five-Star Reviews | Mobile & In-Shop Service | Lifetime Warranty | Just 3km from Malvern | Call (647) 689-6109"
                    name="Beyond Detail Toronto"
                    type="website"
                    keywords="car detailing malvern, auto detailing malvern, car detailing malvern scarborough, mobile detailing malvern, ceramic coating malvern, window tinting malvern"
                />
                <motion.div
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={animationOne}
                    transition={{ ...transition, delay: 0 }}
                >
                    <div className="neighborhood-page">
                        {/* Hero Section */}
                        <section className="neighborhood-hero">
                            <div className="neighborhood-hero__container">
                                <div className="neighborhood-hero__content">
                                    <h1 className="neighborhood-hero__title">
                                        Car Detailing in Malvern, Scarborough
                                    </h1>
                                    <p className="neighborhood-hero__subtitle">
                                        Professional Auto Detailing Services Serving Malvern & Surrounding Areas
                                    </p>
                                    <div className="neighborhood-hero__features">
                                        <div className="feature-badge">⭐ 68 Five-Star Reviews</div>
                                        <div className="feature-badge">🚗 Mobile Service Available</div>
                                        <div className="feature-badge">🛡️ Lifetime Warranty</div>
                                        <div className="feature-badge">📍 Just 3km from Malvern</div>
                                    </div>
                                    <div className="neighborhood-hero__cta">
                                        <a href="tel:+16476896109" className="btn btn-primary">
                                            Call (647) 689-6109
                                        </a>
                                        <Link to="/contact" className="btn btn-secondary">
                                            Book Online
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Main Content */}
                        <section className="neighborhood-content">
                            <div className="neighborhood-content__container">
                                <div className="neighborhood-content__intro">
                                    <p>
                                        Looking for professional car detailing in Malvern? Beyond Detail offers comprehensive
                                        auto detailing services right in your neighborhood. We're located just 3 minutes away
                                        at 170 Finchdene Square and proudly serve Malvern residents with both mobile and
                                        in-shop services.
                                    </p>
                                    <p>
                                        Whether you're near Malvern Town Centre, Morningside Park, or anywhere in the Malvern
                                        community, we bring premium car detailing services directly to you. Our expert technicians
                                        use professional-grade equipment and premium products to restore and protect your vehicle.
                                    </p>
                                </div>

                                {/* Services Section */}
                                <div className="neighborhood-services">
                                    <h2>Our Car Detailing Services in Malvern</h2>
                                    <div className="services-grid">
                                        <div className="service-card">
                                            <h3>Interior Detailing</h3>
                                            <ul>
                                                <li>Deep vacuum and steam cleaning</li>
                                                <li>Leather conditioning and protection</li>
                                                <li>Dashboard and console cleaning</li>
                                                <li>Carpet and upholstery shampooing</li>
                                                <li>Odor elimination</li>
                                            </ul>
                                            <Link to="/services/interior-detailing" className="service-link">
                                                Learn More →
                                            </Link>
                                        </div>

                                        <div className="service-card">
                                            <h3>Exterior Detailing</h3>
                                            <ul>
                                                <li>Hand wash and dry</li>
                                                <li>Clay bar treatment</li>
                                                <li>Paint correction and polishing</li>
                                                <li>Wheel and tire detailing</li>
                                                <li>Trim restoration</li>
                                            </ul>
                                            <Link to="/services/exterior-detailing" className="service-link">
                                                Learn More →
                                            </Link>
                                        </div>

                                        <div className="service-card">
                                            <h3>Ceramic Coating</h3>
                                            <ul>
                                                <li>Professional-grade Ceramic Pro coating</li>
                                                <li>2-5 year protection</li>
                                                <li>UV and chemical resistance</li>
                                                <li>Hydrophobic properties</li>
                                                <li>Enhanced gloss and shine</li>
                                            </ul>
                                            <Link to="/ceramic-coating" className="service-link">
                                                Learn More →
                                            </Link>
                                        </div>

                                        <div className="service-card">
                                            <h3>Window Tinting</h3>
                                            <ul>
                                                <li>Premium LLUMAR films</li>
                                                <li>UV protection (99%)</li>
                                                <li>Heat rejection</li>
                                                <li>Privacy and security</li>
                                                <li>Lifetime warranty</li>
                                            </ul>
                                            <Link to="/window-tint" className="service-link">
                                                Learn More →
                                            </Link>
                                        </div>

                                        <div className="service-card">
                                            <h3>Paint Correction</h3>
                                            <ul>
                                                <li>Swirl mark removal</li>
                                                <li>Scratch removal</li>
                                                <li>Oxidation correction</li>
                                                <li>Multi-stage polishing</li>
                                                <li>Showroom finish</li>
                                            </ul>
                                            <Link to="/paint-correction" className="service-link">
                                                Learn More →
                                            </Link>
                                        </div>

                                        <div className="service-card">
                                            <h3>Full Detail Packages</h3>
                                            <ul>
                                                <li>Complete interior & exterior</li>
                                                <li>Engine bay cleaning</li>
                                                <li>Headlight restoration</li>
                                                <li>Trim and tire dressing</li>
                                                <li>Best value packages</li>
                                            </ul>
                                            <Link to="/services" className="service-link">
                                                View Packages →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Why Choose Us */}
                                <div className="neighborhood-why-choose">
                                    <h2>Why Choose Beyond Detail for Malvern Car Detailing?</h2>
                                    <div className="why-choose-grid">
                                        <div className="why-choose-item">
                                            <div className="icon">⭐</div>
                                            <h3>68 Five-Star Google Reviews</h3>
                                            <p>
                                                Our Malvern customers love us! We maintain a perfect 5.0 rating with
                                                consistently excellent reviews from satisfied clients throughout Scarborough.
                                            </p>
                                        </div>

                                        <div className="why-choose-item">
                                            <div className="icon">🚗</div>
                                            <h3>Mobile Service in Malvern</h3>
                                            <p>
                                                We come to you! Whether you're at home near Malvern Town Centre or at work,
                                                our mobile detailing service brings professional results to your location.
                                            </p>
                                        </div>

                                        <div className="why-choose-item">
                                            <div className="icon">🛡️</div>
                                            <h3>Lifetime Warranty</h3>
                                            <p>
                                                All our services come with a lifetime warranty. We stand behind our work
                                                and guarantee your satisfaction with every detail.
                                            </p>
                                        </div>

                                        <div className="why-choose-item">
                                            <div className="icon">📍</div>
                                            <h3>Just 3km from Malvern</h3>
                                            <p>
                                                Located at 170 Finchdene Square, we're your local car detailing experts.
                                                Quick and convenient service for all Malvern residents.
                                            </p>
                                        </div>

                                        <div className="why-choose-item">
                                            <div className="icon">💎</div>
                                            <h3>Premium Products</h3>
                                            <p>
                                                We use only the best: LLUMAR window films, Ceramic Pro coatings, and
                                                professional-grade detailing products trusted by experts worldwide.
                                            </p>
                                        </div>

                                        <div className="why-choose-item">
                                            <div className="icon">⚡</div>
                                            <h3>Same-Day Appointments</h3>
                                            <p>
                                                Need service today? We offer same-day appointments for Malvern residents.
                                                Call us at (647) 689-6109 to check availability.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Serving Malvern Section */}
                                <div className="neighborhood-serving">
                                    <h2>Proudly Serving Malvern and Surrounding Areas</h2>
                                    <p>
                                        We provide professional car detailing services throughout Malvern and all
                                        surrounding Scarborough neighborhoods including Morningside Heights, Milliken,
                                        Rouge, and West Hill. Whether you're near Neilson Park Creative Centre, Malvern
                                        Public Library, or anywhere in the community, we're your trusted auto detailing experts.
                                    </p>
                                    <div className="neighborhoods-list">
                                        <h3>Areas We Serve:</h3>
                                        <ul>
                                            <li>Malvern (all areas)</li>
                                            <li>Morningside Heights</li>
                                            <li>Milliken</li>
                                            <li>Rouge</li>
                                            <li>West Hill</li>
                                            <li>Agincourt</li>
                                            <li>Woburn</li>
                                            <li>Scarborough Village</li>
                                            <li>All of Scarborough</li>
                                            <li>Toronto</li>
                                            <li>Markham</li>
                                            <li>Pickering</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Directions Section */}
                                <div className="neighborhood-directions">
                                    <h2>How to Get to Beyond Detail from Malvern</h2>
                                    <div className="directions-content">
                                        <div className="directions-text">
                                            <p>
                                                <strong>From Malvern Town Centre:</strong> Head south on Morningside Avenue,
                                                turn left on Finch Avenue East, then right on Finchdene Square. We're located
                                                at unit 11. Just 3 minutes away!
                                            </p>
                                            <p>
                                                <strong>Address:</strong> 170 Finchdene Square unit 11, Scarborough, ON M1X 1B3
                                            </p>
                                            <p>
                                                <strong>Free parking available</strong> for all customers.
                                            </p>
                                            <p>
                                                <strong>Prefer mobile service?</strong> We'll come to you anywhere in Malvern!
                                            </p>
                                        </div>
                                        <div className="directions-cta">
                                            <a
                                                href="https://www.google.com/maps/dir//170+Finchdene+Square+unit+11,+Scarborough,+ON+M1X+1B3"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary"
                                            >
                                                Get Directions
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing Section */}
                                <div className="neighborhood-pricing">
                                    <h2>Car Detailing Pricing for Malvern Residents</h2>
                                    <p className="pricing-intro">
                                        We offer competitive pricing with exceptional value. All services include our
                                        lifetime warranty and satisfaction guarantee.
                                    </p>
                                    <div className="pricing-grid">
                                        <div className="pricing-card">
                                            <h3>Interior Detail</h3>
                                            <div className="price">Starting at $150</div>
                                            <ul>
                                                <li>Deep vacuum & steam clean</li>
                                                <li>Dashboard & console detail</li>
                                                <li>Leather conditioning</li>
                                                <li>Window cleaning</li>
                                                <li>Odor elimination</li>
                                            </ul>
                                        </div>

                                        <div className="pricing-card">
                                            <h3>Exterior Detail</h3>
                                            <div className="price">Starting at $150</div>
                                            <ul>
                                                <li>Hand wash & dry</li>
                                                <li>Clay bar treatment</li>
                                                <li>Paint polish</li>
                                                <li>Wheel & tire detail</li>
                                                <li>Trim restoration</li>
                                            </ul>
                                        </div>

                                        <div className="pricing-card featured">
                                            <div className="popular-badge">Most Popular</div>
                                            <h3>Full Detail</h3>
                                            <div className="price">Starting at $250</div>
                                            <ul>
                                                <li>Complete interior & exterior</li>
                                                <li>Engine bay cleaning</li>
                                                <li>Headlight restoration</li>
                                                <li>Paint correction (1-stage)</li>
                                                <li>Best value!</li>
                                            </ul>
                                        </div>

                                        <div className="pricing-card">
                                            <h3>Ceramic Coating</h3>
                                            <div className="price">Starting at $800</div>
                                            <ul>
                                                <li>Paint correction included</li>
                                                <li>2-5 year protection</li>
                                                <li>Ceramic Pro coating</li>
                                                <li>Lifetime warranty</li>
                                                <li>Hydrophobic finish</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="pricing-note">
                                        *Prices vary based on vehicle size and condition. Call for exact quote: (647) 689-6109
                                    </p>
                                </div>

                                {/* CTA Section */}
                                <div className="neighborhood-cta">
                                    <h2>Book Your Car Detailing Appointment in Malvern</h2>
                                    <p>
                                        Ready to give your car the care it deserves? Call us at (647) 689-6109 or book
                                        online. We offer flexible scheduling for Malvern residents, including evenings
                                        and weekends. Mobile service available!
                                    </p>
                                    <div className="cta-buttons">
                                        <a href="tel:+16476896109" className="btn btn-primary btn-large">
                                            📞 Call (647) 689-6109
                                        </a>
                                        <Link to="/contact" className="btn btn-secondary btn-large">
                                            📅 Book Online
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Gallery */}
                        <Suspense fallback={null}>
                            <ServiceGallery
                                serviceType="auto-detail"
                                title="Our Work in Malvern & Scarborough"
                            />
                        </Suspense>

                        {/* Reviews */}
                        <Suspense fallback={null}>
                            <GoogleReviewsCarousel />
                        </Suspense>

                        {/* Contact Form */}
                        <Suspense fallback={null}>
                            <Contact />
                        </Suspense>
                    </div>
                </motion.div>
            </Suspense>
        </>
    );
}

export default React.memo(CarDetailingMalvern);
