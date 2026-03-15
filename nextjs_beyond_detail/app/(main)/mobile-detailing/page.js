import dynamic from 'next/dynamic';
const MobileDetailingClient = dynamic(() => import('./MobileDetailingClient'), { ssr: false });

export const metadata = {
  title: 'Mobile Car Detailing Toronto | We Come To You | Beyond Detail',
  description: 'Premium mobile car detailing in Toronto, Scarborough & GTA. We come to your home or office. Interior deep cleaning, exterior wash & wax. 68+ 5-Star Reviews. Call (647) 689-6109',
  alternates: { canonical: '/mobile-detailing' },
};

export default function MobileDetailingPage() {
  return <MobileDetailingClient />;
}
