import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../../pages/home/home';
import Atividades from '../../pages/atividades';
import Sobre from '../../pages/sobre';


const Switchs = () => (
  <Switch>
    <Route path="/atividades" component={ Atividades }/>
    <Route path="/sobre" component={ Sobre } />    
    <Route path="/" component={ Home } />
  </Switch>
);

export default Switchs;