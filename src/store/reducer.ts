import { AnyAction, Reducer } from "redux";
import { User } from "../models/user";
import * as constants from "./constants";

interface LoginInfo {
  isAuthed: boolean;
  user: User;
}

const initState: LoginInfo = {
  isAuthed: false,
  user: {
    username: "",
    password: "",
    avatar: "",
  },
};

const reducer: Reducer = (state: LoginInfo = initState, action: AnyAction) => {
  switch (action.type) {
    case constants.LOGIN:
      return {
        ...action.payload,
      };
    case constants.LOGOUT:
      return {
        ...action.payload,
      };
  }
};

export default reducer;
