import React, { lazy } from 'react';
import NavBar from './assets/components/NavBar.jsx';
import Inicio from './assets/components/Inicio.jsx';
import LazySection from './assets/components/LazySection.jsx';

// Lazy loading below-the-fold components
const Productos = lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = lazy(() => import('./assets/components/Footer.jsx'));

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'>
        <LazySection minHeight='800px'>
          <Productos />
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight='800px'>
          <Servicios />
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight='500px'>
          <Contacto />
        </LazySection>
      </section>
      {/* Intentionally keeping the second Contacto id based on existing code */}
      <section id='Contacto'>
        <LazySection minHeight='300px'>
          <Footer />
        </LazySection>
      </section>
    </>
  )
}

export default App
