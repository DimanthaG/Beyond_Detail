import React, { useEffect, Suspense, lazy } from 'react';
import { SEO } from '../../components';
import { HomeHero } from '../../components/HomeHero/HomeHero';

import { ShareButtons } from '../../components/ShareButtons/ShareButtons';
import './Home.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const HomeContent = lazy(() => import('../../components/HomeContent/HomeContent'));
const HomeDetailSection = lazy(() => import('../../components/HomeDetailSection/HomeDetailSection'));
const AreasServed = lazy(() => import('../../components/AreasServed/AreasServed'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function Home() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home__container'>
      <SEO
        title='Car Detailing Toronto & Scarborough | Window Tinting & Ceramic Coating | Beyond Detail'
        description='Best Car Detailing in Toronto & Scarborough. Professional mobile auto detailing, ceramic coating, paint correction & window tinting. ⭐ Lifetime Warranty. Serving the entire GTA. Call (647) 689-6109'
        name='Beyond Detail | Car Detailing Toronto & Scarborough'
        type='website'
        keywords='car detailing toronto, car detailing scarborough, mobile car detailing toronto, ceramic coating toronto, window tinting toronto, paint correction toronto, auto detailing near me'
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
        <AreasServed />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default React.memo(Home);
