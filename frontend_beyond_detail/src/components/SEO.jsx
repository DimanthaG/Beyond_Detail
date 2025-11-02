import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

// Location keywords for GTA area
const LOCATIONS = ['Toronto', 'Scarborough', 'Markham', 'Pickering'];
const LOCATIONS_STRING = LOCATIONS.join(', ');

// Default business information
const BUSINESS_INFO = {
  name: 'Beyond Detail Toronto',
  address: {
    streetAddress: 'Toronto, ON',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    postalCode: '',
    addressCountry: 'CA'
  },
  phone: '+1 (647) 689-6109',
  email: 'info@beyonddetail.ca',
  url: 'https://beyonddetail.ca',
  description: 'Premium car detailing services in Toronto, Scarborough, Markham, and Pickering. Professional window tinting, paint correction, ceramic coating, and auto detailing.',
  services: [
    'Window Tinting',
    'Paint Correction',
    'Ceramic Coating',
    'Auto Detailing',
    'Interior Detailing',
    'Exterior Detailing',
    'Headlight Restoration',
    'Odour Removal',
    'Leather Cleaning',
    'Fleet Services'
  ]
};

export const SEO = ({ 
  title, 
  description, 
  name = BUSINESS_INFO.name, 
  type = 'website',
  keywords,
  image,
  url,
  serviceType,
  noindex = false
}) => {
  const location = useLocation();
  const currentUrl = url || `${BUSINESS_INFO.url}${location.pathname}`;
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
    'mobile detailing'
  ].filter(Boolean).join(', ');

  // Enhanced description with locations
  const enhancedDescription = description 
    ? `${description} Serving ${LOCATIONS_STRING} and surrounding GTA areas.`
    : `${BUSINESS_INFO.description} Expert service in ${LOCATIONS_STRING}.`;

  // Default OG image
  const ogImage = image || `${BUSINESS_INFO.url}/og-image.jpg`;

  // Generate JSON-LD structured data for LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': currentUrl,
    name: BUSINESS_INFO.name,
    image: ogImage,
    description: enhancedDescription,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      addressCountry: BUSINESS_INFO.address.addressCountry
    },
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
      },
      {
        '@type': 'City',
        name: 'Greater Toronto Area'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.6532,
        longitude: -79.3832
      },
      radius: {
        '@type': 'Distance',
        value: 50,
        unitCode: 'KM'
      }
    },
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto Detailing Services',
      itemListElement: BUSINESS_INFO.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
          provider: {
            '@type': 'LocalBusiness',
            name: BUSINESS_INFO.name
          },
          areaServed: {
            '@type': 'City',
            name: LOCATIONS
          }
        },
        position: index + 1
      }))
    },
    ...(serviceType && {
      mainEntity: {
        '@type': 'Service',
        name: serviceType,
        provider: {
          '@type': 'LocalBusiness',
          name: BUSINESS_INFO.name
        },
        areaServed: LOCATIONS.map(loc => ({
          '@type': 'City',
          name: loc
        }))
      }
    })
  };

  // Breadcrumb structured data
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
      ...(location.pathname !== '/' ? [{
        '@type': 'ListItem',
        position: 2,
        name: pageTitle,
        item: currentUrl
      }] : [])
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name='description' content={enhancedDescription} />
      <meta name='keywords' content={allKeywords} />
      <meta name='author' content={BUSINESS_INFO.name} />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' />
      <link rel='canonical' href={currentUrl} />
      
      {/* Robots */}
      <meta name='robots' content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name='googlebot' content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Location Meta Tags */}
      <meta name='geo.region' content='CA-ON' />
      <meta name='geo.placename' content={LOCATIONS_STRING} />
      <meta name='geo.position' content='43.6532;-79.3832' />
      <meta name='ICBM' content='43.6532, -79.3832' />
      
      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:url' content={currentUrl} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={enhancedDescription} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:site_name' content={BUSINESS_INFO.name} />
      <meta property='og:locale' content='en_CA' />
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
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:site' content={name} />
      
      {/* Additional SEO Tags */}
      <meta name='theme-color' content='#000000' />
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
    </Helmet>
  );
};

export default SEO;
