import { useState } from 'react';
import styled from 'styled-components';

// Estilos para el contenedor de la barra de navegación
const NavbarContainer = styled.nav`
  font-family:outfit;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0rem 0rem 0rem 0rem;
  background-color: rgb(63, 134, 242, 45);
  color: #fff;
  position: fixed; /* Fija la navbar en la parte superior */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

// Estilos para el logo
const Logo = styled.img`
  cursor: pointer;
  width: auto;
  height: 3rem;
  margin: 0.4rem;
`;

// Contenedor de enlaces para vista de escritorio
const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none; // Ocultar en dispositivos móviles
  }
`;

// Enlace individual
const NavLink = styled.li`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
  }
`;

// Icono de menú para dispositivos móviles
const MenuIcon = styled.div`
  display: none;
  font-size: 2.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; // Mostrar en dispositivos móviles
  }
`;

// Contenedor para el menú desplegable en móviles
const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  max-width: 100%;
  background-color: #021757;
  padding: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (min-width: 769px) {
    display: none; // Ocultar en dispositivos grandes
  }
`;

// Lista de enlaces en el menú móvil
const MobileNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin: 0;
  padding: 1rem 0 1rem 0;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para hacer scroll suave a una sección
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para hacer scroll a la parte superior
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para alternar el estado del menú en móviles
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      {/* Logo de la página */}
      <Logo onClick={scrollToTop} src="/logo.svg" alt="Logo" />

      {/* Enlaces en vista de escritorio */}
      <NavLinks>
        <NavLink onClick={() => scrollToSection('Productos')}>Productos</NavLink>
        <NavLink onClick={() => scrollToSection('Servicios')}>Servicios</NavLink>
        <NavLink onClick={() => scrollToSection('Contacto')}>Contacto</NavLink>
      </NavLinks>

      {/* Icono de menú para dispositivos móviles */}
      <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>

      {/* Menú desplegable en móviles */}
      <MobileMenu isOpen={menuOpen}>
        <MobileNavLinks>
          <NavLink onClick={() => { scrollToSection('Productos'); toggleMenu(); }}>Productos</NavLink>
          <NavLink onClick={() => { scrollToSection('Servicios'); toggleMenu(); }}>Servicios</NavLink>
          <NavLink onClick={() => { scrollToSection('Contacto'); toggleMenu(); }}>Contacto</NavLink>
        </MobileNavLinks>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
