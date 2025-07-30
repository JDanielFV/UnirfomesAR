import styled from "styled-components"
import { Copy, CopyServicios, ServicioContainer, ServicioTexto, Title, TitleServicios, TextContainer, CardBtn } from "./Components"

const ServiciosContiner = styled(Title)`
margin: 5dvi 0 5dvi 0;
width: 100%;
background-color: rgba(5,58,108,1);

`

const TextsContainer = styled(TextContainer)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 7dvi 5dvi 7dvi 5dvi;
`

const Servicios = () => {
  return (
    <ServiciosContiner>
      <TextsContainer>
      <Title>Nuestros Servicios</Title>
      <Copy>Te ofrecemos una variedad de servicios de alta calidad en costura, confección, estampado en vinil y bordado, diseñados para darle vida a tus ideas y personalizar tus prendas con un toque único. Cada proyecto es atendido con dedicación, asegurando que cada detalle refleje el estilo y la calidad que buscas.</Copy>
      </TextsContainer>
      <ServicioContainer src="/bordado.webp" color='90deg, rgba(5, 58, 108, 1) 0%, rgba(255,255,255,0) 100%' alignItems='star'>
        <ServicioTexto>
          <TitleServicios>Bordado</TitleServicios>
          <CopyServicios>Nuestra atención meticulosa
            al detalle y la habilidad diseño
            se combinan para dar vida a tu logo
            o diseño en cada prenda personalizada.
            Añade un toque de profesionalismo
            y distinción a tus uniformes y productos.</CopyServicios>
            <CardBtn href={'https://wa.me/525621288935?text=Hola,%20me%20interesa%20el%20servicio%20de%20Bordado,%20me%20regalas%20m%C3%A1s%20informaci%C3%B3n?'} target="_blank" rel="noopener noreferrer">Conoce más</CardBtn>
        </ServicioTexto>
      </ServicioContainer  >
      <ServicioContainer src="/Serigrafia.png" color='270deg, rgba(5, 58, 108, 1) 0%, rgba(255,255,255,0) 100%' alignItems='end'>
        <ServicioTexto>
          <TitleServicios>Serigrafía</TitleServicios>
          <CopyServicios>Desde diseños llamativos
            hasta logotipos elegantes, permitiendonos cumplir con la calidad requerida en las diferentes técnicas para resaltar tu diseño.</CopyServicios>
            <CardBtn href={'https://wa.me/525621288935?text=Hola,%20me%20interesa%20el%20servicio%20de%20Serigraf%C3%ADa,%20me%20regalas%20m%C3%A1s%20informaci%C3%B3n?'} target="_blank" rel="noopener noreferrer">Conoce más</CardBtn>
        </ServicioTexto>
      </ServicioContainer>
      <ServicioContainer src="/Vinil.webp" color='90deg, rgba(5, 58, 108, 1) 0%, rgba(255,255,255,0) 100%' alignItems='start'>
        <ServicioTexto>
          <TitleServicios>Corte de vinil</TitleServicios>
          <CopyServicios>Dale vida a tu visión con nuestro servicio de
            estampado en vinil textil de alta calidad.
            Recomendado para playeras tipo dry-fit, cuello redondo y gorras.</CopyServicios>
            <CardBtn href={'https://wa.me/525621288935?text=Hola,%20me%20interesa%20el%20servicio%20de%20Corte%20de%20vinil,%20me%20regalas%20m%C3%A1s%20informaci%C3%B3n?'} target="_blank" rel="noopener noreferrer">Conoce más</CardBtn>
        </ServicioTexto>
      </ServicioContainer>
      <ServicioContainer src="/Costura.png" color='270deg, rgba(5, 58, 108, 1) 0%, rgba(255,255,255,0) 100%' alignItems='end'>
        <ServicioTexto>
          <TitleServicios>Costura y confección</TitleServicios>
          <CopyServicios>Nuestro equipo de expertos en confección está comprometido con la excelencia, empleando técnicas tradicionales y modernas para adaptar cada prenda a tus necesidades y estilo personal.</CopyServicios>
          <CardBtn href={'https://wa.me/525621288935?text=Hola,%20me%20interesa%20el%20servicio%20de%20Costura%20y%20confecci%C3%B3n,%20me%20regalas%20m%C3%A1s%20informaci%C3%B3n?'} target="_blank" rel="noopener noreferrer">Conoce más</CardBtn>
        </ServicioTexto>
      </ServicioContainer>
    </ServiciosContiner>
  )
}

export default Servicios
