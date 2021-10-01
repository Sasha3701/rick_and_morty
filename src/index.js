import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

const widgetDiv = document.querySelectorAll(".rick_and_morty");

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

widgetDiv.forEach((div) => {
  ReactDOM.render(app, div);
});
