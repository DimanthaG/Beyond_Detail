import React, { useEffect, Suspense, lazy } from 'react';
import { SEO } from '../../components';
import { HomeHero } from '../../components/HomeHero/HomeHero';

import {
  HomeDetailSection,
  Contact,
} from '../../components';
import { HomeContent } from '../../components/HomeContent/HomeContent';
import './Home.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

function Home() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home__container'>
      <SEO
        title='Scarborough Auto Detailing & Window Tinting | Beyond Detail'
        description='Get that new-car feel with Beyond Detail’s auto detailing, tinting & ceramic coating in Scarborough, Toronto.'
        name='Beyond Detail Toronto'
        type='website'
        keywords='car detailing Toronto, auto detailing Scarborough, window tinting Markham, paint correction Pickering, ceramic coating GTA'
      />
      <HomeHero />
      <HomeContent />
      <div id="home-services"></div>
      <HomeDetailSection />
      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>
      <Contact />
    </div>
  );
}

export default React.memo(Home);
