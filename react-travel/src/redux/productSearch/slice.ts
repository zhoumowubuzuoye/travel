import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSearchState {
  data: any;
  loading: boolean;
  error: null | string;
  searchValue: string;
  pagination: any;
}

const initialState: ProductSearchState = {
  data: null,
  loading: true,
  error: null,
  searchValue: "",
  pagination: null,
};

export const getProductSearch = createAsyncThunk(
  "productSearch/getProductSearch",
  async (paramaters: {
    keywords: string | null;
    nextPage: number | string;
    pageSize: number | string;
  }) => {
    const res = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${
        paramaters.nextPage
      }&pageSize=${paramaters.pageSize}${
        paramaters.keywords ? `&keywords=${paramaters.keywords}` : ""
      }`
    );
    console.log(res);
    return {
      data: res.data,
      pagination: JSON.parse(res.headers["x-pagination"]),
    };
  }
);

export const productSearchSlice = createSlice({
  name: "productSearch",
  initialState,
  reducers: {
    fetchSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {
    [getProductSearch.pending.type]: (state) => {
      state.loading = true;
    },
    [getProductSearch.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    [getProductSearch.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },
  },
});
