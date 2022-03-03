import seta1 from "../../assets/ENFEITE SETA_01.svg";
import retangle from "../../assets/Rectangle16.svg";
import foto from "../../assets/doacoes.svg";
import { Container, Content, Card } from "./style";

export const Doacoes = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={seta1} alt="enfeite de seta" />
          <img src={retangle} alt="retangulo" />
          <Card>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Aliquam nec cursus urna. Nam bibendum dictum urna eget imperdiet.
              Fusce congue ligula massa, at lobortis sem porttitor ut. Quisque
              pulvinar quis sem eget laoreet. Praesent eget ante et ipsum accumsan
              suscipit. Morbi convallis risus volutpat convallis gravida. Fusce
              libero elit, aliquet ut aliquam a, convallis non sapien. Duis
              laoreet, dui ac porttitor laoreet, leo elit tristique sem, a auctor
              augue dui ac sem. Curabitur vitae sapien at nibh tempus interdum.
              Nullam et metus non sapien aliquet lobortis. Fusce libero elit,
              aliquet ut aliquam a, convallis non sapien. Duis laoreet, dui ac
              porttitor laoreet, leo elit tristique sem, a auctor augue dui ac
              sem. Curabitur vitae sapien at nibh tempus interdum. Nullam et metus
              non sapien aliquet lobortis.
            </p>
          </Card>
          <img src={foto} alt="foto doacoes" />
        </Content>
          <button type="button">
            VER MAIS
          </button>
      </Container>
    </>
  );
};
