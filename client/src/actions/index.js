import { GOOGLE_USER_LOGIN } from './types';
import axios from 'axios';

export const userLoginGoogle = () => async dispatch => {
  console.log('Action creator called!');
  const response = await axios.get('/auth/google');

  console.log(response);

  dispatch({ type: GOOGLE_USER_LOGIN, payload: response.data });
};
