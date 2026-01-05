import React, { Suspense, lazy } from 'react';
import { Contact, SEO } from '../../components';
import './Testimonials.scss';

const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

function Testimonials() {
  return (
    <div className="testimonials-page">
      <SEO
        title="Customer Testimonials - Auto Detailing Toronto & Scarborough | Beyond Detail"
        description="Read customer reviews and testimonials for Beyond Detail's professional auto detailing, window tinting, and ceramic coating services in Toronto, Scarborough, Markham, and Pickering. ⭐ 70+ Five-Star Reviews | Lifetime Warranty"
        keywords="car detailing reviews, auto detailing testimonials, window tinting reviews, ceramic coating reviews, Toronto car detailing, Scarborough auto detailing"
      />
      <div className="testimonials-header">
        <h1>Customer Testimonials - Auto Detailing Scarborough</h1>
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
