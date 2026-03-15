import dynamic from 'next/dynamic';
const TintClient = dynamic(() => import('./TintClient'), { ssr: false });

export const metadata = {
  title: 'Window Tinting Scarborough | Llumar & Huper Optik | Beyond Detail',
  description: 'Legal window tinting in Scarborough. Llumar & Huper Optik films. Heat rejection, UV protection. From $199. Call Beyond Detail — (647) 689-6109.',
  alternates: { canonical: '/tint' },
};

export default function TintPage() {
  return <TintClient />;
}
