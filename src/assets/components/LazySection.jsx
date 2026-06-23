import React, { useState, useEffect, useRef, Suspense } from 'react';

const LazySection = ({ children, minHeight = '500px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, we don't need to observe anymore
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        rootMargin: '200px 0px', // Load slightly before it comes into view
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

  return (
    <div ref={sectionRef} style={{ minHeight }}>
      {isVisible ? (
        <Suspense fallback={<div style={{ minHeight }}></div>}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

export default LazySection;
