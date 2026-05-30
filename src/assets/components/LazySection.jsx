import React, { useState, useEffect, useRef } from 'react';

const LazySection = ({ children, minHeight = '100vh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible
          if (currentRef) observer.unobserve(currentRef);
        }
      });
    }, { rootMargin: '200px' });

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Performance Optimization: Keeping minHeight constant to prevent Cumulative Layout Shift (CLS)
  // during the Suspense fallback phase while the lazy bundle is fetching over the network.
  return (
    <div ref={domRef} style={{ minHeight: minHeight, width: '100%' }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;
