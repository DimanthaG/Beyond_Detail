// GA4 Custom Event Tracking
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Conversion events
export const trackPhoneClick = (source = 'unknown') => {
  trackEvent('phone_click', { event_category: 'conversion', event_label: source });
};

export const trackFormSubmit = (formType = 'contact') => {
  trackEvent('form_submit', { event_category: 'conversion', event_label: formType });
};

export const trackBookingStart = () => {
  trackEvent('booking_start', { event_category: 'conversion' });
};

export const trackBookingComplete = () => {
  trackEvent('booking_complete', { event_category: 'conversion' });
};

export const trackCTAClick = (ctaName, page) => {
  trackEvent('cta_click', { event_category: 'engagement', event_label: ctaName, page });
};
