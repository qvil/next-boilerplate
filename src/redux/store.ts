import reducer, { RootState } from "src/redux/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import logger from "redux-logger";

import { isProdction } from "src/constants";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    isProdction
      ? getDefaultMiddleware()
      : getDefaultMiddleware().concat(logger),
});
// create a makeStore function
const makeStore: MakeStore<RootState> = (context: Context) => store;

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {
  debug: !isProdction,
});
export default store;
