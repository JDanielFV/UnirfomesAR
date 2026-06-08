import React, { useState, useEffect, useRef, Suspense } from 'react';

export default function LazySection({ children, minHeight }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // ⚡ Bolt Optimization: Maintaining minHeight permanently prevents
  // Cumulative Layout Shift (CLS) while Suspense fetches the lazy component.
  return (
    <div ref={ref} style={{ minHeight }}>
      {isVisible ? (
        <Suspense fallback={null}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}
