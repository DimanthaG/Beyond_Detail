import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import './PrivacyPolicy.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

function PrivacyPolicy() {
  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='Privacy Policy - Beyond Detail Toronto'
          description='Privacy Policy for Beyond Detail Toronto. Learn how we collect, use, and protect your personal information when you use our automotive detailing services.'
          name='Beyond Detail Toronto'
          type='website'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='privacy-policy__wrapper'>
            <div className='privacy-policy__content'>
              <div className='privacy-policy__container'>
                <div className='privacy-policy__header'>
                  <h1>Privacy Policy</h1>
                  <p className='privacy-policy__last-updated'>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <div className='privacy-policy__intro'>
                    <p>
                      Your privacy is important to us. This Privacy Policy explains how Beyond Detail ("we", "our", or "us") collects, uses, discloses, and safeguards your information when you visit our website, use our services, or interact with us.
                    </p>
                  </div>
                </div>

                <div className='privacy-policy__section'>
                  <h2>1. Introduction</h2>
                  <p>
                    Beyond Detail is committed to protecting your privacy. This Privacy Policy applies to all information collected through our website, services, and any related applications or platforms.
                  </p>
                </div>

                <div className='privacy-policy__section'>
                  <h2>2. Information We Collect</h2>
                  <p>We collect information that you provide directly to us, including:</p>
                  <ul>
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address</li>
                    <li><strong>Vehicle Information:</strong> Vehicle type, make, model, and year</li>
                    <li><strong>Booking Information:</strong> Service preferences, appointment dates and times, and payment information</li>
                    <li><strong>Communication:</strong> Messages, inquiries, and feedback you send to us</li>
                  </ul>
                  <p>
                    We may also automatically collect certain information when you visit our website, such as your IP address, browser type, device information, and usage patterns through cookies and similar tracking technologies.
                  </p>
                </div>

                <div className='privacy-policy__section'>
                  <h2>3. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process and manage your bookings and appointments</li>
                    <li>Communicate with you about your appointments, services, and inquiries</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Respond to your questions and provide customer support</li>
                    <li>Detect and prevent fraud, security issues, and abuse</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className='privacy-policy__section'>
                  <h2>4. Information Sharing and Disclosure</h2>
                  <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                  <ul>
                    <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf (e.g., payment processing, email delivery)</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                    <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent</li>
                  </ul>
                </div>

                <div className='privacy-policy__section'>
                  <h2>5. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div className='privacy-policy__section'>
                  <h2>6. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access and receive a copy of your personal information</li>
                    <li>Rectify inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to or restrict the processing of your information</li>
                    <li>Withdraw consent at any time where we rely on consent</li>
                    <li>File a complaint with a data protection authority</li>
                  </ul>
                  <p>To exercise these rights, please contact us using the information provided in the Contact section below.</p>
                </div>

                <div className='privacy-policy__section'>
                  <h2>7. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </div>

                <div className='privacy-policy__section'>
                  <h2>8. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div className='privacy-policy__section'>
                  <h2>9. Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div className='privacy-policy__section'>
                  <h2>10. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div className='privacy-policy__section'>
                  <h2>11. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> support@beyonddetail.com</li>
                    <li><strong>Phone:</strong> (647) 689-6109</li>
                    <li><strong>Address:</strong> Scarborough, Toronto, ON, Canada</li>
                  </ul>
                </div>
              </div>
            </div>

            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(PrivacyPolicy);

