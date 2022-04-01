import React from 'react';
import CarouselHeader from '../../components/Carrousel';
import Header from '../../components/Header';
import Diretrizes from '../../components/home/Diretrizes';
import Doacoes from '../../components/home/Doacoes';
import Letter from '../../components/home/Letter';
import QuemSomos from '../../components/home/QuemSomos';
import seta1 from "../../assets/ENFEITESETA_01.svg";
import seta2 from "../../assets/ENFEITESETA_02.svg";
import seta3 from "../../assets/ENFEITESETA.svg";
import seta4 from "../../assets/SETA3.svg";

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
      <section>
        <img src={seta3} className="imgSeta3" alt="enfeita seta grande"/>
        <h1 className="title-atividades">Atividades</h1>
        <img src={seta4} className="imgSeta4" alt="enfeita seta pequena"/>  
      </section>
    </div>
  );
}

export default Home;
