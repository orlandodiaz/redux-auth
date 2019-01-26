import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import allReducers from "./reducers/";
import { persistedState, saveToLocalStorage } from "./localStorage";

const initialState = {};

const middleware = [thunk];

// For  REDUX_DEVTOOLS use only for development with Google Chrome, otherwise you will get errors
const store = createStore(
  allReducers,
  persistedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
