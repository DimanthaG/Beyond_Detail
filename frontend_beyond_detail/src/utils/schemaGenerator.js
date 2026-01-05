/**
 * SEO Schema Generator Utilities
 * 
 * This file contains helper functions to generate various types of
 * structured data (Schema.org) for better SEO and rich snippets.
 */

import { BUSINESS_INFO } from '../constants/businessInfo';

/**
 * Generate Review Schema
 * Use this to add individual customer reviews to service pages
 */
export const generateReviewSchema = (reviews) => {
    if (!reviews || reviews.length === 0) return null;

    return reviews.map(review => ({
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
            '@type': 'LocalBusiness',
            name: BUSINESS_INFO.name,
            address: {
                '@type': 'PostalAddress',
                streetAddress: BUSINESS_INFO.address.streetAddress,
                addressLocality: BUSINESS_INFO.address.addressLocality,
                addressRegion: BUSINESS_INFO.address.addressRegion,
                postalCode: BUSINESS_INFO.address.postalCode,
                addressCountry: BUSINESS_INFO.address.addressCountry
            }
        },
        reviewRating: {
            '@type': 'Rating',
            ratingValue: review.rating || '5',
            bestRating: '5',
            worstRating: '1'
        },
        author: {
            '@type': 'Person',
            name: review.author || 'Verified Customer'
        },
        reviewBody: review.text,
        datePublished: review.date || new Date().toISOString().split('T')[0]
    }));
};

/**
 * Generate Article Schema for Blog Posts
 * Helps blog posts appear in Google News and rich snippets
 */
export const generateArticleSchema = (article) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt || article.seoDescription,
        image: article.mainImage?.asset?.url || `${BUSINESS_INFO.url}/og-image.webp`,
        datePublished: article.publishedAt,
        dateModified: article._updatedAt || article.publishedAt,
        author: {
            '@type': 'Person',
            name: article.author?.name || BUSINESS_INFO.name,
            url: BUSINESS_INFO.url
        },
        publisher: {
            '@type': 'Organization',
            name: BUSINESS_INFO.name,
            logo: {
                '@type': 'ImageObject',
                url: `${BUSINESS_INFO.url}/logo512.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${BUSINESS_INFO.url}/blog/${article.slug?.current || article.slug}`
        },
        keywords: article.keywords?.join(', ') || '',
        articleSection: article.category || 'Auto Detailing'
    };
};

/**
 * Generate Product Schema for Service Packages
 * Shows pricing and package details in search results
 */
export const generateProductSchema = (packageData) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: packageData.name,
        description: packageData.description,
        image: packageData.image || `${BUSINESS_INFO.url}/og-image.webp`,
        brand: {
            '@type': 'Brand',
            name: BUSINESS_INFO.name
        },
        offers: {
            '@type': 'Offer',
            price: packageData.priceRange?.start || packageData.price,
            priceCurrency: 'CAD',
            availability: 'https://schema.org/InStock',
            url: `${BUSINESS_INFO.url}${packageData.url || '/services'}`,
            priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            seller: {
                '@type': 'Organization',
                name: BUSINESS_INFO.name
            }
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: BUSINESS_INFO.stats.rating,
            reviewCount: BUSINESS_INFO.stats.reviewCount
        }
    };
};

/**
 * Generate HowTo Schema for Step-by-Step Guides
 * Creates rich snippets with step-by-step instructions
 */
export const generateHowToSchema = (guide) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: guide.title,
        description: guide.description,
        image: guide.image || `${BUSINESS_INFO.url}/og-image.webp`,
        totalTime: guide.duration || 'PT30M', // ISO 8601 duration format
        estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'CAD',
            value: guide.cost || '0'
        },
        tool: guide.tools?.map(tool => ({
            '@type': 'HowToTool',
            name: tool
        })) || [],
        supply: guide.supplies?.map(supply => ({
            '@type': 'HowToSupply',
            name: supply
        })) || [],
        step: guide.steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.title,
            text: step.description,
            image: step.image || undefined,
            url: step.url || undefined
        }))
    };
};

/**
 * Generate Video Schema
 * Helps videos appear in video search results
 */
export const generateVideoSchema = (video) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: video.title,
        description: video.description,
        thumbnailUrl: video.thumbnail,
        uploadDate: video.uploadDate || new Date().toISOString(),
        duration: video.duration, // ISO 8601 format: PT1M30S
        contentUrl: video.url,
        embedUrl: video.embedUrl || video.url,
        publisher: {
            '@type': 'Organization',
            name: BUSINESS_INFO.name,
            logo: {
                '@type': 'ImageObject',
                url: `${BUSINESS_INFO.url}/logo512.png`
            }
        }
    };
};

/**
 * Generate Event Schema for Promotions/Special Events
 * Shows events in Google's event search
 */
export const generateEventSchema = (event) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.name,
        description: event.description,
        image: event.image || `${BUSINESS_INFO.url}/og-image.webp`,
        startDate: event.startDate,
        endDate: event.endDate,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
            '@type': 'Place',
            name: BUSINESS_INFO.name,
            address: {
                '@type': 'PostalAddress',
                streetAddress: BUSINESS_INFO.address.streetAddress,
                addressLocality: BUSINESS_INFO.address.addressLocality,
                addressRegion: BUSINESS_INFO.address.addressRegion,
                postalCode: BUSINESS_INFO.address.postalCode,
                addressCountry: BUSINESS_INFO.address.addressCountry
            }
        },
        organizer: {
            '@type': 'Organization',
            name: BUSINESS_INFO.name,
            url: BUSINESS_INFO.url
        },
        offers: event.offers ? {
            '@type': 'Offer',
            price: event.offers.price || '0',
            priceCurrency: 'CAD',
            availability: 'https://schema.org/InStock',
            url: event.offers.url || BUSINESS_INFO.url
        } : undefined
    };
};

/**
 * Generate Breadcrumb Schema
 * Shows breadcrumb navigation in search results
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url
        }))
    };
};

/**
 * Generate Service Schema with Pricing
 * Detailed service information for better local SEO
 */
export const generateServiceSchema = (service) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.type,
        name: service.name,
        description: service.description,
        provider: {
            '@type': 'LocalBusiness',
            name: BUSINESS_INFO.name,
            address: {
                '@type': 'PostalAddress',
                streetAddress: BUSINESS_INFO.address.streetAddress,
                addressLocality: BUSINESS_INFO.address.addressLocality,
                addressRegion: BUSINESS_INFO.address.addressRegion,
                postalCode: BUSINESS_INFO.address.postalCode,
                addressCountry: BUSINESS_INFO.address.addressCountry
            },
            telephone: BUSINESS_INFO.phone,
            priceRange: service.priceRange || '$$'
        },
        areaServed: service.locations?.map(loc => ({
            '@type': 'City',
            name: loc
        })) || [],
        offers: service.packages?.map(pkg => ({
            '@type': 'Offer',
            name: pkg.name,
            price: pkg.price,
            priceCurrency: 'CAD'
        })) || [],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: BUSINESS_INFO.stats.rating,
            reviewCount: BUSINESS_INFO.stats.reviewCount
        }
    };
};

/**
 * Validate Schema
 * Basic validation to ensure schema is properly formatted
 */
export const validateSchema = (schema) => {
    try {
        // Check if it's valid JSON
        JSON.stringify(schema);

        // Check required fields
        if (!schema['@context'] || !schema['@type']) {
            console.warn('Schema missing @context or @type');
            return false;
        }

        return true;
    } catch (error) {
        console.error('Invalid schema:', error);
        return false;
    }
};

/**
 * Combine Multiple Schemas
 * Merge multiple schema objects into a single graph
 */
export const combineSchemas = (...schemas) => {
    const validSchemas = schemas.filter(schema => schema && validateSchema(schema));

    if (validSchemas.length === 0) return null;
    if (validSchemas.length === 1) return validSchemas[0];

    return {
        '@context': 'https://schema.org',
        '@graph': validSchemas
    };
};

export default {
    generateReviewSchema,
    generateArticleSchema,
    generateProductSchema,
    generateHowToSchema,
    generateVideoSchema,
    generateEventSchema,
    generateBreadcrumbSchema,
    generateServiceSchema,
    validateSchema,
    combineSchemas
};
