import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { BUSINESS_INFO, LOCATIONS, LOCATIONS_STRING } from '../constants/businessInfo';

export const SEO = ({
  title,
  description,
  name = BUSINESS_INFO.name,
  type = 'website',
  keywords,
  image,
  url,
  serviceType,
  noindex = false,
  faq = []
}) => {
  const location = useLocation();
  const normalizedPath = location.pathname === '/' ? '' : location.pathname;
  const currentUrl = url || `${BUSINESS_INFO.url}${normalizedPath}`;
  const pageTitle = title || `${BUSINESS_INFO.name} - Auto Detailing Services`;

  // Generate location-based keywords
  const locationKeywords = LOCATIONS.map(loc =>
    serviceType
      ? `${serviceType} ${loc}, ${loc} ${serviceType}, ${serviceType} near ${loc}`
      : `car detailing ${loc}, auto detailing ${loc}, vehicle detailing ${loc}`
  ).join(', ');

  // Combine all keywords
  const allKeywords = [
    ...(keywords ? [keywords] : []),
    locationKeywords,
    ...LOCATIONS,
    'car detailing',
    'auto detailing',
    'vehicle detailing',
    'window tinting',
    'paint correction',
    'ceramic coating',
    'car wash',
    'GTA',
    'Greater Toronto Area',
    'professional detailing',
    'window tinting near me',
    'car detailing near me',
    'ceramic coating near me',
    'auto detailing near me',
    'paint correction near me',
    'mobile car detailing scarborough',
    'mobile detailing toronto',
    'mobile auto detailing gta'
  ].filter(Boolean).join(', ');

  // Enhanced description with locations (limit to 155-160 chars for SEO)
  const baseDescription = description || BUSINESS_INFO.description;
  const enhancedDescription = baseDescription.length > 160
    ? baseDescription.substring(0, 157).trim() + '...'
    : baseDescription.replace('68 Five-Star Reviews', `${BUSINESS_INFO.stats.reviewCountText} Five-Star Reviews`);

  // Default OG image
  const ogImage = image || `${BUSINESS_INFO.url}/og-image.webp`;

  // Generate opening hours specification for schema
  const openingHoursSpecification = Object.entries(BUSINESS_INFO.hours)
    .filter(([day, hours]) => hours.open && hours.close)
    .map(([day, hours]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
      opens: hours.open,
      closes: hours.close
    }));

  // Generate JSON-LD structured data for LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': BUSINESS_INFO.url,
    name: BUSINESS_INFO.name,
    image: ogImage,
    description: enhancedDescription,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.8173,
      longitude: -79.2476
    },
    hasMap: 'https://maps.app.goo.gl/XfshhLecn5wS9Xd49',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: `${BUSINESS_INFO.stats.rating}`,
      reviewCount: `${BUSINESS_INFO.stats.reviewCount}`,
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: [
      'https://www.instagram.com/beyonddetail.ca/',
      'https://x.com/BeyondDetailca',
      'https://www.facebook.com/people/Beyond-Detail-Scarborough/100088669617846/'
    ],
    openingHoursSpecification: openingHoursSpecification,
    areaServed: [
      {
        '@type': 'City',
        name: 'Toronto'
      },
      {
        '@type': 'City',
        name: 'Scarborough'
      },
      {
        '@type': 'City',
        name: 'Markham'
      },
      {
        '@type': 'City',
        name: 'Pickering'
      }
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto Detailing Services',
      itemListElement: BUSINESS_INFO.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
          provider: {
            '@id': BUSINESS_INFO.url
          },
          areaServed: LOCATIONS.map(loc => ({
            '@type': 'City',
            name: loc
          }))
        }
      }))
    },
    ...(serviceType && {
      mainEntity: {
        '@type': 'Service',
        name: serviceType,
        provider: {
          '@id': BUSINESS_INFO.url
        },
        areaServed: LOCATIONS.map(loc => ({
          '@type': 'City',
          name: loc
        }))
      }
    })
  };

  // Breadcrumb structured data
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BUSINESS_INFO.url
      },
      ...pathSegments.map((segment, index) => {
        const url = `${BUSINESS_INFO.url}/${pathSegments.slice(0, index + 1).join('/')}`;
        // Format segment name: replace hyphens with spaces and capitalize
        const name = segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase());

        return {
          '@type': 'ListItem',
          position: index + 2,
          name: name,
          item: url
        };
      })
    ]
  };

  // Organization structured data (separate from LocalBusiness)
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS_INFO.url}#organization`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    logo: `${BUSINESS_INFO.url}/logo192.png`,
    image: ogImage,
    description: enhancedDescription,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry
    },
    sameAs: [
      'https://www.instagram.com/beyonddetail.ca/',
      'https://x.com/BeyondDetailca',
      'https://www.facebook.com/people/Beyond-Detail-Scarborough/100088669617846/'
    ]
  };


  // Dedicated Service Structured Data (for rich snippets)
  const serviceSchema = serviceType ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceType,
    provider: {
      '@id': BUSINESS_INFO.url
    },
    areaServed: LOCATIONS.map(loc => ({
      '@type': 'City',
      name: loc
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: serviceType + ' Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${serviceType} - Basic`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${serviceType} - Premium`
          }
        }
      ]
    }
  } : null;



  // FAQ Structure Data
  const faqSchema = faq && faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name='description' content={enhancedDescription} />
      <meta name='keywords' content={allKeywords} />
      <meta name='author' content={BUSINESS_INFO.name} />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' />
      <link rel='canonical' href={currentUrl} />
      <link rel='sitemap' type='application/xml' href={`${BUSINESS_INFO.url}/sitemap.xml`} />

      {/* Robots */}
      <meta name='robots' content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name='googlebot' content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Location Meta Tags */}
      <meta name='geo.region' content='CA-ON' />
      <meta name='geo.placename' content={LOCATIONS_STRING} />
      <meta name='geo.position' content='43.8173;-79.2476' />
      <meta name='ICBM' content='43.8173, -79.2476' />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:url' content={currentUrl} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={enhancedDescription} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:site_name' content={BUSINESS_INFO.name} />
      <meta property='og:locale' content='en_CA' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={`${BUSINESS_INFO.name} - Auto Detailing in Scarborough & Toronto`} />
      <meta property='business:contact_data:street_address' content={BUSINESS_INFO.address.streetAddress} />
      <meta property='business:contact_data:locality' content={BUSINESS_INFO.address.addressLocality} />
      <meta property='business:contact_data:region' content={BUSINESS_INFO.address.addressRegion} />
      <meta property='business:contact_data:postal_code' content={BUSINESS_INFO.address.postalCode} />
      <meta property='business:contact_data:country_name' content={BUSINESS_INFO.address.addressCountry} />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={currentUrl} />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={enhancedDescription} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:image:alt' content={`${BUSINESS_INFO.name} - Auto Detailing in Scarborough & Toronto`} />
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:site' content={name} />

      {/* Additional SEO Tags */}
      <meta name='theme-color' content='#000000' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />

      {/* Structured Data - JSON-LD */}
      <script type='application/ld+json'>
        {JSON.stringify(structuredData)}
      </script>

      {/* Breadcrumb Structured Data */}
      {location.pathname !== '/' && (
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbData)}
        </script>
      )}

      {/* Organization Structured Data */}
      <script type='application/ld+json'>
        {JSON.stringify(organizationData)}
      </script>

      {/* Dedicated Service Schema */}
      {serviceSchema && (
        <script type='application/ld+json'>
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {/* FAQ Schema */}
      {faqSchema && (
        <script type='application/ld+json'>
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* ImageObject Schema for all images on the page */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'ImageObject',
          'contentUrl': ogImage,
          'url': ogImage,
          'license': `${BUSINESS_INFO.url}/copyright`,
          'acquireLicensePage': `${BUSINESS_INFO.url}/copyright`,
          'creditText': BUSINESS_INFO.name,
          'creator': {
            '@type': 'Organization',
            'name': BUSINESS_INFO.name,
            'url': BUSINESS_INFO.url
          },
          'copyrightNotice': `© ${new Date().getFullYear()} ${BUSINESS_INFO.name}. All Rights Reserved.`,
          'copyrightYear': new Date().getFullYear().toString()
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
