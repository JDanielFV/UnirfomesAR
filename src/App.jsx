import React, { Suspense, useState, useEffect, useRef } from 'react'
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

const Productos = React.lazy(() => import('./assets/components/Productos.jsx'))
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'))
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'))
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'))

const LazySection = ({ children, minHeight }) => {
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
      { rootMargin: '200px' }
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

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'>
        <LazySection minHeight="100vh">
          <Suspense fallback={<div>Loading...</div>}>
            <Productos />
          </Suspense>
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="100vh">
          <Suspense fallback={<div>Loading...</div>}>
            <Servicios />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="50vh">
          <Suspense fallback={<div>Loading...</div>}>
            <Contacto />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="30vh">
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </LazySection>
      </section>
    </>
  )
}

export default App
