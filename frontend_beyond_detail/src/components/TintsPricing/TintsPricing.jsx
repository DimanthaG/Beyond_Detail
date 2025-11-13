import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCheck, Zap, Car } from "lucide-react";
import NumberFlow from "@number-flow/react";
import "./TintsPricing.scss";

const TintServiceSelector = ({ tintService, onSelect, options, disabledIndices = [] }) => {
  return (
    <div className="tints-pricing__service-selector">
      <h4 className="tints-pricing__service-title">Tint Service</h4>
      <div className="tints-pricing__service-grid">
        {options.map((option, index) => {
          const isDisabled = disabledIndices.includes(index);
          return (
            <button
              key={index}
              onClick={() => !isDisabled && onSelect(index)}
              disabled={isDisabled}
              className={`tints-pricing__service-option ${
                tintService === index ? "tints-pricing__service-option--active" : ""
              } ${
                isDisabled ? "tints-pricing__service-option--disabled" : ""
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
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

const PercentageSelector = ({ percentage, onSelect, options, isWindshield }) => {
  return (
    <div className="tints-pricing__percentage-selector">
      <h4 className="tints-pricing__percentage-title">Tint Percentage</h4>
      <div className="tints-pricing__percentage-grid">
        {options.map((option, index) => {
          const isDisabled = option === 50 && !isWindshield;
          return (
          <button
            key={index}
              onClick={() => !isDisabled && onSelect(option)}
              disabled={isDisabled}
            className={`tints-pricing__percentage-option ${
              percentage === option ? "tints-pricing__percentage-option--active" : ""
              } ${
                isDisabled ? "tints-pricing__percentage-option--disabled" : ""
            }`}
          >
            {option}%
          </button>
          );
        })}
      </div>
    </div>
  );
};

function TintsPricing() {
  const [selectedProduct, setSelectedProduct] = useState(0); // 0: ATC, 1: CTX, 2: IRX
  const [tintService, setTintService] = useState(0); // 0: Two Front Windows, 1: Full Vehicle, 2: Windshield Tint
  const [vehicleType, setVehicleType] = useState(0);
  const [selectedPercentage, setSelectedPercentage] = useState(30);
  const pricingRef = useRef(null);

  const tintServiceOptions = [
    "Two Front Windows",
    "Full Vehicle",
    "Windshield Tint",
  ];

  const vehicleOptions = [
    "Car",
    "Mid Size SUV",
    "Full Size SUV / Van",
    "Pick Up Truck",
  ];

  const percentageOptions = [5, 15, 30, 50];

  // Auto-set percentage to 50% when windshield tint is selected
  // Auto-adjust percentage when switching away from windshield (if 50% was selected)
  useEffect(() => {
    if (tintService === 2) {
      setSelectedPercentage(50);
    } else if (tintService !== 2 && selectedPercentage === 50) {
      // If switching away from windshield and 50% is selected, default to 30%
      setSelectedPercentage(30);
    }
  }, [tintService, selectedPercentage]);

  // Auto-switch from ATC to CTX if windshield tint is selected
  useEffect(() => {
    if (tintService === 2 && selectedProduct === 0) {
      // ATC doesn't support windshield, switch to CTX
      setSelectedProduct(1);
    }
  }, [tintService, selectedProduct]);

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
      twoFrontWindowsPrice: 140, // Two Front Windows
      basePrice: {
        0: 250, // Car - FULL CAR
        1: 280, // Mid Size SUV - FULL SUV
        2: 300, // Full Size SUV / Van - FULL SUV
        3: 300, // Pick Up Truck - FULL TRUCK
      },
      windshieldPrice: 0, // Windshield (not available for ATC)
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
      twoFrontWindowsPrice: 180, // Two Front Windows
      basePrice: {
        0: 350, // Car - FULL CAR
        1: 380, // Mid Size SUV - FULL SUV
        2: 400, // Full Size SUV / Van - FULL SUV
        3: 400, // Pick Up Truck - FULL TRUCK
      },
      windshieldPrice: 200, // Windshield
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
      twoFrontWindowsPrice: 200, // Two Front Windows
      basePrice: {
        0: 450, // Car - FULL CAR
        1: 480, // Mid Size SUV - FULL SUV
        2: 500, // Full Size SUV / Van - FULL SUV
        3: 500, // Pick Up Truck - FULL TRUCK
      },
      windshieldPrice: 300, // Windshield
    },
  ];

  const currentProduct = products[selectedProduct];
  
  // Calculate price based on tint service and vehicle type
  let currentPrice = 0;
  if (tintService === 2) {
    // Windshield Tint
    currentPrice = currentProduct.windshieldPrice || 0;
  } else if (tintService === 0) {
    // Two Front Windows - fixed price regardless of vehicle type
    currentPrice = currentProduct.twoFrontWindowsPrice || 0;
  } else if (tintService === 1) {
    // Full Vehicle - use vehicle type pricing for full car
    currentPrice = currentProduct.basePrice[vehicleType] || 0;
  }

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: Math.min(i * 0.01, 0.03),
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    hidden: {
      filter: "blur(3px)",
      y: 10,
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
                  {products.map((product, index) => {
                    const isDisabled = tintService === 2 && index === 0; // Disable ATC when windshield is selected
                    return (
                    <button
                      key={index}
                        onClick={() => !isDisabled && setSelectedProduct(index)}
                        disabled={isDisabled}
                      className={`tints-pricing__product-button ${
                        selectedProduct === index
                          ? "tints-pricing__product-button--active"
                          : ""
                        } ${
                          isDisabled ? "tints-pricing__product-button--disabled" : ""
                      }`}
                      style={{
                        borderColor: selectedProduct === index ? product.color : undefined,
                        background: selectedProduct === index 
                          ? `linear-gradient(135deg, ${product.color}15, ${product.color}08)` 
                          : undefined,
                        boxShadow: selectedProduct === index 
                          ? `0 6px 25px ${product.color}40` 
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
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              custom={2.5}
            >
              <TintServiceSelector
                tintService={tintService}
                onSelect={setTintService}
                options={tintServiceOptions}
                disabledIndices={selectedProduct === 0 ? [2] : []} // Disable Windshield Tint for ATC
              />
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
                isWindshield={tintService === 2}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              custom={4}
              className="tints-pricing__price-section"
              style={{
                borderColor: currentPrice > 0 ? `${currentProduct.color}40` : undefined,
                boxShadow: currentPrice > 0 ? `0 8px 32px ${currentProduct.color}20` : undefined,
              }}
            >
              <div className="tints-pricing__price-container">
                <div className="tints-pricing__price-display" style={{
                  borderColor: currentPrice > 0 ? `${currentProduct.color}30` : undefined,
                }}>
                  <span className="tints-pricing__price-currency" style={{
                    color: currentPrice > 0 ? currentProduct.color : undefined,
                    textShadow: currentPrice > 0 ? `0 2px 10px ${currentProduct.color}50` : undefined,
                  }}>$</span>
                  <NumberFlow
                    value={currentPrice}
                    className="tints-pricing__price-value"
                    style={{
                      color: currentPrice > 0 ? currentProduct.color : undefined,
                    }}
                  />
                </div>
                <span className="tints-pricing__price-note">
                  {currentPrice === 0 
                    ? "Not available for this service"
                    : `Starting price for ${tintServiceOptions[tintService]}${tintService === 2 ? ` (${selectedPercentage}% tint)` : vehicleType !== undefined ? ` - ${vehicleOptions[vehicleType]}` : ""}`
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

