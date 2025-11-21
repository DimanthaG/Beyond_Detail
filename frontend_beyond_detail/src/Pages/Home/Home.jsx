import React, { useEffect, Suspense, lazy } from 'react';
import { SEO } from '../../components';
import { HomeHero } from '../../components/HomeHero/HomeHero';

import { ShareButtons } from '../../components/ShareButtons/ShareButtons';
import './Home.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const HomeContent = lazy(() => import('../../components/HomeContent/HomeContent'));
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
        title='Beyond Detail | Window Tint | Paint Correction | Ceramic Coatings in Toronto'
        description='Professional car detailing, window tinting, and ceramic coating in Scarborough & Toronto. We restore, protect, and enhance your vehicle with deep interior cleaning, stain and salt removal, paint correction, and UV-blocking ceramic tint.'
        name='Beyond Detail | Window Tint | Paint Correction | Ceramic Coatings in Toronto'
        type='website'
        keywords='car detailing Toronto, auto detailing Scarborough, window tinting Markham, paint correction Pickering, ceramic coating GTA'
      />
      <HomeHero />
      <Suspense fallback={null}>
        <HomeContent />
      </Suspense>
      <div id="home-services"></div>
      <Suspense fallback={null}>
        <HomeDetailSection />
      </Suspense>
      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>
      <div style={{ padding: '40px 20px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <ShareButtons 
          title="Beyond Detail - Professional Auto Detailing in Scarborough & Toronto"
          className="home-share-buttons"
        />
      </div>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default React.memo(Home);
