import React from 'react';
import NavBar from './navBar';
import cover from '../assets/cover.jpg'

function Header() {
  return (
    <div>
      <NavBar/>
      <img src={cover}  class="bg-image coverImg" alt="imagem de fundo"/>
    </div>
  );
}

export default Header;
