import { BEGIN_LOGIN, LOGIN, END_LOGIN } from '../actions/actionType';

const auth = (state = {}, action = '') => {
  if (action.type === BEGIN_LOGIN) {
    return {
      ...state,
      isLoginLoading: true
    };
  } else if (action.type === LOGIN) {
    const { data } = action;

    // store it in localStorage
    // setItem(loginStorageKey, data);

    return {
      ...state,
      login: { ...data }
    };
  } else if (action.type === END_LOGIN) {
    return {
      ...state,
      isLoginLoading: false
    };
  }
  return state;
};

export default auth;
