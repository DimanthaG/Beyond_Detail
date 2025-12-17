import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, FAQSection } from '../../components';
import OdourRemovalHero from '../../components/OdourRemovalHero/OdourRemovalHero';
import ServiceBenefits from '../../components/ServiceBenefits/ServiceBenefits';
import ServiceContactCTA from '../../components/ServiceContactCTA/ServiceContactCTA';
import './OdourRemoval.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function OdourRemoval() {
  // ScrollToTop component handles scrolling to hero section

  // FAQ Data
  const odourRemovalFAQs = [
    {
      question: "Can you remove cigarette smoke smell from my car?",
      answer: "Yes, removing smoke odor is one of our specialties. We use a combination of deep steam cleaning for upholstery and an industrial-grade Ozone treatment that permeates the entire cabin to neutralize smoke molecules trapped in the headliner and ventilation system."
    },
    {
      question: "How does the Ozone treatment work?",
      answer: "Ozone (O3) is a gas that reacts with odor-causing bacteria and molecules to oxidize and eliminate them. We place an ozone generator in your vehicle for a specific duration to kill smells at the source, ensuring they don't return."
    },
    {
      question: "Can you remove mold smells?",
      answer: "Yes, we treat mold and mildew odors by first identifying and cleaning the moisture source. We then clean and sanitize the affected areas and use ozone treatment to kill any remaining spores in the air or fabric."
    },
    {
      question: "How long does odor removal take?",
      answer: "A complete odor removal service typically takes a full day (6-8 hours), as it includes a deep interior detail followed by the ozone treatment which requires several hours to run and then air out safely."
    }
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Odour Removal Toronto, Scarborough, Markham, Pickering | Vehicle Odor Elimination'
          description='Professional odour removal services in Toronto, Scarborough, Markham, and Pickering. Eliminate stubborn odors, smoke smell, and pet odors from your vehicle. Advanced odor removal across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Odour Removal'
          keywords='odour removal Toronto, vehicle odor elimination Scarborough, car smell removal Markham, smoke odor removal Pickering, interior odor treatment GTA'
          faq={odourRemovalFAQs}
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='odour-removal__wrapper'>
            <OdourRemovalHero scrollTarget="#contact" />
            <ServiceBenefits
              title="PROFESSIONAL ODOUR REMOVAL SERVICES"
              subtitle="Complete Odor Elimination"
              description="Unpleasant odors in your vehicle can be persistent and frustrating. Our advanced odour removal treatments use professional-grade technology and products to neutralize and eliminate odors at their source, rather than simply masking them. We effectively treat everything from smoke and pet odors to mold and biological contaminants."
              benefits={[
                {
                  title: "Complete Odor Neutralization",
                  description: "Our treatments neutralize odors at the molecular level, eliminating them permanently rather than temporarily covering them up."
                },
                {
                  title: "Mold & Mildew Treatment",
                  description: "Advanced treatments effectively eliminate mold, mildew, fungus, and algae odors that can be harmful to health and difficult to remove."
                },
                {
                  title: "Smoke Odor Elimination",
                  description: "Specialized treatments remove embedded smoke odors from cigarettes, fires, or other sources that penetrate deeply into interior materials."
                },
                {
                  title: "Pet & Biological Odor Removal",
                  description: "Effectively eliminate pet odors, urine, vomit, and other biological odors that can persist despite regular cleaning."
                },
                {
                  title: "Food & Garbage Odor Elimination",
                  description: "Remove persistent food odors and garbage smells that have absorbed into vehicle interiors and ventilation systems."
                },
                {
                  title: "Sanitization Benefits",
                  description: "Our treatments not only eliminate odors but also sanitize surfaces, reducing bacteria, germs, and allergens for a healthier interior environment."
                }
              ]}
              features={[
                "Comprehensive odor source identification",
                "Professional-grade odor neutralization treatment",
                "Deep penetration into interior materials",
                "HVAC system treatment and sanitization",
                "Mold and mildew odor elimination",
                "Smoke odor removal",
                "Pet and biological odor treatment",
                "Food and garbage odor elimination",
                "Complete interior sanitization",
                "Follow-up recommendations",
                "Treatment warranty",
                "Quality assurance inspection"
              ]}
            />
            <ServiceContactCTA
              title="READY TO ELIMINATE ODORS?"
              description="Contact us today for a personalized quote and permanently eliminate unpleasant odors from your vehicle."
            />
            <FAQSection data={odourRemovalFAQs} title="Odour Removal FAQs" />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(OdourRemoval);

