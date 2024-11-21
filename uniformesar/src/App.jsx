import NavBar from './assets/components/NavBar.jsx'
import Inicio from './assets/components/Inicio.jsx'
import Productos from './assets/components/Productos.jsx'
import Servicios from './assets/components/Servicios.jsx'


function App() {

  return (  
    <>
    <NavBar></NavBar>
    <section id='Inicio'><Inicio/></section>
    <section id='Productos'><Productos/></section>
    <section id='Servicios'><Servicios/></section>
    
    </>
  )
}

export default App
