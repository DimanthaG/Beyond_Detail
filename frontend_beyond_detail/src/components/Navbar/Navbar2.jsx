import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../../assets/logo_1.svg';
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
    { name: 'About', path: '/about', className: 'list-about-active' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact', className: 'list-contact-active' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${className}`}>
      <Link to="/" className="app__navbar-logo">
        <img src={logo} alt="Beyond Detail Logo" />
      </Link>
      <Link to="/" className="app__mobile-logo">
        <img src={logo} alt="Beyond Detail Logo" />
      </Link>
      <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
        {navLinks.map((link, index) => (
          <li key={index} className={link.className || ''} onClick={() => !link.dropdown && setNavActive(false)}>
            {link.dropdown ? (
              <div className="navbar__dropdown">
                <div className="navbar__dropdown-link" onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === 'services' ? null : 'services'); }}>
                  <Link to={link.path} className="linkItem">{link.name}</Link>
                  <ChevronDown className={`navbar__dropdown-icon ${openDropdown === 'services' ? 'navbar__dropdown-icon--open' : ''}`} size={16} />
                </div>
                {openDropdown === 'services' && (
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
