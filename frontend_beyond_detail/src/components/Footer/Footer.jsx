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
                  <h3>{footerData[0].number}</h3>
                  <span>{footerData[0].addressTitle}</span>
                  <h5>
                    {footerData[0].addressUnit}
                    <br />
                    {footerData[0].address}
                  </h5>
                </>
              )}
            </div>
            <div className='social-links'>
              <div className='social-links-h'>Social</div>
              <div className='social-links-items'>
                {footerData.length !== 0 && (
                  <>
                    <a href={footerData[0].socialLinks.socialUrl1}>
                      {footerData[0].socialLinks.socialName1}
                    </a>
                    <a href={footerData[0].socialLinks.socialUrl2}>
                      {footerData[0].socialLinks.socialName2}
                    </a>
                    <a href={footerData[0].socialLinks.socialUrl3}>
                      {footerData[0].socialLinks.socialName3}
                    </a>
                    <a href={footerData[0].socialLinks.socialUrl4}>
                      {footerData[0].socialLinks.socialName4}
                    </a>
                  </>
                )}
                <br />
                <br />
              </div>
            </div>
            <div className='footer-menu social-links'>
              <div className='footer-menu-h social-links-h'>Menu</div>
              <div className='footer-menu-links social-links-items'>
                <a href='/about' className='footer-menu-links-items'>
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
