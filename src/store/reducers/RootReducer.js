import { combineReducers } from "@reduxjs/toolkit";
import signInSlice from "../../store/reducers/SignInSlice.js";

const rootReducer = combineReducers({
  signInSlice,
});
export default rootReducer;

