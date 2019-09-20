import { RouteConfig } from "react-router-config";
import TopPage from "../components/pages/Top";
import HogePage from "../components/pages/Hoge";

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: TopPage
  },
  {
    path: "/hoge",
    component: HogePage
  }
];

export { routes };
