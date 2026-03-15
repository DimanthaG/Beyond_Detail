import React from 'react';
import { BUSINESS_INFO } from '@/constants/businessInfo';

/**
 * Component to add ImageObject structured data for SEO
 */
export const ImageSEO = ({
    imageUrl,
    alt = '',
    creditText = BUSINESS_INFO.name,
    creator = BUSINESS_INFO.name
}) => {
    const fullImageUrl = imageUrl?.startsWith('http')
        ? imageUrl
        : `${BUSINESS_INFO.url}${imageUrl}`;

    const imageSchema = {
        '@context': 'https://schema.org',
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
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
        />
    );
};

export default ImageSEO;
