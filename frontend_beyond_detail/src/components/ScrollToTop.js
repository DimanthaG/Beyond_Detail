import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return;
      }
    }

    // Check if this is a service page (has a hero section)
    const servicePages = [
      '/paint-correction',
      '/ceramic-coatings',
      '/interior-detailing',
      '/exterior-detailing',
      '/headlight-restoration',
      '/odour-removal',
      '/leather-cleaning',
      '/paint-removal',
      '/fleet-services',
      '/tint',
      '/auto-detail'
    ];

    const isServicePage = servicePages.some(page => pathname === page || pathname.startsWith(page + '/'));

    if (isServicePage) {
      // Scroll to hero section on service pages
      setTimeout(() => {
        const heroElement = document.getElementById('hero');
        if (heroElement) {
          heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Fallback to top if hero not found
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      // For other pages, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
