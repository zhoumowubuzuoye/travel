import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductDetailState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null,
};

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (id: string, thunkApi) => {
    const res = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes/${id}`
    );
    return res.data;
  }
);

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      state.loading = true;
    },
    [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getProductDetail.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});
