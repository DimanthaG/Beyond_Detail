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
      id: 'paint-correction',
      name: 'Paint Correction Near Me',
      description: 'Revitalize your vehicle\'s finish with our professional paint correction services. We remove swirls and scratches for a flawless, high-gloss look in Scarborough.',
      icon: Sparkles,
      image: paintCorrectionImage, // Paint correction service image from gallery
      imgAlt: 'Car paint correction and scratch removal service in Scarborough',
      href: '/paint-correction',
      cta: 'Learn More about Paint Correction',
      className: 'col-span-1',
    },
    {
      id: 'ceramic-coating',
      name: 'Ceramic Coating Scarborough',
      description: 'Protect your paint from scratches and UV damage with our premium ceramic coating services in Scarborough. Get long-lasting protection and a showroom shine.',
      icon: Shield,
      image: ceramicCoatingImage, // Ceramic coating service image from gallery
      imgAlt: 'Ceramic Pro coating application for long lasting paint protection',
      href: '/ceramic-coatings',
      cta: 'Learn More about Ceramic Coating',
      className: 'col-span-1',
    },
    {
      id: 'auto-detail',
      name: 'Car Detailing Scarborough',
      description: 'Elevate your vehicle with our comprehensive auto detailing services in Scarborough. We restore both interior and exterior to pristine condition.',
      icon: Droplets,
      image: carWashImage, // Car wash/detailing service image from gallery
      imgAlt: 'Full interior and exterior car detailing service in Scarborough',
      href: '/auto-detail',
      cta: 'Learn More about Auto Detailing',
      className: 'col-span-2',
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
