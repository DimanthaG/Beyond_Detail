import dynamic from 'next/dynamic';
const ExteriorDetailingClient = dynamic(() => import('./ExteriorDetailingClient'), { ssr: false });

export const metadata = {
  title: 'Exterior Car Detailing Scarborough | Paint Decontamination',
  description: 'Expert exterior car detailing in Scarborough. Paint decontamination, clay bar, wax & sealant protection. Beyond Detail. (647) 689-6109',
  alternates: { canonical: '/exterior-detailing' },
};

export default function ExteriorDetailingPage() {
  return <ExteriorDetailingClient />;
}
