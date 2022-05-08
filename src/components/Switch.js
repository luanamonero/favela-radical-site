import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home/home';
import Atividades from '../pages/atividades/atividades';
import PagePix from '../pages/doacoes/doacoes';

const Switchs = () => (
  <Switch>
    <Route path="/atividades" component={ Atividades } />
    <Route path="/doacoes" component={ PagePix } />
    <Route path="/" component={ Home } />
  </Switch>
);

export default Switchs;