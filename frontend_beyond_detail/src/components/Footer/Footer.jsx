import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import images from '../../constants/images';
import { Loading } from '../../components';
import './Footer.scss';

function Footer() {
  const [footerData, setFooterData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "footer"]';

    client.fetch(query).then((data) => {
      setFooterData(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
        <footer className='footer'>
          <div className='footer-container'>
            {/* Column 1: Company Info */}
            <div className='footer-column footer-company'>
              <div className='footer-logo'>
              <img src={images.logo2} alt='beyond detail logo' loading='lazy' />
              </div>
              {footerData.length !== 0 && (
                <>
                  <div className='footer-phone'>
                    <a href={`tel:${footerData[0].number?.replace(/\s/g, '')}`}>
                      {footerData[0].number}
                    </a>
                  </div>
                  <div className='footer-address'>
                    <h4 className='footer-heading'>OUR ADDRESS</h4>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${footerData[0].addressUnit} ${footerData[0].address}`)}`}
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
                <a href='/privacy-policy'>
                  PRIVACY POLICY
                </a>
              </div>
            </div>

            {/* Column 3: Navigation Menu */}
            <div className='footer-column footer-menu'>
              <h4 className='footer-heading'>MENU</h4>
              <div className='footer-links'>
                <a href='/tint'>
                  TINT
                </a>
                <a href='/about'>
                  ABOUT US
                </a>
                <a href='/auto-detail'>
                  AUTO DETAIL
                </a>
                <a href='/gallery'>
                  GALLERY
                </a>
                <a href='/blog'>
                  BLOG
                </a>
                <a href='/contact'>
                  CONTACT
                </a>
              </div>
            </div>

            {/* Column 4: Business Hours */}
            <div className='footer-column footer-hours'>
              <h4 className='footer-heading'>HOURS</h4>
              <div className='footer-links'>
                {footerData.length !== 0 && (
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
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Footer;
