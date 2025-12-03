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
          <Copy>Con más de 18 años de experiencia que nos respaldan siendo lideres en la manofactura de uniformes industriales, escolares, ejecutivos, hospitalarios, etc. Complementando con los servicios de bordado, serigrafía, y vinil textil, entre otros.</Copy>
        </TextContainer>
      </InicioContainer>
      <Bajar onClick={Scroll}><img src='./Bajar.svg'/></Bajar>
    </SectionBackground>
  </>
);

export default Inicio;
