const initState = {
  username: "",
  first_name: "",
  last_name: ""
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CURRENT_USER_DETAIL":
      return action.payload.data;

    case "UPDATE_USER":
      return action.payload.data;

    case "LOGOUT":
      return initState;
    default:
      return state;
  }
};

export default userReducer;
