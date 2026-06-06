import React, { Suspense, useState, useEffect, useRef } from 'react'
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

const Productos = React.lazy(() => import('./assets/components/Productos.jsx'))
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'))
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'))
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'))

// ⚡ Bolt: Wrapper to conditionally render components only when they scroll into view
const LazySection = ({ children, minHeight }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Once visible, we can stop observing
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      }
    });

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

  // ⚡ Bolt: Maintain minHeight permanently to prevent CLS when the network fetch happens
  return (
    <div ref={domRef} style={{ minHeight }}>
      {isVisible ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
};

function App() {
  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      {/* ⚡ Bolt: Lazy load below-the-fold sections inside the anchor target section */}
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
      {/* Note: Contacto and Footer share the same id, but we maintain the structure and lazy load both */}
      <section id='Contacto'>
        <LazySection minHeight="500px">
          <Contacto />
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="200px">
          <Footer />
        </LazySection>
      </section>
    </>
  )
}

export default App
