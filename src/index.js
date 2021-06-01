import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Admin from './pages/Admin';
import About from './pages/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store= { store } >
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={App} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

