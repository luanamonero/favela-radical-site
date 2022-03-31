import React from 'react';
import Header from '../../components/Header';
import cover from '../../assets/cover.jpg'

function Home() {
  return (
    <div>
      <Header>
        <img src={cover}  class="bg-image coverImg" alt="imagem de fundo"/>
      </Header>
    </div>
  );
}

export default Home;
