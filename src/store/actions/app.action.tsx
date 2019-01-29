export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setLanguage = (payload: string) => {
  return {
    type: SET_LANGUAGE,
    payload: payload
  };
};
