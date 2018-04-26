import {
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,
  API_REQUEST_NETWORK_ERROR
} from '../action/actionTypes';

import { AsyncStorage } from 'react-native';

const initialState = {
  user: {

  },
  signedIn: false,
  zipCode: '',
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case GET_POLITICIANS:
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

