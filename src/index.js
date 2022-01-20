import React from 'react';
import ReactDOM from 'react-dom';
import {createStore }from 'redux'
import { Provider } from 'react-redux'



import reducers from './reducers/reducers'


// api: HTTPS: https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139



import App from './App';
import './index.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>,
  document.getElementById('root')
);
