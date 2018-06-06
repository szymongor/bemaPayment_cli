import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import authorizationMDL from './middleware/authorization';

const createStoreWithMiddleware = applyMiddleware(promise, ...authorizationMDL)(
  createStore
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
