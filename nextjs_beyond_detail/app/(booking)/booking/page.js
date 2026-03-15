import BookingClient from './BookingClient';

export const metadata = {
  title: 'Book Car Detailing Scarborough | Get 10% Off | Beyond Detail',
  description: 'Book your auto detailing appointment online. Select your services and preferred time.',
  robots: { index: false, follow: false },
};

export default function BookingPage() {
  return <BookingClient />;
}
