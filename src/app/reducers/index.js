import {
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,
  API_REQUEST_NETWORK_ERROR,
  GET_POLITICIANS_SUCCESS,
  GET_POLITICIANS_FAILURE,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_MESSAGE_STATE,
  SEND_ERROR_MESSAGE,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  SHOW_NETWORK_ERROR,
  CLEAR_NETWORK_ERROR,
  SIGN_IN_SUCCESS
} from '../actions/actionTypes';

import { AsyncStorage } from 'react-native';

const initialState = {
  user: {

  },
  signedIn: false,
  zipCode: '',
};

async function setCache(name, item) {
  item = JSON.stringify(item)
  try {
    //await AsyncStorage.setItem(name, item);
    if (item) {
      return AsyncStorage.setItem(name, item)
    }
    else {
      console.log('not set, stringify failed:', name, item)
    }
  } catch (error) {
    console.log(`error persisting ${name} to local storage`)
  }
}

async function clearCache(key) {
  try {
    await AsyncStorage.removeItem(key)
  } catch(error) {
    console.log(`error removing ${key} from local storage`)
  }
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case GET_POLITICIANS_SUCCESS:
      let politicians = action.data;
      return {
        ...state,
        politicians
      }
    case RESET_PASSWORD_SUCCESS:
      resetPasswordSuccess = true;
      return {
        ...state,
        resetPasswordSuccess
      }
    case RESET_PASSWORD_FAILURE:
      resetPasswordFailure = true;
      errorMessage = action.data;
      return {
        ...state,
        resetPasswordFailure,
        errorMessage
      }
    case RESET_MESSAGE_STATE:
      return {
        ...state,
        resetPasswordSuccess: false,
        resetPasswordFailure: false,
        errorMessage: ''
      }
    case SHOW_NETWORK_ERROR:
      return {
        ...state,
        showNetworkError: true
      }
    case CLEAR_NETWORK_ERROR:
      return {
        ...state,
        showNetworkError: false
      }
    case SEND_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.data
      }
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        user: data
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: data
      }
    default:
      return {
        state
      }
  }
}

