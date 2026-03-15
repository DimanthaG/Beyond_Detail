import dynamic from 'next/dynamic';
const InteriorDetailingClient = dynamic(() => import('./InteriorDetailingClient'), { ssr: false });

export const metadata = {
  title: 'Interior Detailing Scarborough | Deep Clean | Beyond Detail',
  description: 'Professional interior car detailing in Scarborough. Steam cleaning, leather care, stain removal from $149. Same-day available. Call (647) 689-6109.',
  alternates: { canonical: '/interior-detailing' },
};

export default function InteriorDetailingPage() {
  return <InteriorDetailingClient />;
}
