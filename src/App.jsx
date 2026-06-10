import React, { Suspense, useState, useEffect, useRef } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

const Productos = React.lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'));

// Optimization: Defer loading of off-screen components using Intersection Observer
const LazySection = ({ children, minHeight }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      { rootMargin: '200px' }
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
      {isVisible ? <Suspense fallback={<div style={{ minHeight }}>Cargando...</div>}>{children}</Suspense> : null}
    </div>
  );
};

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'>
        <Inicio />
      </section>
      <section id='Productos'>
        <LazySection minHeight="800px">
          <Productos />
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="600px">
          <Servicios />
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="400px">
          <Contacto />
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="300px">
          <Footer />
        </LazySection>
      </section>
    </>
  )
}

export default App
