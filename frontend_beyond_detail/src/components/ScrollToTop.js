import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top immediately when pathname changes
    // Use scrollTo(0, 0) for maximum compatibility
    window.scrollTo(0, 0);
    
    // Also set scrollTop on document elements for better compatibility
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }

    // If there's a hash in the URL, scroll to that element after a brief delay
    // This allows the page to render first
    if (hash) {
      const scrollToHash = () => {
        const element = document.querySelector(hash);
        if (element) {
          // Calculate offset for fixed navbar (approximately 8vh)
          const navbarHeight = 80; // Approximate navbar height in pixels
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            left: 0,
            behavior: 'smooth'
          });
        }
      };

      // Try immediately, then retry after a short delay if element not found
      scrollToHash();
      const timeoutId = setTimeout(() => {
        scrollToHash();
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname, hash]);

  return null;
}
