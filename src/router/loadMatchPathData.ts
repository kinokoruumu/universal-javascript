import { matchRoutes } from "react-router-config";
import { routes } from "../router/routes";
import { RootStore } from "../store";

interface Query {
  [x: string]: string;
}
export const loadMatchPathData = (
  store: RootStore,
  location: string,
  query: Query
) => {
  const branch = matchRoutes(routes, location);
  const promises = branch.map(({ route, match }) =>
    route.loadData
      ? route.loadData(store.dispatch, match, query)
      : Promise.resolve(null)
  );
  return Promise.all(promises);
};
