import { createSlice, configureStore } from "@reduxjs/toolkit";

let initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart(state, action) {
      state.push(action.payload);
    },
    removeCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartAction = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;
