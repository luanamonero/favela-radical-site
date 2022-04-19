import surf from "../../assets/surf.jpg";
import * as React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";

const CarrouselAtividades = () => {
  return (
    <section className="carrosel-atividades">
      <Glider
        draggable={true}
        scrollLock={true}
        hasDots={true}
        slidesToShow={3}
        slidesToScroll={6}
      >
        <div>
          <img alt="" src={surf} />
        </div>
        <div>
          <img alt="" src={surf} />
        </div>
        <div>
          <img alt="" src={surf} />
        </div>{" "}
        <div>
          <img alt="" src={surf} />
        </div>{" "}
        <div>
          <img alt="" src={surf} />
        </div>
        <div>
          <img alt="" src={surf} />
        </div>
      </Glider>
    </section>
  );
};

export default CarrouselAtividades;
