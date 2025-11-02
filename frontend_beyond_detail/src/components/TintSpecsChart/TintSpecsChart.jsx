import React from 'react';
import { motion } from 'framer-motion';
import './TintSpecsChart.scss';

function TintSpecsChart() {
  const revealVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
  };

  const specsData = [
    { shade: '5%', lightAllowed: '6%', infraredRejection: '95%' },
    { shade: '15%', lightAllowed: '20%', infraredRejection: '95%' },
    { shade: '35%', lightAllowed: '34%', infraredRejection: '95%' },
    { shade: '50%', lightAllowed: '55%', infraredRejection: '95%' },
  ];

  return (
    <div className="tint-specs-chart">
      <div className="tint-specs-chart__container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
          variants={revealVariants}
          className="tint-specs-chart__wrapper"
        >
          <div className="tint-specs-chart__table-container">
            <table className="tint-specs-chart__table">
              <thead>
                <tr>
                  <th className="tint-specs-chart__header">SHADE</th>
                  <th className="tint-specs-chart__header">LIGHT ALLOWED IN</th>
                  <th className="tint-specs-chart__header">INFRARED REJECTION</th>
                </tr>
              </thead>
              <tbody>
                {specsData.map((row, index) => (
                  <tr key={index} className="tint-specs-chart__row">
                    <td 
                      className="tint-specs-chart__cell tint-specs-chart__cell--shade"
                      data-label="SHADE"
                    >
                      {row.shade}
                    </td>
                    <td 
                      className="tint-specs-chart__cell tint-specs-chart__cell--light"
                      data-label="LIGHT ALLOWED IN"
                    >
                      {row.lightAllowed}
                    </td>
                    <td 
                      className="tint-specs-chart__cell tint-specs-chart__cell--infrared"
                      data-label="INFRARED REJECTION"
                    >
                      {row.infraredRejection}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TintSpecsChart;

