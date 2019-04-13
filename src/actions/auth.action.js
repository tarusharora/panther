import { BEGIN_LOGIN, LOGIN } from './actionType';
import { login } from '../api/api';
export const actionLogin = (
  email,
  password,
  redirect,
  to
) => async dispatch => {
  dispatch({
    type: BEGIN_LOGIN
  });
  const data = await login(email, password);
  if (data) {
    // dispatch login
    dispatch({
      type: LOGIN,
      data
    });
  }
};
