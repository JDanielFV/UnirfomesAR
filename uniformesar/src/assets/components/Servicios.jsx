import styled from 'styled-components'
import Cta from '../components/Cta'


const TitleServicios = styled.p`
  font-size: 3.5rem;
  font-weight: 500;
  color: #FFF;

  /* Breakpoints para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 3rem; /* Pantallas medianas (tablets) */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Pantallas pequeñas (móviles) */
  }
`

const CopyServicios = styled.p`
  font-size: 1.5rem;
  color: #FFF;
  text-align:center;
  line-height: 1.2;
   margin: 1.5rem 0 1.5rem 0;

  /* Breakpoints para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 1.25rem; /* Pantallas medianas (tablets) */
    max-width: 90%; /* Ajustar el ancho en pantallas medianas */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Pantallas pequeñas (móviles) */
    max-width: 95%; /* Ajustar el ancho en pantallas pequeñas */
  }
`
const ServicioContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems};
  justify-content: space-between;
  height: auto;
  width: auto;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  padding: 5rem 4rem 5rem 4rem ;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(${props => props.color});
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

`
const ServicioTexto = styled.div`
  
  @media (min-width:769px) {
    width: 50%;  }
  
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 98%;
  }
`;



const Servicios = () => {
  return (
    <>
      <ServicioContainer src="/evaluacion.jpg" color='90deg, rgba(101,9,9,1) 0%, rgba(255,255,255,0) 100%' alignItems='star'>
        <ServicioTexto>
          <TitleServicios>Evaluacion de riesgos</TitleServicios>
          <CopyServicios>Nuestros expertos analizan detalladamente cada aspecto del entorno, desde la infraestructura hasta los materiales utilizados</CopyServicios>
          <Cta text={"Conoce mas"} />
        </ServicioTexto>
      </ServicioContainer  >
      <ServicioContainer src="./diseno.webp" color='270deg, rgba(101,9,9,1) 0%, rgba(255,255,255,0) 100%' alignItems='end'>
        <ServicioTexto>
          <TitleServicios>Diseño e instalación de sistemas contra incendios</TitleServicios>
          <CopyServicios>Desarrollamos e implementamos soluciones personalizadas, incluyendo sistemas de rociadores automáticos, alarmas contra incendio</CopyServicios>
          <Cta text={"Conoce mas"} />
        </ServicioTexto>
      </ServicioContainer>
      <ServicioContainer src="./capacitacion.jpg" color='90deg, rgba(101,9,9,1) 0%, rgba(255,255,255,0) 100%' alignItems='start'>
        <ServicioTexto>
          <TitleServicios>Capacitación en seguridad</TitleServicios>
          <CopyServicios>ofrecemos programas de capacitación para el personal y los residentes, abordando temas cruciales como la prevención de incendios</CopyServicios>
          <Cta text={"Conoce mas"} />
        </ServicioTexto>
      </ServicioContainer>
      <ServicioContainer src="./mantenimiento.jpg" color='270deg, rgba(101,9,9,1) 0%, rgba(255,255,255,0) 100%' alignItems='end'>
        <ServicioTexto>
          <TitleServicios>Mantenimiento y pruebas regulares</TitleServicios>
          <CopyServicios>Nuestra empresa proporciona servicios de mantenimiento programado y pruebas regulares para garantizar el funcionamiento oóptimo de los sistemas contra incendios</CopyServicios>
          <Cta text={"Conoce mas"} />
        </ServicioTexto>
      </ServicioContainer>
    </>
  )
}

export default Servicios
