import { useState, useEffect, useRef } from 'react';

// ⚡ Bolt Performance Optimization:
// Wraps component to conditionally render only when scrolled near the viewport.
// This prevents immediate network fetches for below-the-fold components and images.
export const LazySection = ({ children, minHeight = '100vh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load slightly before entering viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Provide minHeight to prevent Cumulative Layout Shift (CLS)
  return (
    <div ref={sectionRef} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? children : null}
    </div>
  );
};
