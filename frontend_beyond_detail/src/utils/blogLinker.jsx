import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Blog Internal Linking Configuration
 * Maps keywords and phrases to internal pages for automatic linking
 */

// Service routes
const SERVICE_ROUTES = {
  'window tint': '/tint',
  'window tinting': '/tint',
  'window tint shop': '/tint',
  'car tint': '/tint',
  'ceramic tint': '/tint',
  'paint correction': '/paint-correction',
  'ceramic coating': '/ceramic-coatings',
  'ceramic coatings': '/ceramic-coatings',
  'auto detailing': '/auto-detail',
  'car detailing': '/auto-detail',
  'interior detailing': '/interior-detailing',
  'exterior detailing': '/exterior-detailing',
  'headlight restoration': '/headlight-restoration',
  'paint protection': '/ceramic-coatings',
  'paint protection film': '/ceramic-coatings',
};

// Location routes
const LOCATION_ROUTES = {
  'scarborough': '/car-detailing-scarborough',
  'toronto': '/auto-detail',
  'markham': '/car-detailing-markham',
  'pickering': '/car-detailing-pickering',
  'north york': '/car-detailing-north-york',
  'gta': '/auto-detail',
  'greater toronto area': '/auto-detail',
};

// Service + Location combinations (priority matching)
const SERVICE_LOCATION_ROUTES = {
  'window tint scarborough': '/window-tinting-scarborough',
  'window tinting scarborough': '/window-tinting-scarborough',
  'window tint toronto': '/tint',
  'window tinting toronto': '/tint',
  'window tint markham': '/window-tinting-markham',
  'window tinting markham': '/window-tinting-markham',
  'window tint pickering': '/window-tinting-pickering',
  'window tinting pickering': '/window-tinting-pickering',
  'ceramic coating scarborough': '/ceramic-coating-scarborough',
  'ceramic coating toronto': '/ceramic-coatings',
  'ceramic coating markham': '/ceramic-coating-markham',
  'ceramic coating pickering': '/ceramic-coating-pickering',
  'paint correction scarborough': '/paint-correction-scarborough',
  'paint correction toronto': '/paint-correction',
  'paint correction markham': '/paint-correction-markham',
  'paint correction pickering': '/paint-correction-pickering',
  'car detailing scarborough': '/car-detailing-scarborough',
  'car detailing toronto': '/auto-detail',
  'car detailing markham': '/car-detailing-markham',
  'car detailing pickering': '/car-detailing-pickering',
  'auto detailing scarborough': '/car-detailing-scarborough',
  'auto detailing toronto': '/auto-detail',
  'auto detailing markham': '/car-detailing-markham',
  'auto detailing pickering': '/car-detailing-pickering',
};

/**
 * Creates regex patterns for matching
 * Priority: Service+Location > Service > Location
 */
const createPatterns = () => {
  // Service + Location (longest first)
  const serviceLocationKeys = Object.keys(SERVICE_LOCATION_ROUTES)
    .sort((a, b) => b.length - a.length);
  const serviceLocationPattern = new RegExp(
    `\\b(${serviceLocationKeys.join('|')})\\b`,
    'gi'
  );

  // Services (longest first)
  const serviceKeys = Object.keys(SERVICE_ROUTES)
    .sort((a, b) => b.length - a.length);
  const servicePattern = new RegExp(
    `\\b(${serviceKeys.join('|')})\\b`,
    'gi'
  );

  // Locations (longest first)
  const locationKeys = Object.keys(LOCATION_ROUTES)
    .sort((a, b) => b.length - a.length);
  const locationPattern = new RegExp(
    `\\b(${locationKeys.join('|')})\\b`,
    'gi'
  );

  return { serviceLocationPattern, servicePattern, locationPattern };
};

const PATTERNS = createPatterns();

/**
 * Component that automatically converts keywords to internal links in blog content
 * 
 * @param {string} text - The text content to process
 * @param {string} className - Optional CSS class for links
 * @param {number} maxLinks - Maximum number of links to create (to avoid over-linking)
 * @returns {React.ReactNode} - JSX with keywords converted to links
 */
export const BlogLinker = ({ text, className = 'blog-internal-link', maxLinks = 10 }) => {
  if (!text) return null;

  const parts = [];
  const linkCount = { count: 0 };
  let lastIndex = 0;
  const processedIndices = new Set();

  // Helper to add a link
  const addLink = (match, route, linkText) => {
    // Check overlapping first to avoid processing same text twice
    const startIdx = match.index;
    const endIdx = match.index + match[0].length;

    let overlaps = false;
    for (const [start, end] of processedIndices) {
      if (!(endIdx <= start || startIdx >= end)) {
        overlaps = true;
        break;
      }
    }

    if (overlaps) {
      // If overlaps, we don't link, but we might need to catch up text if we haven't already.
      // However, the main loop logic handles "gaps" by filling from lastIndex.
      // We just skip this match entirely.
      return;
    }

    // Valid non-overlapping match
    if (linkCount.count >= maxLinks) {
      // Limit reached: treat as normal text
      // We don't increment linkCount, we just append text up to this point + the match text
      if (startIdx > lastIndex) {
        parts.push(text.substring(lastIndex, startIdx));
      }
      parts.push(match[0]);
      lastIndex = endIdx;

      // Mark as processed so we don't try to link it again with a lower priority pattern
      processedIndices.add([startIdx, endIdx]);
      return;
    }

    // Add link
    processedIndices.add([startIdx, endIdx]);
    linkCount.count++;

    // Add text before the match
    if (startIdx > lastIndex) {
      parts.push(text.substring(lastIndex, startIdx));
    }

    // Add the linked text
    parts.push(
      <Link
        key={`link-${startIdx}-${linkCount.count}`}
        to={route}
        className={className}
        onClick={() => window.scrollTo(0, 0)}
      >
        {linkText}
      </Link>
    );

    lastIndex = endIdx;
  };

  // Process Service + Location combinations first (highest priority)
  PATTERNS.serviceLocationPattern.lastIndex = 0;
  const serviceLocationMatches = [];
  let match;
  while ((match = PATTERNS.serviceLocationPattern.exec(text)) !== null) {
    serviceLocationMatches.push(match);
  }

  // Process Service matches
  PATTERNS.servicePattern.lastIndex = 0;
  const serviceMatches = [];
  while ((match = PATTERNS.servicePattern.exec(text)) !== null) {
    // Skip if already matched as service+location
    const isOverlapped = serviceLocationMatches.some(slMatch => {
      const slStart = slMatch.index;
      const slEnd = slMatch.index + slMatch[0].length;
      const sStart = match.index;
      const sEnd = match.index + match[0].length;
      return !(sEnd <= slStart || sStart >= slEnd);
    });
    if (!isOverlapped) {
      serviceMatches.push(match);
    }
  }

  // Process Location matches
  PATTERNS.locationPattern.lastIndex = 0;
  const locationMatches = [];
  while ((match = PATTERNS.locationPattern.exec(text)) !== null) {
    // Skip if already matched as service+location
    const isOverlapped = serviceLocationMatches.some(slMatch => {
      const slStart = slMatch.index;
      const slEnd = slMatch.index + slMatch[0].length;
      const lStart = match.index;
      const lEnd = match.index + match[0].length;
      return !(lEnd <= slStart || lStart >= slEnd);
    });
    if (!isOverlapped) {
      locationMatches.push(match);
    }
  }

  // Combine all matches and sort by position
  const allMatches = [
    ...serviceLocationMatches.map(m => ({ ...m, type: 'serviceLocation' })),
    ...serviceMatches.map(m => ({ ...m, type: 'service' })),
    ...locationMatches.map(m => ({ ...m, type: 'location' }))
  ].sort((a, b) => a.index - b.index);

  // Process matches in order
  allMatches.forEach(match => {
    const matchText = match[0].toLowerCase();
    let route = null;
    let linkText = match[0];

    if (match.type === 'serviceLocation') {
      route = SERVICE_LOCATION_ROUTES[matchText];
    } else if (match.type === 'service') {
      route = SERVICE_ROUTES[matchText];
    } else if (match.type === 'location') {
      route = LOCATION_ROUTES[matchText];
    }

    if (route) {
      addLink(match, route, linkText);
    } else {
      // No route found, just add text
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(match[0]);
      lastIndex = match.index + match[0].length;
    }
  });

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
 * Useful for processing block content
 */
export const linkKeywordsInText = (text, className = 'blog-internal-link', maxLinks = 10) => {
  if (!text) return text;
  return <BlogLinker text={text} className={className} maxLinks={maxLinks} />;
};

export default BlogLinker;

