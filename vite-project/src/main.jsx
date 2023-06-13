// // import 'bootstrap/dist/css/bootstrap.min.css';
// // // index.js
// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { Provider } from 'react-redux';
// // import store from './floorwalktask/store';
// // import TodoListFW from './floorwalktask/components/Maintodos';

// // ReactDOM.render(
// //   <Provider store={store}>
// //     < TodoListFW/>
// //   </Provider>,
// //   document.getElementById('root')
// // );
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<counterhook/>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginForm from './logintask/form';
import Parent from './contextapiexplained/parent';
import Stateexample from './revisioncomponents/state';
import Useeffectexample1 from './revisioncomponents/useeffectexample';

ReactDOM.render(
  <React.StrictMode>
    <Useeffectexample1/>
  </React.StrictMode>,
  document.getElementById('root')
);


