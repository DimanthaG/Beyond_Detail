'use client';

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';
import { ChevronDown } from 'lucide-react';
import { fallbackFAQs } from '@/data/faqsData';
import './FAQs.scss';

// TODO: Migrate these shared components
// import BackgroundPaths from '@/components/BackgroundPaths/BackgroundPaths';
// import Contact from '@/components/Contact/Contact';
// const GoogleReviewsCarousel = lazy(() => import('@/components/GoogleReviewsCarousel/GoogleReviewsCarousel'));
// import { TrustBadges, SkillShowcase } from '@/components';

const animationOne = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const transition = { duration: 0.4, ease: 'easeInOut' };

const categories = [
  { id: 'general', label: 'General' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'booking', label: 'Booking' },
];

function FAQs() {
  const [faqs, setFaqs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const query = `*[_type == "faqs"] | order(order asc)`;
    client.fetch(query).then((data) => {
      if (!data || data.length === 0) {
        setFaqs(fallbackFAQs);
        setLoading(false);
        return;
      }
      setFaqs(data);
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching FAQs:', error);
      setFaqs(fallbackFAQs);
      setLoading(false);
    });
  }, []);

  const filteredFAQs = faqs.filter((faq) => faq.category === selectedCategory);
  const categoryCount = categories.map(cat => ({
    ...cat,
    count: faqs.filter(faq => faq.category === cat.id).length
  }));

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  // Generate FAQ Schema for SEO (Featured Snippets)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs
      .filter((faq) => faq.question)
      .map((faq) => {
        let answerText = 'Please contact us for more information.';

        if (faq.answer && Array.isArray(faq.answer) && faq.answer.length > 0) {
          const textParts = faq.answer
            .map((block) => {
              if (block && block.children && Array.isArray(block.children)) {
                return block.children
                  .map((c) => c?.text || '')
                  .filter(Boolean)
                  .join('');
              }
              return '';
            })
            .filter(Boolean);

          if (textParts.length > 0) {
            answerText = textParts.join(' ');
          }
        }

        return {
          '@type': 'Question',
          name: faq.question || 'Question',
          acceptedAnswer: {
            '@type': 'Answer',
            text: answerText
          }
        };
      })
      .filter((item) => item.name !== 'Question')
  };

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={{ ...transition, delay: 0 }}
    >
      {/* FAQ Schema for SEO */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className='faqs-page__wrapper'>
        {/* TODO: Migrate BackgroundPaths component */}
        <div style={{ padding: '8rem 2rem 4rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--white-color)', textTransform: 'uppercase', letterSpacing: '3px' }}>
            FAQs - Auto Detailing Toronto & Scarborough
          </h1>
          <p style={{ color: 'var(--lightGray-color)', fontSize: '1.1rem', marginTop: '1rem' }}>
            Find answers to common questions about our professional auto detailing services in Toronto and Scarborough.
          </p>
        </div>

        <section id="faqs-content" className="faqs-content">
          <div className="faqs-content__container">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="faqs-category-filter"
            >
              {categoryCount.map((cat) => (
                <button
                  key={cat.id}
                  className={`faqs-category-btn ${selectedCategory === cat.id ? 'faqs-category-btn--active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setExpandedFAQ(null);
                  }}
                >
                  <span className="faqs-category-label">{cat.label}</span>
                  {cat.count > 0 && (
                    <span className="faqs-category-count">({cat.count})</span>
                  )}
                </button>
              ))}
            </motion.div>

            {/* FAQs Accordion */}
            {loading ? (
              <div className="faqs-loading">
                <p style={{ color: '#999' }}>Loading FAQs...</p>
              </div>
            ) : filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="faqs-empty"
              >
                <p>No FAQs found in this category. Please check back later or contact us directly.</p>
              </motion.div>
            ) : (
              <div className="faqs-accordion">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`faqs-item ${expandedFAQ === faq._id ? 'faqs-item--expanded' : ''}`}
                  >
                    <button
                      className="faqs-question"
                      onClick={() => toggleFAQ(faq._id)}
                    >
                      <span className="faqs-question-text">{faq.question}</span>
                      <ChevronDown className={`faqs-chevron ${expandedFAQ === faq._id ? 'faqs-chevron--rotated' : ''}`} />
                    </button>
                    {expandedFAQ === faq._id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="faqs-answer"
                      >
                        <div className="faqs-answer-content">
                          {faq.answer?.map((block, idx) => (
                            <p key={idx}>
                              {block.children?.map((c, i) => (
                                <span key={i}>
                                  {c.text}
                                </span>
                              ))}
                            </p>
                          ))}
                          {!faq.answer || faq.answer.length === 0 ? (
                            <p>Please contact us for more information about this question.</p>
                          ) : null}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Still Have Questions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="faqs-cta"
            >
              <h3 className="faqs-cta-title">Still have questions?</h3>
              <p className="faqs-cta-text">
                Can&#39;t find what you&#39;re looking for? Our team is here to help.
                Get in touch with us and we&#39;ll answer any questions you may have.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TODO: Migrate shared components */}
        {/* <GoogleReviewsCarousel /> */}
        {/* <TrustBadges /> */}
        {/* <SkillShowcase /> */}
        {/* <Contact /> */}
      </div>
    </motion.div>
  );
}

export default React.memo(FAQs);
