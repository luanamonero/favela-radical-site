import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
import { Container, Content, ContainerLink } from './style';

export const Header = ({ children }) => {
  return (
    <Container>
      { children }
      <Content>
          <Link to="/home">
          <img src={logo} alt="favela radical" />            
          </Link>
        <ContainerLink>
          <Link to="/home">
            <h4>Home</h4>
          </Link>
          <Link to="/sobre">
            <h4>Sobre Nós</h4>
          </Link>
          <Link to="/atividades">
            <h4>Atividades</h4>
          </Link>
          <Link to="/atividades">
            <h4>Doações</h4>
          </Link>
          <Link to="/atividades">
            <h4>Galeria</h4>
          </Link>
          <Link to="/atividades">
            <h4>Contato</h4>
          </Link>
        </ContainerLink>
      </Content>
    </Container>
  )
}