import surf from "../../assets/surf.jpg";
import * as React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";

const CarrouselAtividades = () => {
  return (
    <Glider
      draggable={true}
      scrollLock={true}
      hasDots={true}
      slidesToShow={5}
    >
      <div>
        <img
          alt=""
          width="167"
          height="167"
          src="https://cdn.shopify.com/s/files/1/0354/2607/4668/files/Wine_Liquor_300x.png?v=1589486372"
        />
      </div>
      <div>
        <img
          alt=""
          width="167"
          height="167"
          src="https://cdn.shopify.com/s/files/1/0354/2607/4668/files/Wine_Liquor_300x.png?v=1589486372"
        />
      </div>
      <div>
        <img
          alt=""
          width="167"
          height="167"
          src="https://cdn.shopify.com/s/files/1/0354/2607/4668/files/Wine_Liquor_300x.png?v=1589486372"
        />
      </div>
      <div>
        <img
          alt=""
          width="167"
          height="167"
          src="https://cdn.shopify.com/s/files/1/0354/2607/4668/files/Wine_Liquor_300x.png?v=1589486372"
        />
      </div>
      <div>
        <img
          alt=""
          width="167"
          height="167"
          src="https://cdn.shopify.com/s/files/1/0354/2607/4668/files/Wine_Liquor_300x.png?v=1589486372"
        />
      </div>
    </Glider>
  );
};

export default CarrouselAtividades;
