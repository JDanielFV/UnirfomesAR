import React, { Suspense, useState, useEffect, useRef } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

const Productos = React.lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'));

const LazySection = ({ children, minHeight = "100vh" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
    <div ref={ref} style={{ minHeight }}>
      {isVisible ? (
        <Suspense fallback={null}>
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
      <section id='Productos'><LazySection minHeight="80vh"><Productos /></LazySection></section>
      <section id='Servicios'><LazySection minHeight="80vh"><Servicios /></LazySection></section>
      <section id='Contacto'><LazySection minHeight="50vh"><Contacto /></LazySection></section>
      <section id='Contacto'><LazySection minHeight="20vh"><Footer /></LazySection></section>
    </>
  )
}

export default App
