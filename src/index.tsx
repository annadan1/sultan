import React, { useEffect } from "react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import "./styles/styles.scss";
import * as ReactDOMClient from "react-dom/client";
import { HashRouter } from "react-router-dom";

const init = () => {
  const container = document.getElementById("root") as HTMLElement;
  const root = ReactDOMClient.createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <App />
        </HashRouter>
      </Provider>
    </React.StrictMode>
  );
};

init();
