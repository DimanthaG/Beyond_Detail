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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Beyond Detail",
    "description": "Premium car detailing, ceramic coating, and window tinting in Scarborough",
    "telephone": "+1-647-689-6109",
    "priceRange": "$$",
    "address": {
      "@streetAddress": "170 Finchdene Square Unit 11",
      "@addressLocality": "Scarborough",
      "@addressRegion": "ON",
      "@postalCode": "M1X 1B3",
      "@addressCountry": "CA"
    },
    "areaServed": ["Scarborough", "Markham", "North York", "Pickering"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "187"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Frank B." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Best detailing in Scarborough"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah M." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Ceramic coating still perfect after 2 years"
      }
    ]
  };

  return (
    <div className='home__container'>
      <SEO
        title='Car Detailing Scarborough | #1 Auto Detailing Near Me'
        description='Best car detailing in Scarborough. Ceramic coating, paint correction, window tinting. 5+ Year Protection, free consultation. Book online today!'
        name='Beyond Detail | Car Detailing Scarborough'
        type='website'
        keywords='Car Detailing Scarborough, Mobile Car Detailing Scarborough, Auto Detailing Packages, Ceramic Coating Scarborough, Paint Correction Scarborough, Interior Detailing Toronto'
        schema={localBusinessSchema}
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
