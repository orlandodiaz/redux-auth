import * as types from "./types";

let flash_timeout = null;
export function flashMessage(message, level) {
  return (dispatch, getState) => {
    clearTimeout(flash_timeout);

    const hide_action = {
      type: types.HIDE_MESSAGE,
      payload: { message: message, type: level }
    };

    dispatch({
      type: types.FLASH_MESSAGE,
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
      type: types.CLOSE_MESSAGE,
      payload: null
    });
  };
}
