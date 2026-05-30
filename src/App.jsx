import React, { Suspense } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'
import LazySection from './assets/components/LazySection.jsx'

// Performance Optimization: Deferring loading of below-the-fold components
// using React.lazy to split the bundle and improve initial page load speed.
const Productos = React.lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'));

function App() {

  // Performance Optimization: Wrapping lazy components in LazySection (IntersectionObserver)
  // Ensures the browser only fetches the bundle when the element approaches the viewport.
  // Note: The LazySection wrapper is intentionally placed INSIDE the structural
  // <section id="..."> to avoid breaking internal anchor link navigations.
  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'>
        <LazySection minHeight="800px">
          <Suspense fallback={null}>
            <Productos />
          </Suspense>
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="800px">
          <Suspense fallback={null}>
            <Servicios />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="600px">
          <Suspense fallback={null}>
            <Contacto />
          </Suspense>
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="200px">
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </LazySection>
      </section>
    </>
  )
}

export default App
