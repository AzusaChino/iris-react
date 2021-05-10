import { AUTH } from "./actions";

const initState = {
  isAuthed: false,
  user: null,
};

const reducer = (state = initState, action: any) => {
  if (action.type === AUTH) {
    return {
      isAuthed: action.payload.isAuthed,
      user: action.payload.user,
    };
  }
  return state;
};

export default reducer;
