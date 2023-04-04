import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterSlice {
  [key: string]: any;
}

interface Props {
  [key: string]: any;
}

const initialState: FilterSlice = {
  name: "",
  brand: [],
  manufacturer: [],
  categories: [],
  minPrice: 0,
  maxPrice: 10000,
};

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState,
  reducers: {
    changeProp: (state, { payload }: PayloadAction<Props>) => {
      for (let [key, value] of Object.entries(payload)) {
        state[key] = value;
      }
    },
    addType: (state, { payload }: PayloadAction<string>) => {
      state.categories.push(payload);
    },
    removeType: (state, { payload }: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (type: string) => type !== payload
      );
    },
    changeMinPrice: (state, { payload }: PayloadAction<number>) => {
      state.minPrice = payload;
    },
    changeMaxPrice: (state, { payload }: PayloadAction<number>) => {
      state.maxPrice = payload;
    },
  },
});

export const { actions } = filtersSlice;
export default filtersSlice.reducer;
