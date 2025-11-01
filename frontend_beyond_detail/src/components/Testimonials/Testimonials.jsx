import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { urlFor, client } from '../../client';
import { Loading } from '../../components';
import './Testimonials.scss';

function Testimonials({
  title = 'Trusted by thousands of teams',
  subtitle = 'See what our customers have to say about us.',
  badgeText = 'Testimonials',
  testimonials: propsTestimonials,
}) {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (propsTestimonials) {
      setTestimonials(propsTestimonials);
      setLoading(true);
      return;
    }

    // Fetch from Sanity CMS
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => {
      const formattedTestimonials = data.map((item) => ({
        name: item.name || '',
        role: item.company || '',
        text: item.message || '',
        avatar: item.avatar ? urlFor(item.avatar).url() : '',
        rating: item.rating || 5,
      }));
      setTestimonials(formattedTestimonials);
      setLoading(true);
    });
  }, [propsTestimonials]);

  return (
    <>
      {loading ? (
        <motion.section
          id="testimonials"
          className="testimonials-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="testimonials-section__container">
            <div className="testimonials-section__header">
              <div className="testimonials-section__header-content">
                <div className="testimonials-section__badge">
                  {badgeText}
                </div>
                <h2 className="testimonials-section__title">{title}</h2>
                <p className="testimonials-section__subtitle">{subtitle}</p>
              </div>
            </div>

            <div className="testimonials-section__grid">
              {testimonials.map((t, i) => {
                const stars = typeof t.rating === 'number' ? t.rating : 5;
                return (
                  <motion.div
                    key={i}
                    className="testimonials-section__card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="testimonials-section__card-header">
                      <div className="testimonials-section__stars">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`testimonials-section__star ${
                              idx < stars
                                ? 'testimonials-section__star--filled'
                                : 'testimonials-section__star--empty'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="testimonials-section__card-content">
                      <p className="testimonials-section__text">"{t.text}"</p>
                    </div>

                    <div className="testimonials-section__card-footer">
                      <div className="testimonials-section__author">
                        {t.avatar && (
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="testimonials-section__avatar"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                        <div className="testimonials-section__author-info">
                          <p className="testimonials-section__author-name">
                            {t.name}
                          </p>
                          <p className="testimonials-section__author-role">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(Testimonials);
