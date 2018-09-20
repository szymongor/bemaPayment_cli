import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import authorizationMDL from "./middleware/authorization";

const createStoreWithMiddleware = createStore(
  reducers,
  applyMiddleware(thunk, ...authorizationMDL)
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
