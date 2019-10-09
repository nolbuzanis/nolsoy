import { GOOGLE_USER_LOGIN } from './types';

export const userLoginGoogle = () => {
  console.log('Action creator called!');

  return { type: GOOGLE_USER_LOGIN, payload: 'Some payload' };
};
