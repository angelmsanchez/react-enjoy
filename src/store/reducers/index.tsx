import { combineReducers } from 'redux';

import app from './app.reducer';
import counter from './counter.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
  app,
  counter,
  user
});

export default rootReducer;
