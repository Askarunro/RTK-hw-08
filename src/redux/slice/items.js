import { createSlice } from "@reduxjs/toolkit";
import {authApi} from '../api/usersApi'

export const authSlice = createSlice({
  name: "auth",
  initialState:{
    user: { name: null, email: null },
    token: localStorage.getItem("token") || "",
    isLoggedIn: false,
  },
  // initialState: {
  //   token: localStorage.getItem("token") || "",
  // },

  // reducers: {
  //   login(state, action){
  //     state.isLoggedIn= true;
  //     state.token= localStorage.getItem("token") || "";
  //   },
  //   logout(state) {
  //     state.token = "";
  //     state.isLoggedIn=false;
  //   },
  reducers: {
    logout(state) {
      state.token = "";
    },
  },
  extraReducers: (build) => {
    console.log(build)
    build.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
  },
});

export const { logout } = authSlice.actions;






// import { createAction, createReducer} from "@reduxjs/toolkit";


// export const myToken = createAction("token/myToken");
// export const tokenReducer = createReducer(JSON.parse(localStorage.getItem('token')), {
//   [myToken]: (state, action) => (state = action.payload),
// });