import React from "react";
import { Shield, Sun, Sparkles, TrendingUp } from "lucide-react";
import "./TintsFeatures.scss";

const tintFeatures = [
  {
    title: "LLUMAR ATC",
    meta: "DYED FILM",
    description:
      "Everyday Style, Trusted Protection - Llumar ATC is a high-performance dyed film that delivers sleek style, privacy, and protection without breaking the bank. It's color-stable, fade-resistant, and available in 5%, 15%, 20%, and 30% shades. Blocks 99% of harmful UV rays to help preserve your interior and protect your skin.",
    icon: <Shield className="tints-features__icon" />,
    status: "BEST VALUE",
    tags: ["UV Protection", "Factory-Look Finish", "Long-Term Durability"],
    colSpan: 1,
    hasPersistentHover: false,
    color: "#22c55e", // Green for Best Value
  },
  {
    title: "LLUMAR CTX",
    meta: "CERAMIC FILM",
    description:
      "Smart Heat Rejection with Signal-Safe Technology - CTX combines smart heat-rejecting nano-ceramic technology with superior visibility and signal clarity. It's the ideal mid-tier option for drivers who want performance and peace of mind. Available in 5%, 15%, 35%, and 50% shades. Zero interference with your cell, GPS, Bluetooth, or keyless entry.",
    icon: <Sun className="tints-features__icon" />,
    status: "HIGH QUALITY",
    tags: ["Nano-Ceramic", "Signal-Safe", "Tech Friendly"],
    colSpan: 1,
    hasPersistentHover: false,
    color: "#3b82f6", // Blue for High Quality
  },
  {
    title: "LLUMAR IRX",
    meta: "NANO CERAMIC",
    description:
      "Luxury-Level Heat Rejection & Premium Privacy - Designed for drivers who demand the absolute best, IRX uses advanced infrared-blocking nano-ceramic particles to deliver unmatched heat rejection without compromising clarity. Available in 5%, 15%, 35%, and 50% shades. Maximum infrared heat rejection and clarity.",
    icon: <Sparkles className="tints-features__icon" />,
    status: "TOP HEAT BLOCKER",
    tags: ["IR Technology", "Premium Privacy", "Maximum Heat Rejection"],
    colSpan: 1,
    hasPersistentHover: false,
    color: "#f59e0b", // Gold/Amber for Top Heat Blocker
  },
  {
    title: "About Llumar",
    meta: "Industry Leader",
    description:
      "Llumar is the world's leading manufacturer of premium automotive window films. With over 50 years of innovation, Llumar films combine cutting-edge technology with proven durability, backed by lifetime warranties.",
    icon: <TrendingUp className="tints-features__icon" />,
    status: "Trusted",
    tags: ["50+ Years", "Lifetime Warranty", "Global Leader"],
    colSpan: 3,
    hasPersistentHover: false,
  },
];

function TintsFeatures() {
  const getColSpanClass = (colSpan) => {
    if (colSpan === 3) {
      return "tints-features__item--full";
    }
    return "";
  };

  return (
    <div className="tints-features">
      <span className="anchor" id="tintsMaterials"></span>
      <div className="tints-features__container">
        <div className="tints-features__grid">
          {tintFeatures.map((item, index) => (
            <div
              key={index}
              className={`tints-features__item ${getColSpanClass(
                item.colSpan
              )} ${
                item.hasPersistentHover
                  ? "tints-features__item--hover"
                  : ""
              }`}
            >
              <div
                className={`tints-features__pattern ${
                  item.hasPersistentHover ? "tints-features__pattern--show" : ""
                }`}
              />

              <div className="tints-features__content">
                <div className="tints-features__header">
                  <div className="tints-features__icon-wrapper" style={{ color: item.color || 'var(--secondary-color)' }}>
                    {item.icon}
                  </div>
                  <span className="tints-features__status" style={{ color: item.color || 'var(--secondary-color)' }}>{item.status}</span>
                </div>

                <div className="tints-features__body">
                  <h3 className="tints-features__title">
                    {item.title}
                    <span className="tints-features__meta">{item.meta}</span>
                  </h3>
                  <p className="tints-features__description">
                    {item.description}
                  </p>
                </div>

                <div className="tints-features__footer">
                  <div className="tints-features__tags">
                    {item.tags?.map((tag, i) => (
                      <span key={i} className="tints-features__tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="tints-features__cta">Learn More →</span>
                </div>
              </div>

              <div
                className={`tints-features__gradient-border ${
                  item.hasPersistentHover
                    ? "tints-features__gradient-border--show"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TintsFeatures;

