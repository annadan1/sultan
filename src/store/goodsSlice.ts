import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, Goods } from "../types/store";

interface ManyItem {
  items: Item[];
}

const initialState: Goods = {
  allGoods: [],
  currentGoods: [],
  pages: 1,
  currentPage: 1,
  limit: 6,
  sortMethod: "name_asc",
};

const goodsSlice = createSlice({
  name: "goodsSlice",
  initialState,
  reducers: {
    addAllItems: (state, { payload }: PayloadAction<ManyItem>) => {
      state.allGoods = payload.items;
    },
    addCurrentItems: (state) => {
      state.currentGoods = state.allGoods.slice(
        (state.currentPage - 1) * state.limit,
        state.currentPage * state.limit
      );
      state.pages = Math.ceil(state.allGoods.length / state.limit);
    },
    changeCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
      state.currentGoods = state.allGoods.slice(
        (state.currentPage - 1) * state.limit,
        state.currentPage * state.limit
      );
    },
    changeSortMethod: (state, { payload }: PayloadAction<string>) => {
      state.sortMethod = payload;
    },
  },
});

export const { actions } = goodsSlice;
export default goodsSlice.reducer;
