import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Droplet, Sparkles, Clock, AlertCircle, CheckCircle2, Wrench } from 'lucide-react';
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
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={0}
          className="ceramic-coating-info__header"
        >
          <span className="ceramic-coating-info__badge">Ceramic Coating Protection</span>
          <h2 className="ceramic-coating-info__title">
            Understanding Ceramic Coating Protection
          </h2>
          <p className="ceramic-coating-info__subtitle">
            Ceramic coating is the ultimate paint protection solution. Unlike traditional sealants that sit on the surface, ceramic coatings form a permanent molecular bond with your paint, creating an ultra-hard, glass-like protective layer that lasts for years.
          </p>
        </motion.div>

        {/* What is Ceramic Coating */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={1}
          className="ceramic-coating-info__section"
        >
          <div className="ceramic-coating-info__section-header">
            <div className="ceramic-coating-info__section-title-wrapper">
              <Shield className="ceramic-coating-info__section-icon" />
              <h3 className="ceramic-coating-info__section-title">
                What is Ceramic Coating?
              </h3>
            </div>
            <div className="ceramic-coating-info__section-content">
              <p className="ceramic-coating-info__section-description">
                Ceramic coating is a liquid polymer containing nano-ceramic particles (primarily silicon dioxide - SiO2) that chemically bonds with your vehicle's paint at a molecular level. Unlike traditional waxes or sealants that form a temporary barrier on top of the paint, ceramic coatings become a permanent part of the clear coat surface itself.
              </p>
              <p className="ceramic-coating-info__section-description">
                Once cured, the coating creates an ultra-hard, transparent layer that reaches 9H on the pencil hardness scale—harder than the clear coat beneath it. This permanent bond provides exceptional protection against UV rays, chemical contaminants, scratches, and environmental damage while maintaining exceptional clarity and gloss.
              </p>
            </div>
          </div>
        </motion.div>

        {/* How It's Made */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={2}
          className="ceramic-coating-info__section"
        >
          <div className="ceramic-coating-info__section-header">
            <div className="ceramic-coating-info__section-title-wrapper">
              <Layers className="ceramic-coating-info__section-icon" />
              <h3 className="ceramic-coating-info__section-title">
                How Ceramic Coating is Made
              </h3>
            </div>
            <div className="ceramic-coating-info__section-content">
              <p className="ceramic-coating-info__section-description">
                Ceramic coatings are engineered using advanced nanotechnology. The primary active ingredient is silicon dioxide (SiO2), which forms the basis of quartz and glass. In ceramic coatings, these nano-sized particles are suspended in a liquid polymer solution.
              </p>
              <div className="ceramic-coating-info__composition-grid">
                <div className="ceramic-coating-info__composition-card">
                  <h4 className="ceramic-coating-info__composition-title">Nano-Ceramic Particles</h4>
                  <p className="ceramic-coating-info__composition-text">
                    Ultra-fine silicon dioxide particles (typically 10-50 nanometers in size) that create the hard protective layer once bonded to the paint.
                  </p>
                </div>
                <div className="ceramic-coating-info__composition-card">
                  <h4 className="ceramic-coating-info__composition-title">Liquid Polymer Base</h4>
                  <p className="ceramic-coating-info__composition-text">
                    A proprietary resin solution that carries the ceramic particles and facilitates bonding with the paint surface during application.
                  </p>
                </div>
                <div className="ceramic-coating-info__composition-card">
                  <h4 className="ceramic-coating-info__composition-title">Cross-Linking Agents</h4>
                  <p className="ceramic-coating-info__composition-text">
                    Chemical compounds that create strong covalent bonds between the coating and paint molecules, ensuring permanent adhesion.
                  </p>
                </div>
              </div>
              <p className="ceramic-coating-info__section-description">
                During the curing process, these components chemically react and cross-link, forming a dense, glass-like network that becomes permanently integrated with your paint's clear coat.
              </p>
            </div>
          </div>
        </motion.div>

        {/* How It's Applied */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={3}
          className="ceramic-coating-info__section"
        >
          <div className="ceramic-coating-info__section-header">
            <div className="ceramic-coating-info__section-title-wrapper">
              <Wrench className="ceramic-coating-info__section-icon" />
              <h3 className="ceramic-coating-info__section-title">
                How Ceramic Coating is Applied
              </h3>
            </div>
            <p className="ceramic-coating-info__section-description">
              Professional ceramic coating application is a meticulous process that requires extensive preparation and precision. Here's how our certified technicians apply your ceramic coating:
            </p>
          </div>

          <div className="ceramic-coating-info__application-steps">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
              variants={revealVariants}
              custom={4}
              className="ceramic-coating-info__step-card"
            >
              <div className="ceramic-coating-info__step-header">
                <div className="ceramic-coating-info__step-number">1</div>
                <h4 className="ceramic-coating-info__step-title">Paint Correction</h4>
              </div>
              <p className="ceramic-coating-info__step-description">
                The paint surface must be perfectly prepared through comprehensive paint correction. All swirl marks, scratches, oxidation, and imperfections must be removed, as the coating will permanently lock in any defects. This is why paint correction is included in every ceramic coating service.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
              variants={revealVariants}
              custom={5}
              className="ceramic-coating-info__step-card"
            >
              <div className="ceramic-coating-info__step-header">
                <div className="ceramic-coating-info__step-number">2</div>
                <h4 className="ceramic-coating-info__step-title">Decontamination & Cleaning</h4>
              </div>
              <p className="ceramic-coating-info__step-description">
                Thorough decontamination using clay bar treatment and iron fallout removers eliminates any embedded contaminants. The surface is then cleaned with specialized pre-coating solutions to ensure optimal bonding conditions.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
              variants={revealVariants}
              custom={6}
              className="ceramic-coating-info__step-card"
            >
              <div className="ceramic-coating-info__step-header">
                <div className="ceramic-coating-info__step-number">3</div>
                <h4 className="ceramic-coating-info__step-title">Application Process</h4>
              </div>
              <p className="ceramic-coating-info__step-description">
                Our certified technicians apply the ceramic coating in small sections using specialized applicator pads. The coating is spread in thin, even layers, ensuring complete coverage without runs or high spots. Each panel receives meticulous attention to guarantee uniform application.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
              variants={revealVariants}
              custom={7}
              className="ceramic-coating-info__step-card"
            >
              <div className="ceramic-coating-info__step-header">
                <div className="ceramic-coating-info__step-number">4</div>
                <h4 className="ceramic-coating-info__step-title">Leveling & Removal</h4>
              </div>
              <p className="ceramic-coating-info__step-description">
                After a brief flash time (typically 30-60 seconds), excess coating is carefully removed using premium microfiber towels. This critical step ensures even thickness and prevents uneven curing, which could compromise the coating's performance.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
              variants={revealVariants}
              custom={8}
              className="ceramic-coating-info__step-card"
            >
              <div className="ceramic-coating-info__step-header">
                <div className="ceramic-coating-info__step-number">5</div>
                <h4 className="ceramic-coating-info__step-title">Curing Period</h4>
              </div>
              <p className="ceramic-coating-info__step-description">
                The coating requires 24-48 hours to fully cure and establish its permanent bond. During this period, the nano-ceramic particles cross-link and harden, reaching their maximum hardness and creating the glass-like protective layer.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* How Long It Lasts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          variants={revealVariants}
          custom={9}
          className="ceramic-coating-info__section"
        >
          <div className="ceramic-coating-info__section-header">
            <div className="ceramic-coating-info__section-title-wrapper">
              <Clock className="ceramic-coating-info__section-icon" />
              <h3 className="ceramic-coating-info__section-title">
                How Long Ceramic Coating Lasts
              </h3>
            </div>
            <div className="ceramic-coating-info__section-content">
              <p className="ceramic-coating-info__section-description">
                The longevity of your ceramic coating depends significantly on the level of maintenance and care it receives. While ceramic coatings are designed to last for years, proper maintenance is crucial for achieving maximum protection duration.
              </p>
              
              <div className="ceramic-coating-info__longevity-grid">
                <div className="ceramic-coating-info__longevity-card">
                  <h4 className="ceramic-coating-info__longevity-title">Single Layer Coating</h4>
                  <div className="ceramic-coating-info__longevity-duration">
                    <span className="ceramic-coating-info__longevity-time">1-2 Years</span>
                  </div>
                  <p className="ceramic-coating-info__longevity-text">
                    With proper maintenance: Regular washing with pH-neutral soap, avoiding harsh chemicals, and periodic maintenance sprays. Without proper care, protection may diminish sooner.
                  </p>
                </div>
                <div className="ceramic-coating-info__longevity-card ceramic-coating-info__longevity-card--featured">
                  <h4 className="ceramic-coating-info__longevity-title">Multi-Layer Coating</h4>
                  <div className="ceramic-coating-info__longevity-duration">
                    <span className="ceramic-coating-info__longevity-time">3-5 Years</span>
                  </div>
                  <p className="ceramic-coating-info__longevity-text">
                    With proper maintenance: Regular maintenance with ceramic boosters, proper washing techniques, and periodic professional inspections. Multiple layers provide enhanced durability and longevity.
                  </p>
                </div>
                <div className="ceramic-coating-info__longevity-card">
                  <h4 className="ceramic-coating-info__longevity-title">Premium Coating System</h4>
                  <div className="ceramic-coating-info__longevity-duration">
                    <span className="ceramic-coating-info__longevity-time">5-10+ Years</span>
                  </div>
                  <p className="ceramic-coating-info__longevity-text">
                    With proper maintenance: Comprehensive care routine including regular maintenance products, professional touch-ups, and following manufacturer guidelines. Premium systems offer maximum longevity when properly maintained.
                  </p>
                </div>
              </div>

              <div className="ceramic-coating-info__maintenance-note">
                <AlertCircle className="ceramic-coating-info__note-icon" />
                <p className="ceramic-coating-info__note-text">
                  <strong>Important:</strong> While ceramic coatings are permanent once bonded, their protective properties (hydrophobicity, gloss, chemical resistance) can diminish over time without proper maintenance. Regular care ensures your coating continues to perform at its peak for the entire warranty period and beyond.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

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

