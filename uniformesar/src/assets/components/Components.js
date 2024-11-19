import styled from "styled-components";

// Breakpoints centralizados para media queries
const breakpoints = {
    tablet: "769px",
    mobile: "425px",
};

// Sección de fondo
export const SectionBackground = styled.div`
  width: 100dvw;
  height: 95dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  padding-top: 2rem;
  background-image: url(${props => props.bckgrnd}); 
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;


  @media (max-width: ${breakpoints.tablet}) {
    gap: 6rem;
    padding-top: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 4rem;
    padding-top: 2rem;
  }
`;

// Contenedor principal
export const InicioContainer = styled.div`
  width: 80dvw;
  background-color: rgba(255, 255, 255, 0.25);
  gap: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem 2rem 2rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 5px black;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 4rem;
    width: 85dvw;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    width: 80%;
    padding: 1rem;
    gap: 2rem;
  }
`;

// Contenedor de logo
export const LogoContainer = styled.img`
  width: 30dvw;

  @media (max-width: ${breakpoints.tablet}) {
    width: 35dvw;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 40dvw;
  }
`;

// Contenedor de texto
export const TextContainer = styled.div`
  width: 40dvw;
  text-align: start;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 60dvw;
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 80dvw;
    gap: 1rem;
    text-align: center;
  }
`;

// Título
export const Title = styled.div`
  font-size: 3.3rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

// Texto de copia
export const Copy = styled.div`
  font-size: 1.3rem;
  text-align: justify;
  font-family: outfit;
  font-weight: 400;
  margin: 2rem 0 2rem 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

// Sección de fondo
export const ProductsContainer = styled.div`
font-family: outfit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
padding: 4rem;
background-color: #FFFFFF;
color: #000000;
padding: 5rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 6rem;
    padding-top: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 4rem;
    padding-top: 2rem;
  }
`;

export const Cards = styled.div`
  background-image: url(${props => props.bckgrnd}); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 15rem;
  height: 21rem;
  border-radius: 15px;
  box-shadow: 3px 5px 6px rgb(0 0 0 / 40%);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  gap: 1rem;
  `;

export const CardBtn = styled.button`
  background-color: #FFF;
  color: #053A6C;
  font-size: 1rem;
  margin: 1rem;
  font-size: 1.2rem;
  `
export const CardText = styled.button`
  font-size: 1.5rem;
  font-family: outfit;
  font-weight: 700;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
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
width: 80dvw;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
gap: 2rem;
`