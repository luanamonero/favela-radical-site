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
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={surf} alt="Second slide" />

        <Carousel.Caption>
          <h3>Surf</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={robotica} alt="Third slide" />

        <Carousel.Caption>
          <h3>Robótica</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={escalada} alt="Third slide" />

        <Carousel.Caption>
          <h3>Escalada</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHeader;
