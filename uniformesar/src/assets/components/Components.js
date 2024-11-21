import styled from "styled-components";

// Breakpoints centralizados para media queries
const breakpoints = {
  tablet: "768px",
  mobile: "425px",
};

// Sección de fondo
export const SectionBackground = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-image: url(./Fondo.jpg); 
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
  }

  
  `

// Contenedor principal`
export const InicioContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  padding: 2dvi;
  gap: 2dvi;
  margin: 10dvi 12dvi 10dvi 12dvi;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 1px 1px 5px black;

  @media (max-width: ${breakpoints.tablet}) {
  flex-direction: column;
  margin: 30dvi 5dvi 20dvi 5dvi;
  }

  @media (max-width: ${breakpoints.mobile}) {
  flex-direction: column;
  }
`;

// Contenedor de logo
export const LogoContainer = styled.img`
  width: 24dvi;
  @media (max-width: ${breakpoints.tablet}) {
    width: 60dvi;
  }

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

// Contenedor de texto
export const TextContainer = styled.div`
margin: 2dvi;
  gap: 1dvi;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
  gap: 5dvi;
  }

  @media (max-width: ${breakpoints.mobile}){

  }

`;

// Título
export const Title = styled.div`
font-family: outfit;
font-weight: 600;
  font-size: 4dvi;
  color:#FFF;

  @media (max-width: ${breakpoints.tablet}) {
  font-size: 12dvi;
  }

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

// Texto de copia
export const Copy = styled.div`
  font-size: 1.5dvi;
  font-family: outfit;
  font-weight: 400;
  color:#FFF;

  @media (max-width: ${breakpoints.tablet}) {
  font-size: 5dvi;
  }

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

// Sección de fondo
export const ProductsContainer = styled.div`
font-family: outfit;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 5dvi;
gap: 3dvi;
  
  @media (max-width: ${breakpoints.tablet}) {
  }

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

export const Cards = styled.div`
  background-image: url(${props => props.bckgrnd}); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 12rem;
  height: 19rem;
  border-radius: 15px;
  box-shadow: 3px 5px 6px rgb(0 0 0 / 40%);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  gap: 1rem;

  &:hover{
    cursor: pointer;
    transition: all 0.5s ease;
    transform: scale(1.03);
  }


  @media (max-width: ${breakpoints.tablet}) {
  width: 35dvi;
  height: 55dvi;
  }

  @media (max-width: ${breakpoints.mobile}) {
  }
  `;

export const CardBtn = styled.a`
  background-color: #FFF;
  padding: 0.5dvi;
  color: #053A6C;
  margin: 1rem;
  font-size: 1.4rem;
  border-radius: 10px;
  text-decoration: none;
  
  &:hover{
    background-color: #053A6C;
    color: #FFF;
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 0 0 4px 1px #FFF;
  }

  @media (max-width: ${breakpoints.tablet}) {
  font-size: 4.5dvi;
  border-radius: 5px;;
  }

  @media (max-width: ${breakpoints.mobile}) {
  }

  `
export const CardText = styled.p`
  font-size: 1.5rem;
  font-family: outfit;
  font-weight: 500;
  color:#FFF  
  `
export const CardMask = styled.div`
  width: 100%;
  height: 100%;
 background: rgb(5,58,108);
 background: linear-gradient(0deg, rgba(5,58,108,1) 0%, rgba(5,58,108,0) 100%);
 z-index: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  `
export const CardsContainer = styled.div`
height: auto;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
gap: 1rem;
`

export const TitleServicios = styled.p`
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

export const CopyServicios = styled.p`
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
export const ServicioContainer = styled.div`
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
export const ServicioTexto = styled.div`
  
  @media (min-width:769px) {
    width: 50%;  }
  
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 98%;
  }
`;