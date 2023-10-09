import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    user: {
      IDNumber: null,
      UserName: null,
      UserID: null,
      CompanyID: null,
      CompanyName: null,
      FromYear: null,
      ToYear: null,
      ErrorMessage: null,
      accessToken: null,
    },
    dropDown: {
      Companies: [],
      Years: [],
    },
    menuItem: [],
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    getDropDownList(state, action) {
      state.dropDown = action.payload;
    },
    setMenuItem(state, action) {
      state.menuItem = action.payload;
    },
  },
});

export const { login, getDropDownList, setMenuItem } = signInSlice.actions;
export default signInSlice.reducer;
