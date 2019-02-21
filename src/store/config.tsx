import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const enhancers: any[] = [];

if (process.env.NODE_ENV !== 'production') {
  const devToolsExtension = window['__REDUX_DEVTOOLS_EXTENSION__'];
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
);

export default function configureStore() {
  return createStore(rootReducer, composedEnhancers);
}
