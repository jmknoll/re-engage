import {
  GET_POLITICIANS,
  GET_POLITICIANS_SUCCESS,
  GET_POLITICIANS_FAILURE,
  RESET_MESSAGE_STATE,
  SEND_ERROR_MESSAGE,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
} from './actionTypes';

import Config from 'react-native-config';


const PP_KEY = Config.PROPUBLICA_API_KEY;
const PP_BASE_URL = Config.PROPUBLICA_API_URL;

const GOOGLE_KEY = Config.GOOGLE_CIVIC_INFORMATION_API_KEY;
const GOOGLE_BASE_URL = Config.GOOGLE_CIVIC_INFORMATION_API_URL;

function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.statusText)
  }
  return res;
}

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

export function createAccount(user, navigator) {
  return {
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

