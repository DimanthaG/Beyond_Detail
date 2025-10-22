import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../../client';
import { Contact } from '../../components';
import './ServicePage.scss';

function ServicePage() {
  const { serviceType } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "${serviceType}"][0]`;
    client.fetch(query).then((data) => {
      setService(data);
      setLoading(false);
    });
  }, [serviceType]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!service) return <div className="error">Service not found</div>;

  return (
    <div className="service-page">
      {/* Header Section */}
      {service.headerImage && (
        <div className="service-header">
          <img
            src={urlFor(service.headerImage).width(1200).url()}
            alt={service.title}
            className="header-image"
          />
          <h1 className="header-title">{service.title}</h1>
        </div>
      )}

      {/* Description Section */}
      <div className="service-container">
        <section className="description-section">
          <p className="description">{service.description}</p>
          <div className="detailed-content">
            {service.detailedDescription && (
              <div className="block-content">
                {service.detailedDescription.map((block, idx) => (
                  <div key={idx}>{block.children?.map((c) => c.text).join('')}</div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        {service.features && service.features.length > 0 && (
          <section className="features-section">
            <h2>What's Included</h2>
            <ul className="features-list">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Pricing Section */}
        {service.pricing && service.pricing.length > 0 && (
          <section className="pricing-section">
            <h2>Our Pricing</h2>
            <div className="pricing-grid">
              {service.pricing.map((price, idx) => (
                <div key={idx} className="pricing-box">
                  <h3>{price.packageName}</h3>
                  <p className="price">${price.price}</p>
                  <p className="price-description">{price.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Contact Form Section */}
      <section className="contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default ServicePage;
