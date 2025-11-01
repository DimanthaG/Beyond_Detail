import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCheck, Zap, Car } from "lucide-react";
import NumberFlow from "@number-flow/react";
import "./TintsPricing.scss";

const PricingSwitch = ({
  button1,
  button2,
  onSwitch,
  selectedValue,
  className,
}) => {
  const handleSwitch = (value) => {
    onSwitch(value);
  };

  return (
    <div className={`tints-pricing__switch ${className || ""}`}>
      <button
        onClick={() => handleSwitch(0)}
        className={`tints-pricing__switch-button ${
          selectedValue === 0 ? "tints-pricing__switch-button--active" : ""
        }`}
      >
        {selectedValue === 0 && (
          <motion.span
            layoutId="pricing-switch-bg"
            className="tints-pricing__switch-bg"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="tints-pricing__switch-text">{button1}</span>
      </button>

      <button
        onClick={() => handleSwitch(1)}
        className={`tints-pricing__switch-button ${
          selectedValue === 1 ? "tints-pricing__switch-button--active" : ""
        }`}
      >
        {selectedValue === 1 && (
          <motion.span
            layoutId="pricing-switch-bg"
            className="tints-pricing__switch-bg"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="tints-pricing__switch-text">{button2}</span>
      </button>
    </div>
  );
};

const VehicleTypeSelector = ({ vehicleType, onSelect, options }) => {
  return (
    <div className="tints-pricing__vehicle-selector">
      <h4 className="tints-pricing__vehicle-title">Type of Vehicle</h4>
      <div className="tints-pricing__vehicle-grid">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`tints-pricing__vehicle-option ${
              vehicleType === index ? "tints-pricing__vehicle-option--active" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const PercentageSelector = ({ percentage, onSelect, options }) => {
  return (
    <div className="tints-pricing__percentage-selector">
      <h4 className="tints-pricing__percentage-title">Tint Percentage</h4>
      <div className="tints-pricing__percentage-grid">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className={`tints-pricing__percentage-option ${
              percentage === option ? "tints-pricing__percentage-option--active" : ""
            }`}
          >
            {option}%
          </button>
        ))}
      </div>
    </div>
  );
};

function TintsPricing() {
  const [selectedProduct, setSelectedProduct] = useState(0); // 0: ATC, 1: CTX, 2: IRX
  const [vehicleType, setVehicleType] = useState(0);
  const [selectedPercentage, setSelectedPercentage] = useState(30);
  const pricingRef = useRef(null);

  const vehicleOptions = [
    "2 Door Coupe",
    "4 Door Sedan",
    "Mid Size SUV",
    "Full Size SUV / Van",
    "Pick Up Truck",
    "Windshield",
  ];

  const percentageOptions = [5, 15, 30, 50];

  const products = [
    {
      name: "LLUMAR ATC",
      benefits: [
        "Premium carbon-based technology",
        "Superior heat rejection",
        "99% UV protection",
        "Excellent clarity and visibility",
        "Long-lasting durability",
        "Non-reflective finish",
        "Fade-resistant warranty",
      ],
      basePrice: {
        0: 249, // 2 Door Coupe
        1: 299, // 4 Door Sedan
        2: 349, // Mid Size SUV
        3: 399, // Full Size SUV / Van
        4: 449, // Pick Up Truck
        5: 199, // Windshield
      },
    },
    {
      name: "LLUMAR CTX",
      benefits: [
        "Advanced ceramic technology",
        "Maximum heat rejection",
        "99% UV protection",
        "Crystal-clear visibility",
        "Non-reflective, non-conductive",
        "Fade-resistant performance",
        "Lifetime warranty",
      ],
      basePrice: {
        0: 349, // 2 Door Coupe
        1: 399, // 4 Door Sedan
        2: 449, // Mid Size SUV
        3: 499, // Full Size SUV / Van
        4: 549, // Pick Up Truck
        5: 249, // Windshield
      },
    },
    {
      name: "LLUMAR IRX",
      benefits: [
        "Elite ceramic infrared technology",
        "Superior infrared rejection",
        "99% UV ray blocking",
        "Ultimate heat protection",
        "Premium clarity",
        "Non-metallic, non-interference",
        "Lifetime warranty included",
      ],
      basePrice: {
        0: 449, // 2 Door Coupe
        1: 499, // 4 Door Sedan
        2: 549, // Mid Size SUV
        3: 599, // Full Size SUV / Van
        4: 649, // Pick Up Truck
        5: 299, // Windshield
      },
    },
  ];

  const currentProduct = products[selectedProduct];
  const currentPrice = currentProduct.basePrice[vehicleType];

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div className="tints-pricing" ref={pricingRef}>
      <div className="tints-pricing__container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          custom={0}
          className="tints-pricing__header"
        >
          <div className="tints-pricing__header-icon">
            <Zap className="tints-pricing__icon" />
            <span className="tints-pricing__badge">Premium Products</span>
          </div>

          <h1 className="tints-pricing__title">Choose Your Llumar Window Tint</h1>

          <p className="tints-pricing__subtitle">
            Select a premium Llumar product and vehicle type to get started with
            professional window tint services.
          </p>
        </motion.div>

        <div className="tints-pricing__content">
          <div className="tints-pricing__left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              custom={1}
            >
              <h3 className="tints-pricing__section-title">Product Benefits</h3>

              <div className="tints-pricing__benefits">
                {currentProduct.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={revealVariants}
                    custom={2 + index}
                    className="tints-pricing__benefit-item"
                  >
                    <div className="tints-pricing__check-icon">
                      <CheckCheck className="tints-pricing__check" />
                    </div>
                    <span className="tints-pricing__benefit-text">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="tints-pricing__right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              custom={2}
            >
              <div className="tints-pricing__product-selector">
                <h4 className="tints-pricing__selector-title">Llumar Product</h4>
                <div className="tints-pricing__product-grid">
                  {products.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProduct(index)}
                      className={`tints-pricing__product-button ${
                        selectedProduct === index
                          ? "tints-pricing__product-button--active"
                          : ""
                      }`}
                    >
                      {product.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              custom={3}
            >
              <VehicleTypeSelector
                vehicleType={vehicleType}
                onSelect={setVehicleType}
                options={vehicleOptions}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              custom={3.5}
            >
              <PercentageSelector
                percentage={selectedPercentage}
                onSelect={setSelectedPercentage}
                options={percentageOptions}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              custom={4}
              className="tints-pricing__price-section"
            >
              <div className="tints-pricing__price-container">
                <div className="tints-pricing__price-display">
                  <span className="tints-pricing__price-currency">$</span>
                  <NumberFlow
                    value={currentPrice}
                    className="tints-pricing__price-value"
                  />
                </div>
                <span className="tints-pricing__price-note">
                  Starting price for {vehicleOptions[vehicleType]}
                  {vehicleType === 5 ? ` (${selectedPercentage}% tint)` : ""}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="tints-pricing__book-button"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    // Fallback to bookingComponent if contact doesn't exist
                    const bookingElement = document.querySelector("#bookingComponent");
                    if (bookingElement) {
                      bookingElement.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }}
              >
                <Car className="tints-pricing__button-icon" />
                Book Appointment
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TintsPricing;

