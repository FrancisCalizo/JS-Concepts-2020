import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

const index = () => {
  return (
    (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    document.getElementById("root")
  );
};

export default index;
