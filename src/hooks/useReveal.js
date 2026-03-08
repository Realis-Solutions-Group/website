import { useEffect } from 'react';

const REVEAL_SELECTOR = '.reveal';
const OBSERVER_OPTIONS = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px',
};

/**
 * Observes elements with class "reveal" and adds "visible" when they enter view.
 * Call with a dependency (e.g. page id) so it re-runs when the view changes and new elements mount.
 */
export function useReveal(dependency) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, OBSERVER_OPTIONS);

    const timer = setTimeout(() => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [dependency]);
}
