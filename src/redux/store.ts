import logger from "redux-logger";
import reducer, { RootState } from "src/redux/reducer";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";

import { isProdction } from "src/constants";

// If you want to enable debug, Change below constant to true
const enableDebug = false;
const debug = !isProdction && enableDebug;
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    debug ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
});
// create a makeStore function
const makeStore: MakeStore<RootState> = (context: Context) => store;

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {
  debug,
});
export default store;
