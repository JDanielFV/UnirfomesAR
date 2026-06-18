import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

const Productos = lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = lazy(() => import('./assets/components/Footer.jsx'));

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
    const currentRef = ref.current;
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
      {isVisible ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
};

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'><LazySection minHeight="800px"><Productos /></LazySection></section>
      <section id='Servicios'><LazySection minHeight="400px"><Servicios /></LazySection></section>
      <section id='Contacto'><LazySection minHeight="400px"><Contacto /></LazySection></section>
      <section id='Contacto'><LazySection minHeight="200px"><Footer /></LazySection></section>
    </>
  )
}

export default App
