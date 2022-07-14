import { createAction, createReducer} from "@reduxjs/toolkit";

export const searchContact = createAction("filter/searchContact");
export const filterReducer = createReducer("", {
  [searchContact]: (state, action) => (state = action.payload),
});

export const myToken = createAction("token/myToken");
export const tokenReducer = createReducer(JSON.parse(localStorage.getItem('token')), {
  [myToken]: (state, action) => (state = action.payload),
});