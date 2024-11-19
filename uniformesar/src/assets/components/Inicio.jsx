import { SectionBackground, InicioContainer, LogoContainer, TextContainer, Title, Copy } from './Components.js';

const App = () => (
  <SectionBackground bckgrnd='./Fondo.jpg'>
    <InicioContainer>
      <LogoContainer src="/icono.svg" alt="Logo" />
      <TextContainer>
        <Title>Uniformes A&R</Title>
        <Copy>Con más de 10 años de experiencia En confección y diseño de uniformes. Creamos la marca Uniformes A&R, que más que un uniforme de trabajo es ropa cómoda confortable resistente y con un diseño innovador por lo que estamos comprometidos contigo. Tenemos el compromiso de brindarte la mejor imagen de trabajo y casual que tu necesitas, a través de sus uniformes.</Copy>
      </TextContainer>
    </InicioContainer>
  </SectionBackground>
);

export default App;
