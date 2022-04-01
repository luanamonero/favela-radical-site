import React from 'react';
import CarouselHeader from '../../components/Carrousel';
import Header from '../../components/Header';
import Letter from '../../components/home/letter';
import QuemSomos from '../../components/home/quemSomos';


function Home() {
  return (
    <div>
      <Header>
        <CarouselHeader/>
      </Header>
      <QuemSomos/>
      <Letter/>
    </div>
  );
}

export default Home;
