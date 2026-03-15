import dynamic from 'next/dynamic';
const LuxuryDetailingClient = dynamic(() => import('./LuxuryDetailingClient'), { ssr: false });

export const metadata = {
  title: 'Luxury Car Detailing Toronto | Exotics & Supercars | Beyond Detail',
  description: 'Premier luxury car detailing in Toronto. Specialized care for exotics, supercars, and classic vehicles. Paint correction, ceramic coating, and bespoke detailing services. Call (647) 689-6109',
  alternates: { canonical: '/luxury-car-detailing-toronto' },
};

export default function LuxuryDetailingPage() {
  return <LuxuryDetailingClient />;
}
