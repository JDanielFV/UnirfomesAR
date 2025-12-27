import styled from "styled-components";
import {
  Title,
  TextsContainer,
  MapContainer,
  ContactList,
  ContactContainer,
  ContactIcon,
  ContactText,
} from "./Components";

const CTitle = styled(Title)`
  color: #000;
`;

function abrirRedSocial() {
  const opcion = prompt("¿Qué red social quieres abrir? Escribe:\n1 para Facebook\n2 para Instagram");

  if (opcion === "1") {
    window.open('https://www.facebook.com/profile.php?id=61584467946957', '_blank');
  } else if (opcion === "2") {
    window.open('https://www.instagram.com/uniformesar/', '_blank');
  } else {
    alert("Por favor elige una opción.");
  }
}

const ContactForm = () => {
  return (
    <>
      <TextsContainer>
        <CTitle>Contáctanos</CTitle>
      </TextsContainer>
      <ContactContainer>
        <MapContainer
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387.70310897587865!2d-98.9689853642734!3d19.713252576035465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ed28019f547d%3A0x3735aa148cfd84aa!2sBorbados%20Y%20Estampados!5e0!3m2!1ses-419!2smx!4v1732639863243!5m2!1ses-419!2smx"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Embed"
        ></MapContainer>
        <ContactList>
          <ContactText href="https://maps.app.goo.gl/QoeqGcHGB2z7rXL77"><ContactIcon src="ubicacion.svg"></ContactIcon>CallePozo Grande #2, Tecámac.</ContactText>
          <ContactText href="https://wa.me/+525621288935"><ContactIcon src="whatsapp.svg"></ContactIcon>56-2128-8935</ContactText>
          <ContactText href="tel:5589500569,103"><ContactIcon src="telefono.svg"></ContactIcon>55-8950-0569 ext. 103</ContactText>
          <ContactText as="div" style={{ cursor: 'default' }}><ContactIcon src="horario.svg"></ContactIcon>Lunes a Viernes de 9:00 am a 2:00 pm</ContactText>
          <ContactText href="#" onClick={abrirRedSocial}><ContactIcon src="facebook.svg"></ContactIcon>A&R Bordados Estampados</ContactText>
          <ContactText href="mailto:contacto@uniformesar.com"><ContactIcon src="mail.svg"></ContactIcon>contacto@uniformesar.com</ContactText>
        </ContactList>
      </ContactContainer>
    </>
  );
};

export default ContactForm;
