import React from 'react';
import { Diretrizes } from '../../components/diretrizes';
import { Doacoes } from '../../components/doacoes';
import { Header } from '../../components/header/index';
import { QuemSomos } from '../../components/quemSomos/index';

function Home() {
  return (
    <div>
      <Header/>
      <QuemSomos/>
      <Diretrizes/>
      <Doacoes/>
    </div>
  );
}

export default Home;