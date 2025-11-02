import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, HomeProcess } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import './Services.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const AutoDetailHero = lazy(() => import('../../components/AutoDetailHero/AutoDetailHero'));
const ServiceGallery = lazy(() => import('../../components/ServiceGallery/ServiceGallery'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function Services() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Auto Detailing Toronto, Scarborough, Markham, Pickering | Complete Car Detailing'
          description='Complete auto detailing services in Toronto, Scarborough, Markham, and Pickering. Professional interior and exterior detailing, paint correction, ceramic coating, and protection. Comprehensive vehicle care across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Auto Detailing'
          keywords='auto detailing Toronto, car detailing Scarborough, vehicle detailing Markham, full service detailing Pickering, professional car wash GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='auto-detail__wrapper'>
            <AutoDetailHero scrollTarget="#pricing" />
            <Suspense fallback={null}>
              <ServiceGallery serviceType="auto-detail" title="Auto Detailing Gallery" />
            </Suspense>
            <ServiceInfoSection
              title="Complete Auto Detailing Services"
              subtitle="Interior & Exterior Excellence"
              description="Our comprehensive auto detailing services provide complete interior and exterior care in one convenient package. From removing pet hair and salt stains to deep steam cleaning and sanitization, we restore your vehicle to showroom condition while protecting it for the future."
              benefits={[
                {
                  title: "Complete Vehicle Care",
                  description: "Both interior and exterior surfaces are professionally cleaned, restored, and protected in one comprehensive service, ensuring your entire vehicle receives expert attention."
                },
                {
                  title: "Specialized Stain Removal",
                  description: "We tackle tough stains including pet hair, salt stains, fabric stains, and smoke odors using professional-grade equipment and proven techniques."
                },
                {
                  title: "Deep Cleaning Technology",
                  description: "Professional shampoo extraction and steam cleaning removes deeply embedded dirt, grime, and contaminants that regular cleaning cannot reach."
                },
                {
                  title: "Sanitization & Disinfection",
                  description: "Advanced sanitization eliminates bacteria, germs, and allergens, creating a healthier environment for you and your passengers."
                },
                {
                  title: "Enhanced Protection",
                  description: "Protective treatments are applied to interior and exterior surfaces, shielding against UV damage, stains, spills, and environmental contaminants."
                },
                {
                  title: "Increased Resale Value",
                  description: "Regular professional detailing maintains your vehicle's appearance and significantly increases its resale value over time."
                }
              ]}
              process={[
                {
                  title: "Exterior Hand Wash",
                  description: "We begin with a premium two-bucket hand wash, carefully cleaning every exterior surface including paint, wheels, tires, door jams, and trunk jams."
                },
                {
                  title: "Interior Vacuum & Dust",
                  description: "Comprehensive vacuuming removes loose dirt, debris, and pet hair from all interior areas including seats, carpets, floor mats, and hard-to-reach spaces."
                },
                {
                  title: "Upholstery Cleaning",
                  description: "All upholstery surfaces are thoroughly cleaned using appropriate methods for fabric, leather, or vinyl, removing surface stains and embedded dirt."
                },
                {
                  title: "Deep Shampoo Extraction",
                  description: "Professional-grade shampoo is applied and extracted from seats and carpets, removing deep stains, salt deposits, and embedded contaminants."
                },
                {
                  title: "Sanitization & Disinfection",
                  description: "Interior surfaces are sanitized and disinfected to eliminate bacteria, germs, and odors, ensuring a fresh and healthy environment."
                },
                {
                  title: "Window & Mirror Cleaning",
                  description: "All interior and exterior windows and mirrors receive crystal-clear cleaning for optimal visibility and appearance."
                },
                {
                  title: "Final Protection",
                  description: "Protective treatments are applied where appropriate, and a comprehensive quality inspection ensures quality results."
                }
              ]}
              features={[
                "Interior vacuumed & dusted",
                "Carpets, seats & mats vacuumed",
                "All upholstery cleaned",
                "Professional shampoo extraction (seats & carpets)",
                "Pet hair removal",
                "Salt stain removal",
                "Fabric stain treatment",
                "Smoke odor elimination",
                "Steam cleaning available",
                "Interior sanitization & disinfection",
                "Dashboard, console & doors cleaned",
                "Exterior hand wash",
                "Tire and rims cleaned",
                "Door jams & trunk jams cleaned",
                "Interior & exterior windows cleaned",
                "All mirrors cleaned"
              ]}
            />

            <ServicePricing
              title="Auto Detailing Packages"
              packages={[
                {
                  name: "Basic Detail",
                  priceRange: { start: 100, end: 100 },
                  priceNote: "Fixed pricing for all vehicle sizes",
                  description: "Essential interior and exterior cleaning perfect for regular maintenance. Keeps your vehicle looking fresh and clean.",
                  features: [
                    "Interior Vacuumed & Dusted",
                    "Carpets, Seats, & Mats Vacuumed",
                    "All Upholstery Cleaned",
                    "Interior & Exterior Windows Cleaned",
                    "All Mirrors Cleaned",
                    "Exterior Hand Wash",
                    "Tire and Rims Cleaned"
                  ],
                  ctaText: "Book This Package"
                },
                {
                  name: "Intermediate Detail",
                  priceRange: { start: 150, end: 150 },
                  priceNote: "Fixed pricing for all vehicle sizes",
                  description: "Enhanced cleaning with sanitization and door jam cleaning. Ideal for vehicles that need a deeper clean.",
                  features: [
                    "Interior Vacuumed & Dusted",
                    "Carpets, Seats, & Mats Vacuumed",
                    "All Upholstery Cleaned",
                    "Interior & Exterior Windows Cleaned",
                    "All Mirrors Cleaned",
                    "Interior Sanitized & Disinfected",
                    "Exterior Hand Wash",
                    "Tire and Rims Cleaned",
                    "Door Jams Cleaned",
                    "Trunk Jams Cleaned"
                  ],
                  featured: true,
                  ctaText: "Book This Package"
                },
                {
                  name: "Advanced Detail",
                  priceRange: { start: 200, end: 200 },
                  priceNote: "Fixed pricing for all vehicle sizes",
                  description: "Comprehensive deep cleaning with professional shampoo extraction. Removes embedded stains, salt deposits, and deeply embedded dirt.",
                  features: [
                    "Interior Vacuumed & Dusted",
                    "Dashboard, Console & Doors Cleaned",
                    "Carpets, Seats, & Mats Vacuumed",
                    "All Upholstery Cleaned",
                    "Interior & Exterior Windows Cleaned",
                    "All Mirrors Cleaned",
                    "Interior Sanitized & Disinfected",
                    "Exterior Hand Wash",
                    "Tire and Rims Cleaned",
                    "Door Jams Cleaned",
                    "Trunk Jams Cleaned",
                    "Seats Extracted / Shampoo Wash To Remove Deep Embedded Stains And Grime",
                    "Carpets Extracted / Shampoo Wash To Remove Deep Embedded Stains And Grime"
                  ],
                  ctaText: "Book This Package"
                }
              ]}
            />

            <Testimonials
              title="What Our Customers Say"
              subtitle="Hear from customers who have experienced our complete auto detailing services"
              badgeText="Customer Reviews"
            />

            <HomeProcess />

            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(Services);
