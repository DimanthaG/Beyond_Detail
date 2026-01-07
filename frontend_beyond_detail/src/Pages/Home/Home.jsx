import React, { useEffect, Suspense, lazy } from 'react';
import { SEO } from '../../components';
import { HomeHero } from '../../components/HomeHero/HomeHero';

import './Home.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const HomeDetailSection = lazy(() => import('../../components/HomeDetailSection/HomeDetailSection'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function Home() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home__container'>
      <SEO
        title='Car Detailing Scarborough | Auto Detailing & Tinting | Beyond Detail'
        description='Best Car Detailing in Scarborough & Toronto. Professional mobile auto detailing, ceramic coating, paint correction & window tinting. ⭐ Lifetime Warranty. Call (647) 689-6109'
        name='Beyond Detail | Car Detailing Scarborough'
        type='website'
        keywords='car detailing scarborough, auto detailing scarborough, ceramic coating scarborough, window tinting scarborough, car detailing toronto'
      />
      <HomeHero />
      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>
      <div className="services-section-header">
        <h2 className="services-section-title">Discover our Professional Services:</h2>
      </div>
      <div id="home-services"></div>
      <Suspense fallback={null}>
        <HomeDetailSection />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default React.memo(Home);
