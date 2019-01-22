import axios from "axios";

export function login(username, password) {
  return (dispatch, getState) => {
    return axios
      .post("http://127.0.0.1:8000/login/", {
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
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: "LOGIN_FAILURE",
          payload: error.response
        });
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
      .post("http://127.0.0.1:8000/api/logout/", null, { headers: headers })
      .then(response => {
        console.log(response);

        dispatch({
          type: "LOGOUT",
          payload: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

// export const register = (username, email, password) => {
//   return dispatch => {
//     return axios
//       .post("http://127.0.0.1:8000/api/create/", {
//         username: username,
//         email: email,
//         password: password
//       })
//       .then(response => {
//         console.log(response);
//         dispatch({
//           type: "REGISTER",
//           payload: response
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };

export function register(username, email, password) {
  return (dispatch, getState) => {
    axios
      .post("http://127.0.0.1:8000/api/create/", {
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
      })
      .catch(error => {
        dispatch({
          type: "REGISTRATION_FAILED",
          payload: error.response.data
        });
      });
  };
}

export function flashMessage(message) {
  return (dispatch, getState) => {
    dispatch({
      type: "FLASH_MESSAGE",
      payload: message
    });
  };
}

export function currentUserDetail() {
  return (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token;
    const headers = { Authorization: `Token ${token}` };

    return axios
      .get("http://127.0.0.1:8000/api/", { headers: headers })
      .then(response => {
        console.log(response);
        dispatch({
          type: "CURRENT_USER_DETAIL",
          payload: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function updateUser(user_data) {
  return (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token;
    const headers = { Authorization: `Token ${token}` };

    axios
      .put("http://127.0.0.1:8000/api/edit/", user_data, { headers: headers })
      .then(response => {
        console.log(response);
        dispatch({
          type: "UPDATE_USER",
          payload: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

// export function logout() {
//   return (dispatch, getState) => {
//
//
//     console.log(`token: ${token}`);
//     console.log(`headers: ${headers}`);
//     console.log(headers);
//     axios
//       .post("http://127.0.0.1:8000/api/logout/", null, { headers: headers })
//       .then(response => {
//         console.log(response);
//
//         dispatch({
//           type: "LOGOUT",
//           payload: response
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// }
