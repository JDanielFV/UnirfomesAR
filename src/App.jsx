import React, { Suspense, lazy } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'
import LazySection from './assets/components/LazySection.jsx';

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
        <LazySection minHeight="80vh">
          <Suspense fallback={<div style={{ minHeight: '80vh' }}>Loading...</div>}>
            <Productos />
          </Suspense>
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="80vh">
          <Suspense fallback={<div style={{ minHeight: '80vh' }}>Loading...</div>}>
            <Servicios />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="80vh">
          <Suspense fallback={<div style={{ minHeight: '80vh' }}>Loading...</div>}>
            <Contacto />
          </Suspense>
        </LazySection>
        <LazySection minHeight="20vh">
          <Suspense fallback={<div style={{ minHeight: '20vh' }}>Loading...</div>}>
            <Footer />
          </Suspense>
        </LazySection>
      </section>
    </>
  )
}

export default App
