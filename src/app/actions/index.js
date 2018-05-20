import {
  GET_POLITICIANS,
  GET_POLITICIANS_SUCCESS,
  GET_POLITICIANS_FAILURE,
  RESET_MESSAGE_STATE,
  SEND_ERROR_MESSAGE,
  SHOW_NETWORK_ERROR,
  CLEAR_NETWORK_ERROR,
} from './actionTypes';


export function resetMessageState() {
  return {
    type: RESET_MESSAGE_STATE
  }
}

export function sendErrorMessage(message) {
  return {
    type: SEND_ERROR_MESSAGE,
    data: message
  }
}

export function sendNetworkError() {
  return {
    type: SHOW_NETWORK_ERROR
  }
}

export function clearNetworkError() {
  return {
    type: CLEAR_NETWORK_ERROR
  }
}


