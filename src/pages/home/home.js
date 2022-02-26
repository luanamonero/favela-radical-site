import React from 'react';
import { Diretrizes } from '../../components/diretrizes';
import { Header } from '../../components/header/index';
import { QuemSomos } from '../../components/quemSomos.js';

function Home() {
  return (
    <div>
      <Header/>
      <QuemSomos/>
      <Diretrizes/>
    </div>
  );
}

export default Home;