import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
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

function CarDetailingMarkham() {
  return (
    <>
      <SEO
        title="Car Detailing Markham | Auto Detailing Near Me | Beyond Detail"
        description="Car detailing in Markham by Beyond Detail. Serving Unionville, Cornell & Markville areas. Ceramic coating & paint correction. Book at (647) 689-6109."
        name="Beyond Detail Markham"
        type="website"
        keywords="detailing markham, car detailing markham, auto detailing markham, ceramic coating markham, window tinting markham, paint correction markham, detailing unionville, detailing box grove, car wash markham"
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
              titleLine1="Premium Car Detailing in"
              titleLine2="MARKHAM &"
              titleLine3="GTA"
              subtitle="Looking for top-tier <strong>car detailing in Markham</strong>? Visit our professional shop for showroom quality results. From Unionville to Box Grove, we serve the entire Markham community with premium in-shop detailing."
            />

            <Suspense fallback={null}>
              <ServiceGallery
                serviceType="auto-detail"
                title="Our Work in Markham"
                forceLandscape
              />
            </Suspense>

            {/* Detailing Markham - High Priority SEO Section */}
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', color: '#f07900', marginBottom: '1rem', textAlign: 'center' }}>
                Professional Detailing in Markham - Serving York Region
              </h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0', textAlign: 'center', marginBottom: '1.5rem' }}>
                <p>
                  Beyond Detail is Markham's trusted auto detailing specialist, providing premium in-shop services
                  for customers throughout York Region. Located just minutes away at <strong>170 Finchdene Square</strong>,
                  we are the go-to choice for car enthusiasts from <strong>Main Street Unionville</strong>, <strong>Markville Mall</strong> area,
                  <strong>Milliken</strong>, and the <strong>Cornell</strong> community.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Whether you commute along <strong>Highway 7</strong> or the <strong>407</strong>, our comprehensive <strong>detailing services in Markham</strong>
                  keep your vehicle protected. We specialize in professional
                  <Link to="/ceramic-coating-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>ceramic coating</Link>,
                  <Link to="/paint-correction-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>paint correction</Link>,
                  <Link to="/window-tinting-markham" style={{ color: '#f07900', textDecoration: 'none', marginLeft: '0.5rem' }}>window tinting</Link>,
                  and complete <strong>auto detailing</strong>. ⭐ Trusted by 70+ five-star reviews from satisfied Markham customers.
                </p>
                <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#b0b0b0' }}>
                  <strong>Why choose Beyond Detail for detailing in Markham?</strong> Professional in-shop service,
                  premium products (LLUMAR, Ceramic Pro), lifetime warranties, same-day appointments available,
                  and convenient location serving all of York Region. Call (647) 689-6109 to book your Markham detailing service today.
                </p>
              </div>
            </section>

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
                  <h2 className="package-info__title">Markham Detailing Packages</h2>
                  <p className="package-info__subtitle">
                    Exceptional auto care for Markham drivers. Premium in-shop service available.
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
                        Our Express Detail Package is designed for drivers who want their vehicle looking clean and refreshed without the long wait. This quick service includes a thorough interior vacuum, dusting, and window cleaning, along with an exterior hand wash and tire shine. It's perfect for maintaining your car's appearance between full details. Whether you're getting ready for a meeting, showing your vehicle for sale, or just want a cleaner ride, our Express Detail delivers quality and convenience.
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
                        Our Signature Detail Package is the most popular choice at Beyond Detail for customers who want their car's interior fully cleaned and sanitized. This package includes steam cleaning of panels, vents, and trims, a full vacuum, window cleaning, and exterior hand wash. We also disinfect and sanitize every surface, ensuring a fresh and healthy cabin environment. It's perfect for families, daily drivers, and anyone wanting to remove built-up dirt and bacteria from their vehicle's interior.
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
                        The Premium Detail Package is our top-tier full-service detailing experience. It combines everything from our Express and Signature packages with deep carpet and seat shampooing using professional extraction equipment. This service removes stubborn stains, grime, and odors while restoring your interior to like-new condition. We clean all panels, dashboards, and vents, followed by an exterior hand wash, tire shine, and door and trunk jamb cleaning. Perfect for heavily used vehicles, pre-sale prep, or seasonal deep cleans, the Premium Detail transforms your car from the inside out.
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
              title="Markham Detailing Pricing"
              packages={AUTO_DETAIL_PACKAGES}
            />

            <section className="detail-options">
              <div className="detail-options__container">
                <div className="detail-options__header">
                  <h2 className="detail-options__title">Individual Service Options</h2>
                  <p className="detail-options__subtitle">
                    Need just interior or exterior detailing? We offer focused services for specific areas of your vehicle.
                  </p>
                </div>
                <div className="detail-options__grid">
                  <div className="detail-options__card">
                    <h3 className="detail-options__card-title">Interior Only Detail</h3>
                    <div className="detail-options__price-section">
                      <div className="detail-options__price-range">
                        <span className="detail-options__price-label">Starting at</span>
                        <div className="detail-options__price">$60</div>
                      </div>
                      <p className="detail-options__price-note">Starting price. Larger vehicles may cost extra.</p>
                    </div>
                    <p className="detail-options__card-description">
                      Comprehensive interior cleaning focused on seats, carpets, upholstery, and all interior surfaces. Perfect when your exterior is already clean.
                    </p>
                    <ul className="detail-options__features-list">
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>Interior Vacuumed & Dusted</span></li>
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>Carpets, Seats, & Mats Vacuumed</span></li>
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>All Upholstery Cleaned</span></li>
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>Dashboard, Console & Doors Cleaned</span></li>
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>Interior Windows Cleaned</span></li>
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>Interior Sanitized & Disinfected</span></li>
                    </ul>
                    <button className="detail-options__cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Book Interior Only</button>
                  </div>
                  <div className="detail-options__card">
                    <h3 className="detail-options__card-title">Exterior Only Detail</h3>
                    <div className="detail-options__price-section">
                      <div className="detail-options__price-range">
                        <span className="detail-options__price-label">Starting at</span>
                        <div className="detail-options__price">$50</div>
                      </div>
                      <p className="detail-options__price-note">Starting price. Larger vehicles may cost extra.</p>
                    </div>
                    <p className="detail-options__card-description">
                      Complete exterior cleaning including hand wash, wheel cleaning, and door jam detailing. Ideal for maintaining your vehicle's exterior appearance.
                    </p>
                    <ul className="detail-options__features-list">
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>Exterior Hand Wash</span></li>
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>Tire and Rims Cleaned</span></li>
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>Door Jams Cleaned</span></li>
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>Trunk Jams Cleaned</span></li>
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>Exterior Windows Cleaned</span></li>
                      <li className="detail-options__feature-item"><CheckCircle className="detail-options__feature-icon" /><span>All Mirrors Cleaned</span></li>
                    </ul>
                    <button className="detail-options__cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Book Exterior Only</button>
                  </div>
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

export default React.memo(CarDetailingMarkham);
