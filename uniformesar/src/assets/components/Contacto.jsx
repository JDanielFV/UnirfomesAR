import styled from 'styled-components';
// import { useState } from 'react';

const FormContainer = styled.div`
  background: rgb(101, 9, 9);
  background: linear-gradient(360deg, rgba(101, 9, 9, 1) 0%, rgba(255, 255, 255, 1) 100%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-family: 'Outfit', sans-serif;
  padding: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const FormText = styled.div`
  width: 80vw;
  text-align: center;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const FormTitle = styled.p`
  font-size: 4vw;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 10vw;
  }
  @media (max-width: 480px) {
    font-size: 10dvw;
  }
`;

const FormCopy = styled.p`
  font-size: 2vw;

  @media (max-width: 768px) {
    font-size: 4dvw;
  }
`;

const ContactoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 4rem 0;
`;

const Formulario = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// const Form = styled.div`
//   border-radius: 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 2.5rem;
//   padding: 2rem 1rem;
//   background-color: #FFF;

//   @media (max-width: 768px) {
//     width: 80vw;
//     padding: 1.5rem;
//   }
// `;

// const FormContainerTitle = styled.p`
//   font-size: 2rem;
//   font-weight: 400;

//   @media (max-width: 768px) {
//     font-size: 1.8rem;
//   }
//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// const FormInput = styled.input`
//   font-size: 1.3rem;
//   font-weight: 200;
//   border-radius: 0.5rem;
//   border: none;
//   background-color: #E8E8E8;
//   padding: 0.5rem;
//   width: 100%;
//   font-family: outfit;

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//     padding: 0.4rem;
//   }
// `;

// const FormButton = styled.button`
//   border-radius: 0.3rem;
//   padding: 1rem 2rem;
//   font-size: 1rem;
//   border: none;
//   background-color: #3B8CC7;
//   color: #FFF;
//   cursor: pointer;

//   @media (max-width: 480px) {
//     padding: 0.8rem 1.5rem;
//   }

//   &:hover {
//     background-color: #3379a3;
//   }
// `;

const EnlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const Enlace = styled.div`
  background-color: #650909;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  width: 300px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const EnlaceRedes = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-radius: 1rem;
  padding: 0.1rem 1rem;
  width: 250px;

  @media (max-width: 768px) {
    width: 90%;
    gap: 1rem;
  }
`;

const EnlaceImg = styled.img`
  height: 2rem;
  padding: 0.4rem;

  @media (max-width: 480px) {
    height: 1.5rem;
  }
`;

const EnlaceA = styled.a`
  text-decoration: none;
  color: #FFF;
`;

const LogoEnlace = styled.img`
  width: 15rem;
  padding: 0.4rem;

  @media (max-width: 768px) {
    width: 12rem;
  }
  @media (max-width: 480px) {
    width: 10rem;
  }
`;

const ContactForm = () => {

  return (
    <FormContainer>
      <FormText>
        <FormTitle>Contáctanos</FormTitle>
        <FormCopy>Estás a un click de reducir el riesgo de incendios, ponte en contacto con nosotros</FormCopy>
      </FormText>
      <ContactoContainer>
        <Formulario>
          <EnlaceContainer>
            <Enlace>
              <EnlaceImg src="/Numero.png" alt="Número de contacto" />
              <EnlaceA href="tel:6863567581">686 356 7581</EnlaceA>
            </Enlace>
            <Enlace>
              <EnlaceImg src="/Mail.png" alt="Correo de contacto" />
              <EnlaceA href="mailto:contacto@petrivsci.com.mx">contacto@petrovsci.com.mx</EnlaceA>
            </Enlace>
            <LogoEnlace src='/logo.png' alt="Logo de la empresa" />
            <EnlaceRedes>
              <a href='https://www.facebook.com/profile.php?id=61555431474610'><EnlaceImg src='/Facebook.png' alt="Facebook" /></a>
              <a href='https://www.linkedin.com/company/petrov-soluciones-contra-incendio/'><EnlaceImg src='/Linkedin.png' alt="LinkedIn" /></a>
            </EnlaceRedes>
          </EnlaceContainer>
        </Formulario>
      </ContactoContainer>
    </FormContainer>
  );
};

export default ContactForm;
