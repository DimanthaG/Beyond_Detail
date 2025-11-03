import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sun, Droplets, Eye, Award, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import './TintBenefitsInfo.scss';

function TintBenefitsInfo() {
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

  const tintBenefits = [
    {
      icon: <Sun className="tint-benefits-info__benefit-icon" />,
      title: "UV Protection",
      description: "Block up to 99% of harmful UV rays that can cause skin damage, premature aging, and increase the risk of skin cancer. Window tint acts as a protective barrier for you and your passengers."
    },
    {
      icon: <Shield className="tint-benefits-info__benefit-icon" />,
      title: "Heat Rejection",
      description: "Reduce interior temperatures significantly by blocking infrared heat. This keeps your vehicle cooler, reduces air conditioning usage, and improves fuel efficiency, especially during hot summer months."
    },
    {
      icon: <Eye className="tint-benefits-info__benefit-icon" />,
      title: "Glare Reduction",
      description: "Minimize dangerous glare from the sun, headlights, and reflective surfaces. Improved visibility enhances driving safety and reduces eye strain, especially during dawn, dusk, and night driving."
    },
    {
      icon: <Droplets className="tint-benefits-info__benefit-icon" />,
      title: "Interior Protection",
      description: "Prevent fading and cracking of your dashboard, seats, and interior trim. UV rays are the primary cause of interior deterioration, and quality tint preserves your vehicle's resale value."
    },
    {
      icon: <Award className="tint-benefits-info__benefit-icon" />,
      title: "Privacy & Security",
      description: "Increase privacy by limiting visibility into your vehicle. This helps protect your belongings and provides added security, making it harder for thieves to see what's inside."
    },
    {
      icon: <Sparkles className="tint-benefits-info__benefit-icon" />,
      title: "Enhanced Comfort",
      description: "Create a more comfortable driving environment by maintaining consistent temperatures and reducing the need for constant air conditioning adjustments. Your passengers will appreciate the difference."
    }
  ];

  const filmTypes = [
    {
      title: "Dyed Film (Carbon Film)",
      subtitle: "LLUMAR ATC",
      benefits: [
        "Cost-effective solution for basic protection",
        "Excellent UV protection (blocks 99% of UV rays)",
        "Non-reflective, factory-look finish",
        "Color-stable and fade-resistant",
        "Great for those seeking style and privacy on a budget",
        "Available in multiple shades (5%, 15%, 20%, 30%)",
        "Lifetime warranty backed by quality manufacturers"
      ],
      bestFor: "Daily drivers seeking reliable protection and style without premium pricing",
      color: "#22c55e"
    },
    {
      title: "Ceramic Film",
      subtitle: "LLUMAR CTX",
      benefits: [
        "Advanced nano-ceramic technology for superior heat rejection",
        "Blocks infrared heat and UV rays effectively",
        "Zero interference with cell phones, GPS, Bluetooth, or keyless entry",
        "Signal-safe technology preserves all your vehicle's electronic systems",
        "Neutral charcoal tone reduces distortion",
        "Superior clarity and visibility compared to dyed films",
        "Long-lasting performance with fade resistance"
      ],
      bestFor: "Tech-savvy drivers who want heat rejection without signal interference",
      color: "#3b82f6"
    },
    {
      title: "Nano Ceramic Film",
      subtitle: "LLUMAR IRX",
      benefits: [
        "Maximum infrared heat rejection technology",
        "Premium nano-ceramic particles for ultimate performance",
        "Blocks up to 99% of harmful UV rays",
        "Superior heat reduction keeps interior significantly cooler",
        "Exceptional clarity and visibility",
        "Luxury-level performance and appearance",
        "Longest-lasting protection with premium durability"
      ],
      bestFor: "Drivers who demand the absolute best in heat rejection and protection",
      color: "#f59e0b"
    }
  ];

  const qualityConsiderations = [
    {
      title: "Why Brand Quality Matters",
      icon: <Award className="tint-benefits-info__quality-icon" />,
      points: [
        "Premium brands like Llumar use advanced manufacturing processes and quality materials",
        "Lifetime warranties protect your investment and provide peace of mind",
        "Tested and proven technology ensures consistent performance over time",
        "Reputable brands meet or exceed industry standards for safety and durability",
        "Quality films maintain their appearance and effectiveness for years"
      ]
    },
    {
      title: "Why Professional Installation Matters",
      icon: <CheckCircle2 className="tint-benefits-info__quality-icon" />,
      points: [
        "Expert installers ensure proper film application without bubbles or defects",
        "Professional tools and techniques guarantee a perfect fit and finish",
        "Proper preparation and installation prevent peeling, lifting, or damage",
        "Experienced technicians understand film characteristics and vehicle requirements",
        "Professional installation maximizes warranty coverage and longevity",
        "Quality shops use manufacturer-approved products and follow best practices"
      ]
    },
    {
      title: "Red Flags to Avoid",
      icon: <AlertCircle className="tint-benefits-info__quality-icon" />,
      points: [
        "Avoid cheap, generic films that fade, bubble, or fail prematurely",
        "Be cautious of shops offering unrealistically low prices—quality has a cost",
        "Steer clear of installers who can't explain their products or process",
        "Avoid shops that don't offer warranties or stand behind their work",
        "Watch out for installers using inferior adhesives or cutting corners"
      ]
    }
  ];

  return (
    <div className="tint-benefits-info">
      <div className="tint-benefits-info__container">
        {/* Main Benefits Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={0}
          className="tint-benefits-info__section"
        >
          <div className="tint-benefits-info__section-header">
            <h2 className="tint-benefits-info__main-title">
              Why Choose Window Tinting?
            </h2>
            <p className="tint-benefits-info__main-description">
              Window tinting offers numerous benefits that enhance your driving experience, protect your investment, and improve vehicle comfort. From UV protection to heat rejection, discover why millions of drivers choose professional window tinting.
            </p>
          </div>

          <div className="tint-benefits-info__benefits-grid">
            {tintBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                variants={revealVariants}
                custom={1 + index}
                className="tint-benefits-info__benefit-card"
              >
                <div className="tint-benefits-info__benefit-icon-wrapper">
                  {benefit.icon}
                </div>
                <h3 className="tint-benefits-info__benefit-title">{benefit.title}</h3>
                <p className="tint-benefits-info__benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Film Types Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={7}
          className="tint-benefits-info__section tint-benefits-info__section--film-types"
        >
          <div className="tint-benefits-info__section-header">
            <h2 className="tint-benefits-info__main-title">
              Understanding Film Types
            </h2>
            <p className="tint-benefits-info__main-description">
              Not all window tint films are created equal. Understanding the differences between dyed (carbon), ceramic, and nano ceramic films helps you choose the right protection for your needs and budget.
            </p>
          </div>

          <div className="tint-benefits-info__film-types-grid">
            {filmTypes.map((film, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                variants={revealVariants}
                custom={8 + index}
                className="tint-benefits-info__film-card"
              >
                <div className="tint-benefits-info__film-card-header" style={{ borderTopColor: film.color }}>
                  <h3 className="tint-benefits-info__film-title">{film.title}</h3>
                  <p className="tint-benefits-info__film-subtitle" style={{ color: film.color }}>
                    {film.subtitle}
                  </p>
                </div>
                <div className="tint-benefits-info__film-content">
                  <ul className="tint-benefits-info__film-benefits">
                    {film.benefits.map((benefit, idx) => (
                      <li key={idx} className="tint-benefits-info__film-benefit-item">
                        <CheckCircle2 className="tint-benefits-info__film-check" style={{ color: film.color }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="tint-benefits-info__film-best-for">
                    <strong>Best For:</strong> {film.bestFor}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Matters Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={11}
          className="tint-benefits-info__section tint-benefits-info__section--quality"
        >
          <div className="tint-benefits-info__section-header">
            <h2 className="tint-benefits-info__main-title">
              Why Quality Matters: Brand & Installation
            </h2>
            <p className="tint-benefits-info__main-description">
              Choosing the right brand and professional installer is crucial for long-lasting results. Quality products and expert installation ensure your window tint performs as promised and stands the test of time.
            </p>
          </div>

          <div className="tint-benefits-info__quality-grid">
            {qualityConsiderations.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                variants={revealVariants}
                custom={12 + index}
                className="tint-benefits-info__quality-card"
              >
                <div className="tint-benefits-info__quality-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="tint-benefits-info__quality-title">{item.title}</h3>
                <ul className="tint-benefits-info__quality-list">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="tint-benefits-info__quality-item">
                      <span className="tint-benefits-info__quality-bullet"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TintBenefitsInfo;

