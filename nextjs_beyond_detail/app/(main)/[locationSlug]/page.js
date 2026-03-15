import { notFound } from 'next/navigation';
import { NEIGHBORHOODS, getNeighborhoodBySlug, getAllNeighborhoodSlugs } from '@/data/neighborhoods';

export function generateStaticParams() {
  return getAllNeighborhoodSlugs().map((slug) => ({ locationSlug: slug }));
}

export function generateMetadata({ params }) {
  const data = getNeighborhoodBySlug(params.locationSlug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `/${data.slug}` },
  };
}

export default function NeighborhoodPage({ params }) {
  const data = getNeighborhoodBySlug(params.locationSlug);
  if (!data) notFound();

  return (
    <div style={{ background: '#050505', color: '#fff', minHeight: '50vh', padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ color: '#f07900', fontSize: '2rem', marginBottom: '1rem' }}>
        {data.heroLine1} {data.location}
      </h1>
      <p style={{ color: '#818181' }}>
        {data.description}
      </p>
      <p style={{ color: '#454545', marginTop: '2rem' }}>
        Full page content migration in progress...
      </p>
    </div>
  );
}
