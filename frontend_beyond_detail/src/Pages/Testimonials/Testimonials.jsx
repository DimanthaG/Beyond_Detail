import React, { Suspense, lazy } from 'react';
import { Contact } from '../../components';
import './Testimonials.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

function Testimonials() {
  return (
    <div className="testimonials-page">
      <div className="testimonials-header">
        <h1>Customer Testimonials - Auto Detailing Toronto & Scarborough</h1>
        <p className="testimonials-subtitle">See what our customers say about our professional auto detailing services</p>
      </div>
      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>
      <Contact />
    </div>
  );
}

export default Testimonials;
