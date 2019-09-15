import Express from "express";
import path from "path";
import { router } from "./router/router";

const app = Express();

app.use("/assets/", Express.static(path.join(__dirname, "../public")));

app.use(router);

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const log = `
Listen on port: http://${HOST}:${PORT}
`;

app.listen(PORT, HOST, () => {
  console.log(log);
});
