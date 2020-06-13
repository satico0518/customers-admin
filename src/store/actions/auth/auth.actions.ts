import { IAction } from "../../interfaces";
import {
  LOGING_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_LOGOUT,
} from "../../types";
import { IUserAuth } from "../../reducers/auth/types";
import fb from "../../../config/fb.config";
import "firebase/auth";

export const getLoginAction = (user: IUserAuth) => (dispatch: any) =>
  dispatch(getLogin(user));
export const recoverUserAction = (user: IUserAuth) => (dispatch: any) =>
  dispatch(recoverExistingUserSesion(user));
export const logoutAction = () => (dispatch: any) => dispatch(logout());

const isLogin = (): IAction => {
  return {
    type: LOGING_USER,
    payload: true,
  };
};
const isLoginSuccess = (user: any): IAction => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};
const isLoginError = (error: any): IAction => {
  return {
    type: LOGIN_USER_ERROR,
    payload: error,
  };
};

const getLogin = (user: IUserAuth) => {
  return async (dispatch: any) => {
    dispatch(isLogin());
    try {
      const authResult = await fb
        .auth()
        .signInWithEmailAndPassword(user.email, user.password);
      const { email, uid } = authResult.user as any;
      dispatch(isLoginSuccess({ email, uid }));
      localStorage.setItem("user", JSON.stringify({ email, uid }));
    } catch (error) {
      console.error("auth erro: ", error);

      dispatch(isLoginError(error));
    }
  };
};

const recoverExistingUserSesion = (user: IUserAuth): IAction => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

const logout = (): IAction => {
  return {
    type: LOGIN_USER_LOGOUT,
  };
};
