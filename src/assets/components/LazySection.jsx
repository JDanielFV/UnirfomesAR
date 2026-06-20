import React, { useState, useEffect, useRef } from 'react';

const LazySection = ({ children, minHeight = '100vh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const refCurrent = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(refCurrent);
        }
      },
      {
        rootMargin: '100px 0px',
        threshold: 0.1
      }
    );

    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ minHeight }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;
