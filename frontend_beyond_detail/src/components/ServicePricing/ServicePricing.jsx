import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ServicePricing.scss';

function ServicePricing({ packages = [], title = "Service Packages" }) {
  const navigate = useNavigate();
  
  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
    hidden: {
      y: 30,
      opacity: 0,
    },
  };

  if (!packages || packages.length === 0) {
    return null;
  }

  return (
    <section id="pricing" className="service-pricing">
      <div className="service-pricing__container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          custom={0}
          className="service-pricing__header"
        >
          <h2 className="service-pricing__title">{title}</h2>
          <p className="service-pricing__subtitle">
            Choose the package that best fits your needs. All packages include professional service and quality guarantee.
          </p>
        </motion.div>

        <div className="service-pricing__grid">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              custom={1 + index}
              className={`service-pricing__card ${pkg.featured ? 'service-pricing__card--featured' : ''}`}
            >
              {pkg.featured && (
                <div className="service-pricing__badge">Most Popular</div>
              )}
              <div className="service-pricing__card-header">
                <h3 className="service-pricing__card-title">{pkg.name}</h3>
                {pkg.duration && (
                  <div className="service-pricing__duration">
                    <Clock className="service-pricing__clock-icon" />
                    <span>{pkg.duration}</span>
                  </div>
                )}
              </div>
              
              <div className="service-pricing__price-section">
                {pkg.priceRange && pkg.priceRange.start > 0 ? (
                  <div className="service-pricing__price-range">
                    <span className="service-pricing__price-label">Starting at</span>
                    <div className="service-pricing__price">
                      ${pkg.priceRange.start}
                      {pkg.priceRange.end && pkg.priceRange.end > 0 && (
                        <span className="service-pricing__price-end"> - ${pkg.priceRange.end}</span>
                      )}
                    </div>
                  </div>
                ) : pkg.price ? (
                  <div className="service-pricing__price">
                    ${pkg.price}
                  </div>
                ) : (
                  <div className="service-pricing__price">
                    See Details Below
                  </div>
                )}
                {pkg.priceNote && (
                  <p className="service-pricing__price-note">{pkg.priceNote}</p>
                )}
              </div>

              {pkg.description && (
                <p className="service-pricing__card-description">{pkg.description}</p>
              )}

              {pkg.features && pkg.features.length > 0 && (
                <ul className="service-pricing__features-list">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-pricing__feature-item">
                      <CheckCircle className="service-pricing__feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {pkg.links && pkg.links.length > 0 ? (
                <div className="service-pricing__links">
                  {pkg.links.map((link, linkIndex) => (
                    <motion.button
                      key={linkIndex}
                      className="service-pricing__link-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(link.href)}
                    >
                      {link.text}
                    </motion.button>
                  ))}
                </div>
              ) : pkg.ctaText && (
                <motion.button
                  className="service-pricing__cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {pkg.ctaText}
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          custom={packages.length + 1}
          className="service-pricing__disclaimer"
        >
          <p>
            <strong>Note:</strong> Prices may vary based on vehicle size, condition, and specific requirements. 
            All prices exclude HST. Please remove all personal items and valuables before service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicePricing;

