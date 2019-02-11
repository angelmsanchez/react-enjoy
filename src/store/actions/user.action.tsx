import store from '../store';
import axios, { AxiosResponse, AxiosError } from 'axios';

export const FETCH_USER = 'FETCH_USER';
export const SUCCESS_USER = 'SUCCESS_USER';
export const ERROR_USER = 'ERROR_USER';

export const fetchPost = () => {
  return {
    type: FETCH_USER
  };
};

export const successUser = (payload: any) => {
  return {
    type: SUCCESS_USER,
    data: payload
  };
};

export const errorUser = () => {
  return {
    type: ERROR_USER
  };
};

export const thunkActionCreator = (username: any) => {
  store.dispatch(fetchPost());
  return (dispatch: any) => {
    return axios(`https://api.github.com/users/${username}`)
      .then((response: AxiosResponse) => {
        dispatch(successUser(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(errorUser());
      });
  };
};
