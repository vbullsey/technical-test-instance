import {
  Action,
  combineReducers,
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
  Store,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { userSlice } from "./slices/user";

export type ThunkActionType<T = Promise<void>> = ThunkAction<
  T,
  RootState,
  null,
  Action<string>
>;
export type ThunkDispatchType = ThunkDispatch<RootState, any, Action<string>>;
export type StoreType = Store<RootState, Action<string>> & {
  dispatch: ThunkDispatchType;
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
  }),
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== `production`,
});
// @ts-ignore
const makeStore: MakeStore<RootState> = (context: Context): EnhancedStore =>
  store;

// @ts-ignore
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === `production`,
});
