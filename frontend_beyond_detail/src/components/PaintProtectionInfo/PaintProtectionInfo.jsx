import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, AlertCircle } from 'lucide-react';
import './PaintProtectionInfo.scss';

function PaintProtectionInfo() {

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
    <section className="paint-protection-info">
      <div className="paint-protection-info__container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={0}
          className="paint-protection-info__header"
        >
          <span className="paint-protection-info__badge">Paint Protection</span>
          <h2 className="paint-protection-info__title">
            Understanding Paint Protection
          </h2>
          <p className="paint-protection-info__subtitle">
            After paint correction, protecting your investment is crucial. Understanding your vehicle's paint structure and the protection methods available will help you make the best decision for your vehicle.
          </p>
        </motion.div>

        {/* Paint Layers Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={1}
          className="paint-protection-info__layers-section"
        >
          <div className="paint-protection-info__section-header">
            <div className="paint-protection-info__section-title-wrapper">
              <Layers className="paint-protection-info__section-icon" />
              <h3 className="paint-protection-info__section-title">
                The Foundation: Your Vehicle's Paint Structure
              </h3>
            </div>
            <div className="paint-protection-info__section-content">
              <p className="paint-protection-info__section-description">
                Your vehicle's paint consists of multiple layers working together—metal, primer, base paint, and clear coat. Each layer serves a crucial purpose in protecting your vehicle and maintaining its appearance. The clear coat, as the outermost layer, bears the brunt of daily exposure to UV rays, environmental contaminants, and minor abrasions.
              </p>
              <p className="paint-protection-info__section-description">
                Most swirl marks, light scratches, and imperfections you see on your vehicle are actually in the clear coat layer, not the base paint beneath. When you undergo paint correction, our technicians carefully remove the damaged clear coat layer to restore the smooth, glossy surface underneath. This process is precise and measured, removing only what's necessary to eliminate defects.
              </p>
              <p className="paint-protection-info__section-description">
                Since paint correction removes a portion of your clear coat, protecting what remains becomes essential. This is where sealants and ceramic coatings come in—they create a protective barrier over the corrected clear coat, extending the life of your paint finish and preserving the results of your paint correction investment.
              </p>
            </div>
          </div>

          {/* Important Note Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
            variants={revealVariants}
            custom={2}
            className="paint-protection-info__important-note"
          >
            <div className="paint-protection-info__important-note-container">
              <div className="paint-protection-info__important-note-header">
                <AlertCircle className="paint-protection-info__important-note-icon" />
                <h3 className="paint-protection-info__important-note-title">
                  Important Consideration: New Vehicle Protection
                </h3>
              </div>
              <p className="paint-protection-info__important-note-text">
                Many vehicle owners are surprised to learn that new cars from the factory or dealership come without any protective coating. The clear coat is exposed and vulnerable from day one, making it susceptible to UV damage, oxidation, and environmental contaminants. Professional protection applied early in your vehicle's life is an important investment that helps maintain your vehicle's appearance, preserves its resale value, and reduces the need for more intensive correction work down the road.
              </p>
            </div>
          </motion.div>

          {/* Paint Correction Stages Explanation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
            variants={revealVariants}
            custom={4}
            className="paint-protection-info__correction-stages"
          >
            <div className="paint-protection-info__section-header">
              <Layers className="paint-protection-info__section-icon" />
              <h3 className="paint-protection-info__section-title">
                Understanding Paint Correction Stages
              </h3>
              <p className="paint-protection-info__section-description">
                Paint correction is performed in stages, each removing progressively finer imperfections from the clear coat. 
                The number of stages depends on the severity of your paint's condition.
              </p>
            </div>

            <div className="paint-protection-info__stages-grid">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                variants={revealVariants}
                custom={5}
                className="paint-protection-info__stage-card"
              >
                <div className="paint-protection-info__stage-header">
                  <div className="paint-protection-info__stage-number">1</div>
                  <h4 className="paint-protection-info__stage-title">Single Stage Correction</h4>
                </div>
                <div className="paint-protection-info__stage-content">
                  <p className="paint-protection-info__stage-description">
                    A single-stage correction uses one polishing step to remove light swirl marks and minor surface defects. 
                    This process cuts down a thin layer of the damaged clear coat and then refines it in the same step.
                  </p>
                  <div className="paint-protection-info__stage-details">
                    <div className="paint-protection-info__stage-detail-item">
                      <span className="paint-protection-info__stage-detail-label">Best For:</span>
                      <span className="paint-protection-info__stage-detail-value">Light swirl marks, minor scratches, new vehicles with minimal damage</span>
                    </div>
                    <div className="paint-protection-info__stage-detail-item">
                      <span className="paint-protection-info__stage-detail-label">Clear Coat Removed:</span>
                      <span className="paint-protection-info__stage-detail-value">Minimal (2-3 microns)</span>
                    </div>
                    <div className="paint-protection-info__stage-detail-item">
                      <span className="paint-protection-info__stage-detail-label">Process:</span>
                      <span className="paint-protection-info__stage-detail-value">One compound polish that cuts and finishes simultaneously</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                variants={revealVariants}
                custom={6}
                className="paint-protection-info__stage-card paint-protection-info__stage-card--featured"
              >
                <div className="paint-protection-info__stage-badge">Most Popular</div>
                <div className="paint-protection-info__stage-header">
                  <div className="paint-protection-info__stage-number">2</div>
                  <h4 className="paint-protection-info__stage-title">Two Stage Correction</h4>
                </div>
                <div className="paint-protection-info__stage-content">
                  <p className="paint-protection-info__stage-description">
                    Two-stage correction separates the cutting and finishing processes. The first stage uses a more aggressive 
                    compound to remove deeper defects, while the second stage refines the surface to perfection.
                  </p>
                  <div className="paint-protection-info__stage-details">
                    <div className="paint-protection-info__stage-detail-item">
                      <span className="paint-protection-info__stage-detail-label">Best For:</span>
                      <span className="paint-protection-info__stage-detail-value">Moderate swirl marks, light scratches, oxidation, vehicles with moderate wear</span>
                    </div>
                    <div className="paint-protection-info__stage-detail-item">
                      <span className="paint-protection-info__stage-detail-label">Clear Coat Removed:</span>
                      <span className="paint-protection-info__stage-detail-value">Moderate (3-5 microns)</span>
                    </div>
                    <div className="paint-protection-info__stage-detail-item">
                      <span className="paint-protection-info__stage-detail-label">Process:</span>
                      <span className="paint-protection-info__stage-detail-value">Aggressive compound polish, followed by finishing polish</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                variants={revealVariants}
                custom={7}
                className="paint-protection-info__stage-card"
              >
                <div className="paint-protection-info__stage-header">
                  <div className="paint-protection-info__stage-number">3</div>
                  <h4 className="paint-protection-info__stage-title">Three Stage Correction</h4>
                </div>
                <div className="paint-protection-info__stage-content">
                  <p className="paint-protection-info__stage-description">
                    Three-stage correction is the most intensive process, using multiple progressive polishing steps to tackle 
                    severe defects, deep scratches, and heavy oxidation. Each stage uses progressively finer compounds and pads.
                  </p>
                  <div className="paint-protection-info__stage-details">
                    <div className="paint-protection-info__stage-detail-item">
                      <span className="paint-protection-info__stage-detail-label">Best For:</span>
                      <span className="paint-protection-info__stage-detail-value">Severe swirl marks, deep scratches, heavy oxidation, neglected paint</span>
                    </div>
                    <div className="paint-protection-info__stage-detail-item">
                      <span className="paint-protection-info__stage-detail-label">Clear Coat Removed:</span>
                      <span className="paint-protection-info__stage-detail-value">Significant (5-8 microns)</span>
                    </div>
                    <div className="paint-protection-info__stage-detail-item">
                      <span className="paint-protection-info__stage-detail-label">Process:</span>
                      <span className="paint-protection-info__stage-detail-value">Heavy cutting compound, medium compound, finishing polish</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="paint-protection-info__stages-note">
              <AlertCircle className="paint-protection-info__note-icon" />
              <p className="paint-protection-info__note-text">
                <strong>Important:</strong> Each stage removes a thin layer of clear coat. While this restores your paint's shine, 
                it's why protection after correction is crucial—you want to protect the clear coat that remains. 
                Modern clear coats are typically 30-50 microns thick, so even three-stage correction is safe when performed by professionals.
              </p>
            </div>
          </motion.div>

          {/* Why Protection Matters - Enhanced */}
          <div className="paint-protection-info__protection-explained">
            <div className="paint-protection-info__explained-header">
              <Shield className="paint-protection-info__explained-icon" />
              <h4 className="paint-protection-info__explained-title">Why Protection Matters</h4>
            </div>
            <div className="paint-protection-info__explained-grid">
              <div className="paint-protection-info__explained-card">
                <div className="paint-protection-info__explained-card-icon">🛡️</div>
                <h5 className="paint-protection-info__explained-card-title">First Line of Defense</h5>
                <p className="paint-protection-info__explained-card-text">
                  The clear coat is your paint's outermost layer. Once damaged by UV rays, oxidation, or scratches, 
                  the base paint underneath becomes vulnerable to permanent damage.
                </p>
              </div>
              <div className="paint-protection-info__explained-card">
                <div className="paint-protection-info__explained-card-icon">💰</div>
                <h5 className="paint-protection-info__explained-card-title">Preserves Value</h5>
                <p className="paint-protection-info__explained-card-text">
                  Protected paint maintains your vehicle's resale value. A well-maintained finish can significantly 
                  increase your vehicle's worth when it's time to sell or trade.
                </p>
              </div>
              <div className="paint-protection-info__explained-card">
                <div className="paint-protection-info__explained-card-icon">✨</div>
                <h5 className="paint-protection-info__explained-card-title">Long-Lasting Shine</h5>
                <p className="paint-protection-info__explained-card-text">
                  Sealants and ceramic coatings create a barrier that keeps your vehicle looking showroom-fresh, 
                  reducing the need for frequent washing and maintenance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PaintProtectionInfo;

