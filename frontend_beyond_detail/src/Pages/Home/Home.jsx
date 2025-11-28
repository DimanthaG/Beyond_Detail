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
        title='Car Detailing Scarborough | Window Tinting & Ceramic Coating Toronto | Beyond Detail'
        description='#1 Car Detailing in Scarborough | Professional auto detailing, window tinting & ceramic coating. Serving Toronto, Markham & Pickering. ⭐ Lifetime Warranty | Call (647) 689-6109'
        name='Beyond Detail | Car Detailing Scarborough | Window Tinting & Ceramic Coating'
        type='website'
        keywords='car detailing Scarborough, auto detailing Toronto, window tinting Scarborough, ceramic coating Toronto, paint correction Markham, car detailing near me, ceramic coating near me'
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
