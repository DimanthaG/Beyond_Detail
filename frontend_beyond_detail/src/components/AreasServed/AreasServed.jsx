import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AreasServed.scss';

const serviceAreas = [
    {
        name: 'Markham',
        region: 'York Region',
        description: 'Premium auto detailing, window tinting & ceramic coating services for Markham residents.',
        link: '/service-area/markham',
        highlights: ['Paint Correction', 'Ceramic Coating', 'Window Tinting']
    },
    {
        name: 'Pickering',
        region: 'Durham Region',
        description: 'Expert car detailing and paint protection services serving Pickering and surrounding areas.',
        link: '/service-area/pickering',
        highlights: ['Interior Detailing', 'Paint Protection', 'Headlight Restoration']
    },
    {
        name: 'North York',
        region: 'Toronto',
        description: 'Professional auto detailing and tinting services for North York & nearby Toronto areas.',
        link: '/service-area/north-york',
        highlights: ['Auto Detailing', 'LLumar Tint', 'Paint Correction']
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
                                        <li key={highlight} className="areas-served__card-highlight">
                                            {highlight}
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
                        Based in <strong>Scarborough</strong>, we proudly serve customers throughout the GTA with mobile and in-shop services.
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
