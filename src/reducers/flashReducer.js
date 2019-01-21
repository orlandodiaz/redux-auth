const initState = {
  message: "",
  type: ""
};

const flashReducer = (state = initState, action) => {
  switch (action.type) {
    case "FLASH_MESSAGE":
      return { message: action.payload };
    default:
      return initState;

    case "LOGIN_SUCCESS":
      return { message: "Logged in succesfully", type: "success" };

    case "LOGIN_FAILURE":
      return { message: "Username or password is incorrect", type: "error" };

    case "LOGOUT":
      return { message: "Logged out succesfully", type: "success" };
    case "REGISTER":
      return { message: "Registration was successful", type: "success" };

    case "REGISTRATION_FAILED":
      return { message: "Registration was unsuccesful", type: "error" };
  }
};

export default flashReducer;
