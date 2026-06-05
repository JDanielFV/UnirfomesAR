import React, { Suspense } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'
import LazySection from './assets/components/LazySection.jsx';

const Productos = React.lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'));

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
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
        <LazySection minHeight="100vh">
          <Suspense fallback={null}>
            <Contacto />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="10vh">
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </LazySection>
      </section>
    </>
  )
}

export default App
