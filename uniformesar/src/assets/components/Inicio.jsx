import styled from 'styled-components';
import { SectionBackground, InicioContainer, LogoContainer, TextContainer, Title, Copy } from './Components.js';

const Bajar = styled.button`
background: rgba(0, 0, 0, 0); 
margin: 5dvi;
border: none;
cursor: pointer;

&:hover{
  transform: scale(1.1);
  transition: all 0.5s ease;
}
`
const Scroll = () => {
    const section = document.getElementById('Productos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Inicio = () => (


  <>
    <SectionBackground>
      <InicioContainer>
        <LogoContainer src="/icono.svg" alt="Logo" />
        <TextContainer>
          <Title>Uniformes A&R</Title>
          <Copy>Con más de 10 años de experiencia En confección y diseño de uniformes. Creamos la marca Uniformes A&R, que más que un uniforme de trabajo es ropa cómoda confortable resistente y con un diseño innovador por lo que estamos comprometidos contigo. Tenemos el compromiso de brindarte la mejor imagen de trabajo y casual que tu necesitas, a través de sus uniformes.</Copy>
        </TextContainer>
      </InicioContainer>
      <Bajar onClick={Scroll}><img src='./Bajar.svg'/></Bajar>
    </SectionBackground>
  </>
);

export default Inicio;
