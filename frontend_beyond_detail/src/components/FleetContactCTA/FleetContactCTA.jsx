import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Car, Truck, Phone, Mail, ArrowRight } from 'lucide-react';
import './FleetContactCTA.scss';

const fleetTypes = [
  {
    icon: Car,
    title: 'Used Car Dealerships',
    description: 'Keep your inventory looking showroom-ready. Professional detailing that enhances vehicle presentation and customer appeal.',
    features: ['Pre-sale preparation', 'Inventory maintenance', 'Volume pricing', 'Flexible scheduling'],
  },
  {
    icon: Building2,
    title: 'Retail Dealerships',
    description: 'Maintain the professional appearance of your dealership vehicles. Comprehensive services for new and used inventory.',
    features: ['New car prep', 'Trade-in enhancement', 'Service loaner maintenance', 'Customized packages'],
  },
  {
    icon: Truck,
    title: 'Commercial Fleets',
    description: 'Efficient fleet management solutions for businesses. Keep your entire fleet looking professional while maximizing value.',
    features: ['Fleet maintenance programs', 'On-site service', 'Volume discounts', 'Regular scheduling'],
  },
];

function FleetContactCTA() {
  return (
    <section className="fleet-contact-cta" id="contact">
      <div className="fleet-contact-cta__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="fleet-contact-cta__header"
        >
          <h2 className="fleet-contact-cta__title">LET'S PARTNER WITH YOUR BUSINESS</h2>
          <hr className="fleet-contact-cta__divider" />
          <p className="fleet-contact-cta__subtitle">
            CONTACT US TODAY FOR CUSTOMIZED FLEET SERVICE SOLUTIONS
          </p>
        </motion.div>

        <div className="fleet-contact-cta__grid">
          {fleetTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="fleet-contact-cta__card"
              >
                <div className="fleet-contact-cta__card-header">
                  <div className="fleet-contact-cta__card-icon-wrapper">
                    <Icon className="fleet-contact-cta__card-icon" />
                  </div>
                  <h3 className="fleet-contact-cta__card-title">{type.title}</h3>
                </div>
                <p className="fleet-contact-cta__card-description">{type.description}</p>
                <ul className="fleet-contact-cta__card-features">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="fleet-contact-cta__card-feature">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="fleet-contact-cta__actions"
        >
          <div className="fleet-contact-cta__actions-content">
            <h3 className="fleet-contact-cta__actions-title">READY TO GET STARTED?</h3>
            <p className="fleet-contact-cta__actions-description">
              Contact us today for a personalized fleet service quote tailored to your business needs.
            </p>
            <div className="fleet-contact-cta__buttons">
              <motion.a
                href="tel:16476896109"
                className="fleet-contact-cta__button fleet-contact-cta__button--primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="fleet-contact-cta__button-icon" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href="mailto:info@beyonddetail.com"
                className="fleet-contact-cta__button fleet-contact-cta__button--outline"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="fleet-contact-cta__button-icon" />
                <span>Email Us</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="fleet-contact-cta__button fleet-contact-cta__button--outline"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Request Quote</span>
                <ArrowRight className="fleet-contact-cta__button-icon" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FleetContactCTA;

