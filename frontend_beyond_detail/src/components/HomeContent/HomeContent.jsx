import React from 'react';
import { motion } from 'framer-motion';
import { ServiceLinker } from '../../utils/serviceLinker';
import './HomeContent.scss';

export function HomeContent() {
  return (
    <section className="home-content">
      <div className="home-content__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="home-content__wrapper"
        >
          <h2 className="home-content__title">
            Professional Vehicle Care Services in Scarborough & Toronto
          </h2>
          
          <div className="home-content__text">
            <p className="home-content__paragraph">
              Beyond Detail is your trusted partner for premium vehicle care in Scarborough and the Greater Toronto Area. We specialize in transforming your car's appearance and protecting its value with expert services.
            </p>
            
            <h3 className="home-content__subtitle">
              Our Services
            </h3>
            
            <p className="home-content__paragraph">
              Our comprehensive <ServiceLinker text="auto detailing" /> services include deep interior cleaning, exterior paint enhancement, and complete vehicle restoration. We also offer specialized <ServiceLinker text="window tinting" /> using premium LLUMAR films for privacy and UV protection.
            </p>
            
            <p className="home-content__paragraph">
              For paint protection, our <ServiceLinker text="ceramic coating" /> services create a durable barrier that lasts for years. Our <ServiceLinker text="paint correction" /> process removes swirl marks, scratches, and oxidation to restore your vehicle's showroom shine.
            </p>
            
            <h3 className="home-content__subtitle">
              Why Choose Us
            </h3>
            
            <p className="home-content__paragraph">
              We use only premium products and professional-grade equipment. Every service comes with lifetime warranties, and our certified technicians have years of experience. We're committed to delivering results that exceed your expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeContent;

