import { IAction } from "../../interfaces";
import { IAuthState } from "./types";
import { LOGING_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGIN_USER_LOGOUT } from "../../types";

const initialState: IAuthState = {
  loging: false,
  user: null,
  error: null
};

export default (state = initialState, action: IAction): IAuthState => {
  switch (action.type) {
    case LOGING_USER:
      return {
        ...state,
        loging: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loging: false,
        error: null,
        user: action.payload
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loging: false,
        user: null,
        error: action.payload
      };
    case LOGIN_USER_LOGOUT:
      return {
        ...state,
        loging: false,
        user: null
      };
    default:
      return state;
  }
};
