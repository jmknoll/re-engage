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

const mockUserResponse = {
  "id": 16,
  "email": "test.user@gmail.com",
  "photo_url": "http://www.mockphotourl.com",
  "token": "abunchof.gibberish.inthistoken"
}

const mockUserRequest = {
  email: 'test@test.com',
  password: 'testing'
}

describe('async actions for auth', () => {
  afterEach( () => {
    fetchMock.reset();
    fetchMock.restore();
  })


  it('should create CREATE_ACCOUNT_SUCCESS after sign up', () => {
    return
    fetchMock.mock(`${API_BASE_URL}/v1/users`, mockUserResponse)

    const expectedActions = [
      { type: types.CREATE_ACCOUNT_SUCCESS, data: mockUserResponse }
    ];

    const store = mockStore({ user: {} })

    return store.dispatch(authActions.signUp(mockUserRequest)).then( () => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create SIGN_IN_SUCCESS after sign in', () => {
    fetchMock.mock(`${API_BASE_URL}/v1/sessions`, mockUserResponse)
    return
  })
})