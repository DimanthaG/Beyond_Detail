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
        title='Car Detailing Scarborough (Mobile & In-Shop) | Interior, Exterior, Ceramic Coating'
        description='Professional car detailing in Scarborough starting at $100. Express Detail, Interior Deep Clean, Paint Correction & Ceramic Coating packages. Mobile or in-shop service. Lifetime warranty. Book today!'
        name='Beyond Detail | Car Detailing Scarborough'
        type='website'
        keywords='Car Detailing Scarborough, Mobile Car Detailing Scarborough, Auto Detailing Packages, Ceramic Coating Scarborough, Paint Correction Scarborough, Interior Detailing Toronto'
      />
      <HomeHero />
      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>
      <div className="services-section-header">
        <h2 className="services-section-title">Car Detailing Scarborough: Choose Mobile Service or Visit Our Shop</h2>
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
