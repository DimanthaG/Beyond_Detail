'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Eye, ArrowRight } from 'lucide-react';
import './BeforeAfterSection.scss';
import dynamic from 'next/dynamic';
const ImageSlider = dynamic(() => import('react-image-comparison-slider'), { ssr: false });


const transformations = [
    {
        title: 'Interior Deep Clean',
        description: 'Heavily soiled seats and carpets restored to factory-fresh condition.',
        service: 'Interior Detailing',
        beforeLabel: 'Stained & dirty',
        afterLabel: 'Like new'
    },
    {
        title: 'Full Exterior Detail',
        description: 'Oxidized paint restored with clay bar, polish, and ceramic sealant.',
        service: 'Ceramic Coating',
        beforeLabel: 'Dull & scratched',
        afterLabel: 'Mirror finish'
    },
    {
        title: 'Headlight Restoration',
        description: 'Foggy, yellowed headlights restored to crystal-clear for safer night driving.',
        service: 'Headlight Restoration',
        beforeLabel: 'Foggy & yellow',
        afterLabel: 'Crystal clear'
    }
];

function BeforeAfterSection() {
    return (
        <section className="before-after-section">
            <div className="before-after-section__container">
                <motion.div
                    className="before-after-section__header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="before-after-section__badge">
                        <Eye size={16} />
                        <span>See the Difference</span>
                    </div>
                    <h2 className="before-after-section__title">Real Results, Real Transformations</h2>
                    <p className="before-after-section__subtitle">
                        Every vehicle that leaves Beyond Detail looks brand new. Here's what we do.
                    </p>
                </motion.div>

                <div className="before-after-section__grid">
                    {transformations.map((item, index) => (
                        <motion.div
                            key={index}
                            className="before-after-section__card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="before-after-section__comparison">
                                <div className="before-after-section__side before-after-section__side--before">
                                    <span className="before-after-section__label">Before</span>
                                    <span className="before-after-section__state">{item.beforeLabel}</span>
                                </div>
                                <div className="before-after-section__divider">
                                    <ArrowRight size={20} />
                                </div>
                                <div className="before-after-section__side before-after-section__side--after">
                                    <span className="before-after-section__label">After</span>
                                    <span className="before-after-section__state">{item.afterLabel}</span>
                                </div>
                            </div>
                            <h3 className="before-after-section__card-title">{item.title}</h3>
                            <p className="before-after-section__card-description">{item.description}</p>
                            <span className="before-after-section__service-tag">{item.service}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="before-after-section__cta"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <Link to="/gallery" className="before-after-section__cta-button">
                        View Full Gallery
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default BeforeAfterSection;
