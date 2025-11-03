import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import './ServiceContactCTA.scss';

function ServiceContactCTA({ title = "READY TO GET STARTED?", description = "Contact us today for a personalized quote tailored to your needs." }) {
  return (
    <section className="service-contact-cta" id="contact">
      <div className="service-contact-cta__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="service-contact-cta__content"
        >
          <h2 className="service-contact-cta__title">{title}</h2>
          <p className="service-contact-cta__description">
            {description}
          </p>
          <div className="service-contact-cta__buttons">
            <motion.a
              href="tel:16476896109"
              className="service-contact-cta__button service-contact-cta__button--primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="service-contact-cta__button-icon" />
              <span>Call Now</span>
            </motion.a>
            <motion.a
              href="mailto:info@beyonddetail.com"
              className="service-contact-cta__button service-contact-cta__button--outline"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="service-contact-cta__button-icon" />
              <span>Email Us</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="service-contact-cta__button service-contact-cta__button--outline"
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
              <ArrowRight className="service-contact-cta__button-icon" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceContactCTA;

