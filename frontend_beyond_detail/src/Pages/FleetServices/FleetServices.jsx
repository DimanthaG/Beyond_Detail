import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import FleetHero from '../../components/FleetHero/FleetHero';
import FleetExpertise from '../../components/FleetExpertise/FleetExpertise';
import FleetContactCTA from '../../components/FleetContactCTA/FleetContactCTA';
import FleetVision from '../../components/FleetVision/FleetVision';
import './FleetServices.scss';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
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
            <FleetHero scrollTarget="#contact" />
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
            <FleetExpertise />
            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <FleetContactCTA />
            <FleetVision />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(FleetServices);

