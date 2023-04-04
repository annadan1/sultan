import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/store";

interface GoodsState {
  allGoods: Item[];
  currentGoods: Item[];
  page: number;
  limit: number;
}

interface ManyItem {
  items: Item[];
}

const initialState: GoodsState = {
  allGoods: [],
  currentGoods: [],
  page: 1,
  limit: 9,
};

const goodsSlice = createSlice({
  name: "goodsSlice",
  initialState,
  reducers: {
    addAllItems: (state, { payload }: PayloadAction<ManyItem>) => {
      console.log(payload.items)
      state.allGoods = payload.items;
    },
    addCurrentItems: (state, { payload }: PayloadAction<ManyItem>) => {
      state.currentGoods = payload.items;
      state.page = Math.ceil(payload.items.length / state.limit);
    },
  },
});

export const { actions } = goodsSlice;
export default goodsSlice.reducer;
