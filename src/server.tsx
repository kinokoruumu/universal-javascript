import Express from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import Html from "./Html";
import { App } from ".";

const app = Express();

app.use(Express.static(__dirname + "/public"));

app.get("*", (_: Express.Request, res: Express.Response) => {
  ReactDOMServer.renderToNodeStream(
    <Html>
      <App />
    </Html>
  ).pipe(res);
});

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const log = `
Listen on port: http://${HOST}:${PORT}
`;

app.listen(PORT, HOST, () => {
  console.log(log);
});
