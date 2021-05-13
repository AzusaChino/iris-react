import { AnyAction, combineReducers, Reducer } from "redux";
import { User } from "../models/user";
import demoReducer, { DemoState } from "../views/Demo/store/reducer";
import * as constants from "./constants";

export type AppState = {
  isAuthed: boolean;
  user: User;
};

const initState: AppState = {
  isAuthed: false,
  user: {
    username: "",
    password: "",
    avatar: "",
  },
};

// A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState.
// You can think of a reducer as an event listener which handles events based on the received action (event) type.

const appReducer: Reducer = (
  state: AppState = initState,
  action: AnyAction
) => {
  switch (action.type) {
    case constants.LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case constants.LOGOUT:
      return {
        ...state,
        ...action.payload,
      };
  }
  // no action cared, return the existing state unchanged
  return state;
};

export type RootState = {
  app: AppState;
  demo: DemoState;
};

const rootReducer = combineReducers({
  app: appReducer,
  demo: demoReducer,
});

export default rootReducer;
