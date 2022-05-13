import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";


// devtools for debugging in dev environment.
const devTools =
  process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (a) => a;

const MIDDLEWARES = [logger, thunk]

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...MIDDLEWARES), devTools)
);
