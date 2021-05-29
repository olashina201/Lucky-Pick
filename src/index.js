import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Admin from './pages/Admin';
import About from './pages/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component={App} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

