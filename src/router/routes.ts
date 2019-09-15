import { Top } from "../components/pages/Top";
import { Hoge } from "../components/pages/Hoge";
import { RouteConfig } from "react-router-config";

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: Top
  },
  {
    path: "/hoge",
    component: Hoge
  }
];

export { routes };
