import styled from 'styled-components'
import Cta from '../components/Cta'

const CursosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  background-image: url(/bg3.jpeg);
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;
  text-align: center;
  gap: 5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 23, 87, 0.76);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`

const Title = styled.p`
  font-size: 4rem;
  font-weight: 400;
  color: #FFFFFF;

  /* Breakpoints para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 3rem; /* Pantallas medianas (tablets) */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Pantallas pequeñas (móviles) */
  }
`

const Copy = styled.p`
  font-size: 1.5rem;
  color: #DDDDDD;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;

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
const CursoContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 2rem;
& :hover {
    transform: scale(1.05);
    transition: all 0.5s ease;
    cursor: pointer;
}

@media (max-width: 480px) {
   display: flex;
   flex-direction: column;
   align-items:center;
   width: 75dvw;
  }
`

const CursoTarjeta = styled.p`
text-align: center;
background-color: #FFFFFF;
width: 22rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0rem 0 1rem 0;
border-radius: 1rem;
overflow: hidden;
object-fit: cover;

@media (max-width: 480px) {
    width: 75dvw;
  }
`
const CursoImagen = styled.img`
  background-image: url(${props => props.src});
  aspect-ratio: 3/2;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: auto;
`
const CursoTextos = styled.p`
text-align: center;
font-size: 1.5rem;
padding: 2rem 1rem 1rem 1rem;
`


const Cursos = () => {
    return (
        <CursosContainer>
            <Title>¿Ya conoces nuestros cursos?</Title>
            <Copy>En nuestra empresa, ofrecemos cursos especializados en prevención de incendios diseñados para proteger vidas y bienes. Aprenderás a identificar riesgos, utilizar extintores y tomar medidas preventivas clave para evitar emergencias. Nuestros entrenadores certificados te brindarán herramientas prácticas para responder de manera rápida y segura en caso de incendio.</Copy>
            <CursoContainer>
                <CursoTarjeta>
                    <CursoImagen src="/bases.png"></CursoImagen>
                    <CursoTextos>Bases en Sistemas Contra Incendio (NFPA 13, 14, 20, 25)</CursoTextos>
                    <Cta text={"Conoce más"}/>
                </CursoTarjeta>
                <CursoTarjeta>
                    <CursoImagen src="/programacion.png"></CursoImagen>
                    <CursoTextos>Aprende a Programar Notifier: VeriFire Tools</CursoTextos>
                    <Cta text={"Conoce más"}/>
                </CursoTarjeta>
                <CursoTarjeta>
                    <CursoImagen src="/nfpa2.webp"></CursoImagen>
                    <CursoTextos>NFPA 25: Aprende Sobre Mantenimientos en Sistemas Contra Incendios</CursoTextos>
                    <Cta text={"Conoce más"}/>
                </CursoTarjeta>
                <CursoTarjeta>
                    <CursoImagen src="/nfpa.webp"></CursoImagen>
                    <CursoTextos>NFPA 72: Diseño de un Sistema de Alarmas</CursoTextos>
                    <Cta text={"Conoce más"}/>
                </CursoTarjeta>
            </CursoContainer>
        </CursosContainer>
    )
}

export default Cursos
