import React, { useEffect } from "react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import "./styles/styles.scss";
import * as ReactDOMClient from "react-dom/client";

const init = () => {
  const container = document.getElementById("root") as HTMLElement;
  const root = ReactDOMClient.createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

init();
