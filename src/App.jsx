import { useState, useEffect, useRef } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'
import Productos from './assets/components/Productos.jsx'
import Servicios from './assets/components/Servicios.jsx'
import Contacto from './assets/components/Contacto.jsx'
import Footer from './assets/components/Footer.jsx'

// Performance Optimization: Delay loading below-the-fold components
// until they enter the viewport to reduce initial payload and execution time.
const LazySection = ({ children, minHeight = "100vh" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '200px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? children : null}
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
      <section id='Footer'><LazySection minHeight="10vh"><Footer /></LazySection></section>
    </>
  )
}

export default App
