// /* eslint-disable */
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
// import 'utils/proxyPolyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // redux store

import 'styles/index.scss';
import App from './App';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();