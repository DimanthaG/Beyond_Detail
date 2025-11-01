import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './ServiceInfoSection.scss';

function ServiceInfoSection({ 
  title, 
  subtitle,
  description, 
  benefits = [], 
  process = [],
  features = [],
  className = ''
}) {
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

  return (
    <section className={`service-info ${className}`}>
      <div className="service-info__container">
        {title && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            custom={0}
            className="service-info__header"
          >
            {subtitle && (
              <span className="service-info__badge">{subtitle}</span>
            )}
            <h2 className="service-info__title">{title}</h2>
            {description && (
              <p className="service-info__description">{description}</p>
            )}
          </motion.div>
        )}

        {benefits.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            custom={1}
            className="service-info__benefits"
          >
            <h3 className="service-info__section-title">Key Benefits</h3>
            <div className="service-info__benefits-grid">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  custom={2 + index}
                  className="service-info__benefit-card"
                >
                  <div className="service-info__benefit-icon">
                    <CheckCircle />
                  </div>
                  <h4 className="service-info__benefit-title">{benefit.title}</h4>
                  {benefit.description && (
                    <p className="service-info__benefit-text">{benefit.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {process.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            custom={3}
            className="service-info__process"
          >
            <h3 className="service-info__section-title">Our Process</h3>
            <div className="service-info__process-list">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  custom={4 + index}
                  className="service-info__process-step"
                >
                  <div className="service-info__process-number">{index + 1}</div>
                  <div className="service-info__process-content">
                    <h4 className="service-info__process-title">{step.title}</h4>
                    {step.description && (
                      <p className="service-info__process-text">{step.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {features.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            custom={5}
            className="service-info__features"
          >
            <h3 className="service-info__section-title">What's Included</h3>
            <ul className="service-info__features-list">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  custom={6 + index}
                  className="service-info__feature-item"
                >
                  <CheckCircle className="service-info__feature-icon" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ServiceInfoSection;

