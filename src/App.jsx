import React, { Suspense, useState, useEffect, useRef } from 'react';
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
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Performance Optimization: Defer rendering below-the-fold components
  // until they are about to enter the viewport to reduce initial bundle size and JS execution.
  // We maintain minHeight to prevent layout shift.
  return (
    <div ref={domRef} style={{ minHeight: minHeight }}>
      {isVisible ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
};

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'><LazySection minHeight="100vh"><Productos /></LazySection></section>
      <section id='Servicios'><LazySection minHeight="100vh"><Servicios /></LazySection></section>
      <section id='Contacto'><LazySection minHeight="50vh"><Contacto /></LazySection></section>
      <section id='Footer'><LazySection minHeight="20vh"><Footer /></LazySection></section>
    </>
  )
}

export default App
