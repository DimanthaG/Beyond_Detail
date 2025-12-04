import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './BentoGrid.scss';

const BentoGrid = ({
  children,
  className = '',
}) => {
  return (
    <div className={`bento-grid ${className}`}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className = '',
  background,
  image,
  imgAlt,
  Icon,
  description,
  href,
  cta,
}) => (
  <div
    key={name}
    className={`bento-card ${className}`}
  >
    {image ? (
      <div className="bento-card__background">
        <img
          src={image}
          alt={imgAlt || name}
          className="bento-card__image"
          width="524"
          height="350"
          loading="lazy"
          decoding="async"
        />
      </div>
    ) : (
      <div className="bento-card__background">{background}</div>
    )}
    <div className="bento-card__content">
      {Icon && (
        <div className="bento-card__icon-wrapper">
          <Icon className="bento-card__icon" />
        </div>
      )}
      <h3 className="bento-card__title">{name}</h3>
      <p className="bento-card__description">{description}</p>
    </div>

    <div className="bento-card__cta">
      <Link to={`${href}#hero`} className="bento-card__button">
        {cta}
        <ArrowRight className="bento-card__arrow" />
      </Link>
    </div>
    <div className="bento-card__overlay" />
  </div>
);

export { BentoCard, BentoGrid };

