import PricingClient from './PricingClient';

export const metadata = {
  title: 'Car Detailing Prices Scarborough | Interior $149+ Auto $199+ | Beyond Detail',
  description: 'Transparent pricing for car detailing in Scarborough. Interior detailing from $149, auto detailing from $199, ceramic coating & window tint. No hidden fees.',
  keywords: 'car detailing pricing, window tinting prices scarborough, ceramic coating cost, auto detailing quote',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return <PricingClient />;
}
