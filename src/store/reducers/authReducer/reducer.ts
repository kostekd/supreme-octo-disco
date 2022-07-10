import { createReducer } from "@reduxjs/toolkit";
import { logIn, logOut } from "./actions";

interface authenticationState {
  isLoggedIn: Boolean;
}

const initialState: authenticationState = {
  isLoggedIn: false,
};

const authenticationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logIn, (state, action) => {
      state.isLoggedIn = true;
    })
    .addCase(logOut, (state, action) => {
      state.isLoggedIn = false;
    });
});

export default authenticationReducer;
