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
          <App />
        </Provider>,
  document.getElementById('root')
);

