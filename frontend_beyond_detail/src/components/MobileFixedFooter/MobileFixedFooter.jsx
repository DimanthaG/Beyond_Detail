import React from 'react';
import { Link } from 'react-router-dom';
import './MobileFixedFooter.scss';

const MobileFixedFooter = () => {
    return (
        <div className="mobile-fixed-footer">
            <div className="mobile-fixed-footer__container">
                <a href="tel:+16476896109" className="mobile-fixed-footer__btn primary">
                    Call Now
                </a>
                <Link to="/contact" className="mobile-fixed-footer__btn secondary">
                    Request Callback
                </Link>
            </div>
        </div>
    );
};

export default MobileFixedFooter;
