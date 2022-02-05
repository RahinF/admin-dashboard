import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import hamburger from "./hamburger.slice";

const reducer = combineReducers({
  hamburger,
});

export const store = configureStore({
  reducer,
});
