import { configureStore, combineReducers } from "@reduxjs/toolkit";

import lang from "./module/lang";

const rootReducer = combineReducers({
  lang: lang.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
