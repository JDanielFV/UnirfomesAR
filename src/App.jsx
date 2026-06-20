import React, { Suspense } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'
import LazySection from './assets/components/LazySection.jsx'

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
        <LazySection minHeight="100vh">
          <Suspense fallback={<div>Loading...</div>}>
            <Contacto />
          </Suspense>
        </LazySection>
      </section>
      {/* Keeping duplicate ID from previous state to maintain single-page anchors */}
      <section id='Contacto'>
        <LazySection minHeight="200px">
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </LazySection>
      </section>
    </>
  )
}

export default App
