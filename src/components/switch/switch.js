import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../../pages/home/home';
import Atividades from '../../pages/atividades/atividades';
import Sobre from '../../pages/sobre/sobre';
import Doacoes from '../../pages/doacoes';


const Switchs = () => (
  <Switch>
    <Route path="/atividades" component={ Atividades }/>
    <Route path="/sobre" component={ Sobre } />
    <Route path="/doacoes" component={ Doacoes } /> 
    <Route path="/" component={ Home } />
  </Switch>
);

export default Switchs;