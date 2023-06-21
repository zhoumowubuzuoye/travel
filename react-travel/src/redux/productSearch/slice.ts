import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSearchState {
  data: any;
  loading: boolean;
  error: null | string;
}

const initialState: ProductSearchState = {
  data: null,
  loading: true,
  error: null,
};

export const getProductSearch = createAsyncThunk(
  "productSearch/getProductSearch",
  async (keywords: string) => {
    const res = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes?keyword=${keywords}`
    );
    return res.data;
  }
);

export const productSearchSlice = createSlice({
  name: "productSearch",
  initialState,
  reducers:{},
  extraReducers: {
    [getProductSearch.pending.type]: (state) => {
      state.loading = true;
    },
    [getProductSearch.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    [getProductSearch.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
