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
      .post("http://127.0.0.1:8000/api/logout/", null, { headers: headers })
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
    return axios
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
let flash_timeout = null;
export function flashMessage(message, level) {
  return (dispatch, getState) => {
    clearTimeout(flash_timeout);

    const hide_action = {
      type: "HIDE_MESSAGE",
      payload: { message: message, type: level }
    };

    dispatch({
      type: "FLASH_MESSAGE",
      payload: { message: message, type: level }
    });

    flash_timeout = setTimeout(function() {
      dispatch(hide_action);
    }, 5000);
  };
}

export function closeMessage() {
  return (dispatch, getState) => {
    dispatch({
      type: "CLOSE_MESSAGE",
      payload: null
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

    return axios
      .put("http://127.0.0.1:8000/api/edit/", user_data, { headers: headers })
      .then(response => {
        console.log(response);
        dispatch({
          type: "UPDATE_USER",
          payload: response
        });
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
}

export function verifyResetPasswordToken(token) {
  return (dispatch, getState) => {
    return axios
      .post("http://127.0.0.1:8000/api/verify_password_reset_token/", { token: token })
      .then(response => {
        console.log(response);
        dispatch({
          type: "VERIFY_RESET_PASSWORD_TOKEN",
          payload: response
        });
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error.response);
      });
  };
}

export function sendPasswordResetEmail(email) {
  return (dispatch, getState) => {
    return axios
      .post("http://127.0.0.1:8000/api/password_reset_request/", { email: email })
      .then(response => {
        console.log(response);
        dispatch({
          type: "SEND_PASSWORD_RESET_EMAIL",
          payload: response
        });
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error.response);
      });
  };
}

export function resetPassword(token, data) {
  return (dispatch, getState) => {
    return axios
      .put(`http://127.0.0.1:8000/api/password_reset/${token}`, data)
      .then(response => {
        console.log(response);
        dispatch({
          type: "RESET_PASSWORD",
          payload: response
        });
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error.response);
      });
  };
}

export function requestEmailVerificationEmail(email) {
  return (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token;
    const headers = { Authorization: `Token ${token}` };

    return axios
      .post("http://127.0.0.1:8000/api/request_email_verification_email/", null, {
        headers: headers
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: "REQUEST_EMAIL_VERIFICATION_EMAIL",
          payload: response
        });
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error.response);
      });
  };
}

export function verifyEmailToken(email_token) {
  return (dispatch, getState) => {
    const state = getState();
    const auth_token = state.auth.token;

    const headers = { Authorization: `Token ${auth_token}` };

    return axios
      .post("http://127.0.0.1:8000/api/verify_email/", { token: email_token }, { headers: headers })
      .then(response => {
        console.log(response);
        dispatch({
          type: "VERIFY_EMAIL_TOKEN",
          payload: response
        });
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error.response);
      });
  };
}
