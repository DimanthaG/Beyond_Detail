import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components';
import { Home, Search, Phone, ArrowRight } from 'lucide-react';
import './Error.scss';

function Error() {
  // Set HTTP status code for proper 404 handling
  useEffect(() => {
    // This helps with server-side rendering and proper HTTP status
    if (typeof window !== 'undefined') {
      document.title = '404 - Page Not Found | Beyond Detail';
    }
  }, []);

  return (
    <div className='error-container'>
      <SEO
        title="404 - Page Not Found | Beyond Detail"
        description="The page you are looking for could not be found. Return to Beyond Detail's homepage for professional auto detailing, window tinting, and ceramic coating services in Scarborough."
        noindex={true}
      />

      <div className="error-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="error-actions">
          <Link to="/" className="error-button error-button--primary">
            <Home size={20} />
            <span>Go to Homepage</span>
          </Link>
          <a href="tel:+16476896109" className="error-button error-button--secondary">
            <Phone size={20} />
            <span>Call Us: (647) 689-6109</span>
          </a>
        </div>

        <div className="error-links">
          <h2>Popular Pages:</h2>
          <div className="error-links-grid">
            <Link to="/tint" className="error-link">
              <ArrowRight size={16} />
              <span>Window Tinting</span>
            </Link>
            <Link to="/ceramic-coatings" className="error-link">
              <ArrowRight size={16} />
              <span>Ceramic Coating</span>
            </Link>
            <Link to="/paint-correction" className="error-link">
              <ArrowRight size={16} />
              <span>Paint Correction</span>
            </Link>
            <Link to="/auto-detail" className="error-link">
              <ArrowRight size={16} />
              <span>Auto Detailing</span>
            </Link>
            <Link to="/about" className="error-link">
              <ArrowRight size={16} />
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="error-link">
              <ArrowRight size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
