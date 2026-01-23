import React, { useEffect, Suspense, lazy } from 'react';
import { SEO } from '../../components';
import { HomeHero } from '../../components/HomeHero/HomeHero';

import './Home.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));
const TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));
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
      <div id="home-services">
        <Suspense fallback={null}>
          <TrustBadges />
        </Suspense>
        <Suspense fallback={null}>
          <SkillShowcase />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default React.memo(Home);
