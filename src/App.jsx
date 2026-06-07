import React, { useState, useEffect, useRef, Suspense } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

const Productos = React.lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'));

const LazySection = ({ children, minHeight }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px 0px' });

    const currentRef = domRef.current;
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
    <div ref={domRef} style={{ minHeight: minHeight || '100vh', width: '100%' }}>
      {isVisible ? (
        <Suspense fallback={<div style={{ minHeight: minHeight || '100vh', width: '100%' }}></div>}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'>
        <LazySection minHeight="100vh"><Productos /></LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="100vh"><Servicios /></LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="50vh"><Contacto /></LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="200px"><Footer /></LazySection>
      </section>
    </>
  )
}

export default App
