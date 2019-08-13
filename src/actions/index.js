import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  MESSAGE_SENT,
  MESSAGE_RECEIVED,
  TYPE_IN_USERNAME,
  TYPE_IN_PASSWORD,
  TYPE_IN_LOGIN,
  TYPE_IN_EMAIL,
  LOGOUT
} from '../constants/index'

export function signIn(payload) {
  return {type: SIGN_IN, payload}
};

export function signInSuccess(payload) {
  return {type: SIGN_IN_SUCCESS, payload}
};

export function signInFail(payload) {
  return {type: SIGN_IN_FAIL, payload}
};

export function signUp(payload) {
  return {type: SIGN_UP, payload}
};

export function signUpSuccess(payload) {
  return {type: SIGN_UP_SUCCESS, payload}
};

export function signUpFail(payload) {
  return {type: SIGN_UP_FAIL, payload}
};

export function messageSent(payload) {
  return {type: MESSAGE_SENT, payload}
};

export function messageReceived(payload) {
  return {type: MESSAGE_RECEIVED, payload}
};

export function typeInPassword(payload) {
  return {type: TYPE_IN_PASSWORD, payload}
};

export function typeInLogin(payload) {
  return {type: TYPE_IN_LOGIN, payload}
};

export function typeInEmail(payload) {
  return {type: TYPE_IN_EMAIL, payload}
};

export function typeInUserName(payload) {
  return {type: TYPE_IN_USERNAME, payload}
};

export function logout() {
  return {type: LOGOUT}
};
