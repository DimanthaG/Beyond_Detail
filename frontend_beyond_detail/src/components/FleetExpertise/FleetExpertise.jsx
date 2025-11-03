import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award, Clock, Shield, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import './FleetExpertise.scss';

const expertiseItems = [
  {
    icon: Building2,
    title: 'Dealership Expertise',
    description: 'Specialized services for used and retail car dealerships. We understand the importance of maintaining inventory presentation and customer appeal.',
  },
  {
    icon: Users,
    title: 'Commercial Fleet Management',
    description: 'Comprehensive fleet solutions for businesses with multiple vehicles. Streamlined processes designed for efficiency and consistency.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'After-hours service, weekend availability, and on-site detailing options that accommodate your business operations without disrupting productivity.',
  },
  {
    icon: Award,
    title: 'Volume Pricing',
    description: 'Competitive pricing structures with volume discounts. The more vehicles you maintain with us, the better your rates.',
  },
  {
    icon: Shield,
    title: 'Consistent Quality',
    description: 'Standardized service protocols ensure every vehicle in your fleet receives the same premium treatment and professional finish.',
  },
  {
    icon: TrendingUp,
    title: 'Value Preservation',
    description: 'Maintain and enhance your fleet\'s resale value through regular professional care and protection services.',
  },
];

const services = [
  'Exterior Wash & Detail',
  'Interior Deep Cleaning',
  'Paint Correction & Protection',
  'Ceramic Coating Application',
  'Window Tinting',
  'Fleet Maintenance Programs',
  'On-Site Service Available',
  'Customized Service Packages',
];

function FleetExpertise() {
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
    <section className="fleet-expertise">
      <div className="fleet-expertise__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="fleet-expertise__header"
        >
          <h2 className="fleet-expertise__title">OUR FLEET EXPERTISE</h2>
          <hr className="fleet-expertise__divider" />
          <p className="fleet-expertise__subtitle">
            SPECIALIZED SERVICES DESIGNED FOR BUSINESSES THAT DEPEND ON THEIR VEHICLES
          </p>
        </motion.div>

        <div className="fleet-expertise__grid">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={revealVariants}
                className="fleet-expertise__card"
              >
                <div className="fleet-expertise__card-icon">
                  <Icon className="fleet-expertise__icon" />
                </div>
                <h3 className="fleet-expertise__card-title">{item.title}</h3>
                <p className="fleet-expertise__card-description">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="fleet-expertise__services"
        >
          <h3 className="fleet-expertise__services-title">COMPREHENSIVE FLEET SERVICES</h3>
          <div className="fleet-expertise__services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="fleet-expertise__service-item"
              >
                <CheckCircle className="fleet-expertise__check-icon" />
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FleetExpertise;

