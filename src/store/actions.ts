import * as constants from "./constants";
import { login as doLogin } from "../api";
import { Dispatch } from "react";

export const _login = (username: string, password: string) => {
  return (dispatch: Dispatch<any>) => {
    doLogin({ username, password }).then((res) => {
      const result = res.data;
      if (result) {
        dispatch({
          type: constants.LOGIN,
          payload: {
            isAuthed: true,
            user: result.data,
          },
        });
      } else {
        Promise.reject("Login Failed");
      }
    });
  };
};

export const _logout = () => ({
  type: constants.LOGOUT,
  payload: {
    isAuthed: false,
    user: {},
  },
});
