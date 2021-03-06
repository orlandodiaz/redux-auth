const initState = {
  message: "",
  type: "",
  is_flashing: false,
  open: false
};

const flashReducer = (state = initState, action) => {
  switch (action.type) {
    case "FLASH_MESSAGE":
      return {
        message: action.payload.message,
        type: action.payload.type,
        is_flashing: true,
        open: true
      };
    case "HIDE_MESSAGE":
      return initState;

    case "CLOSE_MESSAGE":
      return initState;

    // case "LOGIN_SUCCESS":
    //   return { message: "Logged in succesfully", type: "success" };
    //
    // case "LOGIN_FAILURE":
    //   return { message: "Username or password is incorrect", type: "error" };
    //
    // case "LOGOUT":
    //   return { message: "Logged out succesfully", type: "success" };
    // case "REGISTER":
    //   return { message: "Registration was successful", type: "success" };
    //
    // case "REGISTRATION_FAILED":
    //   return { message: "Registration was unsuccesful", type: "error" };
    //
    // case "UPDATE_USER":
    //   return { message: "User successfully updated", type: "success" };

    default:
      return state;
  }
};

export default flashReducer;
