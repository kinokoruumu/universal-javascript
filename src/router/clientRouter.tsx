import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { configureStore } from "../store/index";
import { routes } from "./routes";
import { hydrate } from "react-dom";
import { createBrowserHistory } from "history";
import { renderRoutes } from "react-router-config";

const __STATE__ = (window as any).__STATE__;

const history = createBrowserHistory();
const store = configureStore(history, __STATE__);

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
