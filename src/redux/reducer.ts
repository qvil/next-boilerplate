import { setting, user } from "src/redux/slices";
import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  setting,
  user,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export type RootState = ReturnType<typeof reducer>;
export default reducer;
