import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import { client } from '../../client';
import { ChevronDown } from 'lucide-react';
import BackgroundPaths from '../../components/BackgroundPaths/BackgroundPaths';
import Contact from '../../components/Contact/Contact';
import { fallbackFAQs } from '../../data/faqsData';
import './FAQs.scss';

const SEO = lazy(() => import('../../components/SEO'));

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

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='FAQs - Auto Detailing Questions Toronto, Scarborough, Markham, Pickering'
          description='Frequently asked questions about our auto detailing services in Toronto, Scarborough, Markham, and Pickering. Get answers about paint correction, ceramic coating, window tint, interior detailing, and more across the GTA.'
          name='Beyond Detail Toronto'
          type='website'
          keywords='auto detailing FAQs Toronto, car detailing questions Scarborough, detailing FAQ Markham, vehicle detailing answers Pickering, GTA car care FAQ'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='faqs-page__wrapper'>
            <BackgroundPaths 
              title="Frequently Asked Questions"
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
                                  )).join('')}
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

            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(FAQs);
