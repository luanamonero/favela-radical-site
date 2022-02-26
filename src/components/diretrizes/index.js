import seta1 from '../../assets/ENFEITE SETA_01.svg';
import seta2 from '../../assets/ENFEITE SETA_02.svg';
import surf from '../../assets/surf.svg';
import { Container, Card, Card2 } from './style';

export const Diretrizes = () => {
  return (
    <>
      <Container>
        <img src={seta1} alt="enfeite de seta" />
        <img src={surf} alt="enfeite de seta" />
        <Card>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique nunc interdum, ullamcorper dolor ut, lacinia lectus. Aenean hendrerit lorem vel suscipit consectetur. Integer euismod, mi nec</p>
        </Card>
        <Card2>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique nunc interdum, ullamcorper dolor ut, lacinia lectus. Aenean hendrerit lorem vel suscipit consectetur. Integer euismod, mi nec</p>
          <img src={seta2} alt="enfeite de seta grande" />
        </Card2>
      </Container>

    </>
  )
};