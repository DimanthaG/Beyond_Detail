import React, { Suspense, lazy } from 'react';
import { Contact } from '../../components';
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
import './Testimonials.scss';

function Testimonials() {
  return (
    <div className="testimonials-page">
      <div>Testimonials</div>
      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>
      <Contact />
    </div>
  );
}

export default Testimonials;
