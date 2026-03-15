import React from 'react';
import { FaShieldAlt, FaAward, FaUserCheck, FaStar } from 'react-icons/fa';
import './TrustBadges.scss';

const TrustBadges = () => {
    const badges = [
        {
            icon: <FaShieldAlt />,
            title: 'Lifetime Warranty',
            description: 'We stand by our work with comprehensive warranties on tints and coatings.'
        },
        {
            icon: <FaAward />,
            title: 'Certified Professionals',
            description: 'Our technicians are trained and certified by industry leaders like LLumar.'
        },
        {
            icon: <FaStar />,
            title: 'Top Rated in GTA',
            description: 'Consistently rated 5-stars by customers in Scarborough and Toronto.'
        },
        {
            icon: <FaUserCheck />,
            title: 'Satisfaction Guaranteed',
            description: 'We ensure you are 100% satisfied with our detailing and tinting services.'
        }
    ];

    return (
        <section className="trust-badges">
            <div className="trust-badges__container">
                {badges.map((badge, index) => (
                    <div key={index} className="trust-badges__item">
                        {badge.icon}
                        <h3>{badge.title}</h3>
                        <p>{badge.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustBadges;
