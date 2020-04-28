import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import nameReducer from "./reducers/nameReducer";
import wishReducer from "./reducers/wishReducer";

const masterReducer = combineReducers({
  name: nameReducer,
  wish: wishReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  masterReducer,
  composeEnhancers(applyMiddleware(thunk))
);

//we need to import combineReducer from "redux" to combine multiple reducers
//combineReducer takes a object as a argument ....and returns the final state in the form of object
//then we will finally assign that state "masterReducer" to store
//we can give initial data to store like....
// const store = createStore(
//   masterReducer,
//   { name: "Ram", wish: ["eat", "code", "repeat"] },
//   composeEnhancers(applyMiddleware(thunk))
// );

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
