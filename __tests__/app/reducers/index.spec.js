import reducer from '../../../src/app/reducers';
import * as types from '../../../src/app/actions/actionTypes';
import expect from 'expect';

describe('authentication reducer', () => {

  const initialState = {
    user: { },
    signedIn: false
  }

  const mockUser = {
    "id": 16,
    "email": "test.user@gmail.com",
    "photo_url": "http://www.mockphotourl.com",
    "token": "abunchof.gibberish.inthistoken"
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should handle SIGN_UP_SUCCESS', () => {
    const successAction = {
      type: types.SIGN_UP_SUCCESS,
      data: mockUser
    }
    expect(reducer({}, successAction)).toEqual({signedIn: true, user: mockUser})
  });

  it('should handle SIGN_IN_SUCCESS', () => {
    const successAction = {
      type: types.SIGN_IN_SUCCESS,
      data: mockUser
    }
    expect(reducer({}, successAction)).toEqual({signedIn: true, user: mockUser})
  });

  it('should handle SIGN_OUT_SUCCESS', () => {
    const successAction = {
      type: types.SIGN_OUT_SUCCESS,
    }
    expect(reducer({}, successAction)).toEqual({signedIn: false, user: {}})
  });
})