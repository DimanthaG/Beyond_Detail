import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components';
import { animationOne, transition } from '../../components/Transition';

import {
  BgVideo,
  InfoSection,
  HomeDetailSection,
  Testimonials,
  HomeProcess,
  Map,
  HomeServicesHeader,
  HomeServicesCards,
  Partners,
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
        title='Beyond Detail | Auto Detailing Oshawa'
        description='Premium car detailing services in Oshawa. Services include window tints, car wash, restoration, paint correction, paint protection, and much more.'
        name='Beyond Detail Oshawa'
        type='website'
      />
      <BgVideo />
      <HomeDetailSection />
      <InfoSection />
      <HomeProcess />
      <HomeServicesHeader />
      <HomeServicesCards />
      <Partners />
      <Testimonials />
      <Contact />
      <Map />
    </div>
  );
}

export default React.memo(Home);
