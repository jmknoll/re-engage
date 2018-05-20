import {
  GET_POLITICIANS,
  GET_POLITICIANS_SUCCESS,
  GET_POLITICIANS_FAILURE,
  RESET_MESSAGE_STATE,
  SEND_ERROR_MESSAGE,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  SHOW_NETWORK_ERROR,
  CLEAR_NETWORK_ERROR,
  SIGN_IN_SUCCESS,
} from './actionTypes';

import Config from 'react-native-config';


const PP_KEY = Config.PROPUBLICA_API_KEY;
const PP_BASE_URL = Config.PROPUBLICA_API_URL;

const GOOGLE_KEY = Config.GOOGLE_CIVIC_INFORMATION_API_KEY;
const GOOGLE_BASE_URL = Config.GOOGLE_CIVIC_INFORMATION_API_URL;

const API_BASE_URL = Config.API_BASE_URL;



export function getPoliticians(address) {
  return dispatch =>
    fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${GOOGLE_KEY}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(handleErrors)
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      console.log(body)
    })
    .catch((ex) => {
      console.log(ex);
    })
}

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

export function createAccount(user, navigator) {
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
      return dispatch(createAccountSuccess(body, navigator))
    })
    .catch((err) => {
      return dispatch(sendNetworkError())
    })
  }
}

export function createAccountSuccess(body, navigator) {
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

/*
export function getPoliticians(zipCode) {
  return dispatch =>
    fetch(`${BASE_URL}/115/senate/members.json`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-API-Key': key
      }
    })
    .then(handleErrors)
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      return dispatch(getPoliticiansSuccess(body))
    })
    .catch((ex) => {
      console.log(ex);
    })
}



function getPoliticiansSuccess(body) {
  return {
    type: GET_POLITICIANS_SUCCESS,
    data: body.results
  }
}

*/

