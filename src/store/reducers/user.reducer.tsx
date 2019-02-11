import { FETCH_USER, SUCCESS_USER, ERROR_USER } from '../actions/user.action';

const initialState = {
  userData: null,
  isFetching: false,
  isError: false
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state, {
        isFetching: true,
        userData: null,
        isError: false
      });
    case SUCCESS_USER:
      return Object.assign({}, state, {
        userData: action.data,
        isFetching: false,
        isError: false
      });
    case ERROR_USER:
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });
    default:
      return state;
  }
};

export default userReducer;
