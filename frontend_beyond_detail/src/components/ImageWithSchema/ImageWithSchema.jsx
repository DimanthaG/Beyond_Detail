import React from 'react';

/**
 * ImageWithSchema Component
 * 
 * Renders an <img> tag along with a JSON-LD schema script for Google Images licensing.
 * Pass all standard img props (src, alt, className, etc.) to this component.
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {string} name - Name of the image/creation for schema
 * @param {string} description - Detailed description for schema
 * @param {string} author - Author name (default: Beyond Detail)
 */
export function ImageWithSchema({
    src,
    alt,
    name,
    description,
    author = "Beyond Detail",
    className,
    children,
    ...props
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "contentUrl": src.startsWith('http') ? src : `https://beyonddetail.ca${src.startsWith('/') ? '' : '/'}${src}`,
        "license": "https://beyonddetail.ca/terms-of-use",
        "acquireLicensePage": "https://beyonddetail.ca/contact",
        "creditText": author,
        "creator": {
            "@type": "Organization",
            "name": author
        },
        "copyrightNotice": `© ${new Date().getFullYear()} ${author}`,
        "name": name || alt,
        "description": description || alt
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {children ? children : (
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    {...props}
                />
            )}
        </>
    );
}

export default ImageWithSchema;
