import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { MinScreenProvider } from "./hooks/minScreen";
import { theme } from "twin.macro";

import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <MinScreenProvider screens={theme`screens`}>
      <App />
    </MinScreenProvider>
  </Provider>,
  document.getElementById("root")
);
