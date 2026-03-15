import dynamic from 'next/dynamic';
const AutoDetailClient = dynamic(() => import('./AutoDetailClient'), { ssr: false });

export const metadata = {
  title: 'Auto Detailing Scarborough | From $149 | Beyond Detail',
  description: 'Full auto detailing in Scarborough from $149. Interior & exterior packages. Same-day service available. 5-star rated. Book today — (647) 689-6109.',
  alternates: { canonical: '/auto-detail' },
};

export default function AutoDetailPage() {
  return <AutoDetailClient />;
}
