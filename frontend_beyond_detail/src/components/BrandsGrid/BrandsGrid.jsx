import React, { useState } from "react";
import { motion } from "framer-motion";
import "./BrandsGrid.scss";

// Logo imports - IMPORTANT: Uncomment these lines ONLY after adding the image files to src/assets/brands/
// Once you've added the files, uncomment all 4 lines below:
// import llumarLogo from "../../assets/brands/llumar_logo.png";
// import eastmanLogo from "../../assets/brands/eastman_logo.png";
// import iwfaLogo from "../../assets/brands/iwfa_logo.png";
// import skinCancerLogo from "../../assets/brands/skin_cancer_logo.png";

const brands = [
  {
    name: "LLumar",
    logo: null, // Replace null with llumarLogo after uncommenting import above
  },
  {
    name: "EASTMAN",
    logo: null, // Replace null with eastmanLogo after uncommenting import above
  },
  {
    name: "IWFA",
    logo: null, // Replace null with iwfaLogo after uncommenting import above
  },
  {
    name: "Skin Cancer Foundation",
    logo: null, // Replace null with skinCancerLogo after uncommenting import above
  },
];

function BrandsGrid() {
  const [imageErrors, setImageErrors] = useState({});

  const revealVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  const handleImageError = (brandName) => {
    setImageErrors((prev) => ({ ...prev, [brandName]: true }));
  };

  return (
    <motion.section
      className="brands-grid__section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={revealVariants}
    >
      <div className="brands-grid__container">
        <p className="brands-grid__title">
          Trusted by leading brands in automotive tint
        </p>

        <div className="brands-grid__logos">
          {brands.map((brand, index) => {
            return (
              <motion.div
                key={brand.name}
                className="brands-grid__logo-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="brands-grid__logo-wrapper">
                  {brand.logo && !imageErrors[brand.name] ? (
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="brands-grid__logo-image"
                      onError={() => handleImageError(brand.name)}
                    />
                  ) : (
                    <div className="brands-grid__logo-placeholder">
                      {brand.name}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default React.memo(BrandsGrid);

