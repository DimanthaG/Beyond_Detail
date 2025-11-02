import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Zap, 
  Award, 
  CheckCircle2,
  ArrowRight,
  Search,
  Wrench,
  Layers,
  FileCheck,
  Sparkle
} from 'lucide-react';
import './PaintCorrectionInfo.scss';

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

function PaintCorrectionInfo({ 
  title, 
  subtitle,
  description, 
  benefits = [], 
  process = [],
  features = []
}) {
  const [activeTab, setActiveTab] = useState('benefits');

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
    hidden: {
      y: 30,
      opacity: 0,
    },
  };

  return (
    <section className="paint-correction-info">
      <div className="paint-correction-info__container">
        {/* Header */}
        {title && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            custom={0}
            className="paint-correction-info__header"
          >
            <h2 className="paint-correction-info__title">{title}</h2>
            {description && (
              <p className="paint-correction-info__description">{description}</p>
            )}
          </motion.div>
        )}

        {/* Tab Navigation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          custom={1}
          className="paint-correction-info__tabs"
        >
          <button
            onClick={() => setActiveTab('benefits')}
            className={`paint-correction-info__tab ${activeTab === 'benefits' ? 'paint-correction-info__tab--active' : ''}`}
          >
            <Sparkles size={20} />
            <span>Key Benefits</span>
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`paint-correction-info__tab ${activeTab === 'process' ? 'paint-correction-info__tab--active' : ''}`}
          >
            <Layers size={20} />
            <span>Our Process</span>
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`paint-correction-info__tab ${activeTab === 'features' ? 'paint-correction-info__tab--active' : ''}`}
          >
            <CheckCircle2 size={20} />
            <span>What's Included</span>
          </button>
        </motion.div>

        {/* Tab Content */}
        <div className="paint-correction-info__content">
          {/* Benefits Tab */}
          {activeTab === 'benefits' && benefits.length > 0 && (
            <motion.div
              key="benefits"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="paint-correction-info__tab-panel"
            >
              <div className="paint-correction-info__benefits-grid">
                {benefits.map((benefit, index) => {
                  const Icon = benefitIcons[index % benefitIcons.length];
                  return (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={revealVariants}
                      custom={index}
                      className="paint-correction-info__benefit-card"
                    >
                      <div className="paint-correction-info__benefit-icon-wrapper">
                        <Icon className="paint-correction-info__benefit-icon" />
                      </div>
                      <div className="paint-correction-info__benefit-content">
                        <h3 className="paint-correction-info__benefit-title">
                          {benefit.title}
                        </h3>
                        <p className="paint-correction-info__benefit-text">
                          {benefit.description}
                        </p>
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
              className="paint-correction-info__tab-panel"
            >
              <div className="paint-correction-info__process-timeline">
                {process.map((step, index) => {
                  const Icon = processIcons[index % processIcons.length];
                  const isLast = index === process.length - 1;
                  return (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={revealVariants}
                      custom={index}
                      className="paint-correction-info__process-step"
                    >
                      <div className="paint-correction-info__process-connector">
                        <div className="paint-correction-info__process-number-wrapper">
                          <div className="paint-correction-info__process-number">
                            {index + 1}
                          </div>
                          <Icon className="paint-correction-info__process-icon" />
                        </div>
                        {!isLast && <div className="paint-correction-info__process-line" />}
                      </div>
                      <div className="paint-correction-info__process-content">
                        <h3 className="paint-correction-info__process-title">
                          {step.title}
                        </h3>
                        <p className="paint-correction-info__process-text">
                          {step.description}
                        </p>
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
              className="paint-correction-info__tab-panel"
            >
              <div className="paint-correction-info__features-grid">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={revealVariants}
                    custom={index}
                    className="paint-correction-info__feature-card"
                  >
                    <div className="paint-correction-info__feature-check">
                      <CheckCircle2 className="paint-correction-info__feature-icon" />
                    </div>
                    <span className="paint-correction-info__feature-text">{feature}</span>
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

export default PaintCorrectionInfo;

