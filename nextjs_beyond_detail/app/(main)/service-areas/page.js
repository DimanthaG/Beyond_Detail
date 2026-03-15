import ServiceAreasClient from './ServiceAreasClient';

export const metadata = {
  title: 'Service Areas | Car Detailing & Window Tinting GTA | Beyond Detail',
  description: 'Premium car detailing, ceramic coating and window tinting services across the GTA. Serving Toronto, Scarborough, Markham, Pickering, North York and Durham Region.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return <ServiceAreasClient />;
}
