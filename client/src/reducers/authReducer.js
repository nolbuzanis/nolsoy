import { GOOGLE_USER_LOGIN } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GOOGLE_USER_LOGIN: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
