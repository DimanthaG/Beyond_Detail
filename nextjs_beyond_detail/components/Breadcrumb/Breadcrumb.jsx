'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumb.scss';

// Map URL slugs to human-readable names
const SLUG_LABELS = {
    'auto-detail': 'Auto Detailing',
    'interior-detailing': 'Interior Detailing',
    'exterior-detailing': 'Exterior Detailing',
    'ceramic-coatings': 'Ceramic Coating',
    'tints': 'Window Tinting',
    'paint-correction': 'Paint Correction',
    'paint-removal': 'Paint Removal',
    'pricing': 'Pricing',
    'gallery': 'Gallery',
    'contact': 'Contact',
    'about': 'About Us',
    'booking': 'Book Online',
    'faqs': 'FAQs',
    'headlight-restoration': 'Headlight Restoration',
    'leather-cleaning': 'Leather Cleaning',
    'odour-removal': 'Odour Removal',
    'fleet-services': 'Fleet Services',
    'mobile-detailing': 'Mobile Detailing',
    'luxury-detailing': 'Luxury Detailing',
    'window-tinting-laws': 'Window Tinting Laws',
    'car-detailing-scarborough': 'Scarborough',
    'car-detailing-markham': 'Markham',
    'car-detailing-north-york': 'North York',
    'car-detailing-pickering': 'Pickering',
};

function Breadcrumb() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    // Don't render on homepage
    if (pathSegments.length === 0) return null;

    const crumbs = pathSegments.map((segment, index) => {
        const path = '/' + pathSegments.slice(0, index + 1).join('/');
        const label = SLUG_LABELS[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        const isLast = index === pathSegments.length - 1;

        return { path, label, isLast };
    });

    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb__list">
                <li className="breadcrumb__item">
                    <Link to="/" className="breadcrumb__link">
                        <Home size={14} />
                        <span>Home</span>
                    </Link>
                    <ChevronRight size={12} className="breadcrumb__separator" />
                </li>
                {crumbs.map((crumb, i) => (
                    <li key={i} className="breadcrumb__item">
                        {crumb.isLast ? (
                            <span className="breadcrumb__current" aria-current="page">{crumb.label}</span>
                        ) : (
                            <>
                                <Link to={crumb.path} className="breadcrumb__link">{crumb.label}</Link>
                                <ChevronRight size={12} className="breadcrumb__separator" />
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
