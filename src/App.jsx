import React, { useState, useEffect, useRef, lazy, Suspense } from 'react'
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

const Productos = lazy(() => import('./assets/components/Productos.jsx'))
const Servicios = lazy(() => import('./assets/components/Servicios.jsx'))
const Contacto = lazy(() => import('./assets/components/Contacto.jsx'))
const Footer = lazy(() => import('./assets/components/Footer.jsx'))

const LazySection = ({ children, minHeight }) => {
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
      { rootMargin: '100px' }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? children : null}
    </div>
  );
};

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'>
        <LazySection minHeight="800px">
          <Suspense fallback={<div style={{ minHeight: '800px' }}>Cargando...</div>}>
            <Productos />
          </Suspense>
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="600px">
          <Suspense fallback={<div style={{ minHeight: '600px' }}>Cargando...</div>}>
            <Servicios />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="500px">
          <Suspense fallback={<div style={{ minHeight: '500px' }}>Cargando...</div>}>
            <Contacto />
          </Suspense>
        </LazySection>
        <LazySection minHeight="200px">
          <Suspense fallback={<div style={{ minHeight: '200px' }}>Cargando...</div>}>
            <Footer />
          </Suspense>
        </LazySection>
      </section>
    </>
  )
}

export default App
