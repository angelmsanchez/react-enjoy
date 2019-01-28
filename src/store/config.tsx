import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const enhancers = [];
const devToolsExtension = window['__REDUX_DEVTOOLS_EXTENSION__'];
const middleware = [thunk];
enhancers.push(devToolsExtension());

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default function configureStore() {
  return createStore(rootReducer, composedEnhancers);
}
