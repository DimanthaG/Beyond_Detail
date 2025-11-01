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
import './HomeDetailSection.scss';

function HomeDetailSection() {
  const [heading, setHeading] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  // Service data with icons, images, and routes
  const serviceData = [
    {
      id: 'tint',
      name: 'Window Tint',
      description: 'ENHANCE YOUR VEHICLE WITH PROFESSIONAL WINDOW TINTING TO ENJOY COOLER INTERIORS, REDUCED GLARE, INCREASED PRIVACY, AND PROTECTION FROM HARMFUL UV RAYS.',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80', // Window tint service image
      href: '/tint',
      cta: 'Learn More',
      className: 'col-span-1',
    },
    {
      id: 'paint-correction',
      name: 'Paint Correction',
      description: 'REVITALIZE YOUR VEHICLE\'S FINISH WITH OUR PROFESSIONAL PAINT CORRECTION, REMOVING SWIRLS AND SCRATCHES FOR A FLAWLESS, HIGH-GLOSS LOOK.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1580274455191-6c0c3b4e9a8a?w=800&q=80', // Paint correction service image
      href: '/paint-correction',
      cta: 'Learn More',
      className: 'col-span-1',
    },
    {
      id: 'ceramic-coating',
      name: 'Ceramic Coating',
      description: 'PROTECT YOUR PAINT FROM SCRATCHES AND UV DAMAGE WITH OUR PREMIUM CERAMIC COATING SERVICES FOR LONG-LASTING PROTECTION.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80', // Ceramic coating service image
      href: '/ceramic-coatings',
      cta: 'Learn More',
      className: 'col-span-1',
    },
    {
      id: 'auto-detail',
      name: 'Car Wash & Detailing',
      description: 'ELEVATE YOUR VEHICLE WITH OUR COMPREHENSIVE CAR DETAILING SERVICES, RESTORING BOTH INTERIOR AND EXTERIOR TO PRISTINE CONDITION.',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', // Car wash/detailing service image
      href: '/services',
      cta: 'Learn More',
      className: 'col-span-2',
    },
    {
      id: 'headlight-restoration',
      name: 'Headlight Restoration',
      description: 'IMPROVE NIGHTTIME VISIBILITY AND ENHANCE YOUR CAR\'S APPEARANCE WITH OUR PROFESSIONAL HEADLIGHT RESTORATION SERVICES.',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', // Headlight restoration service image
      href: '/headlight-restoration',
      cta: 'Learn More',
      className: 'col-span-1',
    },
  ];

  useEffect(() => {
    // Fetch heading if still needed
    const query =
      '*[_type == "homeDetailSectionHeading"] | order(_createdAt desc)';
    
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
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
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
