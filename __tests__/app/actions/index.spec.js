import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as authActions from '../../../src/app/actions/auth';
import * as dataActions from '../../../src/app/actions/data';
import * as actions from '../../../src/app/actions/';
import * as types from '../../../src/app/actions/actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import Config from 'react-native-config';
const API_BASE_URL = Config.API_BASE_URL;

const mockUser = {
  "id": 16,
  "email": "test.user@gmail.com",
  "photo_url": "http://www.mockphotourl.com",
  "token": "abunchof.gibberish.inthistoken"
}

describe('async actions for auth', () => {
  afterEach( () => {
    fetchMock.reset();
    fetchMock.restore();
  })


  it('should create CREATE_ACCOUNT_SUCCESS after sign up', () => {
    fetchMock.mock(`${API_BASE_URL}/v1/users`, mockUser)
    return
  })

  it('should create SIGN_IN_SUCCESS after sign in', () => {
    fetchMock.mock(`${API_BASE_URL}/v1/sessions`, mockUser)
    return
  })
})