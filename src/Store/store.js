import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

const initState = {};
const middlewares = [thunk];
const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(...middlewares)
  // compose(
  //   applyMiddleware(...middlewares),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

export default store;
