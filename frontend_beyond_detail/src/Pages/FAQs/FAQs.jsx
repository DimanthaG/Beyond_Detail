import React, { useState, useEffect } from 'react';
import { client } from '../../client';
import { Contact } from '../../components';
import './FAQs.scss';

function FAQs() {
  const [faqs, setFaqs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "faqs"] | sort(order asc)`;
    client.fetch(query).then((data) => {
      setFaqs(data);
      setLoading(false);
    });
  }, []);

  const filteredFAQs = faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  if (loading) return <div className="loading">Loading FAQs...</div>;

  return (
    <div className="faqs-page">
      {/* Header */}
      <div className="faqs-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services</p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {['general', 'services', 'pricing', 'booking'].map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* FAQs Accordion */}
      <div className="faqs-container">
        {filteredFAQs.map((faq) => (
          <div key={faq._id} className="faq-item">
            <button
              className={`faq-question ${expandedFAQ === faq._id ? 'expanded' : ''}`}
              onClick={() => toggleFAQ(faq._id)}
            >
              {faq.question}
              <span className="toggle-icon">+</span>
            </button>
            {expandedFAQ === faq._id && (
              <div className="faq-answer">
                {faq.answer?.map((block, idx) => (
                  <p key={idx}>{block.children?.map((c) => c.text).join('')}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Still have questions?</h2>
        <Contact />
      </section>
    </div>
  );
}

export default FAQs;
