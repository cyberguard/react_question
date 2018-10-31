import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import ClientReducer from "./redux/client-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk, logger);

const allReducers = combineReducers({
  client: ClientReducer
});

export const REDUX_STORE = createStore(
  allReducers,
  {
    client: {}
  },
  composeEnhancers(middleware)
);

ReactDOM.render(
  <Provider store={REDUX_STORE}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
