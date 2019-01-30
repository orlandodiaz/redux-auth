import axios from "axios";

export function login(username, password) {
  /**
   * Logins the user
   * @param username - The desired radius of the circle.
   * @param password - The desired radius of the circle.

   */
  return (dispatch, getState) => {
    return axios
      .post("/login/", {
        username: username,
        password: password
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response,
          user: username
        });
        return Promise.resolve(response);
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: "LOGIN_FAILURE",
          payload: error.response
        });
        return Promise.reject(error);
      });
  };
}

export function logout() {
  return (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token;
    const headers = { Authorization: `Token ${token}` };

    console.log(`token: ${token}`);
    console.log(`headers: ${headers}`);
    console.log(headers);
    return axios
      .post("/api/logout/", null, { headers: headers })
      .then(response => {
        console.log(response);

        dispatch({
          type: "LOGOUT",
          payload: response
        });
        return Promise.resolve(response);
      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error.response);
      });
  };
}

export function register(username, email, password) {
  return (dispatch, getState) => {
    return axios
      .post("/api/create/", {
        username: username,
        email: email,
        password: password
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: "REGISTER",
          payload: response
        });
        return Promise.resolve(response);
      })
      .catch(error => {
        dispatch({
          type: "REGISTRATION_FAILED",
          payload: error.response.data
        });
        return Promise.reject(error.response);
      });
  };
}
