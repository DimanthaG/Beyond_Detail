import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, TrustBadges, SkillShowcase } from '../../components';
import { client } from '../../client';
import { ChevronDown } from 'lucide-react';
import BackgroundPaths from '../../components/BackgroundPaths/BackgroundPaths';
import Contact from '../../components/Contact/Contact';
import { fallbackFAQs } from '../../data/faqsData';
import './FAQs.scss';

import SEO from '../../components/SEO';
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

const categories = [
  { id: 'general', label: 'General', icon: '📋' },
  { id: 'services', label: 'Services', icon: '🔧' },
  { id: 'pricing', label: 'Pricing', icon: '💰' },
  { id: 'booking', label: 'Booking', icon: '📅' },
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
      // If we have FAQs from Sanity, use them; otherwise use fallback
      if (data && data.length > 0) {
        setFaqs(data);
      } else {
        // Use fallback FAQs if Sanity has no content
        setFaqs(fallbackFAQs);
      }
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching FAQs:', error);
      // Fallback: try without order field if it doesn't exist
      const fallbackQuery = `*[_type == "faqs"] | order(_createdAt asc)`;
      client.fetch(fallbackQuery).then((data) => {
        if (data && data.length > 0) {
          setFaqs(data);
        } else {
          setFaqs(fallbackFAQs);
        }
        setLoading(false);
      }).catch((fallbackError) => {
        console.error('Error fetching FAQs with fallback:', fallbackError);
        // Use fallback FAQs if all queries fail
        setFaqs(fallbackFAQs);
        setLoading(false);
      });
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
      .filter((faq) => faq.question) // Only include FAQs with questions
      .map((faq) => {
        // Extract text from answer blocks - safely handle undefined/null
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
      .filter((item) => item.name !== 'Question') // Remove items without valid questions
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='FAQs - Car Detailing Questions Answered | Toronto, Scarborough, Markham | Beyond Detail'
          description='Get expert answers to your auto detailing questions. Learn about ceramic coating, paint correction, window tinting, interior detailing, pricing, and booking. Serving Toronto, Scarborough, Markham, Ajax, Pickering, Whitby, Oshawa & GTA. 70+ 5-star reviews.'
          name='Beyond Detail - Auto Detailing FAQs'
          type='FAQPage'
          keywords='car detailing FAQs Toronto, auto detailing questions Scarborough, ceramic coating FAQ Markham, paint correction questions, window tinting FAQ, detailing prices Toronto, how much does detailing cost, best car detailing near me, mobile detailing FAQ, luxury car detailing questions, fleet detailing FAQ GTA'
        />
        {/* FAQ Schema for Featured Snippets */}
        {faqs.length > 0 && (
          <Helmet>
            <script type='application/ld+json'>
              {JSON.stringify(faqSchema)}
            </script>
            {/* Breadcrumb Schema */}
            <script type='application/ld+json'>
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.beyonddetail.ca/'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'FAQs',
                    item: 'https://www.beyonddetail.ca/faqs'
                  }
                ]
              })}
            </script>
            {/* Organization Schema */}
            <script type='application/ld+json'>
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'AutoRepair',
                name: 'Beyond Detail',
                description: 'Professional auto detailing services in Toronto and Scarborough',
                url: 'https://www.beyonddetail.ca',
                telephone: '+1-647-689-6109',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '170 Finchdene Square',
                  addressLocality: 'Scarborough',
                  addressRegion: 'ON',
                  postalCode: 'M1X 1B7',
                  addressCountry: 'CA'
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 43.8361,
                  longitude: -79.1847
                },
                areaServed: [
                  'Toronto',
                  'Scarborough',
                  'Markham',
                  'North York',
                  'Ajax',
                  'Pickering',
                  'Whitby',
                  'Oshawa'
                ],
                priceRange: '$$',
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '70'
                }
              })}
            </script>
          </Helmet>
        )}
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='faqs-page__wrapper'>
            <BackgroundPaths
              title="FAQs - Auto Detailing Toronto & Scarborough"
              scrollTarget="#faqs-content"
              description="Find answers to common questions about our professional auto detailing services in Toronto and Scarborough."
              hideAnimatedWords={true}
            />

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
                      <span className="faqs-category-icon">{cat.icon}</span>
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
                    <Loading />
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
                    Can't find what you're looking for? Our team is here to help.
                    Get in touch with us and we'll answer any questions you may have.
                  </p>
                </motion.div>
              </div>
            </section>

            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <TrustBadges />
            <SkillShowcase />
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(FAQs);
