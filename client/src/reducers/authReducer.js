import { GOOGLE_USER_LOGIN, FETCH_USER } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER: {
      return action.payload;
    }
    case GOOGLE_USER_LOGIN: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
