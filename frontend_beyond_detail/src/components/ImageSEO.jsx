import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../constants/businessInfo';

/**
 * Component to add ImageObject structured data for SEO
 * Fixes Google Search Console "Missing field 'acquireLicensePage'" warning
 * 
 * @param {string} imageUrl - Full URL of the image
 * @param {string} alt - Alt text for the image
 * @param {string} creditText - Optional credit text (defaults to business name)
 * @param {string} creator - Optional creator name (defaults to business name)
 */
export const ImageSEO = ({
    imageUrl,
    alt = '',
    creditText = BUSINESS_INFO.name,
    creator = BUSINESS_INFO.name
}) => {
    // Ensure we have a full URL
    const fullImageUrl = imageUrl?.startsWith('http')
        ? imageUrl
        : `${BUSINESS_INFO.url}${imageUrl}`;

    const imageSchema = {
        '@context': 'https://schema.org/',
        '@type': 'ImageObject',
        'contentUrl': fullImageUrl,
        'license': `${BUSINESS_INFO.url}/copyright`,
        'acquireLicensePage': `${BUSINESS_INFO.url}/copyright`,
        'creditText': creditText,
        'creator': {
            '@type': 'Organization',
            'name': creator
        },
        'copyrightNotice': `© ${new Date().getFullYear()} ${BUSINESS_INFO.name}. All Rights Reserved.`
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(imageSchema)}
            </script>
        </Helmet>
    );
};

export default ImageSEO;
