'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Gift } from 'lucide-react';
import './ExitIntentPopup.scss';

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasSeen, setHasSeen] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Check local storage
        const seenPopup = localStorage.getItem('bd_exit_popup_seen');
        if (seenPopup) {
            setHasSeen(true);
            return;
        }

        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasSeen && !isVisible) {
                setIsVisible(true);
            }
        };

        // For mobile: Show after 15 seconds
        const mobileTimer = setTimeout(() => {
            if (window.innerWidth < 768 && !hasSeen && !isVisible) {
                setIsVisible(true);
            }
        }, 15000);

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(mobileTimer);
        };
    }, [hasSeen, isVisible]);

    const handleClose = () => {
        setIsVisible(false);
        setHasSeen(true);
        localStorage.setItem('bd_exit_popup_seen', 'true');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            handleClose();
        }, 5000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="exit-popup-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="exit-popup-content"
                        initial={{ scale: 0.8, y: 50, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.8, y: 50, opacity: 0 }}
                    >
                        <button className="close-btn" onClick={handleClose}>
                            <X size={24} />
                        </button>

                        {!submitted ? (
                            <>
                                <div className="popup-icon">
                                    <Gift size={48} color="#f07900" />
                                </div>
                                <h2>Wait! Get 10% Off</h2>
                                <p>Don't leave without your discount. Sign up today and get <strong>10% OFF</strong> your first detailing service.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="input-wrapper">
                                        <Mail size={20} className="input-icon" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="submit-btn">
                                        Get My 10% Off Code
                                    </button>
                                </form>
                                <p className="nospam">We respect your privacy. No spam.</p>
                            </>
                        ) : (
                            <div className="success-state">
                                <h2>Claim Your 10% Off</h2>
                                <p>Call us now to book your discounted service:</p>
                                <a href="tel:+16476896109" style={{ display: 'inline-block', fontSize: '1.5rem', fontWeight: 'bold', color: '#f07900', textDecoration: 'none', marginTop: '0.5rem' }}>(647) 689-6109</a>
                                <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '1rem' }}>Mention this popup for your discount</p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentPopup;
