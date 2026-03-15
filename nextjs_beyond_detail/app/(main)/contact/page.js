import ContactClient from './ContactClient';

export const metadata = {
  title: 'Book Car Detailing Scarborough | Contact Beyond Detail',
  description: 'Book your car detailing, ceramic coating or window tinting appointment at Beyond Detail. Located at 170 Finchdene Square, Scarborough. (647) 689-6109',
  keywords: 'contact Beyond Detail Toronto, book appointment Scarborough, auto detailing contact Markham, car detailing phone Pickering, GTA detailing service',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactClient />;
}
