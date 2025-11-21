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

            <div className="home-content__service-section">
              <h2 className="home-content__subtitle">Auto Detailing in Scarborough</h2>
              <p className="home-content__paragraph">
                Our comprehensive <ServiceLinker text="auto detailing" /> services in Scarborough include deep interior cleaning, exterior paint enhancement, and complete vehicle restoration. We treat every vehicle with the care it deserves, ensuring a showroom finish right here in the GTA.
              </p>
            </div>

            <div className="home-content__service-section">
              <h2 className="home-content__subtitle">Window Tinting Service in Scarborough</h2>
              <p className="home-content__paragraph">
                We offer specialized <ServiceLinker text="window tinting" /> in Scarborough using premium LLUMAR films. Our computer-cut tints provide superior privacy, UV protection, and heat rejection for drivers across Toronto and Markham.
              </p>
            </div>

            <div className="home-content__service-section">
              <h2 className="home-content__subtitle">Ceramic Coating & Paint Correction</h2>
              <p className="home-content__paragraph">
                Protect your investment with our <ServiceLinker text="ceramic coating" /> services in Scarborough. We create a durable barrier that lasts for years. Our expert <ServiceLinker text="paint correction" /> removes swirl marks and scratches, restoring your vehicle's gloss before sealing it.
              </p>
            </div>

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

