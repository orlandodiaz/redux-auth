import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
// import userReducer from "./reducers/userReducer";
import allReducers from "./reducers/";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

function clearStorage() {
  localStorage.clear();
}

const persistedState = loadFromLocalStorage();

const initialState = {};

const middleware = [thunk];

// For  REDUX_DEVTOOLS use only for development with Google Chrome, otherwise you will get errors
const store = createStore(
  allReducers,
  // initialState,
  persistedState,
  // initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
