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
        title='Auto Detailing Scarborough | Window Tinting Toronto | Beyond Detail'
        description='Professional auto detailing, window tinting & ceramic coating in Scarborough, Toronto. Expert paint correction, interior/exterior detailing.'
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
