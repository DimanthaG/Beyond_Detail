import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import {
  Contact,
  TintsInfoSection,
  TintsPercentage,
  TintsMaterials,
  TintsPercentageTabs,
  TintLaws,
  TintsPackages,
  SEO,
} from '../../components';
import './Tints.scss';

function Tints() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}
      >
        <SEO
          title='Tints - Beyond Detail Toronto'
          description='Premium car detailing services in Toronto (Scarborough area). Services include window tints, car wash, restoration, paint correction, paint protection, and much more.'
          name='Beyond Detail Toronto'
          type='website'
        />
        <div className='tints__wrapper'>
          <TintsInfoSection />
          <TintsMaterials />
          <TintsPercentageTabs />
          <TintsPercentage />
          <TintsPackages />
          <TintLaws />
          <Contact />
        </div>
      </motion.div>
    </>
  );
}

export default React.memo(Tints);
