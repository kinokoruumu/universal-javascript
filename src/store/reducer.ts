import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// import { countReducer } from "./modules/count/reducers";
import { History } from "history";

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
    // countReducer
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
