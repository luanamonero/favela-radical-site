import { Container, Letter } from './style';
import retangle from '../../assets/Rectangle4.svg'
import { Link } from 'react-router-dom';


export const QuemSomos = () => {
  return (
    <>
      <Container>
        <img src={retangle} alt="retangulo" />
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet urna a velit porta tempor. Maecenas nisi magna, malesuada eget sapien ac, vestibulum gravida tortor. Proin iaculis sodales mauris, at sagittis nibh faucibus eget. Maecenas nulla lacus, porttitor vitae tincidunt eu, pellentesque varius lorem. Donec tincidunt in est sit amet tristique. 
          Nulla quis semper libero. In hac habitasse platea dictumst. Nunc pulvinar vehicula ante gravida tempor. Morbi non sem egestas, tempor urna commodoPraesent sit amet quam non lacus semper posuere vitae eget orci. Quisque consequat nisi nunc. 
        </p>
        <Link to="/sobre">
          <button type="button">
            VER MAIS
          </button>
        </Link>
      </Container>
      <Letter>
        <h1>FAVELA</h1>
        <h2>RADICAL</h2>
      </Letter>
    </>

  )
};