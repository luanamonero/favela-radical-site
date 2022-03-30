import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Switchs from './components/Switch';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
      <Switchs/>
    </BrowserRouter>
  );
}

export default App;
