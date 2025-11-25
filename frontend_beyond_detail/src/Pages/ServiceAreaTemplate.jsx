import React from 'react';
import { SEO } from '../components';

function ServiceAreaTemplate({ city, nearby, title, description, services }) {
  const pageTitle = `${title} | Beyond Detail | Window Tint | Paint Correction | Ceramic Coatings in Toronto`;
  const pageDescription = description;

  return (
    <div className="service-area">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={`${city} auto detailing, ${city} window tinting, ${city} ceramic coating, ${city} paint correction, car detailing ${nearby}, ${city} window tinting near me, ${city} car detailing near me`}
        type="website"
      />
      <section className="service-area__hero">
        <div className="service-area__container">
          <p className="service-area__eyebrow">Serving {city} &amp; nearby {nearby}</p>
          <h1 className="service-area__title">{title}</h1>
          <p className="service-area__description">{description}</p>
          <div className="service-area__nap">
            <p><strong>Beyond Detail | Window Tint | Paint Correction | Ceramic Coatings in Toronto</strong></p>
            <p>170 Finchdene Square unit 11, Scarborough, ON M1X 1B3</p>
            <p><a href="tel:+16476896109">(647) 689-6109</a></p>
            <p>Hours: Mon–Fri 8am–8pm, Sat 9am–6pm, Sun closed</p>
          </div>
          <div className="service-area__cta">
            <a className="service-area__button" href="/contact">Book an appointment</a>
            <a className="service-area__link" href="/tint">Window tinting</a>
            <a className="service-area__link" href="/paint-correction">Paint correction</a>
            <a className="service-area__link" href="/ceramic-coatings">Ceramic coating</a>
          </div>
        </div>
      </section>
      <section className="service-area__list">
        <div className="service-area__container">
          <h2 className="service-area__subtitle">Popular services in {city}</h2>
          <ul className="service-area__services">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ServiceAreaTemplate;
