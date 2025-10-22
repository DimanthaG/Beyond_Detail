import React, { useEffect, useRef, useState } from 'react';
import { images } from '../../constants';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import './Navbar2.scss';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar2() {
  const [scrolled, setScrolled] = useState(false);

  let navigate = useNavigate();

  const canvasRef = useRef();
  const navLinksRef = useRef();
  const liRefAbout = useRef();
  const liRefTints = useRef();
  const liRefServices = useRef();
  const liRefGallery = useRef();
  const liRefContact = useRef();
  const logoRef = useRef();

  // toggle mobile menu on icon click
  useEffect(() => {
    canvasRef.current.addEventListener('click', () => {
      navLinksRef.current.classList.toggle('nav-active');
      liRefAbout.current.classList.toggle('list-about-active');
      liRefTints.current.classList.toggle('list-tints-active');
      liRefServices.current.classList.toggle('list-services-active');
      liRefGallery.current.classList.toggle('list-gallery-active');
      liRefContact.current.classList.toggle('list-contact-active');
      canvasRef.current.classList.toggle('toggle');
    });

    liRefAbout.current.addEventListener('click', () => {
      navLinksRef.current.classList.toggle('nav-active');
      liRefAbout.current.classList.toggle('list-about-active');
      liRefTints.current.classList.toggle('list-tints-active');
      liRefServices.current.classList.toggle('list-services-active');
      liRefGallery.current.classList.toggle('list-gallery-active');
      liRefContact.current.classList.toggle('list-contact-active');
      canvasRef.current.classList.toggle('toggle');
    });

    liRefTints.current.addEventListener('click', () => {
      navLinksRef.current.classList.toggle('nav-active');
      liRefAbout.current.classList.toggle('list-about-active');
      liRefTints.current.classList.toggle('list-tints-active');
      liRefServices.current.classList.toggle('list-services-active');
      liRefGallery.current.classList.toggle('list-gallery-active');
      liRefContact.current.classList.toggle('list-contact-active');
      canvasRef.current.classList.toggle('toggle');
    });

    liRefServices.current.addEventListener('click', () => {
      navLinksRef.current.classList.toggle('nav-active');
      liRefAbout.current.classList.toggle('list-about-active');
      liRefTints.current.classList.toggle('list-tints-active');
      liRefServices.current.classList.toggle('list-services-active');
      liRefGallery.current.classList.toggle('list-gallery-active');
      liRefContact.current.classList.toggle('list-contact-active');
      canvasRef.current.classList.toggle('toggle');
    });

    liRefGallery.current.addEventListener('click', () => {
      navLinksRef.current.classList.toggle('nav-active');
      liRefAbout.current.classList.toggle('list-about-active');
      liRefTints.current.classList.toggle('list-tints-active');
      liRefServices.current.classList.toggle('list-services-active');
      liRefGallery.current.classList.toggle('list-gallery-active');
      liRefContact.current.classList.toggle('list-contact-active');
      canvasRef.current.classList.toggle('toggle');
    });

    liRefContact.current.addEventListener('click', () => {
      navLinksRef.current.classList.toggle('nav-active');
      liRefAbout.current.classList.toggle('list-about-active');
      liRefTints.current.classList.toggle('list-tints-active');
      liRefServices.current.classList.toggle('list-services-active');
      liRefGallery.current.classList.toggle('list-gallery-active');
      liRefContact.current.classList.toggle('list-contact-active');
      canvasRef.current.classList.toggle('toggle');
    });

    logoRef.current.addEventListener('click', () => {
      navLinksRef.current.classList.toggle('nav-active');
      liRefAbout.current.classList.toggle('list-about-active');
      liRefTints.current.classList.toggle('list-tints-active');
      liRefServices.current.classList.toggle('list-services-active');
      liRefGallery.current.classList.toggle('list-gallery-active');
      liRefContact.current.classList.toggle('list-contact-active');
      canvasRef.current.classList.toggle('toggle');
    });
  }, []);

  // make navbar fixed on scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else if (offset < 80) {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='app__navbar-logo'>
        <img
          src={images.logo2}
          alt='beyond detail logo'
          className='logo'
          loading='lazy'
          ref={logoRef}
          onClick={() => navigate('/')}
        />
      </div>
      <div className='app__mobile-logo'>
        <img
          src={images.mobileLogo}
          alt='beyond detail logo'
          className='mobileLogo'
          loading='lazy'
          onClick={() => navigate('/')}
        />
      </div>
      <ul className='nav-links' ref={navLinksRef}>
        <li
          className='itemList list-about'
          ref={liRefAbout}
          onClick={() => navigate('/about')}
        >
          <span className='itemSpan' onClick={() => navigate('/about')}>
            <div className='linkItem' onClick={() => navigate('/about')}>
              about
            </div>
          </span>
        </li>

        <li
          className='itemList list-tints'
          ref={liRefTints}
          onClick={() => navigate('/tints')}
        >
          <span className='itemSpan' onClick={() => navigate('/tints')}>
            <div className='linkItem' onClick={() => navigate('/tints')}>
              tints
            </div>
          </span>
        </li>

        <li
          className='itemList list-services'
          ref={liRefServices}
          onClick={() => navigate('/services')}
        >
          <span className='itemSpan' onClick={() => navigate('/services')}>
            <div className='linkItem' onClick={() => navigate('/services')}>
              services
            </div>
          </span>
        </li>

        <li
          className='itemList list-gallery'
          ref={liRefGallery}
          onClick={() => navigate('/gallery')}
        >
          <span className='itemSpan' onClick={() => navigate('/gallery')}>
            <div className='linkItem' onClick={() => navigate('/gallery')}>
              gallery
            </div>
          </span>
        </li>

        <li
          className='itemList list-contact'
          ref={liRefContact}
          onClick={() => navigate('/contact')}
        >
          <span className='itemSpan' onClick={() => navigate('/contact')}>
            <div className='linkItem' onClick={() => navigate('/contact')}>
              contact
            </div>
          </span>
        </li>
        <br />
        <h3 className='mobilePhoneIcon list-phoneIcon'>
          <BsFillTelephoneFill className='phoneIcon' /> 647-689-6109
        </h3>
        <div className='socialIcons__container__navBar'>
          <div className='socialIcons__icon__navBar instagram'>
            <span>
              <a href='http://google.com' target='_blank'>
                <BsInstagram />
              </a>
            </span>
          </div>

          <div className='socialIcons__icon__navBar twitter'>
            <span>
              <a href='http://google.com' target='_blank'>
                <BsTwitter />
              </a>
            </span>
          </div>

          <div className='socialIcons__icon__navBar facebook'>
            <span>
              <a href='http://google.com' target='_blank'>
                <FaFacebookF />
              </a>
            </span>
          </div>
        </div>
        <li>
          <h3 className='nav-divider'>|</h3>
        </li>
        <li>
          <h3>
            <BsFillTelephoneFill className='phoneIcon' />
            <a href='tel: +1 (647) 689-6109'>647-689-6109</a>
          </h3>
        </li>
        <li></li>
      </ul>

      <div className='burger' ref={canvasRef}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
}

export default Navbar2;
