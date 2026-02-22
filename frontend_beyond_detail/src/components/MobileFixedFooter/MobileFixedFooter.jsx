import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import './MobileFixedFooter.scss';

const MobileFixedFooter = () => {
    return (
        <div className="mobile-fixed-footer">
            <div className="mobile-fixed-footer__container">
                <a href="tel:+16476896109" className="mobile-fixed-footer__btn mobile-fixed-footer__btn--call">
                    <Phone size={18} />
                    <span>Call Now</span>
                </a>
                <Link to="/contact" className="mobile-fixed-footer__btn mobile-fixed-footer__btn--book">
                    <Calendar size={18} />
                    <span>BOOK NOW</span>
                </Link>
            </div>
        </div>
    );
};

export default MobileFixedFooter;
