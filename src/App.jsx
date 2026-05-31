import React, { lazy } from 'react'
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'
import LazySection from './assets/components/LazySection.jsx'

const Productos = lazy(() => import('./assets/components/Productos.jsx'))
const Servicios = lazy(() => import('./assets/components/Servicios.jsx'))
const Contacto = lazy(() => import('./assets/components/Contacto.jsx'))
const Footer = lazy(() => import('./assets/components/Footer.jsx'))

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'><LazySection minHeight='100vh'><Productos /></LazySection></section>
      <section id='Servicios'><LazySection minHeight='100vh'><Servicios /></LazySection></section>
      <section id='Contacto'><LazySection minHeight='100vh'><Contacto /></LazySection></section>
      <section id='Contacto'><LazySection minHeight='20vh'><Footer /></LazySection></section>
    </>
  )
}

export default App
