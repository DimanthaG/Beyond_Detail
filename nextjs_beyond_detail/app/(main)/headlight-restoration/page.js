import dynamic from 'next/dynamic';
const HeadlightRestorationClient = dynamic(() => import('./HeadlightRestorationClient'), { ssr: false });

export const metadata = {
  title: 'Headlight Restoration Scarborough | From $89 | Beyond Detail',
  description: 'Foggy headlights restored to crystal clear. Professional headlight restoration in Scarborough from $89. Same-day service. Call (647) 689-6109.',
  alternates: { canonical: '/headlight-restoration' },
};

export default function HeadlightRestorationPage() {
  return <HeadlightRestorationClient />;
}
