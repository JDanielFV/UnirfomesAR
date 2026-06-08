import React from 'react'
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'
import LazySection from './assets/components/LazySection.jsx'

const Productos = React.lazy(() => import('./assets/components/Productos.jsx'))
const Servicios = React.lazy(() => import('./assets/components/Servicios.jsx'))
const Contacto = React.lazy(() => import('./assets/components/Contacto.jsx'))
const Footer = React.lazy(() => import('./assets/components/Footer.jsx'))


function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'>
        <LazySection minHeight="800px">
          <Productos />
        </LazySection>
      </section>
      <section id='Servicios'>
        <LazySection minHeight="600px">
          <Servicios />
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="400px">
          <Contacto />
        </LazySection>
      </section>
      <section id='Contacto'>
        <LazySection minHeight="200px">
          <Footer />
        </LazySection>
      </section>
    </>
  )
}

export default App
