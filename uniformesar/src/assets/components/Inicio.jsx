import styled from 'styled-components';

const SectionBackground = styled.div`
  display: flex;
  flex-direction: column; 
  width:100dvw;
  height: 96dvh;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  padding-top: 2rem;
  background-image: url('./Fondo.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;



  /* Media Queries */
  @media (max-width: 769px) { /* Tablet */
    gap: 6rem;
    padding-top: 6rem;
  }

  @media (max-width: 425px) { /* Móvil */
    gap: 4rem;
    padding-top: 6rem; 
  }
`;

const InicioContainer = styled.div`
  width: 80dvw;
  background-color: rgba(255, 255, 255, 0.25);
  gap: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem 2rem 2rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 5px black;

  /* Media Queries */
  @media (max-width: 769px) { /* Tablet */
    flex-direction: column;
    gap: 4rem;
    width: 85dvw;
  }

  @media (max-width: 425px) { /* Móvil */
    flex-direction: column;
    width: 80%;
    padding: 1rem;
    gap: 2rem;
  }
`;

const LogoContainer = styled.img`
  width: 30dvw;

  /* Media Queries */
  @media (max-width: 769px) { /* Tablet */
    width: 35dvw;
  }

  @media (max-width: 425px) { /* Móvil */
    width: 40dvw;
  }
`;

const TextContainer = styled.div`
  width: 40dvw;
  text-align: start;
  gap: 2rem;

  /* Media Queries */
  @media (max-width: 769px) { /* Tablet */
    width: 60dvw;
    gap: 1.5rem;
  }

  @media (max-width: 425px) { /* Móvil */
    width: 80dvw;
    gap: 1rem;
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: 3.3rem;
  text-shadow: 1px 1px 7px black;

  /* Media Queries */
  @media (max-width: 769px) { /* Tablet */
    font-size: 2.5rem;
  }

  @media (max-width: 425px) { /* Móvil */
    font-size: 2.5rem;
  }
`;

const Copy = styled.div`
  font-size: 1rem;
  text-align: justify;
  text-shadow: 1px 1px 7px black;

  /* Media Queries */
  @media (max-width: 769px) { /* Tablet */
    font-size: 0.9rem;
  }

  @media (max-width: 425px) { /* Móvil */
    font-size: 1rem;
  }
`;

const Welcome = () => {
  return (
    <SectionBackground>
      <InicioContainer>
        <LogoContainer src="icono.svg" />
        <TextContainer>
          <Title>Uniformes A&R</Title>
          <Copy>
            Con más de 10 años de experiencia en confección y diseño de uniformes. Creamos la marca Uniformes A&R, que más
            que un uniforme de trabajo es ropa cómoda, confortable, resistente y con un diseño innovador por lo que estamos
            comprometidos contigo. Tenemos el compromiso de brindarte la mejor imagen de trabajo y casual que necesitas,
            a través de nuestros uniformes.
          </Copy>
        </TextContainer>
      </InicioContainer>
      <img src="Bajar.svg" alt="Bajar" />
    </SectionBackground>
  );
};

export default Welcome;
