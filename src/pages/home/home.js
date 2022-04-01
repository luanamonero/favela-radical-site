import React from 'react';
import CarouselHeader from '../../components/Carrousel';
import Header from '../../components/Header';
import Diretrizes from '../../components/home/Diretrizes';
import Doacoes from '../../components/home/Doacoes';
import Letter from '../../components/home/Letter';
import QuemSomos from '../../components/home/QuemSomos';


function Home() {
  return (
    <div>
      <Header>
        <CarouselHeader/>
      </Header>
      <QuemSomos/>
      <Letter/>
      <Diretrizes/>
      <Doacoes/>
    </div>
  );
}

export default Home;
