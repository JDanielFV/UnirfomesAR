import styled from 'styled-components'
import Cta from '../components/Cta'


const ConocenosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  background-image: url(/background2.jpg);
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

const Valores = styled.div`
  font-size: 1.5rem;
  color: #DDDDDD;
  text-align: center;
  max-width: 20rem;
  line-height: 1.3;
  margin: 1rem 0 1rem 0 ;

  /* Breakpoints para pantallas más pequeñas */
  @media (max-width: 768px) {
    font-size: 1.25rem; /* Pantallas medianas (tablets) */
    max-width: 30%; /* Ajustar el ancho en pantallas medianas */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Pantallas pequeñas (móviles) */
    max-width: 90%; /* Ajustar el ancho en pantallas pequeñas */
  }
`

const ImageV = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 3rem;
  margin-bottom: 2rem;
`
const ValoresContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;

@media (max-width: 480px) {
   display: flex;
   flex-direction: column;
   align-items: center;
  }
`

const ValoresTextos = styled.p`
text-align: center;
`
const ValoresTitulo = styled.p`
text-align: center;
font-weight: 400;
font-size: 1.5rem;
margin-bottom: 0.5rem;
`


const Conocenos = () => {
    return (
        <ConocenosContainer>
            <Title>¿Quienes somos?</Title>
            <Copy>Con años de experiencia en el sector, Petrov, Soluciones Contra Incendio, ha construido una sólida reputación por su compromiso con la excelencia y la seguridad. Colaboramos estrechamente con nuestros clientes, entre los que se incluyen empresas destacadas como Herdez, Honeywell, Hielera del Norte, Pisos y Materiales Industriales, y muchos más. Comprendemos sus necesidades específicas y proporcionamos soluciones a medida que superen sus expectativas.</Copy>
            <ValoresContainer>
            <Valores>
                <ImageV src="/MisionIcono.svg" />
                <ValoresTitulo>Misión</ValoresTitulo>
                <ValoresTextos>Proporcionar soluciones innovadoras y efectivas para la prevención y control de incendios en todos los sectores, asegurando la protección de vidas y bienes.</ValoresTextos>
            </Valores>
            <Valores>
                <ImageV src="/VisionIcono.svg" />
                <ValoresTitulo>Visión</ValoresTitulo>
                <ValoresTextos>Proporcionar soluciones innovadoras y efectivas para la prevención y control de incendios en todos los sectores, asegurando la protección de vidas y bienes.</ValoresTextos>
            </Valores>
            </ValoresContainer>
            <Title>Nuestros Servicios</Title>
                <Copy>Con años de experiencia en el sector, Petrov, Soluciones Contra Incendio, ha construido una sólida reputación por su compromiso con la excelencia y la seguridad. Colaboramos estrechamente con nuestros clientes, entre los que se incluyen empresas destacadas como Herdez, Honeywell, Hielera del Norte, Pisos y Materiales Industriales, y muchos más. Comprendemos sus necesidades específicas y proporcionamos soluciones a medida que superen sus expectativas.</Copy>
                <Cta text={"Contactanos"} />

        </ConocenosContainer>
    )
}

export default Conocenos
