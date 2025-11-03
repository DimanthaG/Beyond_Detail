import React from 'react';
import { motion } from 'framer-motion';
import images from '../../constants/images';
import './Partners.scss';

// Partner logos - using local assets
// Duplicate logos for seamless infinite scroll
const partners = [
  {
    name: 'igl coatings',
    logo: images.igl_logo,
  },
  {
    name: 'HÜPER OPTIK™',
    logo: images.huper_logo,
  },
  {
    name: '3M',
    logo: images.threeEm_logo,
  },
  {
    name: 'spara',
    logo: images.sparco_logo,
  },
  {
    name: 'LLumar',
    logo: images.llumar_logo,
  },
  {
    name: 'EASTMAN',
    logo: images.eastman_logo,
  },
  {
    name: 'IWFA',
    logo: images.iwfa_logo,
  },
  {
    name: 'Skin Cancer Foundation',
    logo: images.skinCancer_logo,
  },
];

// Create extended array for seamless infinite scroll (duplicate the array)
const extendedPartners = [...partners, ...partners, ...partners];

function Partners() {
  const revealVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <motion.section
      className="partners__section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px 50px 0px" }}
      variants={revealVariants}
    >
      <div className="partners__container">
        <div className="partners__heading">
          <h1 className="partners__title">OUR PARTNERS</h1>
          <hr className="partners__divider" />
          <p className="partners__description">
            BEYOND DETAIL PARTNERS WITH A VARIETY OF COMPANIES INCLUDING SUPPLIERS AND MANUFACTURERS
          </p>
        </div>

        <div className="partners__logos-container">
          <div className="partners__logos-track">
            {extendedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="partners__logo-item"
              >
                <div className="partners__logo-wrapper">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="partners__logo-image"
                    />
                  ) : (
                    <div className="partners__logo-placeholder">
                      {partner.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default React.memo(Partners);
