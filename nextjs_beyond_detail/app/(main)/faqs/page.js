import FAQsClient from './FAQsClient';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'FAQs - Car Detailing Questions Answered | Toronto, Scarborough, Markham | Beyond Detail',
  description: 'Get expert answers to your auto detailing questions. Learn about ceramic coating, paint correction, window tinting, interior detailing, pricing, and booking. Serving Toronto, Scarborough, Markham, Ajax, Pickering, Whitby, Oshawa & GTA. 70+ 5-star reviews.',
  keywords: 'car detailing FAQs Toronto, auto detailing questions Scarborough, ceramic coating FAQ Markham, paint correction questions, window tinting FAQ, detailing prices Toronto, how much does detailing cost, best car detailing near me, mobile detailing FAQ, luxury car detailing questions, fleet detailing FAQ GTA',
  alternates: { canonical: '/faqs' },
};

export default function FAQsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema('/faqs');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQsClient />
    </>
  );
}
