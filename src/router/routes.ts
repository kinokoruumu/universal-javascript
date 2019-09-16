import { RouteConfig } from "react-router-config";
import loadable from "loadable-components";

const TopPage = loadable(() =>
  import(/* webpackChunkName: "TopPage" */ "../components/pages/Top")
);

const HogePage = loadable(() =>
  import(/* webpackChunkName: "HogePage" */ "../components/pages/Hoge")
);

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
