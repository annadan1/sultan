import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import routes from "../routes/index";

interface Item {
  id: string;
  name: string;
  price: number;
  count: number;
}

interface GoodsState {
  allGoods: Item[];
  currentGoods: Item[];
  page: number;
  limit: number;
}

interface FetchParams {
  _page?: number;
  _limit?: number;
  name?: string;
}

export const fetchCurrentGoods = createAsyncThunk(
  "goods/fetchCurrentGoods",
  async (params: FetchParams ) => {
    const response = await axios.get(routes.getGoodsPath(), { params });
    return response.data;
  }
);

export const fetchAllGoods = createAsyncThunk(
  "goods/fetchAllGoods",
  async (params: FetchParams) => {
    const response = await axios.get(routes.getGoodsPath(), { params });
    return response.data;
  }
);

const initialState: GoodsState = {
  allGoods: [],
  currentGoods: [],
  page: 1,
  limit: 9,
};

const goodsSlice = createSlice({
  name: "goodsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentGoods.fulfilled, (state, { payload }) => {
        state.currentGoods = payload;
      })
      .addCase(fetchAllGoods.fulfilled, (state, { payload }) => {
        state.allGoods = payload;
        state.page = Math.ceil(payload.length / state.limit);
      });
  },
});

export const { actions } = goodsSlice;
export default goodsSlice.reducer;
