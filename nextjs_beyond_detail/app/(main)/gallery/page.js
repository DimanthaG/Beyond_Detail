import GalleryClient from './GalleryClient';

export const metadata = {
  title: "Before & After Gallery | Car Detailing & Ceramic Coating Work",
  description: "View Beyond Detail's before & after gallery. Real results from ceramic coating, paint correction & detailing in Scarborough & Toronto.",
  keywords: 'auto detailing gallery Toronto, car detailing photos Scarborough, vehicle detailing portfolio Markham, detailing before after Pickering, GTA car detailing gallery',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
