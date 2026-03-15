'use client';
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
          <div className="seo-content-box">
            <h2 className="seo-title">
              Car Detailing Near Me - Serving Scarborough, Toronto, Markham & Pickering
            </h2>
            <p className="seo-text-lg">
              <strong>Looking for &quot;car detailing near me&quot; with the best prices?</strong> Beyond Detail is your local auto detailing expert,
              conveniently located at <strong>170 Finchdene Square, Unit 11, Scarborough, ON M1X 1B3</strong>.
              We proudly serve customers throughout Scarborough, Toronto, Markham, Pickering, and the entire Greater Toronto Area.
            </p>
            <p className="seo-text-md">
              Our professional auto detailing services include <ServiceLinker text="interior detailing" />,
              <ServiceLinker text="exterior detailing" />, <ServiceLinker text="paint correction" />,
              <ServiceLinker text="ceramic coating" />, and <ServiceLinker text="window tinting" />.
              Trusted by 70+ five-star reviews | Lifetime Warranties | Same-Day Service Available | Call (647) 689-6109
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeContent;
