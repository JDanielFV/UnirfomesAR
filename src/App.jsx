import React, { Suspense, useState, useEffect, useRef } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

// Performance Optimization: Defer loading below-the-fold components
// to reduce initial bundle payload and speed up Time To Interactive.
const Productos = React.lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'));

// Performance Optimization: Render components only when they enter the viewport
// using IntersectionObserver. This prevents immediate network requests for
// all lazy-loaded chunks on mount.
function LazySection({ children, minHeight = '100vh' }) {
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
      { rootMargin: '200px 0px' } // Preload slightly before it enters viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? <Suspense fallback={<div style={{ minHeight }}>Loading...</div>}>{children}</Suspense> : null}
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'>
        <LazySection minHeight="100vh">
          <Productos />
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="100vh">
          <Servicios />
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="80vh">
          <Contacto />
        </LazySection>
      </section>
      <section id='Footer'>
        <LazySection minHeight="30vh">
          <Footer />
        </LazySection>
      </section>
    </>
  )
}

export default App
