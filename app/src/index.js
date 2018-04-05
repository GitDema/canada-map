import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'

import { Provider } from 'react-redux';

// store
const store = createStore(order);

// reducer
function order(state=1, action){
  if (action === 'INC'){
    return state +=1;
  }
  return state;
}

//action
const increment = {type: 'INC'}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);