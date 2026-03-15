'use client';

import React from 'react';
import './ShareButtons.scss';

export const ShareButtons = ({ title, url, className = '' }) => {
  const shareUrl = typeof window !== 'undefined' ? (url || window.location.href) : url;
  const encodedTitle = encodeURIComponent(title || 'Beyond Detail - Professional Auto Detailing in Scarborough & Toronto');
  const encodedUrl = encodeURIComponent(shareUrl);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      // You could add a toast notification here
    }
  };

  return (
    <div className={`share-buttons ${className}`}>
      <span className="share-buttons__label">Share:</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-buttons__btn share-buttons__btn--facebook"
        aria-label="Share on Facebook"
      >
        Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-buttons__btn share-buttons__btn--twitter"
        aria-label="Share on Twitter"
      >
        Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-buttons__btn share-buttons__btn--linkedin"
        aria-label="Share on LinkedIn"
      >
        LinkedIn
      </a>
      <button
        onClick={handleCopy}
        className="share-buttons__btn share-buttons__btn--copy"
        aria-label="Copy link"
      >
        Copy Link
      </button>
    </div>
  );
};

export default ShareButtons;

