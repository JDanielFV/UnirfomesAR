import { Cards, Copy, ProductsContainer, Title, CardBtn, CardText, CardMask, CardsContainer, TextsContainer } from "./Components"
import ModalGallery from "./ModalGallery";
import { useState } from "react";
import styled from "styled-components";

const productData = [
  { bckgrnd: './escolar.png', text: 'Uniformes Escolares', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Escolares' },
  { bckgrnd: './medico.png', text: 'Uniformes Médicos', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20M%C3%A9dicos' },
  { bckgrnd: './deportivo.png', text: 'Uniformes Deportivos', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Deportivos' },
  { bckgrnd: './industrial.png', text: 'Uniformes Industriales', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Industriales' },
  { bckgrnd: './cocina.png', text: 'Uniformes para Hoteles y Restaurantes', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20de%20Cocina' },
  { bckgrnd: './amedida.png', text: 'Uniformes Ejecutivos', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20a%20Medida' },
  // { bckgrnd: './vinil.png', text: 'Uniforme industrial para limpieza', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Industriales' },
  // { bckgrnd: './vinil.webp', text: 'Playeras', href: 'https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Industriales' },
];

const ProdTitle = styled(Title)`
color: #000;
`
const ProdCopy = styled(Copy)`
color: #000;

`

const galleryImages = [
  '/IMG-20250127-WA0060.jpg',
  '/IMG-20250128-WA0002.jpg',
  '/IMG-20250128-WA0003.jpg',
  '/IMG-20250128-WA0004.jpg',
  '/IMG-20250128-WA0005.jpg',
  '/IMG-20250128-WA0006.jpg',
  '/IMG-20250128-WA0008.jpg',
  '/IMG-20250128-WA0009.jpg',
  '/IMG-20250128-WA0011.jpg',
  '/IMG-20250128-WA0013.jpg',
  '/IMG-20250128-WA0014.jpg',
  '/IMG-20250128-WA0015.jpg',
  '/IMG-20250128-WA0041.jpg',
  '/IMG-20250128-WA0049.jpg',
  '/IMG-20250128-WA0050.jpg',
  '/IMG-20250128-WA0051.jpg',
  '/IMG-20250128-WA0052.jpg',
  '/IMG-20250128-WA0053.jpg',
  '/IMG-20250130-WA0012.jpg',
  '/IMG-20250130-WA0013.jpg',
  '/IMG-20250130-WA0014.jpg',
  '/IMG-20250203-WA0000.jpg',
  '/IMG-20250203-WA0031.jpg',
  '/IMG-20250203-WA0032.jpg',
  '/IMG-20250203-WA0033.jpg',
  '/IMG-20250203-WA0042.jpg',
  '/IMG-20250203-WA0043.jpg',
  '/IMG-20250203-WA0044.jpg',
  '/IMG-20250203-WA0045.jpg',
  '/IMG-20250203-WA0046.jpg',
  '/IMG-20250203-WA0047.jpg',
];

const Productos = () => {
  const [openGallery, setOpenGallery] = useState(false);
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
        <button style={{marginTop: '1.5rem', padding: '0.7rem 1.5rem', fontSize: '1.1rem', borderRadius: '8px', background: '#1976d2', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.12)'}} onClick={()=>setOpenGallery(true)}>
          Ver galería
        </button>
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
      <ModalGallery open={openGallery} onClose={()=>setOpenGallery(false)} images={galleryImages} />
    </ProductsContainer>
  );
};

export default Productos;