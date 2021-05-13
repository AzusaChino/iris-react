import * as constants from "./constants";
import { login as doLogin } from "../api";
import { Dispatch } from "react";

// An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

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
