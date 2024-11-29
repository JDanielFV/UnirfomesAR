import styled from 'styled-components';

// Estilos para el contenedor de la barra de navegación
const Footer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: top;
  padding: 3rem 0rem 3rem 0rem;
  background-color: #053A6C;
  font-family: outfit;
`
const FooterContainer = styled.div`
color: #FFFFFF;
flex-direction: column;
display: flex;
align-items: center;
gap: 1rem;
`
const FooterLink = styled.a`
color: #FFFFFF;
text-decoration: none;
cursor: pointer;
`
const FooterTitle = styled.nav`
font-size: 1.3rem;
margin-bottom: .5rem;
font-weight: 500;
`
const Disclaimer = styled.a`
font-size: 1rem;
background-color: #053A6C;
color: #FFFFFF;
text-align: center;
padding: 1rem 0rem 1rem 0rem;
font-family: outfit;
display: flex;
align-items: center;
text-align: center;
text-decoration: none;
width: 100%;
`

const Navbar = () => {
    // Función para hacer scroll suave a una sección
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Footer>
                <FooterContainer>
                    <FooterTitle>Mapa de sitio</FooterTitle>
                    <FooterLink onClick={() => scrollToSection('Productos')}>Productos</FooterLink>
                    <FooterLink onClick={() => scrollToSection('servicios')}>Servicios</FooterLink>
                    <FooterLink onClick={() => scrollToSection('Contacto')}>Contacto</FooterLink>
                </FooterContainer>
                <FooterContainer>
                    <FooterTitle>Contactanos</FooterTitle>
                    <FooterLink href='tel:6863567581'>Telefono</FooterLink>
                    <FooterLink href='mailto:contacto@petrovsci.com.mx'>Correo</FooterLink>
                    <FooterLink href='https://www.facebook.com/profile.php?id=61555431474610'>Facebook</FooterLink>
                    <FooterLink href='https://www.linkedin.com/company/petrov-soluciones-contra-incendio/'>LinkedIn</FooterLink>
                </FooterContainer>
            </Footer>
            <Disclaimer href='http://wa.me/+525649770838'>Desarrollado por: Daniel Flores - 2024</Disclaimer>
        </>
    );
};

export default Navbar;
