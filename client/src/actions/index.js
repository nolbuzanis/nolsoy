import { GOOGLE_USER_LOGIN, FETCH_USER } from './types';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/get_current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const userLoginGoogle = () => async dispatch => {
  console.log('Action creator called!');
  try {
    const response = await axios.get('http://localhost:3000/auth/google');

    console.log('Reponse: ');
    console.log(response);

    dispatch({ type: GOOGLE_USER_LOGIN, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
