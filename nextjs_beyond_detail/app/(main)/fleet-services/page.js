import dynamic from 'next/dynamic';
const FleetServicesClient = dynamic(() => import('./FleetServicesClient'), { ssr: false });

export const metadata = {
  title: 'Fleet Detailing Scarborough | Volume Pricing | Beyond Detail',
  description: 'Fleet detailing for businesses in Scarborough & GTA. Volume pricing, scheduled service, all vehicle types. Get a quote — (647) 689-6109.',
  alternates: { canonical: '/fleet-services' },
};

export default function FleetServicesPage() {
  return <FleetServicesClient />;
}
