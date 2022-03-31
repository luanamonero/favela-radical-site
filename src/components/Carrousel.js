import { Carousel } from "react-bootstrap";
import cover from "../assets/cover.jpg";
import surf from "../assets/surf.jpg";
import escalada from "../assets/escalada.jpg";
import robotica from "../assets/robotica.jpg";

const CarouselHeader = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={cover} className="d-block w-100" alt="primeiro slide" />
        <Carousel.Caption>
          <h3>Skate</h3>
          <p>Oficina de skate realizada no morro do Turano</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={surf} alt="Second slide" />

        <Carousel.Caption>
          <h3>Surf</h3>
          <p>Aulas de surf e muita energia boa!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={robotica} alt="Third slide" />

        <Carousel.Caption>
          <h3>Robótica</h3>
          <p>
            Nossa aula de robótica transformando a rotina e a vida das nossas crianças.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={escalada} alt="Third slide" />

        <Carousel.Caption>
          <h3>Escalada</h3>
          <p>
            O primeiro muro público de escalada da cidade do Rio de Janeiro.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHeader;
