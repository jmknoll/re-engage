import {
  SIGN_UP_SUCCESS,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './actionTypes';

import { 
  sendErrorMessage, 
  sendNetworkError
} from './index';

import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;


export function signUp(user, navigator) {
  return dispatch => {
    fetch(`${API_BASE_URL}/v1/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      if (body.errors) {
        return dispatch(sendErrorMessage(body.errors))
      }
      return dispatch(signUpSuccess(body, navigator))
    })
    .catch((err) => {
      return dispatch(sendNetworkError())
    })
  }
}

export function signUpSuccess(body, navigator) {
  navigator.push({
    screen: 'reEngage.HomeScreen',
    title: 'Your Politicians',
    backButtonHidden: true,
  })

  return {
    type: CREATE_ACCOUNT_SUCCESS,
    data: body
  }
}


export function signIn(user, navigator) {
  return dispatch => {
    fetch(`${API_BASE_URL}/v1/sessions`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      if (body.errors) {
        return dispatch(sendErrorMessage(body.errors))
      }
      return dispatch(signInSuccess(body, navigator))
    })
    .catch((err) => {
      return dispatch(sendNetworkError())
    })
  }
}

export function signInSuccess(body, navigator) {
  navigator.push({
    screen: 'reEngage.HomeScreen',
    title: 'Your Politicians',
    backButtonHidden: true
  })

  return {
    type: SIGN_IN_SUCCESS,
    data: body
  }
}


export function signOut(navigator) {
  navigator.resetTo({
    screen: 'reEngage.LandingScreen'
  })
  return {
    type: SIGN_OUT_SUCCESS
  }
}
