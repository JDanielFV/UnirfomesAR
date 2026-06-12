import React, { Suspense, useState, useEffect, useRef } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

// Lazy load below-the-fold components to reduce initial bundle size and speed up page load
const Productos = React.lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'));

// LazySection triggers loading only when the component enters the viewport
function LazySection({ children, minHeight = '100vh' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (currentRef) observer.unobserve(currentRef);
      }
    }, { rootMargin: '200px' });

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={domRef} style={{ minHeight }}>
      {isVisible ? <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense> : null}
    </div>
  );
}

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'><LazySection minHeight="100vh"><Productos /></LazySection></section>
      <section id='Servicios'><LazySection minHeight="100vh"><Servicios /></LazySection></section>
      <section id='Contacto'><LazySection minHeight="100vh"><Contacto /></LazySection></section>
      <section id='Contacto'><LazySection minHeight="20vh"><Footer /></LazySection></section>
    </>
  )
}

export default App
