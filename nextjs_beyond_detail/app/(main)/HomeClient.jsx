'use client';

import React, { Suspense, lazy } from 'react';
import HomeHero from '@/components/HomeHero/HomeHero';
import './Home.scss';

const GoogleReviewsCarousel = lazy(() => import('@/components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const BeforeAfterSection = lazy(() => import('@/components/BeforeAfterSection/BeforeAfterSection'));
const SkillShowcase = lazy(() => import('@/components/SkillShowcase/SkillShowcase'));
const TrustBadges = lazy(() => import('@/components/TrustBadges/TrustBadges'));
// TODO: Migrate Contact component to a shared component
// const Contact = lazy(() => import('@/components/Contact/Contact'));

export default function HomeClient() {
  return (
    <div className='home__container'>
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
      {/* TODO: Add Contact component once migrated to shared */}
    </div>
  );
}
