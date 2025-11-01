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
      subtitle: "DYED FILM",
      tagline: "Everyday Style, Trusted Protection",
      benefits: [
        "Blocks 99% of harmful UV rays",
        "Non-reflective, factory-look finish",
        "Color-stable and fade-resistant",
        "Great value with long-term durability",
        "Available in 5%, 15%, 20%, 30%",
        "Lifetime warranty backed by Llumar",
      ],
      color: "#22c55e", // Green
      badge: "BEST VALUE",
      basePrice: {
        0: 140, // 2 Door Coupe - TWO FRONT WINDOWS
        1: 250, // 4 Door Sedan - FULL CAR
        2: 300, // Mid Size SUV - FULL SUV
        3: 300, // Full Size SUV / Van - FULL SUV
        4: 300, // Pick Up Truck - FULL TRUCK
        5: 0, // Windshield (not available for ATC)
      },
    },
    {
      name: "LLUMAR CTX",
      subtitle: "CERAMIC FILM",
      tagline: "Smart Heat Rejection with Signal-Safe Technology",
      benefits: [
        "Advanced nano-ceramic formula",
        "Blocks infrared heat and UV rays",
        "Zero interference with cell, GPS, Bluetooth",
        "Signal-safe & tech friendly",
        "Subtle, stylish neutral charcoal tone",
        "Available in 5%, 15%, 35%, 50%",
      ],
      color: "#3b82f6", // Blue
      badge: "HIGH QUALITY",
      basePrice: {
        0: 180, // 2 Door Coupe - TWO FRONT WINDOWS
        1: 400, // 4 Door Sedan - FULL CAR
        2: 450, // Mid Size SUV - FULL SUV
        3: 450, // Full Size SUV / Van - FULL SUV
        4: 450, // Pick Up Truck - FULL TRUCK
        5: 200, // Windshield
      },
    },
    {
      name: "LLUMAR IRX",
      subtitle: "NANO CERAMIC",
      tagline: "Luxury-Level Heat Rejection & Premium Privacy",
      benefits: [
        "Maximum infrared heat rejection",
        "Blocks 99% of harmful UV rays",
        "Premium clarity and visibility",
        "Advanced infrared-blocking technology",
        "Available in 5%, 15%, 35%, 50%",
        "Lifetime warranty included",
      ],
      color: "#f59e0b", // Gold/Amber
      badge: "TOP HEAT BLOCKER",
      basePrice: {
        0: 220, // 2 Door Coupe - TWO FRONT WINDOWS
        1: 500, // 4 Door Sedan - FULL CAR
        2: 550, // Mid Size SUV - FULL SUV
        3: 550, // Full Size SUV / Van - FULL SUV
        4: 550, // Pick Up Truck - FULL TRUCK
        5: 300, // Windshield
      },
    },
  ];

  const currentProduct = products[selectedProduct];
  const currentPrice = vehicleType === 5 && currentProduct.basePrice[vehicleType] === 0 
    ? 0 
    : currentProduct.basePrice[vehicleType];

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
    <section id="pricing" className="tints-pricing" ref={pricingRef}>
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

          <h1 className="tints-pricing__title">Premium Llumar Window Tinting for Cars, Trucks & SUVs</h1>

          <p className="tints-pricing__subtitle">
            Llumar window films are known worldwide for their performance, durability, and advanced UV protection. At Beyond Detail, we proudly install Llumar's industry-leading films to help you stay cooler, protect your interior, and drive in style — all backed by a manufacturer's lifetime warranty.
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
              {currentProduct.badge && (
                <div className="tints-pricing__product-badge" style={{ color: currentProduct.color }}>
                  {currentProduct.badge}
                </div>
              )}
              <h3 className="tints-pricing__section-title">{currentProduct.name}</h3>
              {currentProduct.subtitle && (
                <p className="tints-pricing__product-subtitle" style={{ color: currentProduct.color }}>
                  {currentProduct.subtitle}
                </p>
              )}
              {currentProduct.tagline && (
                <p className="tints-pricing__product-tagline">{currentProduct.tagline}</p>
              )}

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
                    <div className="tints-pricing__check-icon" style={{ background: currentProduct.color }}>
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
                      style={{
                        borderColor: selectedProduct === index ? product.color : undefined,
                        background: selectedProduct === index 
                          ? 'transparent' 
                          : undefined,
                      }}
                    >
                      {product.name}
                      {product.badge && (
                        <span className="tints-pricing__button-badge" style={{ color: product.color }}>
                          {product.badge}
                        </span>
                      )}
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
                  {currentPrice === 0 
                    ? "Not available for this vehicle type"
                    : `Starting price for ${vehicleOptions[vehicleType]}${vehicleType === 5 ? ` (${selectedPercentage}% tint)` : ""}`
                  }
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
    </section>
  );
}

export default TintsPricing;

