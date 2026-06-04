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
        <LazySection minHeight="800px">
          <Suspense fallback={<div style={{ minHeight: '800px' }}>Cargando Productos...</div>}>
            <Productos />
          </Suspense>
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="600px">
          <Suspense fallback={<div style={{ minHeight: '600px' }}>Cargando Servicios...</div>}>
            <Servicios />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="500px">
          <Suspense fallback={<div style={{ minHeight: '500px' }}>Cargando Contacto...</div>}>
            <Contacto />
          </Suspense>
        </LazySection>
      </section>
      <section id='Footer'>
        <LazySection minHeight="300px">
          <Suspense fallback={<div style={{ minHeight: '300px' }}>Cargando Footer...</div>}>
            <Footer />
          </Suspense>
        </LazySection>
      </section>
    </>
  )
}

export default App
