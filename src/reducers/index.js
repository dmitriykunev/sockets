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
  TYPE_IN_USERNAME,
  SIDEBAR_TOGGLE,
  TOKEN_UPDATED,
  TOKEN_ABSENT
} from '../constants/index';

const initialState = {
  userName: '',
  login: '',
  email: '',
  password: '',
  token: '',
  role: 'user',
  ban: false,
  typing: false,
  sidebar: false,
  userList: [],
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
        login: action.payload.data.login,
        typing: action.payload.data.typing
      };
    case SIGN_IN_FAIL:
      return {...state, error: 'Something went wrong, try again later'};
    case SIGN_UP:
      return {...state};
    case SIGN_UP_SUCCESS:
        return {
          ...state, userName: action.data.userName,
          email: action.data.email,
          password: action.data.password,
          token: action.data.token,
          role: action.data.role,
          ban: action.data.ban,
          login: action.data.login,
          typing: action.data.typing
        };
    case SIGN_UP_FAIL:
        return {...state, error: 'Something went wrong, try again later'};
    case MESSAGE_SENT:
      return {...state};
    case MESSAGE_RECEIVED:
      return {...state};
    case TYPE_IN_USERNAME:
      return {...state, userName: action.payload};
    case TYPE_IN_LOGIN:
      return {...state, login: action.payload};
    case TYPE_IN_EMAIL:
      return {...state, email: action.payload};
    case TYPE_IN_PASSWORD:
      return {...state, password: action.payload};
      case SIDEBAR_TOGGLE:
        return {...state, sidebar: action.payload};
        case TOKEN_UPDATED:
          return {...state, token: action.payload};
          case TOKEN_ABSENT:
            return initialState;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
