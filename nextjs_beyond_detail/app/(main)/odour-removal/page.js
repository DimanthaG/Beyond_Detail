import dynamic from 'next/dynamic';
const OdourRemovalClient = dynamic(() => import('./OdourRemovalClient'), { ssr: false });

export const metadata = {
  title: 'Car Odour Removal Scarborough | Smoke & Pet | Beyond Detail',
  description: 'Professional car odour removal in Scarborough. Ozone treatment for smoke, pet, food smells. Results guaranteed. Book today — (647) 689-6109.',
  alternates: { canonical: '/odour-removal' },
};

export default function OdourRemovalPage() {
  return <OdourRemovalClient />;
}
