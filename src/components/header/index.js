import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
import { Container, Content, ContainerLink, ContainerSocial } from './style';
import instagram from '../../assets/INSTAGRAM.svg';
import facebook from '../../assets/FACEBOOK.svg';
import twitter from '../../assets/TWITTER.svg';

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
          <ContainerSocial>
            <a href="https://www.instagram.com/favelaradical/">
              <img src={instagram} alt="logo instagram" />
            </a>
            <a href="https://www.facebook.com/FRfavelaradical/">
              <img src={facebook} alt="logo facebook" />
            </a>
            <a href="https://twitter.com/FavelaRadical">
              <img src={twitter} alt="logo twitter" />
            </a>
          </ContainerSocial>
        </ContainerLink>
      </Content>
    </Container>
  )
}