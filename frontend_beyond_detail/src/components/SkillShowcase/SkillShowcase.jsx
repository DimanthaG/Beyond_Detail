import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Droplets, Shield, Sun, Car, ArrowRight } from 'lucide-react';

import tintImage from '../../assets/bd/bd-26.webp';
import paintCorrectionImage from '../../assets/bd/bd-20.webp';
import ceramicCoatingImage from '../../assets/bd/bd-28.webp';
import carWashImage from '../../assets/bd/bd-3.webp';
import headlightImage from '../../assets/bd/bd-4.webp';

import './SkillShowcase.scss';

const skills = [
    {
        id: 'ceramic',
        title: 'Ceramic Coating',
        subtitle: 'The Ultimate Shield',
        description: 'Industry-leading protection that locks in shine, repels water, and preserves your vehicle’s value for years.',
        image: ceramicCoatingImage,
        href: '/ceramic-coatings',
        icon: Shield,
        color: '#00d2ff' // Cyan accent
    },
    {
        id: 'paint',
        title: 'Paint Correction',
        subtitle: 'Flawless Reflection',
        description: 'We surgery for your paint. Removing swirl marks and scratches to reveal a depth of color you didn’t know existed.',
        image: paintCorrectionImage,
        href: '/paint-correction',
        icon: Sparkles,
        color: '#ff4d4d' // Red accent
    },
    {
        id: 'interior',
        title: 'Interior Detailing',
        subtitle: 'Sanctuary Restored',
        description: 'Deep cleaning, sanitization, and luxury conditioning. We reset your cabin to factory-fresh comfort.',
        image: carWashImage,
        href: '/interior-detailing',
        icon: Droplets,
        color: '#ffd700' // Gold accent
    },
    {
        id: 'tint',
        title: 'Window Tinting',
        subtitle: 'Privacy & Cool',
        description: 'Premium films that reject heat, block UV rays, and give your car that sleek, finished aesthetic.',
        image: tintImage,
        href: '/tint',
        icon: Sun,
        color: '#a855f7' // Purple accent
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

const SkillShowcase = () => {
    return (
        <section className="skill-showcase">
            <div className="skill-showcase__bg-glow" />

            <div className="skill-showcase__header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="skill-showcase__title"
                >
                    Mastery in Detail
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="skill-showcase__divider"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="skill-showcase__subtitle"
                >
                    Elevating automotive care to an art form.
                </motion.p>
            </div>

            <motion.div
                className="skill-showcase__grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        className="skill-card"
                        variants={itemVariants}
                    >
                        <div className="skill-card__media">
                            <img src={skill.image} alt={skill.title} className="skill-card__image" />
                            <div className="skill-card__overlay" style={{ '--accent-color': skill.color }} />
                            <skill.icon className="skill-card__icon" size={32} />
                        </div>

                        <div className="skill-card__content">
                            <div className="skill-card__text">
                                <span className="skill-card__subtitle" style={{ color: skill.color }}>{skill.subtitle}</span>
                                <h3 className="skill-card__title">{skill.title}</h3>
                                <p className="skill-card__desc">{skill.description}</p>
                            </div>

                            <Link to={skill.href} className="skill-card__link">
                                <span>Explore Service</span>
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default SkillShowcase;
