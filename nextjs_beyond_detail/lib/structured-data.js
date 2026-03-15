import { BUSINESS_INFO } from '@/constants/businessInfo';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': `${BUSINESS_INFO.url}/#business`,
    name: BUSINESS_INFO.name,
    image: `${BUSINESS_INFO.url}/og-image.webp`,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.province,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.7764,
      longitude: -79.2318,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Toronto' },
      { '@type': 'City', name: 'Scarborough' },
      { '@type': 'City', name: 'Markham' },
      { '@type': 'City', name: 'Pickering' },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.stats.rating,
      reviewCount: BUSINESS_INFO.stats.reviewCount,
      bestRating: '5',
    },
    sameAs: [
      'https://www.instagram.com/beyonddetail.ca/',
      'https://x.com/BeyondDetailca',
      'https://www.facebook.com/people/Beyond-Detail-Scarborough/100088669617846/',
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS_INFO.url}/#organization`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    logo: {
      '@type': 'ImageObject',
      url: `${BUSINESS_INFO.url}/logo192.png`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_INFO.phone,
      contactType: 'customer service',
      areaServed: 'CA',
      availableLanguage: 'English',
    },
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS_INFO.url}/#website`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    description: BUSINESS_INFO.description,
    publisher: { '@id': `${BUSINESS_INFO.url}/#organization` },
    inLanguage: 'en-CA',
  };
}

export function generateBreadcrumbSchema(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
  ];

  parts.forEach((part, i) => {
    const name = part
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name,
      item: `${BUSINESS_INFO.url}/${parts.slice(0, i + 1).join('/')}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}
