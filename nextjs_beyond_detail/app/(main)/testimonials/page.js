import TestimonialsClient from './TestimonialsClient';

export const metadata = {
  title: 'Customer Testimonials - Auto Detailing Toronto & Scarborough | Beyond Detail',
  description: "Read customer reviews and testimonials for Beyond Detail's professional auto detailing, window tinting, and ceramic coating services in Toronto, Scarborough, Markham, and Pickering. 70+ Five-Star Reviews | Lifetime Warranty",
  keywords: 'car detailing reviews, auto detailing testimonials, window tinting reviews, ceramic coating reviews, Toronto car detailing, Scarborough auto detailing',
  alternates: { canonical: '/testimonials' },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
