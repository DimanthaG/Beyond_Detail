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
import tintImage from '../../assets/bd/bd-26.webp'; // Window tint car image
import paintCorrectionImage from '../../assets/bd/bd-20.webp'; // Ceramic coating image (clean car)
import ceramicCoatingImage from '../../assets/bd/bd-28.webp'; // Ceramic coating image
import carWashImage from '../../assets/bd/bd-3.webp'; // Keep as is
import headlightImage from '../../assets/bd/bd-4.webp'; // Keep as is
import './HomeDetailSection.scss';

function HomeDetailSection() {
  const [heading] = useState([]);
  const [loading, setLoading] = useState(false);

  // Service data with icons, images, and routes
  const serviceData = [
    {
      id: 'tint',
      name: 'Window Tinting Scarborough',
      description: 'Enhance your vehicle with professional window tinting in Scarborough. Enjoy cooler interiors, reduced glare, increased privacy, and protection from harmful UV rays.',
      icon: Sun,
      image: tintImage, // Window tint service image from gallery
      imgAlt: 'Professional window tinting service in Scarborough and Toronto',
      href: '/tint',
      cta: 'Learn More about Window Tinting',
      className: 'col-span-1',
    },
    {
      id: 'auto-detail',
      name: 'Stage 1: Interior Deep Clean & Sanitization',
      description: 'Starting from $199. Restore that new-car feel with our comprehensive interior detailing. Includes deep vacuum, steam cleaning, salt removal, and ozone treatment.',
      icon: Droplets,
      image: carWashImage, // Car wash/detailing service image from gallery
      imgAlt: 'Stage 1 Interior Detailing - Deep Clean & Sanitize',
      href: '/auto-detail',
      cta: 'View Stage 1 Package',
      className: 'col-span-2',
    },
    {
      id: 'paint-correction',
      name: 'Stage 2: Exterior Paint Correction & Polish',
      description: 'Starting from $399. Remove swirl marks, scratches, and oxidation. We restore your paint\'s depth and clarity for a mirror-like showroom finish.',
      icon: Sparkles,
      image: paintCorrectionImage, // Paint correction service image from gallery
      imgAlt: 'Stage 2 Paint Correction - Scratch Removal',
      href: '/paint-correction',
      cta: 'View Stage 2 Package',
      className: 'col-span-1',
    },
    {
      id: 'ceramic-coating',
      name: 'Stage 3: Ultimate Ceramic Protection',
      description: 'Starting from $599. Lock in the shine with industry-leading ceramic coatings. Provides UV protection, hydrophobicity, and a lifetime warranty option.',
      icon: Shield,
      image: ceramicCoatingImage, // Ceramic coating service image from gallery
      imgAlt: 'Stage 3 Ceramic Coating - Ultimate Protection',
      href: '/ceramic-coatings',
      cta: 'View Stage 3 Package',
      className: 'col-span-1',
    },
    {
      id: 'headlight-restoration',
      name: 'Headlight Restoration',
      description: 'Improve nighttime visibility and enhance your car\'s appearance with our professional headlight restoration services in Scarborough.',
      icon: Car,
      image: headlightImage, // Headlight restoration service image from gallery
      imgAlt: 'Headlight restoration service to improve visibility and look',
      href: '/headlight-restoration',
      cta: 'Learn More about Headlight Restoration',
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
                  imgAlt={service.imgAlt}
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
