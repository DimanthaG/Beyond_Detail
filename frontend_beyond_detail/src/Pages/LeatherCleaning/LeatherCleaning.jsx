import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, FAQSection } from '../../components';
import LeatherCleaningHero from '../../components/LeatherCleaningHero/LeatherCleaningHero';
import ServiceBenefits from '../../components/ServiceBenefits/ServiceBenefits';
import ServiceContactCTA from '../../components/ServiceContactCTA/ServiceContactCTA';
import './LeatherCleaning.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function LeatherCleaning() {
  // ScrollToTop component handles scrolling to hero section

  // FAQ Data
  const leatherCleaningFAQs = [
    {
      question: "How often should I condition my leather seats?",
      answer: "We recommend cleaning and conditioning leather seats every 3-6 months. This prevents natural oils from evaporating, which causes the leather to dry out, stiffen, and eventually crack."
    },
    {
      question: "Can proper cleaning fix cracked leather?",
      answer: "Cleaning and conditioning can soften the leather and prevent further damage, but it cannot 'heal' cracks that have already formed. Cracked leather typically requires specialized restoration or repair, which is a different process than maintenance cleaning."
    },
    {
      question: "Does leather cleaning remove jean dye transfer?",
      answer: "Yes, our leather cleaning process is very effective at removing dye transfer from jeans, especially on light-colored leather. The sooner it is treated, the better the results."
    },
    {
      question: "Is your leather cleaner safe for Nappa or ventilated seats?",
      answer: "Absolutely. We use pH-neutral, water-based cleaners and conditioners that are safe for all automotive leathers, including delicate Nappa leather and perforated/ventilated seats. We ensure no product clogs the perforation holes."
    }
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Leather Cleaning Toronto, Scarborough, Markham, Pickering | Leather Upholstery Care'
          description='Professional leather cleaning and conditioning services in Toronto, Scarborough, Markham, and Pickering. Restore and protect your vehicle leather upholstery with expert leather care across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          serviceType='Leather Cleaning'
          keywords='leather cleaning Toronto, leather upholstery care Scarborough, car leather conditioning Markham, vehicle leather treatment Pickering, leather detailing GTA'
          faq={leatherCleaningFAQs}
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='leather-cleaning__wrapper'>
            <LeatherCleaningHero scrollTarget="#contact" />
            <ServiceBenefits
              title="EXPERT LEATHER CARE SERVICES"
              subtitle="Restoration & Protection"
              description="Leather upholstery requires specialized care to maintain its luxury appearance and longevity. Our professional leather cleaning and conditioning services use premium products and techniques to clean, restore, and protect your vehicle's leather surfaces. We also offer advanced protective coatings that create a durable barrier against stains, spills, and wear."
              benefits={[
                {
                  title: "Restored Suppleness",
                  description: "Professional conditioning restores lost moisture and oils, bringing back the soft, supple feel of your leather that makes it comfortable and luxurious."
                },
                {
                  title: "Stain & Spill Protection",
                  description: "Advanced protective coatings create a barrier that prevents liquids and stains from penetrating leather, making spills easy to clean and preventing permanent damage."
                },
                {
                  title: "Prevents Cracking & Fading",
                  description: "Proper conditioning prevents leather from drying out and cracking, while UV protection prevents fading from sun exposure, extending the life of your leather."
                },
                {
                  title: "Enhanced Appearance",
                  description: "Thorough cleaning removes dirt, oils, and discoloration, revealing the true color and grain of your leather and restoring its original beauty."
                },
                {
                  title: "Abrasion Resistance",
                  description: "Protective coatings reduce wear on high-contact areas like side bolsters and armrests, maintaining the leather's appearance over time."
                },
                {
                  title: "Long-Term Value",
                  description: "Well-maintained leather significantly increases your vehicle's resale value and ensures your investment in luxury upholstery is protected."
                }
              ]}
              features={[
                "Complete leather surface inspection",
                "Professional deep cleaning treatment",
                "Stain removal and treatment",
                "Premium leather conditioning",
                "UV protection application",
                "Protective coating option available",
                "Abrasion-resistant treatment for high-wear areas",
                "All leather surfaces treated (seats, door panels, console)",
                "Color restoration and enhancement",
                "Crack prevention and repair",
                "Quality inspection",
                "Maintenance recommendations"
              ]}
            />
            <ServiceContactCTA
              title="READY TO RESTORE YOUR LEATHER?"
              description="Contact us today for a personalized quote and restore your leather to luxurious condition."
            />
            <FAQSection data={leatherCleaningFAQs} title="Leather Cleaning FAQs" />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(LeatherCleaning);

