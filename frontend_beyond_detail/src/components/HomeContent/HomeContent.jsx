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

            <div className="home-content__service-section">
              <h3 className="home-content__subtitle">Serving the Greater Toronto Area</h3>
              <p className="home-content__paragraph">
                Searching for "car detailing near me" in Scarborough? You've found us! Beyond Detail is your local auto detailing expert, conveniently located at 170 Finchdene Square in Scarborough. We proudly serve customers throughout Scarborough, Toronto, Markham, Pickering, and the entire GTA. Whether you need window tinting in Markham, paint correction in Pickering, or ceramic coating in Scarborough, we offer professional-grade auto detailing services at our dedicated facility. Our expert team ensures the highest quality results for your vehicle.
              </p>
              <p className="home-content__paragraph">
                <strong>Looking for car detailing near you?</strong> We serve all Scarborough neighborhoods including Malvern, Morningside Heights, Agincourt, Woburn, Scarborough Village, and more. Same-day appointments available! Call (647) 689-6109 or book online.
              </p>
            </div>

            <div className="home-content__service-section">
              <h3 className="home-content__subtitle">Premium Products & Lifetime Warranties</h3>
              <p className="home-content__paragraph">
                We partner with industry-leading brands including LLUMAR for window tinting, Ceramic Pro for protective coatings, and premium detailing products trusted by professionals worldwide. Every service includes comprehensive lifetime warranties, giving you peace of mind that your investment is protected. Our certified technicians undergo continuous training to stay current with the latest techniques and technologies in automotive care.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeContent;

