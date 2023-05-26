import 'bootstrap/dist/css/bootstrap.min.css';
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './floorwalktask/store';
import TodoListFW from './floorwalktask/components/Maintodos';

ReactDOM.render(
  <Provider store={store}>
    < TodoListFW/>
  </Provider>,
  document.getElementById('root')
);


