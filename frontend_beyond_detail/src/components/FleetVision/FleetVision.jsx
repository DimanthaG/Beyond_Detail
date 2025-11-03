import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Rocket, Users, Award } from 'lucide-react';
import './FleetVision.scss';

const visionPoints = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To become the premier fleet service provider in the Greater Toronto Area, delivering exceptional quality and value to businesses that depend on their vehicles.',
  },
  {
    icon: Heart,
    title: 'Our Commitment',
    description: 'Building long-term partnerships with dealerships and commercial fleets through consistent service excellence, flexible solutions, and dedicated account management.',
  },
  {
    icon: Rocket,
    title: 'Our Goal',
    description: 'To help businesses maximize their vehicle investments through professional care that enhances appearance, preserves value, and maintains fleet presentation standards.',
  },
];

const values = [
  {
    icon: Users,
    text: 'Partnership-Focused',
  },
  {
    icon: Award,
    text: 'Quality-Driven',
  },
  {
    icon: Target,
    text: 'Results-Oriented',
  },
  {
    icon: Heart,
    text: 'Customer-Centric',
  },
];

function FleetVision() {
  return (
    <section className="fleet-vision">
      <div className="fleet-vision__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="fleet-vision__header"
        >
          <h2 className="fleet-vision__title">OUR VISION & GOALS</h2>
          <hr className="fleet-vision__divider" />
          <p className="fleet-vision__subtitle">
            BUILDING THE FUTURE OF FLEET SERVICES IN THE GTA
          </p>
        </motion.div>

        <div className="fleet-vision__grid">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="fleet-vision__card"
              >
                <div className="fleet-vision__card-icon-wrapper">
                  <Icon className="fleet-vision__card-icon" />
                </div>
                <h3 className="fleet-vision__card-title">{point.title}</h3>
                <p className="fleet-vision__card-description">{point.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="fleet-vision__values"
        >
          <h3 className="fleet-vision__values-title">OUR CORE VALUES</h3>
          <div className="fleet-vision__values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="fleet-vision__value-item"
                >
                  <Icon className="fleet-vision__value-icon" />
                  <span className="fleet-vision__value-text">{value.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FleetVision;

