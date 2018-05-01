import {
  GET_POLITICIANS,
  GET_POLITICIANS_SUCCESS,
  GET_POLITICIANS_FAILURE
} from './actionTypes';

import Config from 'react-native-config'

const key = Config.PROPUBLICA_API_KEY;
const BASE_URL = Config.PROPUBLICA_API_URL;


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
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      console.log(body)      
    })
}