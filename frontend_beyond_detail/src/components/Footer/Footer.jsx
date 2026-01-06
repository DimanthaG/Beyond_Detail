import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../../client';

import images from '../../constants/images';
import './Footer.scss';
import { BUSINESS_INFO } from '../../constants/businessInfo';

function Footer() {
  const defaultFooterData = [{
    number: BUSINESS_INFO.phone,
    addressUnit: BUSINESS_INFO.address.streetAddress.split(' unit')[0] + ' Unit ' + BUSINESS_INFO.address.streetAddress.split(' unit ')[1],
    address: `${BUSINESS_INFO.address.addressLocality}, ${BUSINESS_INFO.address.addressRegion} ${BUSINESS_INFO.address.postalCode}`,
    hours: {
      hoursDay1: 'Monday - Friday',
      hours1: '8:00 AM - 8:00 PM',
      hoursDay2: 'Saturday',
      hours2: '9:00 AM - 6:00 PM'
    }
  }];

  const [footerData, setFooterData] = useState(defaultFooterData);

  useEffect(() => {
    const query = '*[_type == "footer"]';

    client.fetch(query).then((data) => {
      if (data && data.length > 0) {
        setFooterData(data);
      }
    }).catch(err => {
      console.error("Error fetching footer data:", err);
    });
  }, []);

  return (
    <>
      <footer className='footer'>
        <div className='footer-container'>
          {/* Column 1: Company Info */}
          <div className='footer-column footer-company'>
            <div className='footer-logo'>
              <Link to='/'>
                <img src={images.logo2} alt='Beyond Detail Auto Detailing Scarborough Logo' loading='lazy' />
              </Link>
            </div>
            {footerData.length !== 0 && (
              <>
                <div className='footer-service-area' style={{ marginBottom: '1rem', color: '#ccc', fontSize: '0.9rem' }}>
                  <p>Serving Toronto, Scarborough, and the GTA</p>
                </div>
                <div className='footer-phone'>
                  <a href={`tel:${footerData[0].number?.replace(/\s/g, '')}`}>
                    {footerData[0].number}
                  </a>
                </div>
                <div className='footer-address'>
                  <h4 className='footer-heading'>OUR ADDRESS</h4>
                  <a
                    href='https://maps.app.goo.gl/XfshhLecn5wS9Xd49'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='footer-address-link'
                  >
                    {footerData[0].addressUnit}
                    <br />
                    {footerData[0].address}
                  </a>
                </div>

              </>
            )}
          </div>

          {/* Column 2: Social Links */}
          <div className='footer-column footer-social'>
            <h4 className='footer-heading'>SOCIAL</h4>
            <div className='footer-links'>
              <a
                href='https://www.youtube.com/@beyonddetailtoronto'
                target='_blank'
                rel='noopener noreferrer'
              >
                YOUTUBE
              </a>
              <a
                href='https://www.facebook.com/people/Beyond-Detail-Scarborough/100088669617846/'
                target='_blank'
                rel='noopener noreferrer'
              >
                FACEBOOK
              </a>
              <a
                href='https://www.instagram.com/beyonddetail.ca/'
                target='_blank'
                rel='noopener noreferrer'
              >
                INSTAGRAM
              </a>
              <Link to='/privacy-policy'>
                PRIVACY POLICY
              </Link>
              <Link to='/copyright'>
                COPYRIGHT & LICENSING
              </Link>
            </div>
          </div>

          {/* Column 3: Navigation Menu */}
          <div className='footer-column footer-menu'>
            <h4 className='footer-heading'>MENU</h4>
            <div className='footer-links'>
              <Link to='/tint'>
                TINT
              </Link>
              <Link to='/about'>
                ABOUT US
              </Link>
              <Link to='/service-areas'>
                SERVICE AREAS
              </Link>
              <Link to='/auto-detail'>
                AUTO DETAIL
              </Link>
              <Link to='/gallery'>
                GALLERY
              </Link>
              <Link to='/blog'>
                BLOG
              </Link>
              <Link to='/contact'>
                CONTACT
              </Link>
            </div>
          </div>

          {/* Column 4: Business Hours */}
          <div className='footer-column footer-hours'>
            <h4 className='footer-heading'>HOURS</h4>
            <div className='footer-links'>
              {footerData.length !== 0 && footerData[0].hours && (
                <>
                  <p className='footer-hours-item'>
                    {footerData[0].hours.hoursDay1}
                  </p>
                  <p className='footer-hours-item'>
                    {footerData[0].hours.hours1}
                  </p>
                  <p className='footer-hours-item'>
                    {footerData[0].hours.hoursDay2}
                  </p>
                  <p className='footer-hours-item'>
                    {footerData[0].hours.hours2}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className='footer-bottom'>
          <p className='footer-copyright'>
            {`© ${new Date().getFullYear()} BEYOND DETAIL. ALL RIGHTS RESERVED`}
          </p>
        </div>
      </footer>

    </>
  );
}

export default Footer;
