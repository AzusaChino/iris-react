import {
  AnyAction,
  createAction,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";

type AboutState = {
  info: string;
  access: number;
};

const increment = createAction("about/increment");
const publishInfo = createAction<string>("about/publish");

const initialState = {
  info: "Welcome to About Page",
  access: 0,
} as AboutState;

function isActionWithNumberPayload(
  action: AnyAction
): action is PayloadAction<number> {
  return typeof action.payload === "number";
}

const aboutReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.access++;
    })
    .addCase(publishInfo, (state, action) => {
      state.info = action.payload;
    })
    // You can apply a "matcher function" to incoming actions
    .addMatcher(isActionWithNumberPayload, (state, action) => {})
    .addDefaultCase((state, action) => {});
});

export default aboutReducer;
