import AreasWeServeClient from './AreasWeServeClient';

export const metadata = {
  title: 'Areas We Serve | Car Detailing Scarborough & GTA | Beyond Detail',
  description: 'Beyond Detail provides mobile and shop-based car detailing across Scarborough, Markham, Pickering, and North York. Find your neighborhood.',
  alternates: { canonical: '/areas-we-serve' },
};

export default function AreasWeServePage() {
  return <AreasWeServeClient />;
}
