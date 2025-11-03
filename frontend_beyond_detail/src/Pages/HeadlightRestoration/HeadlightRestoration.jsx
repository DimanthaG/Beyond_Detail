import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import ServiceInfoSection from '../../components/ServiceInfoSection/ServiceInfoSection';
import ServicePricing from '../../components/ServicePricing/ServicePricing';
import './HeadlightRestoration.scss';

// Lazy load heavy components to improve initial bundle size
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SEO = lazy(() => import('../../components/SEO'));
const BackgroundPaths = lazy(() => import('../../components/BackgroundPaths/BackgroundPaths'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function HeadlightRestoration() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Headlight Restoration Toronto, Scarborough, Markham, Pickering | Cloudy Headlight Repair'
          description='Professional headlight restoration services in Toronto, Scarborough, Markham, and Pickering. Restore cloudy and yellowed headlights to crystal clear condition. Expert restoration across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Headlight Restoration'
          keywords='headlight restoration Toronto, cloudy headlight repair Scarborough, yellowed headlights Markham, headlight polishing Pickering, headlight restoration GTA'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='headlight-restoration__wrapper'>
            <BackgroundPaths 
              title="Headlight Restoration"
              scrollTarget="#pricing"
              description="Restore cloudy, yellowed headlights to crystal-clear perfection. Our professional restoration process removes years of oxidation and damage, dramatically improving your vehicle's appearance and significantly enhancing nighttime driving safety. UV protection included."
            />
            <ServiceInfoSection
              title="Expert Headlight Restoration"
              subtitle="Crystal Clear Results"
              description="Over time, headlights become cloudy, yellowed, and hazy due to UV exposure and oxidation. Our professional restoration process removes years of damage, restoring clarity and improving both the appearance of your vehicle and your nighttime driving safety."
              benefits={[
                {
                  title: "Improved Nighttime Visibility",
                  description: "Restore maximum light output for safer nighttime driving by eliminating the cloudy barrier that reduces headlight effectiveness."
                },
                {
                  title: "Enhanced Vehicle Appearance",
                  description: "Crystal-clear headlights dramatically improve your vehicle's overall appearance, making it look newer and well-maintained."
                },
                {
                  title: "Cost-Effective Solution",
                  description: "Avoid expensive headlight replacement costs. Professional restoration can restore clarity for a fraction of the cost of new headlights."
                },
                {
                  title: "UV Protection Applied",
                  description: "Following restoration, we apply specialized UV-resistant coating to prevent future yellowing and oxidation."
                },
                {
                  title: "Long-Lasting Results",
                  description: "With proper care and the applied protection, restored headlights maintain their clarity for years to come."
                },
                {
                  title: "Professional Technique",
                  description: "Our multi-stage process uses professional-grade compounds and equipment to achieve factory-like clarity and finish."
                }
              ]}
              process={[
                {
                  title: "Surface Assessment",
                  description: "We carefully inspect your headlights to determine the severity of oxidation, hazing, and damage, allowing us to select the appropriate restoration method."
                },
                {
                  title: "Initial Sanding",
                  description: "Using progressively finer grits, we remove the damaged outer layer of plastic, eliminating oxidation and yellowing down to clear, undamaged material."
                },
                {
                  title: "Compounding & Polishing",
                  description: "Professional-grade compounds remove sanding marks and restore optical clarity, bringing back the transparent quality of the headlight lens."
                },
                {
                  title: "Final Refinement",
                  description: "A finishing polish eliminates any remaining imperfections, creating a crystal-clear surface with optimal light transmission."
                },
                {
                  title: "UV Protection Coating",
                  description: "A specialized UV-resistant clear coat is applied to protect the restored surface from future oxidation and yellowing."
                }
              ]}
              features={[
                "Complete headlight inspection",
                "Multi-stage sanding process",
                "Professional compound polishing",
                "Optical clarity restoration",
                "UV-resistant protection coating",
                "Both headlights restored",
                "Quality inspection",
                "Maintenance recommendations"
              ]}
            />
            <ServicePricing
              title="Headlight Restoration Packages"
              packages={[
                {
                  name: "Standard Restoration",
                  duration: "2-3 hours",
                  price: 149,
                  priceNote: "Per pair of headlights",
                  description: "Professional restoration for moderately hazed headlights. Restores clarity and improves nighttime visibility.",
                  features: [
                    "Complete headlight inspection",
                    "Multi-stage sanding process",
                    "Professional compound polishing",
                    "Optical clarity restoration",
                    "UV-resistant protection coating",
                    "Both headlights restored"
                  ],
                  ctaText: "Book This Service"
                },
                {
                  name: "Premium Restoration",
                  duration: "3-4 hours",
                  price: 199,
                  priceNote: "Per pair of headlights",
                  description: "Comprehensive restoration for severely oxidized or yellowed headlights. Maximum clarity restoration with premium protection.",
                  features: [
                    "Complete headlight inspection",
                    "Advanced multi-stage sanding",
                    "Professional compound polishing",
                    "Maximum optical clarity restoration",
                    "Premium UV-resistant coating",
                    "Both headlights restored",
                    "Extended warranty on protection",
                    "Follow-up maintenance guidance"
                  ],
                  featured: true,
                  ctaText: "Book This Service"
                },
                {
                  name: "Complete Restoration Package",
                  duration: "4-5 hours",
                  price: 299,
                  priceNote: "Per pair of headlights, includes fog lights",
                  description: "Ultimate restoration package including headlights and fog lights. Perfect for vehicles requiring comprehensive light restoration.",
                  features: [
                    "Complete headlight and fog light inspection",
                    "Advanced multi-stage sanding (all lights)",
                    "Professional compound polishing",
                    "Maximum optical clarity restoration",
                    "Premium UV-resistant coating (all lights)",
                    "All lights restored",
                    "Extended warranty coverage",
                    "Complete protection system"
                  ],
                  ctaText: "Book This Service"
                }
              ]}
            />
            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(HeadlightRestoration);

