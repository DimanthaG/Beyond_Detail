import React, { useEffect, useRef, useState } from 'react';
import { images } from '../../constants';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';
import './Navbar2.scss';
import { useNavigate } from 'react-router-dom';

function Navbar2() {
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [otherServicesDropdownOpen, setOtherServicesDropdownOpen] = useState(false);

  let navigate = useNavigate();
  
  // Use refs to track hover state (more reliable than state for this)
  const isHoveringAboutRef = useRef(false);
  const isHoveringOtherServicesRef = useRef(false);

  const canvasRef = useRef();
  const navLinksRef = useRef();
  const liRefTints = useRef();
  const liRefPaintCorrection = useRef();
  const liRefCeramicCoating = useRef();
  const liRefOtherServices = useRef();
  const liRefAbout = useRef();
  const liRefFleetServices = useRef();
  const liRefContact = useRef();
  const logoRef = useRef();

  // Helper function to close mobile menu
  const closeMobileMenu = () => {
    if (navLinksRef.current) {
      navLinksRef.current.classList.remove('nav-active');
      liRefTints.current?.classList.remove('list-tints-active');
      liRefPaintCorrection.current?.classList.remove('list-paint-correction-active');
      liRefCeramicCoating.current?.classList.remove('list-ceramic-coating-active');
      liRefOtherServices.current?.classList.remove('list-other-services-active');
      liRefAbout.current?.classList.remove('list-about-active');
      liRefFleetServices.current?.classList.remove('list-fleet-services-active');
      liRefContact.current?.classList.remove('list-contact-active');
      canvasRef.current?.classList.remove('toggle');
    }
  };

  // toggle mobile menu on icon click
  useEffect(() => {
    const handleMenuToggle = () => {
      if (navLinksRef.current) {
        navLinksRef.current.classList.toggle('nav-active');
        liRefTints.current?.classList.toggle('list-tints-active');
        liRefPaintCorrection.current?.classList.toggle('list-paint-correction-active');
        liRefCeramicCoating.current?.classList.toggle('list-ceramic-coating-active');
        liRefOtherServices.current?.classList.toggle('list-other-services-active');
        liRefAbout.current?.classList.toggle('list-about-active');
        liRefFleetServices.current?.classList.toggle('list-fleet-services-active');
        liRefContact.current?.classList.toggle('list-contact-active');
        canvasRef.current?.classList.toggle('toggle');
      }
    };

    const handleMenuItemClick = () => {
      closeMobileMenu();
    };

    if (canvasRef.current) {
      canvasRef.current.addEventListener('click', handleMenuToggle);
    }

    if (liRefTints.current) {
      liRefTints.current.addEventListener('click', handleMenuItemClick);
    }

    if (liRefPaintCorrection.current) {
      liRefPaintCorrection.current.addEventListener('click', handleMenuItemClick);
    }

    if (liRefCeramicCoating.current) {
      liRefCeramicCoating.current.addEventListener('click', handleMenuItemClick);
    }

    if (liRefFleetServices.current) {
      liRefFleetServices.current.addEventListener('click', handleMenuItemClick);
    }

    if (liRefContact.current) {
      liRefContact.current.addEventListener('click', handleMenuItemClick);
    }

    if (logoRef.current) {
      logoRef.current.addEventListener('click', handleMenuItemClick);
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('click', handleMenuToggle);
      }
      if (liRefTints.current) {
        liRefTints.current.removeEventListener('click', handleMenuItemClick);
      }
      if (liRefPaintCorrection.current) {
        liRefPaintCorrection.current.removeEventListener('click', handleMenuItemClick);
      }
      if (liRefCeramicCoating.current) {
        liRefCeramicCoating.current.removeEventListener('click', handleMenuItemClick);
      }
      if (liRefFleetServices.current) {
        liRefFleetServices.current.removeEventListener('click', handleMenuItemClick);
      }
      if (liRefContact.current) {
        liRefContact.current.removeEventListener('click', handleMenuItemClick);
      }
      if (logoRef.current) {
        logoRef.current.removeEventListener('click', handleMenuItemClick);
      }
    };
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        {/* TINT - Standalone */}
        <li
          className='itemList list-tints'
          ref={liRefTints}
          onClick={() => navigate('/tint')}
        >
          <span className='itemSpan' onClick={() => navigate('/tint')}>
            <div className='linkItem' onClick={() => navigate('/tint')}>
              tint
            </div>
          </span>
        </li>

        {/* PAINT CORRECTION - Standalone */}
        <li
          className='itemList list-paint-correction'
          ref={liRefPaintCorrection}
          onClick={() => navigate('/paint-correction')}
        >
          <span className='itemSpan' onClick={() => navigate('/paint-correction')}>
            <div className='linkItem' onClick={() => navigate('/paint-correction')}>
              paint correction
            </div>
          </span>
        </li>

        {/* CERAMIC COATING - Standalone */}
        <li
          className='itemList list-ceramic-coating'
          ref={liRefCeramicCoating}
          onClick={() => navigate('/ceramic-coatings')}
        >
          <span className='itemSpan' onClick={() => navigate('/ceramic-coatings')}>
            <div className='linkItem' onClick={() => navigate('/ceramic-coatings')}>
              ceramic coating
            </div>
          </span>
        </li>

        {/* OTHER SERVICES - Dropdown */}
        <li
          className='itemList list-other-services navbar__dropdown'
          ref={liRefOtherServices}
          onMouseEnter={() => {
            if (window.innerWidth > 900) {
              isHoveringOtherServicesRef.current = true;
              setOtherServicesDropdownOpen(true);
            }
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 900) {
              isHoveringOtherServicesRef.current = false;
              // Small delay to allow mouse to move to dropdown menu
              setTimeout(() => {
                if (!isHoveringOtherServicesRef.current) {
                  setOtherServicesDropdownOpen(false);
                }
              }, 200);
            }
          }}
        >
          <span 
            className='itemSpan navbar__dropdown-trigger' 
            onClick={(e) => {
              e.stopPropagation();
              setOtherServicesDropdownOpen(!otherServicesDropdownOpen);
            }}
          >
            <div className='linkItem navbar__dropdown-link'>
              other services
              <ChevronDown 
                className={`navbar__dropdown-icon ${otherServicesDropdownOpen ? 'navbar__dropdown-icon--open' : ''}`}
                size={14}
              />
            </div>
          </span>
          {otherServicesDropdownOpen && (
            <ul 
              className='navbar__dropdown-menu'
              onMouseEnter={() => {
                if (window.innerWidth > 900) {
                  isHoveringOtherServicesRef.current = true;
                  setOtherServicesDropdownOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 900) {
                  isHoveringOtherServicesRef.current = false;
                  setTimeout(() => {
                    if (!isHoveringOtherServicesRef.current) {
                      setOtherServicesDropdownOpen(false);
                    }
                  }, 150);
                }
              }}
            >
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/services');
                  setOtherServicesDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>Auto Detail</span>
              </li>
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/interior-detailing');
                  setOtherServicesDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>Interior Detailing</span>
              </li>
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/exterior-detailing');
                  setOtherServicesDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>Exterior Detailing</span>
              </li>
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/headlight-restoration');
                  setOtherServicesDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>Headlight Restoration</span>
              </li>
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/odour-removal');
                  setOtherServicesDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>Odour Removal</span>
              </li>
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/leather-cleaning');
                  setOtherServicesDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>Leather Cleaning</span>
              </li>
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/paint-removal');
                  setOtherServicesDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>Paint Removal</span>
              </li>
            </ul>
          )}
        </li>

        {/* ABOUT US - Dropdown */}
        <li
          className='itemList list-about navbar__dropdown'
          ref={liRefAbout}
          onMouseEnter={() => {
            if (window.innerWidth > 900) {
              isHoveringAboutRef.current = true;
              setAboutDropdownOpen(true);
            }
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 900) {
              isHoveringAboutRef.current = false;
              // Small delay to allow mouse to move to dropdown menu
              setTimeout(() => {
                if (!isHoveringAboutRef.current) {
                  setAboutDropdownOpen(false);
                }
              }, 200);
            }
          }}
        >
          <span 
            className='itemSpan navbar__dropdown-trigger' 
            onClick={(e) => {
              e.stopPropagation();
              setAboutDropdownOpen(!aboutDropdownOpen);
            }}
          >
            <div className='linkItem navbar__dropdown-link'>
              about us
              <ChevronDown 
                className={`navbar__dropdown-icon ${aboutDropdownOpen ? 'navbar__dropdown-icon--open' : ''}`}
                size={14}
              />
            </div>
          </span>
          {aboutDropdownOpen && (
            <ul 
              className='navbar__dropdown-menu'
              onMouseEnter={() => {
                if (window.innerWidth > 900) {
                  isHoveringAboutRef.current = true;
                  setAboutDropdownOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 900) {
                  isHoveringAboutRef.current = false;
                  setTimeout(() => {
                    if (!isHoveringAboutRef.current) {
                      setAboutDropdownOpen(false);
                    }
                  }, 150);
                }
              }}
            >
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/about');
                  setAboutDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>About Us</span>
              </li>
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/faqs');
                  setAboutDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>FAQs</span>
              </li>
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/gallery');
                  setAboutDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>Gallery</span>
              </li>
              <li 
                className='navbar__dropdown-item'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/blog');
                  setAboutDropdownOpen(false);
                  closeMobileMenu();
                }}
              >
                <span className='linkItem'>Blog</span>
              </li>
            </ul>
          )}
        </li>

        {/* FLEET SERVICES - Standalone */}
        <li
          className='itemList list-fleet-services'
          ref={liRefFleetServices}
          onClick={() => navigate('/fleet-services')}
        >
          <span className='itemSpan' onClick={() => navigate('/fleet-services')}>
            <div className='linkItem' onClick={() => navigate('/fleet-services')}>
              fleet services
            </div>
          </span>
        </li>

        {/* CONTACT US - Standalone */}
        <li
          className='itemList list-contact'
          ref={liRefContact}
          onClick={() => navigate('/contact')}
        >
          <span className='itemSpan' onClick={() => navigate('/contact')}>
            <div className='linkItem' onClick={() => navigate('/contact')}>
              contact us
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
              <a href='https://www.instagram.com/beyonddetail.ca/' target='_blank' rel='noopener noreferrer'>
                <BsInstagram />
              </a>
            </span>
          </div>

          <div className='socialIcons__icon__navBar twitter'>
            <span>
              <a href='https://x.com/BeyondDetailca' target='_blank' rel='noopener noreferrer'>
                <BsTwitter />
              </a>
            </span>
          </div>

          <div className='socialIcons__icon__navBar facebook'>
            <span>
              <a href='https://www.facebook.com/people/Beyond-Detail-Scarborough/100088669617846/' target='_blank' rel='noopener noreferrer'>
                <FaFacebookF />
              </a>
            </span>
          </div>
        </div>
        <li className='desktop-only'>
          <h3 className='nav-divider'>|</h3>
        </li>
        <li className='desktop-only'>
          <h3>
            <BsFillTelephoneFill className='phoneIcon' />
            <a href='tel: +1 (647) 689-6109'>647-689-6109</a>
          </h3>
        </li>
        <li className='desktop-only'></li>
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
