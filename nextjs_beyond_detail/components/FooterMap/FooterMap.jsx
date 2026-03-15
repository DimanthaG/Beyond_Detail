import React from 'react';
import './FooterMap.scss';

const FooterMap = () => {
    return (
        <div className="footer-map-section">
            <iframe
                src="https://maps.google.com/maps?q=Beyond%20Detail%20170%20Finchdene%20Square&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beyond Detail Location"
            ></iframe>
        </div>
    );
};

export default FooterMap;
