import { generateLocalBusinessSchema, generateWebsiteSchema, generateOrganizationSchema } from '@/lib/structured-data';

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
      <div style={{ background: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <h1 style={{ fontSize: '2rem' }}>
          Beyond Detail — Next.js Migration In Progress
        </h1>
        <p style={{ color: '#818181' }}>Phase 1 scaffolding complete. Component migration next.</p>
      </div>
    </>
  );
}
