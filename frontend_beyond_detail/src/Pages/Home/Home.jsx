import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components';
import { animationOne, transition } from '../../components/Transition';
import { HomeHero } from '../../components/HomeHero/HomeHero';

import {
  HomeDetailSection,
  Testimonials,
  Map,
  Contact,
} from '../../components';
import './Home.scss';

function Home() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home__container'>
      <SEO
        title='Beyond Detail | Auto Detailing Toronto'
        description='Premium car detailing services in Toronto (Scarborough area). Services include window tints, car wash, restoration, paint correction, paint protection, and much more.'
        name='Beyond Detail Toronto'
        type='website'
      />
      <HomeHero />
      <div id="home-services"></div>
      <HomeDetailSection />
      <Testimonials />
      <Contact />
      <Map />
    </div>
  );
}

export default React.memo(Home);
