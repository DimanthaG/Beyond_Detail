import React from "react";
import { Shield, Sun, Sparkles, TrendingUp } from "lucide-react";
import "./TintsFeatures.scss";

const tintFeatures = [
  {
    title: "LLUMAR ATC",
    meta: "Advanced Technology",
    description:
      "Premium carbon-based window film delivering exceptional heat rejection and UV protection. Perfect for those seeking superior performance with excellent clarity.",
    icon: <Shield className="tints-features__icon" />,
    status: "Premium",
    tags: ["Heat Rejection", "UV Protection", "Clarity"],
    colSpan: 1,
    hasPersistentHover: false,
  },
  {
    title: "LLUMAR CTX",
    meta: "Ceramic Technology",
    description:
      "Advanced ceramic technology provides maximum heat rejection and UV protection while maintaining crystal-clear visibility. Non-reflective, non-conductive, and fade-resistant.",
    icon: <Sun className="tints-features__icon" />,
    status: "Ceramic",
    tags: ["Ceramic", "Non-Reflective", "Maximum Heat Rejection"],
    colSpan: 1,
    hasPersistentHover: false,
  },
  {
    title: "LLUMAR IRX",
    meta: "Infrared Technology",
    description:
      "Elite ceramic window film with superior infrared rejection technology. Blocks up to 99% of UV rays and provides exceptional heat rejection for ultimate comfort and protection.",
    icon: <Sparkles className="tints-features__icon" />,
    status: "Elite",
    tags: ["IR Technology", "99% UV Block", "Ultimate Performance"],
    colSpan: 1,
    hasPersistentHover: true,
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
                  <div className="tints-features__icon-wrapper">
                    {item.icon}
                  </div>
                  <span className="tints-features__status">{item.status}</span>
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

