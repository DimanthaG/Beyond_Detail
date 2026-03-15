'use client';

import React, { Suspense, lazy } from 'react';
import './Testimonials.scss';

// TODO: Migrate these shared components
// import { Contact } from '@/components';
// const GoogleReviewsCarousel = lazy(() => import('@/components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

function Testimonials() {
  return (
    <div className="testimonials-page">
      <div className="testimonials-header">
        <h1>Customer Testimonials - Auto Detailing Scarborough</h1>
        <p className="testimonials-subtitle">See what our customers say about our professional auto detailing services</p>
      </div>
      {/* TODO: Migrate GoogleReviewsCarousel */}
      {/* <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense> */}
      {/* TODO: Migrate Contact */}
      {/* <Contact /> */}
    </div>
  );
}

export default Testimonials;
