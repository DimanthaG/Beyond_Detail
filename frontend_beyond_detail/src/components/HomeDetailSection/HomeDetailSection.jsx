import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Droplets, 
  Shield, 
  Sun,
  Car
} from 'lucide-react';
import { BentoCard, BentoGrid } from '../BentoGrid/BentoGrid';
import { Loading } from '../../components';
// Import images from gallery
import tintImage from '../../assets/bd/bd-26.jpg'; // Window tint car image
import paintCorrectionImage from '../../assets/bd/bd-20.jpg'; // Ceramic coating image (clean car)
import ceramicCoatingImage from '../../assets/bd/bd-28.jpg'; // Ceramic coating image
import carWashImage from '../../assets/bd/bd-3.jpg'; // Keep as is
import headlightImage from '../../assets/bd/bd-4.jpg'; // Keep as is
import './HomeDetailSection.scss';

function HomeDetailSection() {
  const [heading] = useState([]);
  const [loading, setLoading] = useState(false);

  // Service data with icons, images, and routes
  const serviceData = [
    {
      id: 'tint',
      name: 'Window Tint',
      description: 'ENHANCE YOUR VEHICLE WITH PROFESSIONAL WINDOW TINTING TO ENJOY COOLER INTERIORS, REDUCED GLARE, INCREASED PRIVACY, AND PROTECTION FROM HARMFUL UV RAYS.',
      icon: Sun,
      image: tintImage, // Window tint service image from gallery
      href: '/tint',
      cta: 'Learn More',
      className: 'col-span-1',
    },
    {
      id: 'paint-correction',
      name: 'Paint Correction',
      description: 'REVITALIZE YOUR VEHICLE\'S FINISH WITH OUR PROFESSIONAL PAINT CORRECTION, REMOVING SWIRLS AND SCRATCHES FOR A FLAWLESS, HIGH-GLOSS LOOK.',
      icon: Sparkles,
      image: paintCorrectionImage, // Paint correction service image from gallery
      href: '/paint-correction',
      cta: 'Learn More',
      className: 'col-span-1',
    },
    {
      id: 'ceramic-coating',
      name: 'Ceramic Coating',
      description: 'PROTECT YOUR PAINT FROM SCRATCHES AND UV DAMAGE WITH OUR PREMIUM CERAMIC COATING SERVICES FOR LONG-LASTING PROTECTION.',
      icon: Shield,
      image: ceramicCoatingImage, // Ceramic coating service image from gallery
      href: '/ceramic-coatings',
      cta: 'Learn More',
      className: 'col-span-1',
    },
    {
      id: 'auto-detail',
      name: 'Car Wash & Detailing',
      description: 'ELEVATE YOUR VEHICLE WITH OUR COMPREHENSIVE CAR DETAILING SERVICES, RESTORING BOTH INTERIOR AND EXTERIOR TO PRISTINE CONDITION.',
      icon: Droplets,
      image: carWashImage, // Car wash/detailing service image from gallery
      href: '/auto-detail',
      cta: 'Learn More',
      className: 'col-span-2',
    },
    {
      id: 'headlight-restoration',
      name: 'Headlight Restoration',
      description: 'IMPROVE NIGHTTIME VISIBILITY AND ENHANCE YOUR CAR\'S APPEARANCE WITH OUR PROFESSIONAL HEADLIGHT RESTORATION SERVICES.',
      icon: Car,
      image: headlightImage, // Headlight restoration service image from gallery
      href: '/headlight-restoration',
      cta: 'Learn More',
      className: 'col-span-1',
    },
  ];

  useEffect(() => {
    // Fetch heading if still needed
    // Using client from '../../client' if available, but keeping simple for now
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <section className='homeDetail__section'>
          <div className='homeDetail__wrapper'>
            {heading.length !== 0 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                className='homeDetail__heading'
              >
                <h1>{heading[0]?.heading || 'SCARBOROUGH\'S TOP CHOICE'}</h1>
              </motion.div>
            )}
            <BentoGrid className="homeDetail__bento-grid">
              {serviceData.map((service) => (
                <BentoCard
                  key={service.id}
                  name={service.name}
                  className={service.className}
                  image={service.image}
                  Icon={service.icon}
                  description={service.description}
                  href={service.href}
                  cta={service.cta}
                />
              ))}
            </BentoGrid>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(HomeDetailSection);
