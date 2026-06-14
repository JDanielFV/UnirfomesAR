import React, { useState, useEffect, useRef } from 'react';

const LazySection = ({ children, minHeight = '100vh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once it's visible, we don't need to observe it anymore
            if (currentRef) observer.unobserve(currentRef);
          }
        });
      },
      {
        rootMargin: '200px 0px', // Load it slightly before it enters the viewport
        threshold: 0.01,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Always keep minHeight to prevent CLS, as requested by memory guidelines
  return (
    <div ref={sectionRef} style={{ minHeight }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;
