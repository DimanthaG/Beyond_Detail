import dynamic from 'next/dynamic';
const LeatherCleaningClient = dynamic(() => import('./LeatherCleaningClient'), { ssr: false });

export const metadata = {
  title: 'Leather Cleaning Scarborough | Conditioning & Repair | Beyond Detail',
  description: 'Leather seat cleaning & conditioning in Scarborough. Stain removal, UV protection, crack prevention. Book today — (647) 689-6109.',
  alternates: { canonical: '/leather-cleaning' },
};

export default function LeatherCleaningPage() {
  return <LeatherCleaningClient />;
}
