import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Service linking configuration
 * Maps service names (case-insensitive) to their routes
 */
const SERVICE_ROUTES = {
  'window tint': '/tint',
  'window tinting': '/tint',
  'paint correction': '/paint-correction',
  'ceramic coating': '/ceramic-coatings',
  'ceramic coatings': '/ceramic-coatings',
  'auto detailing': '/auto-detail',
  'interior detailing': '/interior-detailing',
  'exterior detailing': '/exterior-detailing',
  'headlight restoration': '/headlight-restoration',
  'odour removal': '/odour-removal',
  'leather cleaning': '/leather-cleaning',
  'paint removal': '/paint-removal',
  'fleet services': '/fleet-services',
  'fleet service': '/fleet-services',
};

/**
 * Creates a regex pattern to match service names
 * Orders by length (longest first) to avoid partial matches
 */
const createServicePattern = () => {
  const services = Object.keys(SERVICE_ROUTES).sort((a, b) => b.length - a.length);
  return new RegExp(`\\b(${services.join('|')})\\b`, 'gi');
};

const SERVICE_PATTERN = createServicePattern();

/**
 * Component that automatically converts service mentions to internal links
 * 
 * @param {string} text - The text content to process
 * @param {string} className - Optional CSS class for links
 * @returns {React.ReactNode} - JSX with service names converted to links
 */
export const ServiceLinker = ({ text, className = '' }) => {
  if (!text) return null;

  const parts = [];
  let lastIndex = 0;
  let match;

  // Reset regex
  SERVICE_PATTERN.lastIndex = 0;

  while ((match = SERVICE_PATTERN.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the linked service name
    const serviceName = match[1].toLowerCase();
    const route = SERVICE_ROUTES[serviceName];
    
    if (route) {
      parts.push(
        <Link
          key={match.index}
          to={route}
          className={className || 'service-link'}
          onClick={(e) => {
            // Scroll to top when navigating
            window.scrollTo(0, 0);
          }}
        >
          {match[0]}
        </Link>
      );
    } else {
      // Fallback: just add the text if route not found
      parts.push(match[0]);
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // If no matches found, return original text
  if (parts.length === 0) {
    return text;
  }

  return <>{parts}</>;
};

/**
 * Utility function to process text and return an array of React elements
 * Useful for more complex scenarios
 */
export const linkServicesInText = (text, className = '') => {
  if (!text) return text;

  const parts = [];
  let lastIndex = 0;
  let match;

  SERVICE_PATTERN.lastIndex = 0;

  while ((match = SERVICE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const serviceName = match[1].toLowerCase();
    const route = SERVICE_ROUTES[serviceName];
    
    if (route) {
      parts.push(
        <Link
          key={match.index}
          to={route}
          className={className || 'service-link'}
          onClick={() => window.scrollTo(0, 0)}
        >
          {match[0]}
        </Link>
      );
    } else {
      parts.push(match[0]);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

export default ServiceLinker;

