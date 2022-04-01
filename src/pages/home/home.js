import React from 'react';
import CarouselHeader from '../../components/Carrousel';
import Header from '../../components/Header';
import Diretrizes from '../../components/home/Diretrizes';
import Doacoes from '../../components/home/Doacoes';
import Letter from '../../components/home/Letter';
import QuemSomos from '../../components/home/QuemSomos';
import seta1 from "../../assets/ENFEITESETA_01.svg";
import seta2 from "../../assets/ENFEITESETA_02.svg";


function Home() {
  return (
    <div>
      <Header>
        <CarouselHeader/>
      </Header>
      <QuemSomos/>
      <Letter/>
      <Diretrizes/>
      <div className="div-setas">
        <img src={seta2} className="imgSeta" alt="enfeita seta grande"/>
        <img src={seta1} className="imgSeta2" alt="enfeita seta pequena"/>  
      </div>
      <Doacoes/>
    </div>
  );
}

export default Home;
