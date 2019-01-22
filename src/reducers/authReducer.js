import { flashMessage } from "../actions";

const initState = {
  token: "",
  is_authenticated: false,
  username: ""
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("action.payload.data.token");
      console.log(action.payload.data.token);
      flashMessage("ss");
      if (action.payload.data.token) {
        return {
          token: action.payload.data.token,
          is_authenticated: true,
          username: action.user
        };
      } else {
        return initState;
      }
    case "LOGOUT":
      return initState;

    default:
      return state;
  }
};

export default authReducer;
