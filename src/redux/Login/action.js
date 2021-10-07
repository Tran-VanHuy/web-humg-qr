import * as types from "./type";

export const userLogin = () => ({
  type: types.LOGIN,
});
export const userLoginSuccess = (data) => ({
  type: types.LOGIN,
  payload: data
});
export const userLoginFail = (data) => ({
  type: types.LOGIN,
  payload: data
});
