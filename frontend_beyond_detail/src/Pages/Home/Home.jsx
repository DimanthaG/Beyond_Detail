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
        title='Beyond Detail | Premium Auto Detailing Toronto, Scarborough, Markham, Pickering'
        description='Premium car detailing services in Toronto, Scarborough, Markham, and Pickering. Professional window tinting, paint correction, ceramic coating, auto detailing, and interior/exterior services. Expert service across the GTA.'
        name='Beyond Detail Toronto'
        type='website'
        keywords='car detailing Toronto, auto detailing Scarborough, window tinting Markham, paint correction Pickering, ceramic coating GTA'
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
