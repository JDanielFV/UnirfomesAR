import React, { Suspense, useState, useEffect, useRef } from 'react';
import NavBar from './assets/components/NavBar.jsx';
import Inicio from './assets/components/Inicio.jsx';

const Productos = React.lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'));

// IntersectionObserver wrapper to conditionally render components when they enter the viewport
const LazySection = ({ children, minHeight = '50vh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { rootMargin: '200px' } // Load slightly before coming into view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense> : null}
    </div>
  );
};

function App() {
  return (
    <>
      <NavBar />
      {/* Above the fold components are loaded synchronously */}
      <section id='Inicio'>
        <Inicio />
      </section>

      {/* Below the fold components are lazy loaded via IntersectionObserver */}
      <section id='Productos'>
        <LazySection minHeight='100vh'>
          <Productos />
        </LazySection>
      </section>

      <section id='Servicios'>
        <LazySection minHeight='80vh'>
          <Servicios />
        </LazySection>
      </section>

      <section id='Contacto'>
        <LazySection minHeight='60vh'>
          <Contacto />
        </LazySection>
      </section>

      {/* Fixing duplicate id issue from original code, assuming Footer should just follow Contacto */}
      <section id='Footer'>
        <LazySection minHeight='20vh'>
          <Footer />
        </LazySection>
      </section>
    </>
  );
}

export default App;
