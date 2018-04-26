import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import app from '../app/reducers/index.js';
import vet from '../vet/reducers/index.js';
import owner from '../pet_owner/reducers/index.js';

const reducer = combineReducers({
  app
})

const middleware = applyMiddleware(thunk);

export default function configureStore() {
  const store = createStore(
    reducer,
    middleware
  )
  return store;
}
