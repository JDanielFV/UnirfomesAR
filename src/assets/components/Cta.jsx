/* eslint-disable react/prop-types */
import styled from 'styled-components';

// Estilos para el botón
const ScrollButton = styled.button`
  font-family: outfit;
  font-weight: 500;
  background-color: #3B8CC7;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1.3rem;
  transition: background-color 0.3s, transform 0.3s;
  max-width: 14rem;

  &:hover {
    background-color: #002286;
    color: #FFFFFF;
    transform: translateY(-.5rem); // Efecto de elevación
  }
`;

const ScrollToContactButton = ({ text }) => {
  // Función para hacer scroll suave a la sección de contacto
  const scrollToContact = () => {
    const section = document.getElementById('contacto');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <ScrollButton onClick={scrollToContact}>{text}</ScrollButton>;
};

export default ScrollToContactButton;
