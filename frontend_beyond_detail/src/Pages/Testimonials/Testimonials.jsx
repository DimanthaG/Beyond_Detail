import React, { Suspense, lazy } from 'react';
import { Contact } from '../../components';
import './Testimonials.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

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
