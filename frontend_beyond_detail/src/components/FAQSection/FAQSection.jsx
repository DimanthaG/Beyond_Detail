import React from 'react';
import './FAQSection.scss';

const FAQSection = ({ title = "Frequently Asked Questions", data = [] }) => {
    if (!data || data.length === 0) return null;

    return (
        <section className="faq-section">
            <div className="faq-section__container">
                <h2 className="faq-section__title">{title}</h2>
                <div className="faq-section__list">
                    {data.map((item, index) => (
                        <details key={index} className="faq-section__item">
                            <summary className="faq-section__question">
                                {item.question}
                                <span className="faq-section__icon">+</span>
                            </summary>
                            <div className="faq-section__answer">
                                <p>{item.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
