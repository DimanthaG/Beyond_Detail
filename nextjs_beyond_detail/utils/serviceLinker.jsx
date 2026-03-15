'use client';

import Link from 'next/link';

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

const createServicePattern = () => {
  const services = Object.keys(SERVICE_ROUTES).sort((a, b) => b.length - a.length);
  return new RegExp(`\\b(${services.join('|')})\\b`, 'gi');
};

const SERVICE_PATTERN = createServicePattern();

export const ServiceLinker = ({ text, className = '' }) => {
  if (!text) return null;

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
          href={route}
          className={className || 'service-link'}
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

  if (parts.length === 0) {
    return text;
  }

  return <>{parts}</>;
};

export default ServiceLinker;
