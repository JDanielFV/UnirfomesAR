import { lazy, Suspense, useState, useEffect, useRef } from 'react'
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

// Performance optimization: Lazy loading sections below the fold
// Impact: Reduces initial bundle size and main thread blocking time.
const Productos = lazy(() => import('./assets/components/Productos.jsx'))
const Servicios = lazy(() => import('./assets/components/Servicios.jsx'))
const Contacto = lazy(() => import('./assets/components/Contacto.jsx'))
const Footer = lazy(() => import('./assets/components/Footer.jsx'))

function LazySection({ children, minHeight }) {
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
      // Begin fetching when the section is within 200px of the viewport
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

  // Performance optimization: Render fallback with minHeight to prevent Cumulative Layout Shift
  // while the lazy loaded component is fetched.
  return (
    <div ref={ref} style={{ minHeight }}>
      {isVisible ? <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense> : null}
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
        <LazySection minHeight="100vh">
          <Contacto />
        </LazySection>
      </section>
      <section id='Footer'>
        <LazySection minHeight="20vh">
          <Footer />
        </LazySection>
      </section>
    </>
  )
}

export default App
