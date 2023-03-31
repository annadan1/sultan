import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, Cart } from "../types/store";

const initialState: Cart = {
  totalCount: 0,
  totalPrice: 0,
  items: [],
};

interface ManyItem {
  item: Item;
  count: number;
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItems: (state, { payload }: PayloadAction<Cart>) => {
      state.totalCount = payload.totalCount;
      state.totalPrice = payload.totalPrice;
      state.items = payload.items;
    },
    addItem: (state, { payload }: PayloadAction<Item>) => {
      const findItem = state.items.find((item) => item.id === payload.id);
      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({ ...payload, count: 1 });
      }
      state.totalCount += 1;
      state.totalPrice += Number(payload.price);
      const json = JSON.stringify(state);
      localStorage.setItem("cart", json);
    },
    addManyItem: (state, { payload }: PayloadAction<ManyItem>) => {
      const findItem = state.items.find((item) => item.id === payload.item.id);
      if (findItem) {
        findItem.count += payload.count;
      } else {
        state.items.push({ ...payload.item, count: payload.count });
      }
      state.totalCount += payload.count;
      state.totalPrice += Number(payload.item.price) * payload.count;
      const json = JSON.stringify(state);
      localStorage.setItem("cart", json);
    },
    removeItem: (state, { payload }: PayloadAction<Item>) => {
      const findItem = state.items.find(
        (item) => item.id === payload.id
      ) as Item;
      state.items = state.items.filter(({ id }) => id !== payload.id);
      state.totalCount -= findItem.count;
      state.totalPrice -= Number(payload.price) * findItem.count;
      const json = JSON.stringify(state);
      localStorage.setItem("cart", json);
    },
    removeItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      localStorage.removeItem("cart");
    },
    minusItem: (state, { payload }: PayloadAction<Item>) => {
      const findItem = state.items.find(
        (item) => item.id === payload.id
      ) as Item;
      if (findItem.count === 1) {
        state.items = state.items.filter(({ id }) => id !== payload.id);
      } else {
        findItem.count -= 1;
      }
      state.totalCount -= 1;
      state.totalPrice -= Number(payload.price);
      const json = JSON.stringify(state);
      localStorage.setItem("cart", json);
    },
  },
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
