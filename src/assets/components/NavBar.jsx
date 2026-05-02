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

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
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

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

// Icono de menú para dispositivos móviles
const MenuIcon = styled.button`
  display: none;
  font-size: 2.5rem;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  outline: none;

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

  // Función para manejar teclado en elementos interactivos
  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <NavbarContainer>
      {/* Logo de la página */}
      <Logo
        onClick={scrollToTop}
        onKeyDown={(e) => handleKeyDown(e, scrollToTop)}
        src="/logo.svg"
        alt="Logo"
        tabIndex={0}
        role="button"
      />

      {/* Enlaces en vista de escritorio */}
      <NavLinks>
        <NavLink
          onClick={() => scrollToSection('Productos')}
          onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('Productos'))}
          tabIndex={0}
          role="button"
        >Productos</NavLink>
        <NavLink
          onClick={() => scrollToSection('Servicios')}
          onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('Servicios'))}
          tabIndex={0}
          role="button"
        >Servicios</NavLink>
        <NavLink
          onClick={() => scrollToSection('Contacto')}
          onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('Contacto'))}
          tabIndex={0}
          role="button"
        >Contacto</NavLink>
      </NavLinks>

      {/* Icono de menú para dispositivos móviles */}
      <MenuIcon
        onClick={toggleMenu}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        &#9776;
      </MenuIcon>

      {/* Menú desplegable en móviles */}
      <MobileMenu id="mobile-menu" isOpen={menuOpen}>
        <MobileNavLinks>
          <NavLink
            onClick={() => { scrollToSection('Productos'); toggleMenu(); }}
            onKeyDown={(e) => handleKeyDown(e, () => { scrollToSection('Productos'); toggleMenu(); })}
            tabIndex={0}
            role="button"
          >Productos</NavLink>
          <NavLink
            onClick={() => { scrollToSection('Servicios'); toggleMenu(); }}
            onKeyDown={(e) => handleKeyDown(e, () => { scrollToSection('Servicios'); toggleMenu(); })}
            tabIndex={0}
            role="button"
          >Servicios</NavLink>
          <NavLink
            onClick={() => { scrollToSection('Contacto'); toggleMenu(); }}
            onKeyDown={(e) => handleKeyDown(e, () => { scrollToSection('Contacto'); toggleMenu(); })}
            tabIndex={0}
            role="button"
          >Contacto</NavLink>
        </MobileNavLinks>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
