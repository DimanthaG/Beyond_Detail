import BlogListClient from './BlogListClient';

export const metadata = {
  title: 'Blog | Beyond Detail Toronto - Expert Auto Detailing Tips & Guides',
  description: 'Read expert guides and tips on car detailing, paint protection, ceramic coating, and vehicle maintenance from Beyond Detail Toronto. Serving Toronto, Scarborough, Markham, and Pickering.',
  keywords: 'car detailing blog, auto detailing tips, paint protection guide, ceramic coating information, Toronto car care',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return <BlogListClient />;
}
