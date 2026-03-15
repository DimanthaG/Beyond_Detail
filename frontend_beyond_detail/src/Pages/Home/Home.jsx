import React, { useEffect, Suspense, lazy } from 'react';
import { SEO } from '../../components';
import { HomeHero } from '../../components/HomeHero/HomeHero';

import './Home.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const BeforeAfterSection = lazy(() => import('../../components/BeforeAfterSection/BeforeAfterSection'));
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
        title='Car Detailing Scarborough | Same-Day Service | Beyond Detail'
        description='Professional car detailing in Scarborough. Ceramic coating, window tinting & paint correction. IGL certified. Same-day appointments. Call (647) 689-6109.'
        name='Beyond Detail | Car Detailing Scarborough'
        type='website'
        keywords='Car Detailing Scarborough, Mobile Car Detailing Scarborough, Auto Detailing Packages, Ceramic Coating Scarborough, Paint Correction Scarborough, Interior Detailing Toronto'
      />
      <HomeHero />
      <Suspense fallback={<div style={{ minHeight: '400px' }} aria-hidden="true" />}>
        <GoogleReviewsCarousel />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '300px' }} aria-hidden="true" />}>
        <BeforeAfterSection />
      </Suspense>
      <div id="home-services">
        <Suspense fallback={<div style={{ minHeight: '200px' }} aria-hidden="true" />}>
          <TrustBadges />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '500px' }} aria-hidden="true" />}>
          <SkillShowcase />
        </Suspense>
      </div>
      <Suspense fallback={<div style={{ minHeight: '400px' }} aria-hidden="true" />}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default React.memo(Home);
