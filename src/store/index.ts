import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./goodsSlice";
import cartReducer from "./cartSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
    filters: filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
