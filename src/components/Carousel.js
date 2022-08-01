import Carousel from 'react-bootstrap/Carousel';
import foto from '../images/reebok.jpeg'
import foto1 from '../images/air.jpeg'
import foto2 from '../images/nike.jpeg'
function DarkVariantExample() {
  return (
    <Carousel  fade className='carousel-width'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 alto"
          src={foto}
          alt="First slide"
        />
        <Carousel.Caption>
            <h1>Reebok</h1>
            <h4>Felicidad es... lucir zapatillas increibles</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} >
        <img
          className="d-block w-100 alto"
          src={foto1}
          alt="Second slide"
        />
        <Carousel.Caption>
            <h1>Converse</h1>
            <h4>Llega tan lejos como quieras con zapatillas que te hagan sentir increíble</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 alto"
          src={foto2}
          alt="Third slide"
        />
        <Carousel.Caption>
            <h1>Adidas</h1>
            <h4>
                Si te encantan deberían ser tuyos… Date el gusto.
            </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;