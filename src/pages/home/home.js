import React from 'react';
import { Atividades } from '../../components/atividades';
import { Diretrizes } from '../../components/diretrizes';
import { Doacoes } from '../../components/doacoes';
import { Header } from '../../components/header/index';
import { QuemSomos } from '../../components/quemSomos/index';

function Home() {
  return (
    <div>
      <Header>
        <video width="750" height="500" controls >
          <source muted src="" type="video/mp4"/>
        </video>
      </Header>
      <QuemSomos/>
      <Diretrizes/>
      <Doacoes/>
      <Atividades/>
    </div>
  );
}

export default Home;