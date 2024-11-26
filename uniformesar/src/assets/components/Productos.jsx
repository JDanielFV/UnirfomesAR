import { Cards, Copy, ProductsContainer, Title, CardBtn, CardText, CardMask, CardsContainer, TextsContainer } from "./Components"
import styled from "styled-components";

const productData = [
  { bckgrnd: './escolar.png', text: 'Uniformes Escolares', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Escolares' },
  { bckgrnd: './medico.png', text: 'Uniformes Médicos', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20M%C3%A9dicos' },
  { bckgrnd: './deportivo.png', text: 'Uniformes Deportivos', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Deportivos' },
  { bckgrnd: './industrial.png', text: 'Uniformes Industriales', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Industriales' },
  { bckgrnd: './cocina.png', text: 'Uniformes para Hoteles y Restaurantes', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20de%20Cocina' },
  { bckgrnd: './amedida.png', text: 'Uniformes Ejecutivos', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20a%20Medida' },
  { bckgrnd: './vinil.png', text: 'Uniforme industrial para limpieza', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Industriales' },
  { bckgrnd: './vinil.png', text: 'Playeras', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Industriales' },
];

const ProdTitle = styled(Title)`
color: #000;
`
const ProdCopy = styled(Copy)`
color: #000;

`

const Productos = () => {
  return (
    <ProductsContainer>
      <TextsContainer>
        <ProdTitle>Conoce nuestra variedad de prendas</ProdTitle>
        <ProdCopy>
          Ofrecemos una amplia variedad de uniformes y prendas personalizadas a
          medida, diseñadas para satisfacer las necesidades únicas de cada
          cliente. Desde uniformes corporativos y escolares hasta ropa
          profesional.
        </ProdCopy>
      </TextsContainer>
      <CardsContainer>
        {productData.map((product, index) => (
          <Cards key={index} bckgrnd={product.bckgrnd}>
            <CardMask>
              <CardText>{product.text}</CardText>
              <CardBtn href={product.href} target="_blank" rel="noopener noreferrer">Conoce más</CardBtn>
            </CardMask>
          </Cards>
        ))}
      </CardsContainer>
    </ProductsContainer>
  );
};

export default Productos;