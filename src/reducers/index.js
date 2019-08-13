import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  MESSAGE_SENT,
  MESSAGE_RECEIVED,
  LOGOUT,
  TYPE_IN_EMAIL,
  TYPE_IN_LOGIN,
  TYPE_IN_PASSWORD,
  TYPE_IN_USERNAME
} from '../constants/index';

const initialState = {
  userName: '',
  email: '',
  password: '',
  token: '',
  role: 'user',
  ban: false,
  typing: false,
  error: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {...state};
    case SIGN_IN_SUCCESS:
      return {
        ...state, userName: action.payload.data.userName,
        email: action.payload.data.email,
        password: action.payload.data.password,
        token: action.payload.data.token,
        role: action.payload.data.role,
        ban: action.payload.data.ban,
        typing: action.payload.data.typing
      };
    case SIGN_IN_FAIL:
      return {...state, error: 'Something went wrong, try again later'};
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
    case TYPE_IN_USERNAME:
      return {...state, userName: action.payload};
    case TYPE_IN_LOGIN:
      return {...state, userName: action.payload};
    case TYPE_IN_EMAIL:
      return {...state, email: action.payload};
    case TYPE_IN_PASSWORD:
      return {...state, password: action.payload};
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
