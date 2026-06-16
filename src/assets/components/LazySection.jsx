import { useState, useEffect, useRef } from 'react';

const LazySection = ({ children, minHeight = '100vh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only load once
        }
      },
      {
        rootMargin: '100px 0px', // Load slightly before it comes into view
        threshold: 0.1
      }
    );

    const currentRef = sectionRef.current;
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
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;
