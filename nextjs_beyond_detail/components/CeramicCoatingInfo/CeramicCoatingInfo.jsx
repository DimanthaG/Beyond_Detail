'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import './CeramicCoatingInfo.scss';

function CeramicCoatingInfo() {
  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
      },
    }),
    hidden: {
      y: 20,
      opacity: 0,
    },
  };

  return (
    <section className="ceramic-coating-info">
      <div className="ceramic-coating-info__container">
        {/* Maintenance Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={10}
          className="ceramic-coating-info__section"
        >
          <div className="ceramic-coating-info__section-header">
            <div className="ceramic-coating-info__section-title-wrapper">
              <Sparkles className="ceramic-coating-info__section-icon" />
              <h3 className="ceramic-coating-info__section-title">
                How to Maintain Your Ceramic Coating
              </h3>
            </div>
            <p className="ceramic-coating-info__section-description">
              Proper maintenance is essential for maximizing your ceramic coating's performance and longevity. Follow these guidelines to keep your coating in optimal condition:
            </p>
          </div>

          <div className="ceramic-coating-info__maintenance-grid">
            <div className="ceramic-coating-info__maintenance-card">
              <CheckCircle2 className="ceramic-coating-info__maintenance-icon" />
              <h4 className="ceramic-coating-info__maintenance-title">Regular Washing</h4>
              <ul className="ceramic-coating-info__maintenance-list">
                <li>Wash every 1-2 weeks using pH-neutral car wash soap</li>
                <li>Use the two-bucket method to minimize scratches</li>
                <li>Use soft microfiber towels for drying</li>
                <li>Avoid automatic car washes with harsh brushes</li>
              </ul>
            </div>

            <div className="ceramic-coating-info__maintenance-card">
              <CheckCircle2 className="ceramic-coating-info__maintenance-icon" />
              <h4 className="ceramic-coating-info__maintenance-title">Ceramic Boosters</h4>
              <ul className="ceramic-coating-info__maintenance-list">
                <li>Apply ceramic maintenance spray every 2-3 months</li>
                <li>These products restore hydrophobic properties</li>
                <li>Help maintain the coating's self-cleaning abilities</li>
                <li>Extend the coating's effective lifespan</li>
              </ul>
            </div>

            <div className="ceramic-coating-info__maintenance-card">
              <CheckCircle2 className="ceramic-coating-info__maintenance-icon" />
              <h4 className="ceramic-coating-info__maintenance-title">Avoid Harsh Chemicals</h4>
              <ul className="ceramic-coating-info__maintenance-list">
                <li>Never use abrasive compounds or harsh cleaners</li>
                <li>Avoid products with wax or silicone that can interfere</li>
                <li>Don't use automatic car wash soaps with harsh detergents</li>
                <li>Be cautious with bug and tar removers</li>
              </ul>
            </div>

            <div className="ceramic-coating-info__maintenance-card">
              <CheckCircle2 className="ceramic-coating-info__maintenance-icon" />
              <h4 className="ceramic-coating-info__maintenance-title">Professional Inspections</h4>
              <ul className="ceramic-coating-info__maintenance-list">
                <li>Annual professional inspection recommended</li>
                <li>Identify and address any issues early</li>
                <li>Professional maintenance touch-ups when needed</li>
                <li>Ensure warranty compliance</li>
              </ul>
            </div>

            <div className="ceramic-coating-info__maintenance-card">
              <CheckCircle2 className="ceramic-coating-info__maintenance-icon" />
              <h4 className="ceramic-coating-info__maintenance-title">Protect from Damage</h4>
              <ul className="ceramic-coating-info__maintenance-list">
                <li>Park in shade or garage when possible</li>
                <li>Remove bird droppings and tree sap promptly</li>
                <li>Avoid parking under trees during sap season</li>
                <li>Use quality car covers if storing long-term</li>
              </ul>
            </div>

            <div className="ceramic-coating-info__maintenance-card">
              <CheckCircle2 className="ceramic-coating-info__maintenance-icon" />
              <h4 className="ceramic-coating-info__maintenance-title">Do's and Don'ts</h4>
              <div className="ceramic-coating-info__maintenance-dos-donts">
                <div>
                  <strong>DO:</strong> Use ceramic-specific maintenance products, wash regularly, use soft towels
                </div>
                <div>
                  <strong>DON'T:</strong> Use traditional wax, apply harsh chemicals, use abrasive materials, ignore maintenance
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CeramicCoatingInfo;

