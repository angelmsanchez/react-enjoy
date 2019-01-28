import { combineReducers } from 'redux';

// import AppReducer from './app.reducer';
import counter from './counter.reducer';

const rootReducer = combineReducers({
  // AppReducer,
  counter
});

export default rootReducer;
