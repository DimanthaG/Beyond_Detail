import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../../assets/logo_1.svg';
import mobileLogo from '../../assets/logo_mobile_small.png';
import './Navbar2.scss';

function Navbar2({ className = '' }) {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setNavActive(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Window Tint', path: '/tint', className: 'list-tints-active' },
    { name: 'Paint Correction', path: '/paint-correction', className: 'list-paint-correction-active' },
    { name: 'Ceramic Coating', path: '/ceramic-coatings', className: 'list-ceramic-coating-active' },
    { name: 'Pricing', path: '/pricing', className: 'list-pricing-active' },
    {
      name: 'Services',
      path: '/auto-detail',
      className: 'list-other-services-active',
      dropdown: [
        { name: 'Auto Detailing', path: '/auto-detail' },
        { name: 'Interior Detailing', path: '/interior-detailing' },
        { name: 'Exterior Detailing', path: '/exterior-detailing' },
        { name: 'Headlight Restoration', path: '/headlight-restoration' },
        { name: 'Odour Removal', path: '/odour-removal' },
        { name: 'Leather Cleaning', path: '/leather-cleaning' },
        { name: 'Paint Removal', path: '/paint-removal' },
        { name: 'Fleet Services', path: '/fleet-services' }
      ]
    },
    {
      name: 'About Us',
      path: '/about',
      className: 'list-about-us-active',
      dropdown: [
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Areas We Serve', path: '/areas-we-serve' },
        { name: 'Tint Laws', path: '/window-tinting-laws-ontario' },
        { name: 'FAQs', path: '/faqs' },
        { name: 'Blog', path: '/blog' }
      ]
    },
    { name: 'Contact', path: '/contact', className: 'list-contact-active' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${className}`}>
      <Link to="/" className="app__navbar-logo">
        <img src={logo} alt="Beyond Detail Logo" />
      </Link>
      <div className="mobile-brand-container">
        <Link to="/" className="mobile-logo-link">
          <img src={mobileLogo} alt="Beyond Detail Logo" />
        </Link>
        <div className="mobile-brand-title">
          BEYOND DETAIL <span>TORONTO</span>
        </div>
      </div>
      <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
        {navLinks.map((link, index) => (
          <li key={index} className={link.className || ''} onClick={() => !link.dropdown && setNavActive(false)}>
            {link.dropdown ? (
              <div className="navbar__dropdown">
                <div
                  className="navbar__dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const dropdownKey = link.name.toLowerCase();
                    setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="linkItem">{link.name}</span>
                  <ChevronDown className={`navbar__dropdown-icon ${openDropdown === link.name.toLowerCase() ? 'navbar__dropdown-icon--open' : ''}`} size={16} />
                </div>
                {openDropdown === link.name.toLowerCase() && (
                  <ul className="navbar__dropdown-menu">
                    {link.dropdown.map((item, idx) => (
                      <li key={idx} className="navbar__dropdown-item">
                        <Link
                          to={item.path}
                          className="linkItem"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown(null);
                            setNavActive(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link to={link.path} className="linkItem">{link.name}</Link>
            )}
          </li>
        ))}

      </ul>
      <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={() => setNavActive(!navActive)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar2;
