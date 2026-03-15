'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import './AreasServed.scss';

const serviceAreas = [
    {
        name: 'Toronto',
        region: 'GTA',
        description: 'Comprehensive car detailing services for downtown and greater Toronto. Mobile and studio options available.',
        link: '/car-detailing-toronto',
        highlights: [
            { name: 'Mobile Detailing', link: '/mobile-car-detailing-toronto' },
            { name: 'Ceramic Coating', link: '/ceramic-coating-toronto' }, // Assuming this redirects or exists, if not, map to main ceramic page
            { name: 'Luxury Detailing', link: '/luxury-car-detailing-toronto' }
        ]
    },
    {
        name: 'Scarborough',
        region: 'East End',
        description: 'Our home base. The top-rated auto detailing studio serving all Scarborough neighborhoods with lifetime warranties.',
        link: '/car-detailing-scarborough',
        highlights: [
            { name: 'Paint Correction', link: '/paint-correction-scarborough' },
            { name: 'Window Tinting', link: '/window-tinting-scarborough' },
            { name: 'Interior Detailing', link: '/interior-detailing' }
        ]
    },
    {
        name: 'Markham',
        region: 'York Region',
        description: 'Premium auto detailing, window tinting & ceramic coating services for Markham residents.',
        link: '/car-detailing-markham',
        highlights: [
            { name: 'Paint Correction', link: '/paint-correction-markham' },
            { name: 'Ceramic Coating', link: '/ceramic-coating-markham' },
            { name: 'Window Tinting', link: '/window-tinting-markham' }
        ]
    },
    {
        name: 'North York',
        region: 'Toronto',
        description: 'Professional auto detailing and tinting services for North York & nearby Toronto areas.',
        link: '/car-detailing-north-york',
        highlights: [
            { name: 'Auto Detailing', link: '/car-detailing-north-york' },
            { name: 'LLumar Tint', link: '/car-detailing-north-york' },
            { name: 'Paint Correction', link: '/car-detailing-north-york' }
        ]
    },
    {
        name: 'Pickering',
        region: 'Durham Region',
        description: 'Expert car detailing and paint protection services serving Pickering and surrounding areas.',
        link: '/car-detailing-pickering',
        highlights: [
            { name: 'Interior Detailing', link: '/car-detailing-pickering' },
            { name: 'Ceramic Coating', link: '/ceramic-coating-pickering' },
            { name: 'Headlight Restoration', link: '/car-detailing-pickering' }
        ]
    },
    {
        name: 'Oshawa',
        region: 'Durham Region',
        description: 'Top-rated in-shop auto detailing services for Oshawa. Paint correction, ceramic coating, and window tinting experts.',
        link: '/car-detailing-oshawa',
        highlights: [
            { name: 'Paint Correction', link: '/paint-correction-oshawa' },
            { name: 'Ceramic Coating', link: '/ceramic-coating-oshawa' },
            { name: 'Window Tinting', link: '/window-tinting-oshawa' }
        ]
    },
    {
        name: 'Whitby',
        region: 'Durham Region',
        description: 'Professional car care in Whitby. From deep interior cleaning to permanent paint protection, we cover all your detailing needs.',
        link: '/car-detailing-whitby',
        highlights: [
            { name: 'Paint Correction', link: '/paint-correction-whitby' },
            { name: 'Ceramic Coating', link: '/ceramic-coating-whitby' },
            { name: 'Window Tinting', link: '/window-tinting-whitby' }
        ]
    }
];

function AreasServed() {
    return (
        <section className="areas-served">
            <div className="areas-served__container">
                <motion.div
                    className="areas-served__header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="areas-served__title">
                        <MapPin className="areas-served__title-icon" />
                        Areas We Serve
                    </h2>
                    <p className="areas-served__subtitle">
                        Bringing premium auto detailing, window tinting, and ceramic coating services to the Greater Toronto Area
                    </p>
                </motion.div>

                <div className="areas-served__grid">
                    {serviceAreas.map((area, index) => (
                        <motion.div
                            key={area.name}
                            className="areas-served__card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="areas-served__card-content">
                                <div className="areas-served__card-header">
                                    <h3 className="areas-served__card-title">{area.name}</h3>
                                    <span className="areas-served__card-region">{area.region}</span>
                                </div>
                                <p className="areas-served__card-description">{area.description}</p>
                                <ul className="areas-served__card-highlights">
                                    {area.highlights.map((highlight) => (
                                        <li key={highlight.name} className="areas-served__card-highlight">
                                            <Link to={highlight.link}>{highlight.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link to={area.link} className="areas-served__card-link" aria-label={`View auto detailing services in ${area.name}`}>
                                    <span>View Services</span>
                                    <ArrowRight className="areas-served__card-icon" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="areas-served__footer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="areas-served__footer-text">
                        Based in <strong>Scarborough</strong>, we proudly serve customers throughout the GTA with premium in-shop services.
                    </p>
                    <Link to="/contact" className="areas-served__footer-cta" aria-label="Book your auto detailing service">
                        <span>Book Your Service</span>
                        <ArrowRight className="areas-served__footer-icon" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default AreasServed;
