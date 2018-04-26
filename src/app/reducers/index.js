import {
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,
  API_REQUEST_NETWORK_ERROR,
  GET_POLITICIANS_SUCCESS,
  GET_POLITICIANS_FAILURE
} from '../actions/actionTypes';

import { AsyncStorage } from 'react-native';

const initialState = {
  user: {

  },
  signedIn: false,
  zipCode: '',
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case GET_POLITICIANS_SUCCESS:
      let politicians = action.data;
      return {
        ...state,
        politicians
      }
    default:
      return {
        state
      }
  }
}

