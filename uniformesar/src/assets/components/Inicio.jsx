import styled from 'styled-components';

const SectionBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
  background: url('./Fondo.jpg');
  background-size: cover;
  background-position: center;
  gap: 8rem;

  /* Media Queries */
  @media (max-width: 1024px) { /* Tablet */
    gap: 6rem;
  }

  @media (max-width: 768px) { /* Móvil */
    gap: 4rem;
  }
`;

const InicioContainer = styled.div`
  width: 80dvw;
  background-color: rgb(255, 255, 255, 0.25);
  gap: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem 2rem 2rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 7px black;

  /* Media Queries */
  @media (max-width: 769px) { /* Tablet */
    flex-direction: column;
    gap: 4rem;
  }

  @media (max-width: 425px) { /* Móvil */
    flex-direction: column;
    width: 90dvw;
    padding: 1rem;
  }
`;

const LogoContainer = styled.img`
  width: 30dvw;

  /* Media Queries */
  @media (max-width: 769) { /* Tablet */
    width: 40dvw;
  }

  @media (max-width: 425) { /* Móvil */
    width: 50dvw;
  }
`;

const TextContainer = styled.div`
  width: 40dvw;
  text-align: start;
  gap: 3rem;

  /* Media Queries */
  @media (max-width: 769) { /* Tablet */
    width: 60dvw;
  }

  @media (max-width: 425) { /* Móvil */
    width: 80dvw;
  }
`;

const Title = styled.div`
  font-size: 3.3rem;
  text-shadow: 1px 1px 7px black;

  /* Media Queries */
  @media (max-width: 769) { /* Tablet */
    font-size: 2.5rem;
  }

  @media (max-width: 425) { /* Móvil */
    font-size: 2rem;
  }
`;

const Copy = styled.div`
  font-size: 1rem;
  text-align: justify;
  text-shadow: 1px 1px 7px black;

  /* Media Queries */
  @media (max-width: 769) { /* Tablet */
    font-size: 0.9rem;
  }

  @media (max-width: 425) { /* Móvil */
    font-size: 0.8rem;
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
            Con Más de 10 años de experiencia En confección y diseño de uniformes. Creamos la marca Uniformes A&R, que más
            que un uniforme de trabajo es ropa cómoda confortable resistente y con un diseño innovador por lo que estamos
            comprometidos contigo. Tenemos el compromiso de brindarte la mejor imagen de trabajo y casual que tu necesitas,
            a través de sus uniformes.
          </Copy>
        </TextContainer>
      </InicioContainer>
      <img src="Bajar.svg" alt="Bajar" />
    </SectionBackground>
  );
};

export default Welcome;
