import { AnyAction } from "redux";
import * as contants from "./constants";

export type DemoState = {
  count: number;
  fruit: string;
};

const initState: DemoState = {
  count: 0,
  fruit: "apple",
};

const demoReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case contants.COUNT:
      return {
        ...state,
        count: action.payload.count,
      };
    case contants.FRUIT: {
      return {
        ...state,
        fruit: action.payload.fruit,
      };
    }
    default:
      return state;
  }
};

export default demoReducer;
