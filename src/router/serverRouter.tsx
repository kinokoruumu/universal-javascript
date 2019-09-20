import { Router } from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { routes } from "./serverRoutes";
import { configureStore } from "../store";
import { createMemoryHistory } from "history";
import Html from "./Html";
import { renderRoutes } from "react-router-config";
import { loadMatchPathData } from "./loadMatchPathData";

const router = Router();

const serverRoutes = routes.map(r => r.path as string);
router.get(serverRoutes, async (req, res) => {
  const history = createMemoryHistory({ initialEntries: [req.url] });
  const store = configureStore(history, {});

  loadMatchPathData(store, req.path, req.query).then(() => {
    ReactDOMServer.renderToNodeStream(
      <Html>
        <Provider store={store}>
          <StaticRouter location={req.url}>{renderRoutes(routes)}</StaticRouter>
        </Provider>
      </Html>
    ).pipe(res);
  });
});

export { router };
