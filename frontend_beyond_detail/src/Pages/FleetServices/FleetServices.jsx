import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import './FleetServices.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function FleetServices() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Fleet Services Toronto, Scarborough, Markham, Pickering | Commercial Vehicle Detailing'
          description='Professional fleet detailing services in Toronto, Scarborough, Markham, and Pickering. Commercial vehicle fleet maintenance, detailing, and protection. Keep your fleet looking professional across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Fleet Services'
          keywords='fleet services Toronto, commercial vehicle detailing Scarborough, fleet detailing Markham, company car detailing Pickering, commercial auto detailing GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='fleet-services__wrapper'>
            <BackgroundPaths 
              title="Fleet Services"
              scrollTarget="#pricing"
              description="Keep your entire fleet looking professional while maximizing vehicle value. We offer flexible scheduling, volume discounts, and comprehensive packages designed for businesses. From basic maintenance to full detailing, we ensure consistent quality across every vehicle in your fleet."
            />
            <Suspense fallback={null}>
              <ServiceGallery serviceType="fleet-services" title="Fleet Services Gallery" />
            </Suspense>
            <ServiceInfoSection
              title="Professional Fleet Detailing Services"
              subtitle="Commercial Vehicle Care"
              description="Maintain your commercial vehicle fleet's professional appearance and value with our specialized fleet detailing services. We offer flexible scheduling, volume discounts, and comprehensive packages designed to keep your entire fleet looking its best while minimizing downtime."
              benefits={[
                {
                  title: "Volume Discounts",
                  description: "Competitive pricing for fleet accounts with discounts based on volume and frequency of service."
                },
                {
                  title: "Flexible Scheduling",
                  description: "Accommodate your business schedule with after-hours service, weekend availability, and on-site detailing options."
                },
                {
                  title: "Professional Appearance",
                  description: "Maintain a professional image that represents your business positively to customers and clients."
                },
                {
                  title: "Preserve Vehicle Value",
                  description: "Regular professional detailing helps maintain your fleet's resale value and extends vehicle lifespan."
                },
                {
                  title: "Consistent Quality",
                  description: "Standardized service ensures every vehicle in your fleet receives the same high-quality treatment."
                },
                {
                  title: "Comprehensive Service",
                  description: "From basic washes to full interior and exterior detailing, we offer packages for all fleet needs."
                }
              ]}
              process={[
                {
                  title: "Fleet Assessment",
                  description: "We assess your fleet size, vehicle types, and service requirements to create a customized maintenance plan."
                },
                {
                  title: "Service Planning",
                  description: "Develop a scheduling plan that minimizes downtime while ensuring all vehicles receive regular care."
                },
                {
                  title: "Regular Service Execution",
                  description: "Our team executes the agreed-upon services consistently, maintaining detailed records for each vehicle."
                },
                {
                  title: "Quality Assurance",
                  description: "Regular quality checks ensure service standards are maintained across your entire fleet."
                },
                {
                  title: "Reporting & Communication",
                  description: "Regular reports keep you informed about service completion and any additional recommendations."
                }
              ]}
              features={[
                "Volume pricing for fleet accounts",
                "Flexible scheduling options",
                "On-site or shop-based service",
                "Basic to comprehensive detailing packages",
                "Interior and exterior services",
                "Regular maintenance programs",
                "Service tracking and reporting",
                "Consistent quality standards",
                "Dedicated fleet account management",
                "Customized service packages"
              ]}
            />
            <ServicePricing
              title="Fleet Service Packages"
              packages={[
                {
                  name: "Fleet Maintenance Wash",
                  duration: "1-2 hours per vehicle",
                  priceRange: { start: 79, end: 129 },
                  priceNote: "Per vehicle. Volume discounts available",
                  description: "Essential exterior cleaning to keep your fleet looking professional. Perfect for regular maintenance between full details.",
                  features: [
                    "Hand wash and dry",
                    "Wheel and tire cleaning",
                    "Quick interior vacuum",
                    "Window cleaning",
                    "Basic interior wipe-down",
                    "Consistent quality service"
                  ],
                  ctaText: "Request Fleet Quote"
                },
                {
                  name: "Complete Fleet Detail",
                  duration: "3-5 hours per vehicle",
                  priceRange: { start: 249, end: 399 },
                  priceNote: "Per vehicle. Volume discounts available",
                  description: "Comprehensive interior and exterior detailing for your fleet. Restores professional appearance and maintains vehicle value.",
                  features: [
                    "Premium exterior wash and dry",
                    "Complete wheel and tire detail",
                    "Interior vacuuming and cleaning",
                    "Dashboard and console cleaning",
                    "Window cleaning",
                    "Exterior protection application",
                    "Professional finish"
                  ],
                  featured: true,
                  ctaText: "Request Fleet Quote"
                },
                {
                  name: "Premium Fleet Service",
                  duration: "5-8 hours per vehicle",
                  priceRange: { start: 399, end: 699 },
                  priceNote: "Per vehicle. Custom pricing for large fleets",
                  description: "Ultimate fleet maintenance with paint enhancement and interior deep cleaning. Maximum results for executive or customer-facing vehicles.",
                  features: [
                    "Premium exterior wash and detail",
                    "Paint enhancement and protection",
                    "Complete interior deep cleaning",
                    "Carpet and upholstery cleaning",
                    "Leather conditioning (if applicable)",
                    "Premium protection application",
                    "Showroom-quality finish",
                    "Extended protection"
                  ],
                  ctaText: "Request Fleet Quote"
                }
              ]}
            />
            <Testimonials
              title="What Our Customers Say"
              subtitle="Hear from fleet managers and business owners who trust us with their vehicles"
              badgeText="Customer Reviews"
            />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(FleetServices);

