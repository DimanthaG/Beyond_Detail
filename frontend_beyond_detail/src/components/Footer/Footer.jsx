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
        <div className='footer'>
          <div className='footer-container'>
            <div className='message-for-users'>
              <img src={images.logo2} alt='beyond detail logo' loading='lazy' />
              {footerData.length !== 0 && (
                <>
                  <h3>
                    <a href={`tel:${footerData[0].number?.replace(/\s/g, '')}`}>
                      {footerData[0].number}
                    </a>
                  </h3>
                  <span>{footerData[0].addressTitle}</span>
                  <h5>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${footerData[0].addressUnit} ${footerData[0].address}`)}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {footerData[0].addressUnit}
                      <br />
                      {footerData[0].address}
                    </a>
                  </h5>
                </>
              )}
            </div>
            <div className='social-links'>
              <div className='social-links-h'>Social</div>
              <div className='social-links-items'>
                <a 
                  href='https://www.youtube.com/@beyonddetailtoronto' 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  YouTube
                </a>
                <a 
                  href='https://www.facebook.com/people/Beyond-Detail-Scarborough/100088669617846/' 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  Facebook
                </a>
                <a 
                  href='https://www.instagram.com/beyonddetail.ca/' 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  Instagram
                </a>
                <a href='/privacy-policy'>
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className='footer-menu social-links'>
              <div className='footer-menu-h social-links-h'>Menu</div>
              <div className='footer-menu-links social-links-items'>
                <a href='/tint' className='footer-menu-links-items'>
                  Tint
                </a>
                <a href='/about' className='footer-menu-links-items'>
                  About Us
                </a>
                <a href='/services' className='footer-menu-links-items'>
                  Auto Detail
                </a>
                <a href='/gallery' className='footer-menu-links-items'>
                  Gallery
                </a>
                <a href='/blog' className='footer-menu-links-items'>
                  Blog
                </a>
                <a href='/contact' className='footer-menu-links-items'>
                  Contact
                </a>
              </div>
            </div>
            <div className='social-links'>
              <div className='social-links-h social-links-hours'>Hours</div>
              <div className='social-links-items '>
                {footerData.length !== 0 && (
                  <>
                    <p className='footer__hours'>
                      <strong>{footerData[0].hours.hoursDay1}</strong>
                      <br />
                      {footerData[0].hours.hours1}
                    </p>
                    <p className='footer__hours'>
                      <strong>{footerData[0].hours.hoursDay2}</strong>
                      <br />
                      {footerData[0].hours.hours2}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className='footer-bottom'>
            <div className='left-footer-bottom'>
              <p></p>
            </div>
            <div className='right-footer-bottom'>
              <p>
                {`© ${new Date().getFullYear()} Beyond Detail. All Rights Reserved`}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Footer;
