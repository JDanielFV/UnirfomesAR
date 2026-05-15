import { lazy, Suspense } from 'react';
import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'

// Performance Optimization: Defer loading of below-the-fold components to reduce initial payload and improve Time to Interactive (TTI)
const Productos = lazy(() => import('./assets/components/Productos.jsx'));
const Servicios = lazy(() => import('./assets/components/Servicios.jsx'));
const Contacto = lazy(() => import('./assets/components/Contacto.jsx'));
const Footer = lazy(() => import('./assets/components/Footer.jsx'));

function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <Suspense fallback={null}>
        <section id='Productos'><Productos /></section>
        <section id='Servicios'><Servicios /></section>
        <section id='Contacto'><Contacto /></section>
        <section id='Contacto'><Footer /></section>
      </Suspense>
    </>
  )
}

export default App
