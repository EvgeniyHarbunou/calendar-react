import React from "react";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import * as serviceWorker from "./serviceWorker";
import { rootReducer } from "./redux/reducers/rootReducer";
import "./index.scss";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
