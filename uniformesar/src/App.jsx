import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'
import Productos from './assets/components/Productos.jsx'
import Servicios from './assets/components/Servicios.jsx'
import Contacto from './assets/components/Contacto.jsx'


function App() {

  return (
    <>
      <NavBar></NavBar>
      <section id='Inicio'><Inicio /></section>
      <section id='Productos'><Productos /></section>
      <section id='Servicios'><Servicios /></section>
      <section id='Contacto'><Contacto /></section>
    </>
  )
}

export default App
