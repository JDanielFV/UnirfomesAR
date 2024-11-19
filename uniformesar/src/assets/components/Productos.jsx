import { Cards, Copy, ProductsContainer, Title, CardBtn, CardText, CardMask, CardsContainer } from "./Components"


const Productos = () => {
    return (
        <>
            <ProductsContainer>
                <Title>Conoce nuestra variedad de prendas</Title>
                <Copy>Ofrecemos una amplia variedad de uniformes y prendas personalizadas a medida, diseñadas para satisfacer las necesidades únicas de cada cliente. Desde uniformes corporativos y escolares hasta ropa profesional.</Copy>
                <CardsContainer>
                    <Cards bckgrnd='./escolar.png'>
                        <CardMask>
                            <CardText>Uniformes Escolares</CardText>
                            <CardBtn href='#'>Conoce más</CardBtn>
                        </CardMask>
                    </Cards>
                    <Cards bckgrnd='./medico.png'>
                        <CardMask>
                            <CardText>Uniformes Medicos</CardText>
                            <CardBtn href='#'>Conoce más</CardBtn>
                        </CardMask>
                    </Cards>
                    <Cards bckgrnd='./deportivo.png'>
                        <CardMask>
                            <CardText>Uniformes Deportivos</CardText>
                            <CardBtn href='#'>Conoce más</CardBtn>
                        </CardMask>
                    </Cards>
                    <Cards bckgrnd='./industrial.png'>
                        <CardMask>
                            <CardText>Uniformes Industriales</CardText>
                            <CardBtn href='#'>Conoce más</CardBtn>
                        </CardMask>
                    </Cards>
                    <Cards bckgrnd='./cocina.png'>
                        <CardMask>
                            <CardText>Uniformes de Cocina</CardText>
                            <CardBtn href='#'>Conoce más</CardBtn>
                        </CardMask>
                    </Cards>
                    <Cards bckgrnd='./amedida.png'>
                        <CardMask>
                            <CardText>Uniformes a Medida</CardText>
                            <CardBtn href='#'>Conoce más</CardBtn>
                        </CardMask>
                    </Cards>
                    <Cards bckgrnd='./pantalon.png'>
                        <CardMask>
                            <CardText>Pantalones a Medida</CardText>
                            <CardBtn href='#'>Conoce más</CardBtn>
                        </CardMask>
                    </Cards>
                    <Cards bckgrnd='./playera.png'>
                        <CardMask>
                            <CardText>Prendas a medida</CardText>
                            <CardBtn href='#'>Conoce más</CardBtn>
                        </CardMask>
                    </Cards>
                </CardsContainer>
            </ProductsContainer>
        </>
    )
}

export default Productos
