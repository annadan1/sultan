import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./goodsSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;