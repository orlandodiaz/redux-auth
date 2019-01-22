import authReducer from "./authReducer";

import { combineReducers } from "redux";
import flashReducer from "./flashReducer";
import userReducer from "./userReducer";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
  auth: authReducer, // updates info on the product
  flash: flashReducer,
  user: userReducer,
  form: formReducer
});

export default allReducers;
