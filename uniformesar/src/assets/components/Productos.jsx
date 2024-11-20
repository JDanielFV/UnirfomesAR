import { Cards, Copy, ProductsContainer, Title, CardBtn, CardText, CardMask, CardsContainer } from "./Components"
import styled from "styled-components";

const productData = [
    { bckgrnd: './escolar.png', text: 'Uniformes Escolares', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Escolares' },
    { bckgrnd: './medico.png', text: 'Uniformes Médicos', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20M%C3%A9dicos' },
    { bckgrnd: './deportivo.png', text: 'Uniformes Deportivos', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Deportivos' },
    { bckgrnd: './industrial.png', text: 'Uniformes Industriales', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Industriales' },
    { bckgrnd: './cocina.png', text: 'Uniformes de Cocina', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20de%20Cocina' },
    { bckgrnd: './amedida.png', text: 'Uniformes a Medida', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20a%20Medida' },
    { bckgrnd: './pantalon.png', text: 'Pantalones a Medida', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Pantalones%20a%20Medida' },
    { bckgrnd: './playera.png', text: 'Prendas a medida', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Prendas%20a%20medida' }
];

const ProdTitle = styled(Title)`
color: #000;
line-height: 10dvi;
`
const ProdCopy = styled(Copy)`
color: #000;
margin: 0 10dvi 0 10dvi;

`
  
  const Productos = () => {
    return (
      <ProductsContainer>
        <ProdTitle>Conoce nuestra variedad de prendas</ProdTitle>
        <ProdCopy>
          Ofrecemos una amplia variedad de uniformes y prendas personalizadas a
          medida, diseñadas para satisfacer las necesidades únicas de cada
          cliente. Desde uniformes corporativos y escolares hasta ropa
          profesional.
        </ProdCopy>
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