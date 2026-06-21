import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

// Lazy load below-the-fold components
const Productos = lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = lazy(() => import('./assets/components/Footer.jsx'));

// Wrapper for Intersection Observer based loading
function LazySection({ children, minHeight }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const refCurrent = sectionRef.current;
    if (!refCurrent) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(refCurrent);
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(refCurrent);
    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ minHeight }}>
      {isVisible ? children : null}
    </div>
  );
}

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'>
        <Inicio />
      </section>
      <section id='Productos'>
        <LazySection minHeight="100vh">
          <Suspense fallback={null}>
            <Productos />
          </Suspense>
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="100vh">
          <Suspense fallback={null}>
            <Servicios />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="50vh">
          <Suspense fallback={null}>
            <Contacto />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="20vh">
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </LazySection>
      </section>
    </>
  )
}

export default App
