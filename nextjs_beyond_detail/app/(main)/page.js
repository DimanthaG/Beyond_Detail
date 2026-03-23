import { generateLocalBusinessSchema, generateWebsiteSchema, generateOrganizationSchema } from '@/lib/structured-data';
import dynamic from 'next/dynamic';
const HomeClient = dynamic(() => import('./HomeClient'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }} aria-hidden="true" />,
});

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const websiteSchema = generateWebsiteSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeClient />
    </>
  );
}
