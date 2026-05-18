import React, { useState, useEffect, useRef } from 'react';

// Performance Optimization: Defer loading below-the-fold components
// until they are close to entering the viewport to reduce initial bundle
// evaluation and network payload.
export default function LazySection({ children, minHeight = '100vh' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : <div style={{ minHeight }} />}</div>;
}
