import { Suspense, lazy, useEffect, useState, useRef } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

// Performance Optimization: Delay loading components until they enter the viewport to reduce initial payload and improve TTI
const Productos = lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = lazy(() => import('./assets/components/Footer.jsx'));

// eslint-disable-next-line react/prop-types
function LazySection({ id, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref}>
      {isVisible ? children : <div style={{ height: '100vh' }} />}
    </section>
  );
}

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <LazySection id='Productos'>
        <Suspense fallback={null}>
          <Productos />
        </Suspense>
      </LazySection>
      <LazySection id='Servicios'>
        <Suspense fallback={null}>
          <Servicios />
        </Suspense>
      </LazySection>
      <LazySection id='Contacto'>
        <Suspense fallback={null}>
          <Contacto />
        </Suspense>
      </LazySection>
      <LazySection id='Contacto'>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </LazySection>
    </>
  )
}

export default App
