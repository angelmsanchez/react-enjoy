import { combineReducers } from 'redux';

import app from './app.reducer';
import counter from './counter.reducer';

const rootReducer = combineReducers({
  app,
  counter
});

export default rootReducer;
