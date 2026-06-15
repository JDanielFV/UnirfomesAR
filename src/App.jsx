import { lazy, Suspense } from 'react';
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
        <LazySection minHeight="800px">
          <Suspense fallback={<div style={{ minHeight: '800px' }} />}>
            <Productos />
          </Suspense>
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="600px">
          <Suspense fallback={<div style={{ minHeight: '600px' }} />}>
            <Servicios />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="500px">
          <Suspense fallback={<div style={{ minHeight: '500px' }} />}>
            <Contacto />
          </Suspense>
        </LazySection>
      </section>
      {/* Retaining original duplicate Contacto ID section wrapping Footer */}
      <section id='Contacto'>
        <LazySection minHeight="300px">
          <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
            <Footer />
          </Suspense>
        </LazySection>
      </section>
    </>
  )
}

export default App
