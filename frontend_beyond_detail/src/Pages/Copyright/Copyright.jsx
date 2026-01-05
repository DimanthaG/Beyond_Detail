import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components';
import { Shield, Copyright as CopyrightIcon, Image, AlertCircle } from 'lucide-react';
import './Copyright.scss';

function Copyright() {
    return (
        <div className='copyright-container'>
            <SEO
                title="Copyright & Image Licensing | Beyond Detail"
                description="Copyright information and image licensing terms for Beyond Detail. All images and content are protected by copyright law."
                noindex={false}
            />

            <div className="copyright-content">
                <div className="copyright-header">
                    <CopyrightIcon size={48} className="copyright-icon" />
                    <h1>Copyright & Image Licensing</h1>
                    <p className="copyright-subtitle">
                        Protecting Our Intellectual Property
                    </p>
                </div>

                <div className="copyright-section">
                    <div className="section-icon">
                        <Shield size={24} />
                    </div>
                    <h2>Copyright Notice</h2>
                    <p>
                        All content on this website, including but not limited to text, graphics, logos, images,
                        photographs, videos, and software, is the property of <strong>Beyond Detail</strong> and
                        is protected by Canadian and international copyright laws.
                    </p>
                    <p className="copyright-year">
                        © {new Date().getFullYear()} Beyond Detail. All Rights Reserved.
                    </p>
                </div>

                <div className="copyright-section">
                    <div className="section-icon">
                        <Image size={24} />
                    </div>
                    <h2>Image Usage & Licensing</h2>
                    <p>
                        All photographs and images displayed on beyonddetail.ca are the exclusive property of
                        Beyond Detail and are protected by copyright law. These images may not be used, copied,
                        reproduced, distributed, or displayed without our express written permission.
                    </p>

                    <div className="usage-rules">
                        <h3>Prohibited Uses:</h3>
                        <ul>
                            <li>Commercial use without written authorization</li>
                            <li>Reproduction or copying for any purpose</li>
                            <li>Distribution, transmission, or publication</li>
                            <li>Modification, alteration, or creation of derivative works</li>
                            <li>Use on other websites or social media without permission</li>
                            <li>Removal of watermarks or copyright notices</li>
                        </ul>
                    </div>

                    <div className="usage-rules">
                        <h3>Permitted Uses:</h3>
                        <ul>
                            <li>Personal, non-commercial viewing on this website</li>
                            <li>Sharing links to our website (not downloading images)</li>
                            <li>Fair use for news reporting with proper attribution</li>
                        </ul>
                    </div>
                </div>

                <div className="copyright-section">
                    <div className="section-icon">
                        <AlertCircle size={24} />
                    </div>
                    <h2>Request Image License</h2>
                    <p>
                        If you would like to use any of our images for commercial purposes, editorial use,
                        or any other application, please contact us to discuss licensing options.
                    </p>

                    <div className="license-contact">
                        <h3>Contact for Licensing:</h3>
                        <p>
                            <strong>Email:</strong> <a href="mailto:info@beyonddetail.ca">info@beyonddetail.ca</a>
                        </p>
                        <p>
                            <strong>Phone:</strong> <a href="tel:+16476896109">(647) 689-6109</a>
                        </p>
                        <p>
                            <strong>Address:</strong> 170 Finchdene Square unit 11, Scarborough, ON M1X 1B3
                        </p>
                    </div>

                    <Link to="/contact" className="license-button">
                        Request Image License
                    </Link>
                </div>

                <div className="copyright-section">
                    <h2>Trademark Information</h2>
                    <p>
                        "Beyond Detail" and our logo are trademarks of Beyond Detail. All other trademarks,
                        service marks, and trade names referenced on this site are the property of their
                        respective owners.
                    </p>
                </div>

                <div className="copyright-section">
                    <h2>DMCA Compliance</h2>
                    <p>
                        We respect the intellectual property rights of others and expect our users to do the same.
                        If you believe that your copyrighted work has been copied in a way that constitutes
                        copyright infringement, please contact us immediately.
                    </p>
                </div>

                <div className="copyright-footer">
                    <p>
                        For questions about our copyright policy or to report copyright infringement,
                        please <Link to="/contact">contact us</Link>.
                    </p>
                    <p className="last-updated">
                        Last Updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Copyright;
