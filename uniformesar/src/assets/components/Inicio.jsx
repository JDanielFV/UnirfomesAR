import styled from 'styled-components'


const InicioContainer = styled.div`
background: url('./fondo.jpg  ');

`

const Welcome = () => {
  return (
    <>
      <InicioContainer>
        <div>
          <img src='./icono.svg'></img>
        </div>
        <div>
          <p>Uniformes A&R</p>
          <p>Con Más de 10 años de experiencia En confección y diseño de uniformes. Creamos la marca Uniformes A&R, que más que un uniforme de trabajo es ropa cómoda confortable resistente y con un diseño innovador por lo que estamos comprometidos contigo. Tenemos el compromiso de brindarte la mejor imagen de trabajo y casual que tu necesitas, a través de sus uniformes.</p>
        </div>
      </InicioContainer>
    </>
  )
}

export default Welcome
