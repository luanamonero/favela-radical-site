import React from 'react';
import { Header } from '../../components/header/index';
import { QuemSomos } from '../../components/quemSomos.js';

function Home() {
  return (
    <div>
      <Header/>
      <QuemSomos/>
    </div>
  );
}

export default Home;