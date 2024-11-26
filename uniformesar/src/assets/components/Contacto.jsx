import styled from "styled-components";
import {
  Title,
  TextsContainer,
  MapContainer,
  ContactList,
  ContactContainer
} from "./Components";

const CTitle = styled(Title)`
  color: #000;
`;

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
          <li></li>
        </ContactList>
      </ContactContainer>
    </>
  );
};

export default ContactForm;
