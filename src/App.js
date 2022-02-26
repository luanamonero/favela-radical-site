import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Switchs from './components/switch/switch';
import { GlobalStyle } from '../src/styles/global';


function App() {
  return (
    <BrowserRouter>
      <Switchs/>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
