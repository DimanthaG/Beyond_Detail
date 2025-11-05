import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Zap, 
  Award, 
  CheckCircle2,
  Search,
  Wrench,
  Layers,
  FileCheck
} from 'lucide-react';
import './ServiceInfoSection.scss';

const benefitIcons = [
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Award,
  CheckCircle2
];

const processIcons = [
  Search,
  Wrench,
  Layers,
  FileCheck,
  Shield
];

function ServiceInfoSection({ 
  title, 
  subtitle,
  description, 
  benefits = [], 
  process = [],
  features = [],
  className = ''
}) {
  // Set initial tab to first available section
  const getInitialTab = () => {
    if (benefits.length > 0) return 'benefits';
    if (process.length > 0) return 'process';
    if (features.length > 0) return 'features';
    return 'benefits';
  };

  const [activeTab, setActiveTab] = useState(() => getInitialTab());

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: Math.min(i * 0.01, 0.03),
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    hidden: {
      y: 10,
      opacity: 0,
    },
  };

  return (
    <section className={`service-info ${className}`}>
      <div className="service-info__container">
        {/* Header */}
        {title && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
            variants={revealVariants}
            custom={0}
            className="service-info__header"
          >
            <h2 className="service-info__title">{title}</h2>
            {description && (
              <p className="service-info__description">{description}</p>
            )}
          </motion.div>
        )}

        {/* Tab Navigation - Only show if multiple sections */}
        {(process.length > 0 || features.length > 0) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
            variants={revealVariants}
            custom={1}
            className="service-info__tabs"
          >
            {benefits.length > 0 && (
              <button
                onClick={() => setActiveTab('benefits')}
                className={`service-info__tab ${activeTab === 'benefits' ? 'service-info__tab--active' : ''}`}
              >
                <Sparkles size={20} />
                <span>Key Benefits</span>
              </button>
            )}
            {process.length > 0 && (
              <button
                onClick={() => setActiveTab('process')}
                className={`service-info__tab ${activeTab === 'process' ? 'service-info__tab--active' : ''}`}
              >
                <Layers size={20} />
                <span>Our Process</span>
              </button>
            )}
            {features.length > 0 && (
              <button
                onClick={() => setActiveTab('features')}
                className={`service-info__tab ${activeTab === 'features' ? 'service-info__tab--active' : ''}`}
              >
                <CheckCircle2 size={20} />
                <span>What's Included</span>
              </button>
            )}
          </motion.div>
        )}

        {/* Tab Content */}
        <div className="service-info__content">
          {/* Benefits Tab */}
          {activeTab === 'benefits' && benefits.length > 0 && (
            <motion.div
              key="benefits"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="service-info__tab-panel"
            >
              <div className="service-info__benefits-grid">
                {benefits.map((benefit, index) => {
                  const Icon = benefitIcons[index % benefitIcons.length];
                  return (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                      variants={revealVariants}
                      custom={index}
                      className="service-info__benefit-card"
                    >
                      <div className="service-info__benefit-icon-wrapper">
                        <Icon className="service-info__benefit-icon" />
                      </div>
                      <div className="service-info__benefit-content">
                        <h3 className="service-info__benefit-title">
                          {benefit.title}
                        </h3>
                        {benefit.description && (
                          <p className="service-info__benefit-text">
                            {benefit.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Process Tab */}
          {activeTab === 'process' && process.length > 0 && (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="service-info__tab-panel"
            >
              <div className="service-info__process-timeline">
                {process.map((step, index) => {
                  const Icon = processIcons[index % processIcons.length];
                  const isLast = index === process.length - 1;
                  return (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                      variants={revealVariants}
                      custom={index}
                      className="service-info__process-step"
                    >
                      <div className="service-info__process-connector">
                        <div className="service-info__process-number-wrapper">
                          <div className="service-info__process-number">
                            {index + 1}
                          </div>
                          <Icon className="service-info__process-icon" />
                        </div>
                        {!isLast && <div className="service-info__process-line" />}
                      </div>
                      <div className="service-info__process-content">
                        <h3 className="service-info__process-title">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="service-info__process-text">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && features.length > 0 && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="service-info__tab-panel"
            >
              <div className="service-info__features-grid">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                    variants={revealVariants}
                    custom={index}
                    className="service-info__feature-card"
                  >
                    <div className="service-info__feature-check">
                      <CheckCircle2 className="service-info__feature-icon" />
                    </div>
                    <span className="service-info__feature-text">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ServiceInfoSection;




