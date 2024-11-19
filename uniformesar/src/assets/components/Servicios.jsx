import { Copy, CopyServicios, ServicioContainer, ServicioTexto, Title, TitleServicios } from "./Components"




const Servicios = () => {
  return (
    <>
      <Title>Nuestros Servicios</Title>
      <Copy>Te ofrecemos una variedad de servicios de alta calidad en costura, confección, estampado en vinil y bordado, diseñados para darle vida a tus ideas y personalizar tus prendas con un toque único. Cada proyecto es atendido con dedicación, asegurando que cada detalle refleje el estilo y la calidad que buscas.</Copy>
      <ServicioContainer src="/evaluacion.jpg" color='90deg, rgba(101,9,9,1) 0%, rgba(255,255,255,0) 100%' alignItems='star'>
        <ServicioTexto>
          <TitleServicios>Evaluacion de riesgos</TitleServicios>
          <CopyServicios>Nuestros expertos analizan detalladamente cada aspecto del entorno, desde la infraestructura hasta los materiales utilizados</CopyServicios>
        </ServicioTexto>
      </ServicioContainer  >
      <ServicioContainer src="./diseno.webp" color='270deg, rgba(101,9,9,1) 0%, rgba(255,255,255,0) 100%' alignItems='end'>
        <ServicioTexto>
          <TitleServicios>Diseño e instalación de sistemas contra incendios</TitleServicios>
          <CopyServicios>Desarrollamos e implementamos soluciones personalizadas, incluyendo sistemas de rociadores automáticos, alarmas contra incendio</CopyServicios>
        </ServicioTexto>
      </ServicioContainer>
      <ServicioContainer src="./capacitacion.jpg" color='90deg, rgba(101,9,9,1) 0%, rgba(255,255,255,0) 100%' alignItems='start'>
        <ServicioTexto>
          <TitleServicios>Capacitación en seguridad</TitleServicios>
          <CopyServicios>ofrecemos programas de capacitación para el personal y los residentes, abordando temas cruciales como la prevención de incendios</CopyServicios>
        </ServicioTexto>
      </ServicioContainer>
      <ServicioContainer src="./mantenimiento.jpg" color='270deg, rgba(101,9,9,1) 0%, rgba(255,255,255,0) 100%' alignItems='end'>
        <ServicioTexto>
          <TitleServicios>Mantenimiento y pruebas regulares</TitleServicios>
          <CopyServicios>Nuestra empresa proporciona servicios de mantenimiento programado y pruebas regulares para garantizar el funcionamiento oóptimo de los sistemas contra incendios</CopyServicios>
        </ServicioTexto>
      </ServicioContainer>
    </>
  )
}

export default Servicios
