import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  MESSAGE_SENT,
  MESSAGE_RECEIVED,
  LOGOUT
} from '../constants/index';

const initialState = {
  userName: '',
  email: '',
  password: '',
  token: '',
  info: '',
  error: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {...state};
    case SIGN_IN_SUCCESS:
      return {...state};
    case SIGN_IN_FAIL:
      return {...state};
    case SIGN_UP:
      return {...state};
    case SIGN_UP_SUCCESS:
      return {...state};
    case SIGN_UP_FAIL:
      return {...state};
    case MESSAGE_SENT:
      return {...state};
    case MESSAGE_RECEIVED:
      return {...state};
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
