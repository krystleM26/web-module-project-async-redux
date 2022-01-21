import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware }from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


import reducers from './reducers/reducers'


// api: HTTPS: https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139



import App from './App';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>,
  document.getElementById('root')
);
