import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './ServiceBenefits.scss';

function ServiceBenefits({ title, subtitle, description, benefits, features = [] }) {
  const revealVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: Math.min(i * 0.1, 0.3),
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <section className="service-benefits">
      <div className="service-benefits__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="service-benefits__header"
        >
          <h2 className="service-benefits__title">{title}</h2>
          <hr className="service-benefits__divider" />
          {subtitle && (
            <p className="service-benefits__subtitle">{subtitle}</p>
          )}
          {description && (
            <p className="service-benefits__description">{description}</p>
          )}
        </motion.div>

        {benefits && benefits.length > 0 && (
          <div className="service-benefits__grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title || index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={revealVariants}
                className="service-benefits__card"
              >
                <h3 className="service-benefits__card-title">
                  {benefit.title}
                </h3>
                <p className="service-benefits__card-description">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {features && features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="service-benefits__features"
          >
            <h3 className="service-benefits__features-title">SERVICE FEATURES</h3>
            <div className="service-benefits__features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={feature || index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="service-benefits__feature-item"
                >
                  <CheckCircle className="service-benefits__check-icon" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ServiceBenefits;

