import React, { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../../client';
import { Contact, SEO } from '../../components';
import './ServicePage.scss';

const GoogleReviewsCarousel = React.lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
const ServiceGallery = React.lazy(() => import('../../components/ServiceGallery/ServiceGallery'));

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

  // Generate SEO-friendly title and description
  const serviceTitle = service.title || serviceType;
  const seoTitle = `${serviceTitle} - Professional Auto Detailing Toronto & Scarborough | Beyond Detail`;
  const seoDescription = service.description
    ? `${service.description.substring(0, 150)}... Professional ${serviceTitle.toLowerCase()} services in Toronto, Scarborough, Markham & Pickering. ⭐ 70+ Five-Star Reviews | Lifetime Warranty | Call (647) 689-6109`
    : `Professional ${serviceTitle} services in Toronto, Scarborough, Markham & Pickering. ⭐ 70+ Five-Star Reviews | Lifetime Warranty | Beyond Detail`;

  return (
    <div className="service-page">
      <SEO
        title={seoTitle}
        description={seoDescription}
        serviceType={serviceTitle}
        keywords={`${serviceTitle}, ${serviceTitle} Toronto, ${serviceTitle} Scarborough, ${serviceTitle} Markham, ${serviceTitle} Pickering, car detailing, auto detailing`}
        image={service.headerImage ? urlFor(service.headerImage).width(1200).url() : undefined}
      />
      {/* Header Section */}
      {service.headerImage ? (
        <div className="service-header">
          <img
            src={urlFor(service.headerImage).width(1200).url()}
            alt={service.title}
            className="header-image"
          />
          <h1 className="header-title">{service.title}</h1>
        </div>
      ) : (
        <div className="service-header service-header--no-image">
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
            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
          </section>
        )}

        {/* Gallery Section */}
        <Suspense fallback={null}>
          <ServiceGallery
            serviceType={serviceType}
            title={`${service.title} Gallery`}
          />
        </Suspense>
      </div>

      {/* Contact Form Section */}
      <section className="contact-section">
        {!service.pricing || service.pricing.length === 0 ? (
          <Suspense fallback={null}>
            <GoogleReviewsCarousel />
          </Suspense>
        ) : null}
        <Contact />
      </section>
    </div>
  );
}

export default ServicePage;
