/*
 * @Author: xiewenhao
 * @Date: 2023-06-27 14:03:18
 * @LastEditTime: 2023-06-28 10:24:21
 * @Description:
 */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DefaultState } from "../../types/defaule";
import axios from "axios";

export interface ShoppingCartItem {
  id: number;
  touristRouteId: string;
  touristRoute: any;
  shoppingCartId: string;
  originalPrice: number;
  discountPresent: number;
}

interface ShoppingCartState extends DefaultState {
  shoppingCart: ShoppingCartItem[];
}

export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async () => {
    const res = await axios.get("http://123.56.149.216:8080/api/shoppingCart");
    return res.data.shoppingCartItems;
  }
);

export const postShoppingCartItems = createAsyncThunk(
  "shoppingCart/postShoppingCartItems",
  async (data: { touristRouteId: string | undefined }) => {
    const res = await axios.post(
      "http://123.56.149.216:8080/api/shoppingCart/items",
      data
    );
    return res.data;
  }
);

export const delShoppingCartItems = createAsyncThunk(
  "shoppingCart/delShoppingCartItems",
  async (data: number[]) => {
    const res = await axios.delete(
      `http://123.56.149.216:8080/api/shoppingCart/items/(${data.join(",")})`
    );
    return res.data;
  }
);

export const checkShoppingCart = createAsyncThunk(
  "shoppingCart/checkShoppingCart",
  async () => {}
);

const initialState: ShoppingCartState = {
  error: null,
  shoppingCart: [],
  loading: false,
};

export const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  reducers: {},
  initialState,
  extraReducers: {
    [getShoppingCart.pending.type]: (state) => {
      state.loading = true;
    },
    [getShoppingCart.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getShoppingCart.fulfilled.type]: (
      state,
      action: PayloadAction<ShoppingCartItem[]>
    ) => {
      state.error = null;
      state.shoppingCart = action.payload;
      state.loading = false;
    },
    [postShoppingCartItems.pending.type]: (state) => {
      state.loading = true;
    },
    [postShoppingCartItems.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    [postShoppingCartItems.fulfilled.type]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [delShoppingCartItems.pending.type]: (state) => {
      state.loading = true;
    },
    [delShoppingCartItems.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    [delShoppingCartItems.fulfilled.type]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [checkShoppingCart.pending.type]: (state) => {
      state.loading = true;
    },
    [checkShoppingCart.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    [checkShoppingCart.fulfilled.type]: (state) => {
      state.loading = false;
      state.error = null;
    },
  },
});
