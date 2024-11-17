import styled from 'styled-components';

const AppContainer = styled.div`
  width: 17rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 15rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 13rem;
    gap: 1rem;
  }
`;

const AppTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const AppText = styled.div`
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const AppMockup = styled.img`
  width: auto;
  height: 35dvw;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    height: 70dvw;
  }

  @media (max-width: 480px) {
    height: 120dvw;
  }
`;

const AppLinkImg = styled.img`
  background-image: url(${props => props.src});
  width: 12rem;
  height: auto;
  border-radius: 1.5rem;

  @media (max-width: 768px) {
    width: 10rem;
  }

  @media (max-width: 480px) {
    width: 8rem;
  }
`;

const AppLink = styled.a`
  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease;
    cursor: pointer;
  }
`;

const AppLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const Promo = styled.div`
  padding: 5rem 2rem;
  background-color: #FFF;
  color: #000;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const AppPromo = () => {
  return (
    <Promo>
      <AppContainer>
        <AppTitle>Prueba nuestra app</AppTitle>
        <AppText>Disponible en App store y Play store, úsala para programar tus mantenimientos regulares</AppText>
      </AppContainer>
      <AppMockup src="/mockups.gif" />
      <AppLinkContainer>
        <AppLink href="https://play.google.com/store/apps/details?id=com.geologisticerp&hl=es_MX">
          <AppLinkImg src="/Playstore.png" />
        </AppLink>
        <AppLink href="https://apps.apple.com/mx/app/geologistic-erp/id6452047734">
          <AppLinkImg src="/Appstore.png" />
        </AppLink>
      </AppLinkContainer>
    </Promo>
  );
};

export default AppPromo;
