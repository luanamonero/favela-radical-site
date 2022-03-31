import React from 'react';
import CarouselHeader from '../../components/Carrousel';
import Header from '../../components/Header';
import QuemSomos from '../../components/home/quemSomos';


function Home() {
  return (
    <div>
      <Header>
        <CarouselHeader/>
      </Header>
      <QuemSomos/>
    </div>
  );
}

export default Home;
